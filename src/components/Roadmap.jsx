import styles from '../css/roadmap.module.css';

export default function Roadmap() {
    const steps = [
        { title: 'STORM Genesis', description: 'Proof of Concept of Core Architecture', date: 'Jan 2024' },
        { title: 'STORM P1', description: 'Our First model capable of day-to-day tasks', date: 'Apr 2024' },
        { title: 'STORM P2', description: 'Achieved SOTA levels of performance', date: 'Jul 2024' },
        { title: 'STORM P3', description: 'Most Advanced AI model to exist so far', date: 'Oct 2024' },
        { title: 'STORM P4', description: 'Future Phase', date: 'Q1 2025' }
    ];

    return (
        <div className={styles.roadmap_wrapper}>
            <div className={styles.base_line}></div>
            <div className={styles.progress_fill}></div>
            <div className={styles.current_marker}>Currently Here</div>

            {steps.map((step, index) => (
                <div key={index} className={styles.step_tick}>
                    <div className={styles.tick_line}></div>
                    <div className={styles.tick_label}>
                        {step.title}
                        <div className={styles.tooltip}>{step.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
