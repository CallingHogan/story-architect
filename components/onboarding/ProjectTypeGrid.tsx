'use client'

import { useState } from 'react'
import { ProjectTypeCard } from './ProjectTypeCard'
import { PRIMARY_TYPES, SECONDARY_TYPES } from '@/lib/project-types'
import type { ProjectType } from '@/lib/types'

type Props = {
  onSelect: (type: ProjectType) => void
}

export function ProjectTypeGrid({ onSelect }: Props) {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="grid-wrap">
      <div className="grid">
        {PRIMARY_TYPES.map(config => (
          <ProjectTypeCard
            key={config.id}
            config={config}
            onSelect={onSelect}
          />
        ))}
      </div>

      {showMore && (
        <div className="grid grid--secondary">
          {SECONDARY_TYPES.map(config => (
            <ProjectTypeCard
              key={config.id}
              config={config}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}

      <div className="more-wrap">
        <button
          className="more-btn"
          onClick={() => setShowMore(v => !v)}
          aria-expanded={showMore}
        >
          {showMore ? 'Fewer project types ↑' : 'More project types ↓'}
        </button>
      </div>

      <style jsx>{`
        .grid-wrap {
          width: 100%;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .grid--secondary {
          margin-top: 18px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .more-wrap {
          text-align: center;
          margin-top: 32px;
        }

        .more-btn {
          font-family: var(--font-body);
          font-size: var(--font-size-sm);
          color: var(--color-text-subtle);
          letter-spacing: var(--letter-spacing-wide);
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 8px;
          transition: color 0.3s ease;
          appearance: none;
        }

        .more-btn:hover {
          color: var(--color-text-secondary);
        }

        @media (max-width: 720px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
