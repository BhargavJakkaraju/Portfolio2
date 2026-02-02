'use client'

import styles from './Experience.module.css'

const EXPERIENCES = [
  {
    jobTitle: 'Software Engineering Intern',
    company: 'Company Name',
    duration: 'Summer 2024',
    overlayTitle: 'Role & impact',
    overlayText: 'Worked on full-stack features and APIs. Collaborated with the team on design reviews and helped improve test coverage and documentation.',
  },
  {
    jobTitle: 'Research Assistant',
    company: 'San José State University',
    duration: '2023 – Present',
    overlayTitle: 'Focus',
    overlayText: 'Supporting research in software systems and tools. Gaining experience with data pipelines, experimentation, and academic writing.',
  },
  {
    jobTitle: 'Project Lead',
    company: 'Student Project',
    duration: '2023',
    overlayTitle: 'What we built',
    overlayText: 'Led a small team building a web application. Handled planning, front-end and back-end tasks, and deployment. Learned a lot about collaboration and project scope.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.content}>
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className={styles.cardWrapper}>
              <div className={styles.experienceCard}>
                <div className={styles.experienceCardInner}>
                  <div className={styles.experienceCardFront}>
                    <h3 className={styles.company}>{exp.company}</h3>
                    <p className={styles.jobTitle}>{exp.jobTitle}</p>
                    <p className={styles.duration}>{exp.duration}</p>
                  </div>
                  <div className={styles.experienceCardOverlay}>
                    <h4 className={styles.overlayTitle}>{exp.overlayTitle}</h4>
                    <p className={styles.overlayText}>{exp.overlayText}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
