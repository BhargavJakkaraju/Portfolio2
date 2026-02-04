import Image from 'next/image'
import TechIconsMarquee from './TechIconsMarquee'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.contentRow}>
          <div className={styles.content}>
            <p className={styles.text}>
            Hi! My name is Bhargav Jakkaraju and I am currently studying Software Engineering at San Jose State University.
            </p>
            <p className={styles.text}>
            I am interested in fullstack development, AI/ML Integration, Backend Systems, and Dev Tools. I’m always open to learning new things and meeting new people so feel free to reach out!
            </p>
            <a
              href="#contact"
              className={styles.reachOutLink}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              Reach Out!
            </a>
          </div>
          <div className={styles.logoWrapper}>
            <a
              href="https://www.sjsu.edu"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoLink}
              aria-label="San José State University"
            >
              <Image
                src="/logo.png"
                alt="San José State University"
                width={360}
                height={360}
                className={styles.logo}
                priority
              />
            </a>
            <TechIconsMarquee />
          </div>
        </div>
      </div>
    </section>
  )
}
