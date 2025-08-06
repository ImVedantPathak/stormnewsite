import styles from '../css/benchmark.module.css';

export default function Benchmarks() {
    const maxScore = 100;

    const data = [
        {
            category: 'GPQA',
            subtitle: 'Science',
            scores: [
                { name: 'Grok 4 Heavy w/ Python', score: 88.4, color: 'orange' },
                { name: 'Grok 4', score: 87.5, color: 'darkOrange' },
                { name: 'Gemini 2.5 Pro', score: 86.4 },
                { name: 'o3', score: 83.3 },
                { name: 'Claude Opus 4', score: 79.6 },
            ]
        },
        {
            category: 'LiveCodeBench (Jan - May)',
            subtitle: 'Competitive Coding',
            scores: [
                { name: 'Grok 4 Heavy w/ Python', score: 79.4, color: 'orange' },
                { name: 'Grok 4 w/ Python', score: 79.3, color: 'orange' },
                { name: 'Grok 4', score: 79, color: 'darkOrange' },
                { name: 'Gemini 2.5 Pro', score: 74.2 },
                { name: 'o3', score: 72 },
            ]
        },
        {
            category: 'USAMO 2025',
            subtitle: 'Olympiad Math Proofs',
            scores: [
                { name: 'Grok 4 Heavy w/ Python', score: 61.9, color: 'orange' },
                { name: 'Gemini Deep Think', score: 49.4 },
                { name: 'Grok 4', score: 37.5, color: 'darkOrange' },
                { name: 'Gemini 2.5 Pro', score: 34.5 },
                { name: 'o3', score: 21.7 },
            ]
        },
        {
            category: 'HMMT 2025',
            subtitle: 'Competitive Math',
            scores: [
                { name: 'Grok 4 Heavy w/ Python', score: 96.7, color: 'orange' },
                { name: 'Grok 4 w/ Python', score: 93.9, color: 'orange' },
                { name: 'Grok 4', score: 90, color: 'darkOrange' },
                { name: 'Gemini 2.5 Pro', score: 82.5 },
                { name: 'o3', score: 77.5 },
                { name: 'Claude Opus 4', score: 58.3 },
            ]
        },
        {
            category: 'AIME’25',
            subtitle: 'Competition Math',
            scores: [
                { name: 'Grok 4 Heavy w/ Python', score: 100, color: 'orange' },
                { name: 'Grok 4 w/ Python', score: 98.8, color: 'orange' },
                { name: 'Grok 4', score: 91.7, color: 'darkOrange' },
                { name: 'o3', score: 88.9 },
                { name: 'Gemini 2.5 Pro', score: 88 },
                { name: 'Claude Opus 4', score: 75.5 },
            ]
        },
        {
            category: 'ARC-AGI-2',
            subtitle: 'Abstraction and Reasoning',
            scores: [
                { name: 'Grok 4', score: 15.9, color: 'darkOrange' },
                { name: 'Claude Opus 4', score: 8.6 },
                { name: 'o3', score: 6.5 },
                { name: 'Gemini 2.5 Pro', score: 4.9 },
            ]
        }
    ];

        return (
        <div className={styles.wrapper}>
            <div className={styles.leaderboardGrid}>
                {data.map((section, idx) => (
                    <div className={styles.leaderboardCard} key={idx}>
                        <h3>{section.category}</h3>
                        <p className={styles.subtitle}>{section.subtitle}</p>
                        <div className={styles.scores}>
                            {section.scores.map((item, index) => {
                                const fillWidth = (item.score / maxScore) * 100;
                                const barColorClass = item.color ? styles[item.color] : styles.grey;
                                return (
                                    <div className={styles.scoreRow} key={index}>
                                        <div className={styles.scoreBarWrapper}>
                                            <div
                                                className={`${styles.scoreBar} ${barColorClass}`}
                                                style={{ width: `${fillWidth}%` }}
                                            >
                                                <span className={styles.name}>{item.name}</span>
                                            </div>
                                        </div>
                                        <span className={styles.value}>{item.score}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}