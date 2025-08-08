import styles from '../css/seriesmap.module.css'

export default function Seriesmap() {
    return (
        <div className={styles.card_wrapper}>
            <div className={styles.text_wrapper}>
                <div className={styles.header}>STORM P3 and ORM 1</div>
                <div className={styles.header_subtitle}>Pushing the frontier of AI with unmatched efficiency and performance—STORM P3 and ORM 1 bring next-gen multimodal capabilities, already setting the state-of-the-art. </div>
                <div className={styles.article_button}>
                    <a href="">Read Article</a>
                </div>
            </div>
            <div className={styles.sub_card}>
                <div className={styles.card_title}>STORM P3</div>
                <div className={styles.guide_arrow}>➜</div>
            </div>
            <div className={styles.sub_card}>
                <div className={styles.card_title}>ORM 1</div>
                <div className={styles.guide_arrow}>➜</div>
            </div>
        </div>
    )
}