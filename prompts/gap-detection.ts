import type { KnowledgeEntry, KnowledgeGap, Stage } from '@/lib/types'

// ─── Gap Detection Prompt ─────────────────────────────────────────────────────
// Runs in the background as the creator works. Reads the knowledge base and
// completed task outputs, then surfaces contradictions and missing information
// before they become problems.
// ─────────────────────────────────────────────────────────────────────────────

export function buildGapDetectionSystemPrompt(): string {
  return `You are a careful continuity reader and creative development editor. You read creative project notes, character descriptions, world-building details, and story decisions, then identify:

1. Contradictions — places where two things the creator wrote conflict with each other
2. Critical gaps — information that will be essential later but hasn't been defined yet
3. Logical inconsistencies — places where the internal rules of the world are violated

You do not offer creative suggestions. You do not rewrite anything. You identify problems and ask precise questions that help the creator resolve them in their own voice.

Your tone is that of a sharp, respectful editor — not a critic, not a cheerleader. You serve the creator's vision.`
}

export function buildGapDetectionPrompt(
  knowledgeEntries: KnowledgeEntry[],
  completedOutputs: { taskName: string; output: string }[],
  currentStage: string
): string {
  const knowledgeSection = knowledgeEntries.length > 0
    ? knowledgeEntries.map(e => `[${e.category.toUpperCase()}] ${e.key}: ${e.value}`).join('\n')
    : 'No knowledge base entries yet.'

  const outputsSection = completedOutputs.length > 0
    ? completedOutputs.map(o => `Task: ${o.taskName}\n${o.output}`).join('\n\n---\n\n')
    : 'No completed task outputs yet.'

  return `Review the following creative project material and identify any gaps or contradictions.

KNOWLEDGE BASE:
${knowledgeSection}

COMPLETED WORK:
${outputsSection}

CURRENT STAGE: ${currentStage}

Return a JSON array of issues found. If there are no issues, return an empty array.

[
  {
    "description": "Clear description of the gap or contradiction — specific, not vague",
    "severity": "critical | moderate | minor",
    "category": "character | world | plot | theme | rules | tone | decision | mechanic | lore",
    "relatedEntries": ["Keys of the knowledge entries this relates to"],
    "suggestedQuestion": "A precise question the creator should answer to resolve this — written in second person, warm but direct"
  }
]

Severity guide:
- critical: Will cause a structural problem in the project if unresolved
- moderate: Should be addressed before this stage is complete
- minor: Worth noting but not urgent

Return only valid JSON. If no issues found, return [].`
}

// ─── Knowledge Compilation Prompt ────────────────────────────────────────────
// Extracts structured knowledge entries from a completed task output.
// Runs automatically when a task is marked complete.
// ─────────────────────────────────────────────────────────────────────────────

export function buildKnowledgeExtractionPrompt(
  taskName: string,
  taskOutput: string,
  existingKeys: string[]
): string {
  return `A creator just completed a task and wrote the following:

TASK: ${taskName}
OUTPUT:
${taskOutput}

Extract any facts, decisions, or details that should be remembered for the rest of the project. These become entries in the project's knowledge base — a running record of everything that has been established.

${existingKeys.length > 0 ? `Existing knowledge base keys (do not duplicate): ${existingKeys.join(', ')}` : ''}

Return a JSON array of knowledge entries:

[
  {
    "category": "character | world | plot | theme | rules | tone | decision | mechanic | lore",
    "key": "Short descriptive key (e.g., 'protagonist-name', 'magic-system-rule-1', 'opening-setting')",
    "value": "The fact or decision, stated clearly in 1-3 sentences. Use the creator's exact language where possible."
  }
]

Rules:
- Only extract things that are explicitly stated — do not infer
- Prefer specific facts over general impressions
- Each entry should be independently useful without needing the full context
- Return only valid JSON. If nothing extractable, return [].`
}
