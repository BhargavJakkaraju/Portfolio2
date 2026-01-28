import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.content}>
          <div className={styles.experienceItem}>
            <h3 className={styles.jobTitle}>Your Job Title</h3>
            <p className={styles.company}>Company Name</p>
            <p className={styles.duration}>Duration</p>
            <p className={styles.description}>
              Add your experience details here. Describe your role, responsibilities,
              and achievements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
