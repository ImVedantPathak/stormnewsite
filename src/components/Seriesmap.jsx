import styles from '../css/seriesmap.module.css'
import Roadmap from './Roadmap';

export default function Seriesmap() {
    return (
        <div className={styles.stormcard_wrapper}>
            <div className={styles.stormcard_card}>
                {/* This card is going to roadmap related for the current series */}
                <div className={styles.card_title}>GENESIS Series</div>
                <div className={styles.roadmap_wrapper}>
                    <Roadmap />
                </div>
            </div>
        </div>
    )
}