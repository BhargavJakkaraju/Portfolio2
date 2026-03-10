'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import TopUtilities from '@/components/TopUtilities'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light'
  }, [isDark])

  return (
    <main>
      <TopUtilities isDark={isDark} onToggle={() => setIsDark((prev) => !prev)} />
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <About />
      <Experience />
      <Projects isDark={isDark} />
      <Contact />
    </main>
  )
}
