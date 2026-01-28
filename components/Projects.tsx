import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectsGrid}>
          <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>Project Title</h3>
            <p className={styles.projectDescription}>
              Add a description of your project here. Include technologies used,
              key features, and what you learned from building it.
            </p>
            <div className={styles.projectLinks}>
              <a href="#" className={styles.link}>View Project</a>
              <a href="#" className={styles.link}>GitHub</a>
            </div>
          </div>
          <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>Project Title</h3>
            <p className={styles.projectDescription}>
              Add a description of your project here. Include technologies used,
              key features, and what you learned from building it.
            </p>
            <div className={styles.projectLinks}>
              <a href="#" className={styles.link}>View Project</a>
              <a href="#" className={styles.link}>GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
