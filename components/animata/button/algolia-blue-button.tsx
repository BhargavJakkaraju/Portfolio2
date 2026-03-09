import type { AnchorHTMLAttributes, ReactNode } from 'react'
import styles from './algolia-blue-button.module.css'

type AlgoliaBlueButtonProps = {
  href: string
  ariaLabel: string
  children: ReactNode
  className?: string
} & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'>

export default function AlgoliaBlueButton({
  href,
  ariaLabel,
  children,
  className,
  target,
  rel,
}: AlgoliaBlueButtonProps) {
  const linkClassName = className
    ? `${styles.button} ${className}`
    : styles.button

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={linkClassName}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  )
}
