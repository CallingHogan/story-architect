import type { ProjectType, ThemeId } from './types'

export type ProjectTypeConfig = {
  id: ProjectType
  label: string
  description: string
  themeId: ThemeId
  icon: 'game' | 'screenplay' | 'novel' | 'short-story' | 'comic' | 'album' |
        'visual-novel' | 'tabletop' | 'horror' | 'podcast' | 'interactive' | 'other'
  primary: boolean
  // Warm bloom color on hover — unique per type, hints at the world
  hoverAccent: string
}

export const PROJECT_TYPES: ProjectTypeConfig[] = [
  {
    id: 'video-game',
    label: 'Video Game',
    description: 'Build worlds players can step inside and explore',
    themeId: 'game',
    icon: 'game',
    primary: true,
    hoverAccent: 'rgba(77,159,236,0.7)',
  },
  {
    id: 'screenplay',
    label: 'Screenplay',
    description: 'Write scenes that move from page to screen',
    themeId: 'screenplay',
    icon: 'screenplay',
    primary: true,
    hoverAccent: 'rgba(212,168,67,0.7)',
  },
  {
    id: 'novel',
    label: 'Novel',
    description: 'Shape a long story worth getting lost in',
    themeId: 'fiction',
    icon: 'novel',
    primary: true,
    hoverAccent: 'rgba(139,58,28,0.7)',
  },
  {
    id: 'short-story',
    label: 'Short Story',
    description: 'Capture one moment with a beginning and an end',
    themeId: 'fiction',
    icon: 'short-story',
    primary: true,
    hoverAccent: 'rgba(198,160,96,0.7)',
  },
  {
    id: 'comic',
    label: 'Comic',
    description: 'Tell it in panels, pictures and few words',
    themeId: 'fiction',
    icon: 'comic',
    primary: true,
    hoverAccent: 'rgba(186,96,74,0.7)',
  },
  {
    id: 'album',
    label: 'Album',
    description: 'Arrange songs into one cohesive listening journey',
    themeId: 'music',
    icon: 'album',
    primary: true,
    hoverAccent: 'rgba(190,116,66,0.7)',
  },
  // Secondary types — shown in "More" expansion
  {
    id: 'visual-novel',
    label: 'Visual Novel',
    description: 'Story-driven with branching paths and art',
    themeId: 'fiction',
    icon: 'visual-novel',
    primary: false,
    hoverAccent: 'rgba(150,100,200,0.7)',
  },
  {
    id: 'tabletop-rpg',
    label: 'Tabletop RPG',
    description: 'Design a world others can inhabit at a table',
    themeId: 'game',
    icon: 'tabletop',
    primary: false,
    hoverAccent: 'rgba(100,160,100,0.7)',
  },
  {
    id: 'creepypasta',
    label: 'Horror Story',
    description: 'Something short, dark, and hard to forget',
    themeId: 'horror',
    icon: 'horror',
    primary: false,
    hoverAccent: 'rgba(139,26,26,0.7)',
  },
  {
    id: 'podcast',
    label: 'Podcast',
    description: 'A show built around a voice and a point of view',
    themeId: 'neutral',
    icon: 'podcast',
    primary: false,
    hoverAccent: 'rgba(100,180,160,0.7)',
  },
  {
    id: 'interactive-fiction',
    label: 'Interactive Fiction',
    description: 'Text-based worlds where choices matter',
    themeId: 'fiction',
    icon: 'interactive',
    primary: false,
    hoverAccent: 'rgba(160,130,80,0.7)',
  },
  {
    id: 'other',
    label: 'Something else',
    description: 'Describe it and we\'ll figure it out together',
    themeId: 'neutral',
    icon: 'other',
    primary: false,
    hoverAccent: 'rgba(150,150,150,0.5)',
  },
]

export const PRIMARY_TYPES = PROJECT_TYPES.filter(t => t.primary)
export const SECONDARY_TYPES = PROJECT_TYPES.filter(t => !t.primary)

export function getProjectType(id: ProjectType): ProjectTypeConfig | undefined {
  return PROJECT_TYPES.find(t => t.id === id)
}
