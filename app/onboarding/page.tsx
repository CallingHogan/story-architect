'use client'

import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { ProjectTypeGrid } from '@/components/onboarding/ProjectTypeGrid'
import { getProjectType } from '@/lib/project-types'
import type { ProjectType } from '@/lib/types'

export default function OnboardingPage() {
  const router = useRouter()

  const handleSelect = useCallback((type: ProjectType) => {
    const config = getProjectType(type)
    if (!config) return

    // The world arrives — trigger cinematic theme transition
    const html = document.documentElement
    html.setAttribute('data-theme-transitioning', 'true')

    requestAnimationFrame(() => {
      html.setAttribute('data-theme', config.themeId)

      setTimeout(() => {
        html.removeAttribute('data-theme-transitioning')
        router.push(`/onboarding/narrow?type=${type}`)
      }, 650)
    })
  }, [router])

  return (
    <main className="page">
      <div className="container">
        <header className="header">
          <span className="wordmark">Story Architect</span>
          <h1 className="headline">
            What would you like to{' '}
            <em className="headline__em">create</em>?
          </h1>
          <p className="subline">
            It&rsquo;s late, the room is quiet. Pick a form and begin.
          </p>
        </header>

        <ProjectTypeGrid onSelect={handleSelect} />
      </div>

      <style jsx>{`
        .page {
          min-height: 100dvh;
          background-color: var(--color-bg);
          background-image: var(--texture-bg);
          background-repeat: repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-12) var(--space-6);
          position: relative;
          transition:
            background-color var(--motion-theme) var(--motion-ease),
            color var(--motion-theme) var(--motion-ease);
        }

        .page::before {
          content: '';
          position: fixed;
          inset: 0;
          background: radial-gradient(
            120% 90% at 50% 8%,
            rgba(255, 251, 242, 0.9),
            rgba(0, 0, 0, 0) 62%
          );
          pointer-events: none;
          z-index: 0;
          transition: opacity var(--motion-theme) var(--motion-ease);
        }

        .container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1040px;
          display: flex;
          flex-direction: column;
          gap: var(--space-12);
        }

        .header {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .wordmark {
          font-family: var(--font-body);
          font-size: var(--font-size-xs);
          font-weight: var(--font-weight-semibold);
          letter-spacing: var(--letter-spacing-wider);
          color: var(--color-text-subtle);
          text-transform: uppercase;
        }

        .headline {
          margin: var(--space-6) 0 0;
          font-family: var(--font-display);
          font-weight: var(--font-weight-regular);
          font-size: clamp(2.5rem, 5vw, 3.75rem);
          line-height: var(--line-height-tight);
          letter-spacing: var(--letter-spacing-tight);
          color: var(--color-text);
        }

        .headline__em {
          font-style: italic;
          color: var(--color-text-secondary);
        }

        .subline {
          margin: var(--space-4) 0 0;
          font-family: var(--font-body);
          font-size: var(--font-size-base);
          color: var(--color-text-subtle);
          letter-spacing: 0.01em;
        }
      `}</style>
    </main>
  )
}
