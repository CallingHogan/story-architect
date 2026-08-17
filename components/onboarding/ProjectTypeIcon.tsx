// SVG icons for each project type — inline, no icon library dependency.
// All icons share: width=24 height=24, stroke="#current", strokeWidth=1.5,
// strokeLinecap="round", strokeLinejoin="round", fill="none"
// (matches Claude Design output exactly)

type IconProps = {
  type: string
  className?: string
  color?: string
}

export function ProjectTypeIcon({ type, className, color = 'currentColor' }: IconProps) {
  const props = {
    width: 24,
    height: 24,
    viewBox: '0 0 26 26',
    fill: 'none',
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
  }

  switch (type) {
    case 'game':
      return (
        <svg {...props}>
          <rect x="3" y="8" width="20" height="10" rx="5" />
          <line x1="8" y1="11" x2="8" y2="15" />
          <line x1="6" y1="13" x2="10" y2="13" />
          <circle cx="17" cy="12" r="1.1" />
          <circle cx="19.6" cy="14.6" r="1.1" />
        </svg>
      )

    case 'screenplay':
      return (
        <svg {...props}>
          <rect x="4" y="9" width="18" height="12" rx="1" />
          <path d="M4 9 L8 5 L22 5 L22 9" />
          <line x1="9" y1="5" x2="7" y2="9" />
          <line x1="14" y1="5" x2="12" y2="9" />
          <line x1="19" y1="5" x2="17" y2="9" />
        </svg>
      )

    case 'novel':
      return (
        <svg {...props}>
          <path d="M13 6 C10 4 5 4 4 6 L4 19 C5 17 10 17 13 19 C16 17 21 17 22 19 L22 6 C21 4 16 4 13 6 Z" />
          <line x1="13" y1="6" x2="13" y2="19" />
        </svg>
      )

    case 'short-story':
      return (
        <svg {...props}>
          <path d="M7 4 H15 L20 9 V22 H7 Z" />
          <path d="M15 4 V9 H20" />
          <line x1="10" y1="13" x2="17" y2="13" />
          <line x1="10" y1="16.5" x2="17" y2="16.5" />
        </svg>
      )

    case 'comic':
      return (
        <svg {...props}>
          <rect x="4" y="4" width="8" height="8" rx="1.2" />
          <rect x="14" y="4" width="8" height="8" rx="1.2" />
          <rect x="4" y="14" width="8" height="8" rx="1.2" />
          <rect x="14" y="14" width="8" height="8" rx="1.2" />
        </svg>
      )

    case 'album':
      return (
        <svg {...props}>
          <circle cx="13" cy="13" r="9" />
          <circle cx="13" cy="13" r="3" />
          <circle cx="13" cy="13" r="0.9" fill={color} stroke="none" />
        </svg>
      )

    case 'visual-novel':
      return (
        <svg {...props}>
          <rect x="3" y="5" width="20" height="14" rx="2" />
          <path d="M3 15 L8 11 L12 14 L16 9 L23 15" />
          <circle cx="8" cy="9" r="1.5" />
        </svg>
      )

    case 'tabletop':
      return (
        <svg {...props}>
          <path d="M13 3 L22 8 L22 18 L13 23 L4 18 L4 8 Z" />
          <path d="M13 3 L13 23" />
          <path d="M4 8 L22 8" />
          <path d="M4 18 L22 18" />
        </svg>
      )

    case 'horror':
      return (
        <svg {...props}>
          <path d="M13 3 C13 3 5 8 5 14 C5 18.4 8.6 22 13 22 C17.4 22 21 18.4 21 14 C21 8 13 3 13 3 Z" />
          <path d="M10 15 Q13 12 16 15" />
          <circle cx="10" cy="12" r="1" />
          <circle cx="16" cy="12" r="1" />
        </svg>
      )

    case 'podcast':
      return (
        <svg {...props}>
          <rect x="9" y="3" width="8" height="12" rx="4" />
          <path d="M5 13 C5 17.4 8.6 21 13 21 C17.4 21 21 17.4 21 13" />
          <line x1="13" y1="21" x2="13" y2="24" />
          <line x1="10" y1="24" x2="16" y2="24" />
        </svg>
      )

    case 'interactive':
      return (
        <svg {...props}>
          <path d="M4 6 H22 V20 H4 Z" rx="2" />
          <path d="M9 13 L12 10 L15 13" />
          <path d="M12 10 L12 16" />
          <line x1="8" y1="16" x2="16" y2="16" />
        </svg>
      )

    default:
      return (
        <svg {...props}>
          <circle cx="13" cy="13" r="9" />
          <line x1="13" y1="9" x2="13" y2="13" />
          <circle cx="13" cy="17" r="0.8" fill={color} stroke="none" />
        </svg>
      )
  }
}
