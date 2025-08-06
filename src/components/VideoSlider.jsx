import { useState } from 'react';
import styles from '../css/videoslider.module.css';

export default function VideoCarousel() {
    const videos = [
        { id: 'qlrpeYdm9Ec', title: 'Video 1' },
        { id: '3JZ_D3ELwOQ', title: 'Video 2' },
        { id: 'kJQP7kiw5Fk', title: 'Video 3' },
        { id: 'dQw4w9WgXcQ', title: 'Video 4' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
    };

    return (
        <div>
            <div className={styles.section_title}>Live Demonstrations</div>
            <div className={styles.carousel_wrapper}>
                <button className={styles.arrow_left} onClick={handlePrev}>❮</button>
                <div className={styles.carousel}>
                    {videos.map((video, index) => {
                        const position = index - currentIndex;
                        return (
                            <div
                                key={index}
                                className={`${styles.slide} ${position === 0 ? styles.active : position === -1 || position === videos.length - 1 ? styles.left : position === 1 || (index === 0 && currentIndex === videos.length - 1) ? styles.right : styles.hidden}`}
                            >
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}?vq=hd1080`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        );
                    })}
                </div>
                <button className={styles.arrow_right} onClick={handleNext}>❯</button>

                <div className={styles.dots}>
                    {videos.map((_, idx) => (
                        <span
                            key={idx}
                            className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
                            onClick={() => setCurrentIndex(idx)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
}
