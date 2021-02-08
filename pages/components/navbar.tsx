import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.nav}>
            <div className={styles.links}>
                <span>Home</span>
                <span>About Me</span>
                <span>Skills</span>
                <span>Resume</span>
                <span>Projects</span>
                <span>Contact</span>
            </div>
        </div>
    )
}