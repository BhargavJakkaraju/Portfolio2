import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Contact Me</h2>
        <div className={styles.content}>
          <p className={styles.text}>
            I'd love to hear from you! Whether you have a question, want to collaborate,
            or just want to say hello, feel free to reach out.
          </p>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <h3 className={styles.contactLabel}>Email</h3>
              <a href="mailto:bhargav.jakkaraju@sjsu.edu" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
                Bhargav.Jakkaraju@sjsu.edu
              </a>
            </div>
            <div className={styles.contactItem}>
              <h3 className={styles.contactLabel}>LinkedIn</h3>
              <a href="http://linkedin.com/in/bhargavjakkaraju06" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
                linkedin.com/in/bhargavjakkaraju06
              </a>
            </div>
            <div className={styles.contactItem}>
              <h3 className={styles.contactLabel}>GitHub</h3>
              <a href="http://github.com/bhargavjakkaraju" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
                github.com/bhargavjakkaraju
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
