'use client'

import { useState, useEffect } from 'react'
import { GitHubCalendar } from 'react-github-calendar'
import GlassSurface from './GlassSurface'
import styles from './Projects.module.css'

const githubCalendarTheme = {
  light: ['#e8e6e1', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb'],
  dark: ['#161b22', '#1e3a5f', '#2563eb', '#3b82f6', '#60a5fa'],
}

const LUMENTA_SHORT = 'An AI-powered video surveillance platform for real-time monitoring.'
const LUMENTA_FULL = 'An AI-powered video surveillance platform that monitors multiple camera feeds in real time to detect and respond to security incidents, safety hazards, and notable events. It uses computer vision and AI to analyze both live and recorded video, identifying objects, people, vehicles, and activities across a wide range of environments.'

const BLOOM_SHORT = 'An AI-powered 3D modeling platform'
const BLOOM_FULL = 'An AI-powered 3D modeling platform that lets users create 3D assets through sketching, voice commands, and natural language descriptions instead of traditional complex software. It uses multimodal AI to interpret 2D drawings and spoken instructions, automatically generating 3D geometry, textures, and compositions while explaining the underlying process to help users learn as they build'

const AIDE_SHORT = 'An AI-powered water safety platform.'
const AIDE_FULL = 'An AI-powered water safety platform that monitors swimming areas through live or uploaded video to detect potential drowning in real time. It uses computer vision and motion analysis to identify distress patterns such as limited horizontal movement, vertical stillness, erratic thrashing, and prolonged submersion.'

type ProjectsProps = {
  isDark?: boolean
}

export default function Projects({ isDark = false }: ProjectsProps) {
  const [lumentaExpanded, setLumentaExpanded] = useState(false)
  const [bloomExpanded, setBloomExpanded] = useState(false)
  const [aideExpanded, setAideExpanded] = useState(false)
  const [calendarMounted, setCalendarMounted] = useState(false)

  useEffect(() => {
    setCalendarMounted(true)
  }, [])

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectsGrid}>
          <div className={styles.cardWrapper}>
            <GlassSurface
              width="100%"
              height="auto"
              borderRadius={16}
              backgroundOpacity={0.22}
              saturation={1.6}
              blur={18}
              displace={0.9}
              distortionScale={-220}
              className={styles.projectGlass}
            >
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
            </GlassSurface>
          </div>
          <div className={styles.cardWrapper}>
            <GlassSurface
              width="100%"
              height="auto"
              borderRadius={16}
              backgroundOpacity={0.22}
              saturation={1.6}
              blur={18}
              displace={0.9}
              distortionScale={-220}
              className={styles.projectGlass}
            >
              <div className={styles.projectCardInner}>
                <div className={styles.projectTitleRow}>
                  <h3 className={styles.projectTitle}>Bloom</h3>
                  <span className={styles.awardBadge}>
                    <span className={styles.trophyIcon} aria-hidden>🏆</span>
                    <span className={styles.goldGradient}>SJHacks: 1st Place Best use of 3D/CGI</span>
                  </span>
                </div>
                <div className={styles.descriptionWithReadMore}>
                  <p className={styles.projectDescription}>
                    {bloomExpanded ? BLOOM_FULL : BLOOM_SHORT}
                  </p>
                  <button
                    type="button"
                    className={styles.readMore}
                    onClick={() => setBloomExpanded(!bloomExpanded)}
                  >
                    {bloomExpanded ? 'Read less' : 'Read more'}
                  </button>
                </div>
                <div className={styles.projectLinks}>
                  <a href="https://devpost.com/software/boom-ytjp4a" className={styles.link} target="_blank" rel="noopener noreferrer">View Devpost</a>
                  <a href="https://github.com/BhargavJakkaraju/Bloom" className={styles.link} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </GlassSurface>
          </div>
          <div className={styles.cardWrapper}>
            <GlassSurface
              width="100%"
              height="auto"
              borderRadius={16}
              backgroundOpacity={0.22}
              saturation={1.6}
              blur={18}
              displace={0.9}
              distortionScale={-220}
              className={styles.projectGlass}
            >
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
            </GlassSurface>
          </div>
        </div>
        <div className={styles.githubActivity}>
          <h3 className={styles.githubActivityTitle}>My GitHub Activity</h3>
          <div className={styles.githubChartCardWrapper}>
            <GlassSurface
              width="100%"
              height="auto"
              borderRadius={16}
              backgroundOpacity={0.22}
              saturation={1.6}
              blur={18}
              displace={0.9}
              distortionScale={-220}
              className={styles.githubGlass}
            >
              <div className={styles.githubChartInner}>
                {calendarMounted ? (
                  <GitHubCalendar
                    username="bhargavjakkaraju"
                    theme={githubCalendarTheme}
                    colorScheme={isDark ? 'dark' : 'light'}
                    className={styles.githubCalendar}
                  />
                ) : (
                  <div className={styles.githubCalendarPlaceholder} aria-hidden>
                    Loading GitHub activity…
                  </div>
                )}
              </div>
            </GlassSurface>
          </div>
        </div>
      </div>
    </section>
  )
}
