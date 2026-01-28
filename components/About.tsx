import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.content}>
          <p className={styles.text}>
            Welcome to my portfolio! I'm passionate about creating innovative solutions
            and bringing ideas to life through technology. This is where you can learn
            more about my background, skills, and what drives me.
          </p>
          <p className={styles.text}>
            Feel free to explore my work and reach out if you'd like to connect or
            collaborate on a project.
          </p>
        </div>
      </div>
    </section>
  )
}
