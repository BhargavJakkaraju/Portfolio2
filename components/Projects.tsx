'use client'

import { useState } from 'react'
import styles from './Projects.module.css'

const LUMENTA_SHORT = 'An AI-powered video surveillance platform for real-time monitoring.'
const LUMENTA_FULL = 'An AI-powered video surveillance platform that monitors multiple camera feeds in real time to detect and respond to security incidents, safety hazards, and notable events. It uses computer vision and AI to analyze both live and recorded video, identifying objects, people, vehicles, and activities across a wide range of environments.'

const AIDE_SHORT = 'An AI-powered water safety platform that monitors swimming areas for drowning detection.'
const AIDE_FULL = 'An AI-powered water safety platform that continuously monitors swimming areas through live video or uploaded footage to identify signs of drowning in real time. Using advanced computer vision and motion analysis, the system detects people in the water and observes their movement patterns, looking for indicators such as limited horizontal motion, vertical stillness, erratic thrashing, or prolonged submersion.'

const LANDLY_SHORT = 'A modern, full-stack web application that helps developers prepare for technical interviews using AI-generated questions and explanations.'
const LANDLY_FULL = 'A modern, full-stack web application that helps developers prepare for technical interviews using AI-generated questions and explanations. Create personalized interview prep sessions tailored to your role, experience level, and topics you want to focus on.'

export default function Projects() {
  const [lumentaExpanded, setLumentaExpanded] = useState(false)
  const [aideExpanded, setAideExpanded] = useState(false)
  const [landlyExpanded, setLandlyExpanded] = useState(false)

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectsGrid}>
          <div className={styles.cardWrapper}>
            <div className={styles.projectCard}>
              <div className={styles.projectCardInner}>
                <div className={styles.projectTitleRow}>
                  <h3 className={styles.projectTitle}>Lumenta</h3>
                  <span className={styles.awardBadge}>
                    <span className={styles.trophyIcon} aria-hidden>🏆</span>
                    <span className={styles.goldGradient}>SBHacks XII: Grand Prize Second Place</span>
                  </span>
                </div>
                <div className={styles.descriptionWithReadMore}>
                  <p className={styles.projectDescription}>
                    {lumentaExpanded ? LUMENTA_FULL : LUMENTA_SHORT}
                  </p>
                  <button
                    type="button"
                    className={styles.readMore}
                    onClick={() => setLumentaExpanded(!lumentaExpanded)}
                  >
                    {lumentaExpanded ? 'Read less' : 'Read more'}
                  </button>
                </div>
                <div className={styles.projectLinks}>
                  <a href="https://devpost.com/software/lumenta" className={styles.link} target="_blank" rel="noopener noreferrer">View Devpost</a>
                  <a href="https://github.com/BhargavJakkaraju/Lumenta" className={styles.link} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.projectCard}>
              <div className={styles.projectCardInner}>
                <div className={styles.projectTitleRow}>
                  <h3 className={styles.projectTitle}>A-IDE</h3>
                </div>
                <div className={styles.descriptionWithReadMore}>
                  <p className={styles.projectDescription}>
                    {aideExpanded ? AIDE_FULL : AIDE_SHORT}
                  </p>
                  <button
                    type="button"
                    className={styles.readMore}
                    onClick={() => setAideExpanded(!aideExpanded)}
                  >
                    {aideExpanded ? 'Read less' : 'Read more'}
                  </button>
                </div>
                <div className={styles.projectLinks}>
                  <a href="https://devpost.com/software/a-ide" className={styles.link} target="_blank" rel="noopener noreferrer">View Devpost</a>
                  <a href="https://github.com/darrensh3n/-A-IDE" className={styles.link} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.projectCard}>
              <div className={styles.projectCardInner}>
                <div className={styles.projectTitleRow}>
                  <h3 className={styles.projectTitle}>Landly</h3>
                </div>
                <div className={styles.descriptionWithReadMore}>
                  <p className={styles.projectDescription}>
                    {landlyExpanded ? LANDLY_FULL : LANDLY_SHORT}
                  </p>
                  <button
                    type="button"
                    className={styles.readMore}
                    onClick={() => setLandlyExpanded(!landlyExpanded)}
                  >
                    {landlyExpanded ? 'Read less' : 'Read more'}
                  </button>
                </div>
                <div className={styles.projectLinks}>
                  <a href="https://github.com/BhargavJakkaraju/Interviewer" className={styles.link} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
