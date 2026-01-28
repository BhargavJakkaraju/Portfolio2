'use client'

import { useState, useEffect } from 'react'
import styles from './Navigation.module.css'

interface NavigationProps {
  isScrolled: boolean
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainerWrapper}>
        <div className={styles.navContainer}>
          <div className={styles.navContainerInner}>
            <ul className={styles.navLinks}>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('about')
              }}
              className={activeSection === 'about' ? styles.active : ''}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('experience')
              }}
              className={activeSection === 'experience' ? styles.active : ''}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('projects')
              }}
              className={activeSection === 'projects' ? styles.active : ''}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
              className={activeSection === 'contact' ? styles.active : ''}
            >
              Contact Me
            </a>
          </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
