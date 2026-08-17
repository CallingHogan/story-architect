import type { ParsedIdea, ProjectType, CreatorProfile, MethodologyPhase, Stage, Task } from '@/lib/types'

// ─── Roadmap Generation Prompt ────────────────────────────────────────────────
// Takes a parsed idea + optional creator profile and generates the full
// stage-by-stage roadmap for completing the project.
// ─────────────────────────────────────────────────────────────────────────────

export function buildRoadmapSystemPrompt(): string {
  return `You are a creative production expert who helps creators understand the full arc of completing a creative project — from raw idea to finished work.

Your job is to generate a structured roadmap: the major stages a creator needs to move through, in order, to complete their specific project. Each stage contains concrete tasks with real prompts and tools.

You adapt to the creator's chosen methodology (if they selected one) and their specific project. A roadmap for a horror short story is very different from one for a video game — and a horror short story using Stephen King's method is different from one using a structured plotting approach.

The roadmap should feel like a mountain the creator can see clearly before they start climbing. Not overwhelming — clear. Each stage should feel achievable. Each task should be specific enough that the creator knows exactly what to do.

Critical rules:
- Every task must have a concrete, actionable prompt — not "write your characters" but "Write a one-page profile of your protagonist as if you're describing a real person you know: how they talk, what they want badly, what they're afraid to admit."
- Tasks must be completable in a single work session (1-4 hours)
- The roadmap must be realistic — do not promise the creator will finish a novel in 3 stages
- Tone matches the creator's project — a horror writer's prompts feel different from a game designer's
- Do not mention AI, tools, or technology in prompts shown to the user`
}

export function buildRoadmapUserPrompt(
  parsedIdea: ParsedIdea,
  projectType: ProjectType,
  creatorProfile: CreatorProfile | null,
  answeredQuestions: { question: string; answer: string }[]
): string {
  const methodologySection = creatorProfile
    ? `
The creator has chosen to follow the methodology of ${creatorProfile.name}.
Their approach: ${creatorProfile.approach.slice(0, 400)}...
Key principles: ${creatorProfile.methodology.keyPrinciples.slice(0, 4).join('; ')}
Starting point preference: ${creatorProfile.methodology.startingPoint}
Planning style: ${creatorProfile.methodology.planningStyle}

Use this methodology to shape the order and nature of stages and tasks. The phases below are from this methodology — adapt them to the specific project:
${creatorProfile.methodology.phases.map(p => `- ${p.name}: ${p.description}`).join('\n')}
`
    : `No creator profile selected. Use a well-structured general methodology appropriate for a ${projectType}.`

  const answeredSection = answeredQuestions.length > 0
    ? `\nAdditional context from the creator:\n${answeredQuestions.map(q => `Q: ${q.question}\nA: ${q.answer}`).join('\n\n')}`
    : ''

  return `Generate a complete creative roadmap for this project.

PROJECT:
Title: ${parsedIdea.title}
Type: ${projectType}
Logline: ${parsedIdea.logline}
Core concept: ${parsedIdea.coreConcept}
Tone: ${parsedIdea.tone}
Themes: ${parsedIdea.themes.join(', ')}
Known strengths: ${parsedIdea.strengths.join(', ')}
Known gaps: ${parsedIdea.gaps.join(', ')}
${answeredSection}

METHODOLOGY:
${methodologySection}

Return a JSON array of stages. Each stage contains tasks. Use this exact structure:

[
  {
    "order": 1,
    "name": "Stage name (short, evocative — not 'Step 1')",
    "description": "What this stage is about and why it comes first — 2 sentences",
    "tasks": [
      {
        "order": 1,
        "name": "Task name — imperative, specific",
        "prompt": "The full prompt shown to the creator when they open this task. 2-4 sentences. Specific, actionable, written in second person. Should feel like a thoughtful mentor is speaking.",
        "context": "Background context shown alongside the prompt — why this task matters, what to keep in mind, a relevant quote or principle from the methodology if applicable. 1-3 sentences.",
        "tool": "One of: free-write | structured-form | character-sheet | world-builder | timeline | beat-sheet | mood-board | logline-builder | conflict-mapper | reference-doc | checklist | null",
        "userOutput": null,
        "status": "pending",
        "completedAt": null
      }
    ],
    "status": "locked",
    "completedAt": null
  }
]

Rules:
- 5-9 stages total, depending on project scope
- 2-5 tasks per stage
- First stage status should be "active", all others "locked"
- Tasks must be completable in one sitting — if it's a large task, break it into subtasks
- Prompts must feel warm and specific, not generic — reference the creator's actual project where possible
- Return only valid JSON`
}
