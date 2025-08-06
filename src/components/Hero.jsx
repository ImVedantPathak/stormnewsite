import styles from '../css/hero.module.css';
// import stormlogo from '../images/STORMHeroSMALL.png';
import IcosahedronScene from '../components/IcosahedronScene'

export default function Hero() {
    return (
        <div className={styles.hero_wrapper}>
            <div className={styles.hero_top}>
                <div className={styles.storm_logo}>
                    <p className={styles.heroText}>We've Reengineered AI for <br />Extreme Efficiency, Scalability, <br />and Power.</p>
                    <div className={styles.cardContainer}>
                        <div className={styles.card}>
                            <span className={styles.cardLabel}>CLAUDE.AI</span>
                            <h2 className={styles.cardTitle}>STORM P2</h2>
                            <p className={styles.cardDesc}>
                                STORM, our most powerful and efficient AI engine, is now in Beta.
                            </p>
                            <button className={`${styles.cardButton} ${styles.filled}`}>
                                Talk to STORM
                            </button>
                        </div>

                        <div className={styles.card}>
                            <span className={styles.cardLabel}>API</span>
                            <h2 className={styles.cardTitle}>Build with STORM</h2>
                            <p className={styles.cardDesc}>
                                Create AI-powered applications and custom experiences using STORM.
                            </p>
                            <button className={`${styles.cardButton} ${styles.outline}`}>
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.icosahedron}>
                    <IcosahedronScene />
                </div>
            </div>
            <div className={styles.hero_bottom}>
            </div>
        </div>
    );
}