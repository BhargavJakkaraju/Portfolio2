'use client'

import Image from 'next/image'
import styles from './TechIconsMarquee.module.css'

const TECH_ICONS = [
  { src: '/aws.png', alt: 'AWS' },
  { src: '/c.png', alt: 'C' },
  { src: '/git.png', alt: 'Git' },
  { src: '/html.png', alt: 'HTML' },
  { src: '/java.png', alt: 'Java' },
  { src: '/Jira.png', alt: 'Jira' },
  { src: '/js.png', alt: 'JavaScript' },
  { src: '/mongodb.png', alt: 'MongoDB' },
  { src: '/node.png', alt: 'Node.js' },
  { src: '/python.png', alt: 'Python' },
  { src: '/pytorch.png', alt: 'PyTorch' },
  { src: '/react.png', alt: 'React' },
  { src: '/sql.png', alt: 'SQL' },
]

export default function TechIconsMarquee() {
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeTrack}>
        {TECH_ICONS.map((icon, i) => (
          <div key={`a-${i}`} className={styles.iconSlot}>
            <Image src={icon.src} alt={icon.alt} width={40} height={40} className={styles.icon} />
          </div>
        ))}
        {TECH_ICONS.map((icon, i) => (
          <div key={`b-${i}`} className={styles.iconSlot}>
            <Image src={icon.src} alt={icon.alt} width={40} height={40} className={styles.icon} />
          </div>
        ))}
      </div>
    </div>
  )
}
