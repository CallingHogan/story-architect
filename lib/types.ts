// ─── Project Types ────────────────────────────────────────────────────────────

export type ProjectType =
  | 'video-game'
  | 'screenplay'
  | 'novel'
  | 'short-story'
  | 'comic'
  | 'album'
  | 'visual-novel'
  | 'tabletop-rpg'
  | 'creepypasta'
  | 'podcast'
  | 'interactive-fiction'
  | 'other'

export type ProjectGenre = {
  id: string
  label: string
  parentType: ProjectType
}

export type ThemeId =
  | 'neutral'
  | 'fiction'
  | 'horror'
  | 'screenplay'
  | 'coding'
  | 'game'
  | 'comic'
  | 'music'

// ─── Onboarding ───────────────────────────────────────────────────────────────

export type OnboardingStep =
  | 'project-type'
  | 'narrow-down'
  | 'creator-template'
  | 'idea-intake'
  | 'roadmap-preview'

export type OnboardingState = {
  step: OnboardingStep
  projectType: ProjectType | null
  genre: string | null
  scope: 'solo' | 'collaborative' | null
  tone: string | null
  ambition: string | null
  creatorProfileId: string | null
  rawIdea: string | null
  parsedIdea: ParsedIdea | null
  themeId: ThemeId
}

// ─── Idea Intake ──────────────────────────────────────────────────────────────

export type ParsedIdea = {
  title: string
  logline: string
  coreConcept: string
  themes: string[]
  characters: ParsedCharacter[]
  worldDetails: string[]
  tone: string
  strengths: string[]
  gaps: string[]
  followUpQuestions: FollowUpQuestion[]
}

export type ParsedCharacter = {
  name: string
  role: string
  description: string
}

export type FollowUpQuestion = {
  id: string
  question: string
  purpose: string
  answered: boolean
  answer: string | null
}

// ─── Creator Profiles ─────────────────────────────────────────────────────────

export type CreatorProfile = {
  id: string
  name: string
  knownFor: string[]
  tagline: string
  approach: string
  bestFor: string[]
  projectTypes: ProjectType[]
  methodology: Methodology
  icon: string
}

export type Methodology = {
  phases: MethodologyPhase[]
  keyPrinciples: string[]
  startingPoint: 'feel' | 'character' | 'world' | 'theme' | 'ending' | 'mechanic' | 'premise'
  paceStyle: 'fast-messy' | 'slow-deliberate' | 'iterative' | 'structured'
  planningStyle: 'plotter' | 'pantser' | 'hybrid'
}

export type MethodologyPhase = {
  id: string
  name: string
  description: string
  guideText: string
  tools: BuiltInTool[]
  outputs: string[]
  estimatedDuration: string
}

// ─── Project ──────────────────────────────────────────────────────────────────

export type Project = {
  id: string
  userId: string
  title: string
  logline: string
  projectType: ProjectType
  genre: string | null
  themeId: ThemeId
  creatorProfileId: string | null
  parsedIdea: ParsedIdea
  stages: Stage[]
  knowledgeBase: KnowledgeEntry[]
  status: 'active' | 'paused' | 'complete' | 'abandoned'
  createdAt: Date
  updatedAt: Date
  lastWorkedOnAt: Date
}

// ─── Stages & Tasks ───────────────────────────────────────────────────────────

export type Stage = {
  id: string
  projectId: string
  order: number
  name: string
  description: string
  status: 'locked' | 'active' | 'complete'
  tasks: Task[]
  completedAt: Date | null
}

export type Task = {
  id: string
  stageId: string
  order: number
  name: string
  prompt: string
  context: string
  tool: BuiltInTool | null
  status: 'pending' | 'active' | 'complete' | 'skipped'
  completedAt: Date | null
  userOutput: string | null
}

// ─── Built-in Tools ───────────────────────────────────────────────────────────

export type BuiltInTool =
  | 'free-write'
  | 'structured-form'
  | 'character-sheet'
  | 'world-builder'
  | 'timeline'
  | 'beat-sheet'
  | 'mood-board'
  | 'logline-builder'
  | 'conflict-mapper'
  | 'reference-doc'
  | 'checklist'

// ─── Knowledge Base ───────────────────────────────────────────────────────────

export type KnowledgeEntry = {
  id: string
  projectId: string
  category: KnowledgeCategory
  key: string
  value: string
  sourceTaskId: string | null
  createdAt: Date
  updatedAt: Date
}

export type KnowledgeCategory =
  | 'character'
  | 'world'
  | 'plot'
  | 'theme'
  | 'rules'
  | 'tone'
  | 'decision'
  | 'mechanic'
  | 'lore'

// ─── Knowledge Gaps ───────────────────────────────────────────────────────────

export type KnowledgeGap = {
  id: string
  projectId: string
  description: string
  severity: 'critical' | 'moderate' | 'minor'
  category: KnowledgeCategory
  relatedEntries: string[]
  detectedAt: Date
  resolvedAt: Date | null
}

// ─── User ─────────────────────────────────────────────────────────────────────

export type User = {
  id: string
  email: string
  displayName: string
  photoURL: string | null
  projects: string[]
  preferences: UserPreferences
  createdAt: Date
}

export type UserPreferences = {
  notificationsEnabled: boolean
  notificationFrequency: 'daily' | 'every-other-day' | 'weekly'
  preferredWorkTime: 'morning' | 'afternoon' | 'evening' | 'night' | null
}

// ─── API Shapes ───────────────────────────────────────────────────────────────

export type IntakeRequest = {
  rawText: string
  projectType: ProjectType
  creatorProfileId: string | null
}

export type IntakeResponse = {
  parsedIdea: ParsedIdea
  suggestedTitle: string
  suggestedTheme: ThemeId
}

export type RoadmapRequest = {
  parsedIdea: ParsedIdea
  projectType: ProjectType
  creatorProfileId: string | null
  answeredQuestions: FollowUpQuestion[]
}

export type RoadmapResponse = {
  stages: Omit<Stage, 'id' | 'projectId' | 'status' | 'completedAt'>[]
}
