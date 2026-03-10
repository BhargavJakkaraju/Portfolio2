'use client'

import { useEffect, useState } from 'react'
import GlassSurface from './GlassSurface'
import styles from './TopUtilities.module.css'

type TopUtilitiesProps = {
  isDark: boolean
  onToggle: () => void
}

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/Los_Angeles',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

function getPacificTime() {
  const parts = timeFormatter.formatToParts(new Date())
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]))
  return `${map.hour}:${map.minute}:${map.second}`
}

export default function TopUtilities({ isDark, onToggle }: TopUtilitiesProps) {
  const [time, setTime] = useState(getPacificTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getPacificTime())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className={styles.timeContainer}>
        <GlassSurface
          width="auto"
          height="auto"
          borderRadius={999}
          backgroundOpacity={0.22}
          saturation={1.6}
          blur={18}
          displace={0.9}
          distortionScale={-220}
          className={styles.pill}
        >
          <span className={styles.timeText}>{time}</span>
        </GlassSurface>
      </div>
      <div className={styles.toggleContainer}>
        <GlassSurface
          width="auto"
          height="auto"
          borderRadius={999}
          backgroundOpacity={0.22}
          saturation={1.6}
          blur={18}
          displace={0.9}
          distortionScale={-220}
          className={styles.pill}
        >
          <button type="button" className={styles.toggleButton} onClick={onToggle}>
            {isDark ? (
              <span className={styles.toggleIcon} aria-label="Switch to light mode">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-16 1.2 2.8h-2.4L12 2zm0 20-1.2-2.8h2.4L12 22zm10-10-2.8 1.2v-2.4L22 12zM2 12l2.8-1.2v2.4L2 12zm16.95-7.95 1.41 1.41-1.7 1.7-1.41-1.41 1.7-1.7zM4.64 19.36l1.41-1.41 1.7 1.7-1.41 1.41-1.7-1.7zm14.72 0-1.7-1.7 1.41-1.41 1.7 1.7-1.41 1.41zM6.05 5.05l-1.7 1.7-1.41-1.41 1.7-1.7 1.41 1.41z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            ) : (
              <span className={styles.toggleIcon} aria-label="Switch to dark mode">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            )}
          </button>
        </GlassSurface>
      </div>
    </>
  )
}
