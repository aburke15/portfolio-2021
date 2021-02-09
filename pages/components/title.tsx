import styles from '../../styles/Title.module.css'

export default function Title() {
    return (
        <div className={styles.titleImage}>
            <div className={styles.titleText}>
                <h1>André Burke</h1>
                <h2>Software Engineer</h2>
            </div>
        </div>
    )
}