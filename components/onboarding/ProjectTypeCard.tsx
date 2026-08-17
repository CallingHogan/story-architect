'use client'

import { ProjectTypeIcon } from './ProjectTypeIcon'
import type { ProjectTypeConfig } from '@/lib/project-types'

type Props = {
  config: ProjectTypeConfig
  onSelect: (id: ProjectTypeConfig['id']) => void
}

export function ProjectTypeCard({ config, onSelect }: Props) {
  return (
    <button
      onClick={() => onSelect(config.id)}
      className="project-type-card"
      style={{ '--hover-accent': config.hoverAccent } as React.CSSProperties}
      aria-label={`Create a ${config.label}`}
    >
      <div className="project-type-card__icon-wrap">
        <ProjectTypeIcon type={config.icon} />
      </div>
      <div className="project-type-card__name">{config.label}</div>
      <div className="project-type-card__desc">{config.description}</div>

      <style jsx>{`
        .project-type-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 26px;
          cursor: pointer;
          text-align: left;
          width: 100%;
          transition:
            transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1),
            box-shadow 0.55s ease,
            border-color 0.55s ease,
            background-color 0.55s ease;
          box-shadow: var(--shadow-card);
          /* Remove default button styles */
          font: inherit;
          color: inherit;
          appearance: none;
          -webkit-appearance: none;
        }

        .project-type-card:hover,
        .project-type-card:focus-visible {
          transform: translateY(-5px);
          background-color: var(--color-surface-hover);
          border-color: var(--hover-accent);
          box-shadow:
            0 26px 50px -24px rgba(50, 34, 12, 0.5),
            inset 0 -60px 72px -40px var(--hover-accent),
            inset 0 0 0 1px color-mix(in srgb, var(--hover-accent) 30%, transparent),
            var(--shadow-card-hover);
          outline: none;
        }

        .project-type-card:focus-visible {
          outline: 2px solid var(--color-accent);
          outline-offset: 2px;
        }

        .project-type-card__icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--color-bg-subtle);
          border: 1px solid var(--color-border-subtle);
          color: var(--color-text-secondary);
          flex-shrink: 0;
          transition: color 0.4s ease, border-color 0.4s ease;
        }

        .project-type-card:hover .project-type-card__icon-wrap {
          color: var(--color-text);
        }

        .project-type-card__name {
          margin-top: 22px;
          font-family: var(--font-display);
          font-size: var(--font-size-2xl);
          font-weight: var(--font-weight-medium);
          color: var(--color-text);
          line-height: var(--line-height-tight);
          letter-spacing: var(--letter-spacing-tight);
        }

        .project-type-card__desc {
          margin-top: 8px;
          font-family: var(--font-body);
          font-size: var(--font-size-sm);
          line-height: var(--line-height-normal);
          color: var(--color-text-subtle);
          text-wrap: pretty;
        }
      `}</style>
    </button>
  )
}
