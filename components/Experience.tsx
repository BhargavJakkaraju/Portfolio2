'use client'

import styles from './Experience.module.css'

const EXPERIENCES = [
  {
    jobTitle: 'Software Engineer Intern',
    company: 'Geico',
    duration: 'Summer 2026',
    overlayTitle: 'Focus',
    overlayText: 'Incoming Software Engineer Intern for Summer 2026!',
  },
  {
    jobTitle: 'Software Development Intern',
    company: 'eAlliance Corportation',
    duration: 'June 2025 - August 2025',
    overlayTitle: 'Focus',
    overlayText: (
      <>
        Built a smart Q&A system that lets you ask questions about company documents and get accurate answers instantly—cutting out 500+ manual searches every week. Used{' '}
        <span className={styles.goldGradient}>Python</span>, <span className={styles.goldGradient}>LangChain</span>, and{' '}
        <span className={styles.goldGradient}>vector databases</span> to make it work, then wrapped it in an{' '}
        <span className={styles.goldGradient}>API</span> so other tools could easily tap into it.
      </>
    ),
  },
  {
    jobTitle: 'Software Engineer Intern',
    company: 'Tekgence Inc.',
    duration: 'June 2024 - August 2024',
    overlayTitle: 'Focus',
    overlayText: (
      <>
        Built an onboarding platform for 1,000+ employees with a notes app, secure{' '}
        <span className={styles.goldGradient}>JWT authentication</span>, and interview tracking—all running on a{' '}
        <span className={styles.goldGradient}>Node.js</span> backend with{' '}
        <span className={styles.goldGradient}>MongoDB</span>. Designed the frontend with{' '}
        <span className={styles.goldGradient}>React</span> and{' '}
        <span className={styles.goldGradient}>Tailwind</span> to make it fast and easy to use during actual interviews.
      </>
    ),
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
                    <p className={styles.overlayText}>{typeof exp.overlayText === 'string' ? exp.overlayText : exp.overlayText}</p>
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
