import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function createCircleTexture() {
    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createRadialGradient(
        size / 2, size / 2, 0,
        size / 2, size / 2, size / 2
    );
    gradient.addColorStop(0, 'white');
    gradient.addColorStop(0.2, 'cyan');
    gradient.addColorStop(1, 'transparent');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    return texture;
}

export default function IcosahedronScene() {
    const mountRef = useRef(null);

    useEffect(() => {
        let renderer, scene, camera, controls, animationId;
        let time = 0;

        // Cleanup old canvas if exists
        while (mountRef.current.firstChild) {
            mountRef.current.removeChild(mountRef.current.firstChild);
        }

        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        // Scene & Camera
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 15;

        // Renderer
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        // Controls
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enableZoom = false;

        // Icosahedron Group
        const icosahedronGroup = new THREE.Group();
        scene.add(icosahedronGroup);

        // Geometry & Wireframe
        const geometry = new THREE.IcosahedronGeometry(8);
        const edges = new THREE.EdgesGeometry(geometry);
        const wireMaterial = new THREE.LineBasicMaterial({ color: 0x7d94ba });
        const wireframe = new THREE.LineSegments(edges, wireMaterial);
        icosahedronGroup.add(wireframe);

        // Spheres at Vertices
        const sphereGeometry = new THREE.SphereGeometry(0.3, 16, 16);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x3da9fc });
        const uniqueVertices = new Set();
        const positionAttr = geometry.getAttribute('position');

        for (let i = 0; i < positionAttr.count; i++) {
            const x = positionAttr.getX(i).toFixed(4);
            const y = positionAttr.getY(i).toFixed(4);
            const z = positionAttr.getZ(i).toFixed(4);
            const key = `${x},${y},${z}`;
            if (!uniqueVertices.has(key)) {
                uniqueVertices.add(key);
                const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.set(parseFloat(x), parseFloat(y), parseFloat(z));
                icosahedronGroup.add(sphere);
            }
        }

        // Particles Close Orbit
        const NUM_PARTICLES = 100;
        const positions = [];
        const orbitData = []; // Custom orbit info per particle

        for (let i = 0; i < NUM_PARTICLES; i++) {
            const radius = 8.5 + Math.random(); // Very close orbit
            const angle = Math.random() * Math.PI * 2;
            const tilt = Math.random() * Math.PI;
            const speed = 0.001 + Math.random() * 0.002;

            const x = radius * Math.sin(tilt) * Math.cos(angle);
            const y = radius * Math.sin(tilt) * Math.sin(angle);
            const z = radius * Math.cos(tilt);

            positions.push(x, y, z);
            orbitData.push({ radius, angle, tilt, speed });
        }

        const particlesGeometry = new THREE.BufferGeometry();
        particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            map: createCircleTexture(),
            transparent: true,
            depthWrite: false,
            color: 0x00ffff,
            size: 4,
            sizeAttenuation: false  // Keeps particle size constant on screen
        });

        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);

        // Animate Loop
        const animate = () => {
            time += 0.01;

            // Rotate Icosahedron with wobble
            icosahedronGroup.rotation.y += 0.01;
            icosahedronGroup.rotation.x = Math.sin(time) * 0.1;
            icosahedronGroup.rotation.z = Math.cos(time) * 0.05;

            // Animate particles orbit by updating BufferGeometry positions
            const positionsArray = particlesGeometry.attributes.position.array;
            for (let i = 0; i < NUM_PARTICLES; i++) {
                orbitData[i].angle += orbitData[i].speed;

                const { radius, angle, tilt } = orbitData[i];
                const x = radius * Math.sin(tilt) * Math.cos(angle);
                const y = radius * Math.sin(tilt) * Math.sin(angle);
                const z = radius * Math.cos(tilt);

                positionsArray[i * 3] = x;
                positionsArray[i * 3 + 1] = y;
                positionsArray[i * 3 + 2] = z;
            }
            particlesGeometry.attributes.position.needsUpdate = true;

            // Pulse Spheres
            icosahedronGroup.children.forEach(child => {
                if (child instanceof THREE.Mesh) {
                    const pulseScale = 1 + Math.sin(time * 5) * 0.1;
                    child.scale.set(pulseScale, pulseScale, pulseScale);
                }
            });

            controls.update();
            renderer.render(scene, camera);
            animationId = requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
            if (renderer) renderer.dispose();
            if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };

    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
}
