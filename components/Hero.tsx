import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Hi, I'm <span className={styles.name}>Bhargav Jakkaraju</span>
        </h1>
      </div>
    </section>
  )
}
