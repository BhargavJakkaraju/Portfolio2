import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.content}>
          <p className={styles.text}>
            I&apos;m a software engineer in training who loves working at the intersection of AI, web development, and data systems.
            From developing full-stack applications to integrating machine learning pipelines, I am always open to learning new skills.
          </p>
          <p className={styles.text}>
            I&apos;m a Software Engineering student at San José State University, where I&apos;m strengthening my
            foundation through courses in Data Structures, Object-Oriented Design, and Operating Systems.
          </p>
        </div>
      </div>
    </section>
  )
}
