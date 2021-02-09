import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.nav}>
            <div className={styles.links}>
                <a href="/"><span>Home</span></a>
                <a href=""><span>Bio</span></a>
                <a href=""><span>Skills</span></a>
                <a href=""><span>Resume</span></a>
                <a href=""><span>Projects</span></a>
                <a href=""><span>Contact</span></a>
            </div>
        </div>
    )
}