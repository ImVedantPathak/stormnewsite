import styles from '../css/navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.nav_wrapper}>
                {/* We can add some sort of cool animation logo here */}
                <ul className={styles.nav_links}>
                    <li><a href="#something">SI</a></li>
                    <li><a href="#features">STORM</a></li>
					<li><a href="#performance">API</a></li>
					<li><a href="#Engine">ENGINE</a></li>
                    <li><a href="#safety">SAFETY</a></li>
					<li><a href="#build">BUILD</a></li>
                </ul>
                <div className={styles.action_button}>
                    <a href="#beta">BETA LIVE!</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar