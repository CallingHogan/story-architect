import type { ProjectType, ParsedIdea, ThemeId } from '@/lib/types'

// ─── Idea Intake Prompt ───────────────────────────────────────────────────────
// Takes raw user input (chat log, notes, voice transcript, anything) and
// extracts structured creative project data. The output drives everything else.
// ─────────────────────────────────────────────────────────────────────────────

export function buildIntakeSystemPrompt(): string {
  return `You are a creative development assistant with deep expertise in narrative, game design, and creative production across all media. Your job is to read raw, unstructured creative material — notes, chat logs, voice transcripts, bullet points, rambling paragraphs — and extract a clear, structured understanding of what the creator is trying to make.

You are NOT a co-author. You do not add ideas. You do not embellish. You extract, clarify, and organize what is already there. If something is unclear or missing, you note it as a gap and ask about it — you do not fill it in yourself.

Your output must be grounded entirely in what the user provided. Quote or closely paraphrase their language when capturing their vision. Their words matter more than clean prose.

Be direct and confident. Do not hedge excessively. If you can identify something clearly, state it clearly.`
}

export function buildIntakeUserPrompt(rawText: string, projectType: ProjectType): string {
  return `Here is raw creative material from someone who wants to make a ${formatProjectType(projectType)}. Read it carefully, then extract a structured understanding of their project.

---
${rawText}
---

Return a JSON object with this exact structure:

{
  "title": "A working title (2-5 words, drawn from their language if possible — if none exists, derive from the core concept)",
  "logline": "One sentence describing the project: what it is, who it follows, what the core tension is. Max 30 words.",
  "coreConcept": "2-3 sentences describing the core creative vision in the creator's own terms. What are they trying to make and why does it matter to them?",
  "themes": ["Array of 2-5 thematic threads clearly present in the material — single words or short phrases"],
  "characters": [
    {
      "name": "Character name or 'Unnamed protagonist' etc.",
      "role": "Their narrative role (protagonist, antagonist, mentor, etc.)",
      "description": "1-2 sentences from the material about who they are"
    }
  ],
  "worldDetails": ["Array of specific world-building details mentioned — settings, rules, history, systems. Direct from the source material."],
  "tone": "The emotional register of the project — 1 sentence. (Dark and tense? Whimsical and fast? Melancholy and introspective?)",
  "strengths": ["What is already well-developed or clearly articulated in the material? 2-4 items."],
  "gaps": ["What critical information is missing that will be needed to complete this project? 2-5 items. Be specific."],
  "followUpQuestions": [
    {
      "id": "q1",
      "question": "A specific, targeted question to fill the most critical gap",
      "purpose": "Why this information is needed (internal — not shown to user)",
      "answered": false,
      "answer": null
    }
  ],
  "suggestedTheme": "One of: neutral | fiction | horror | screenplay | coding | game — based on the project type and tone"
}

Rules:
- followUpQuestions should contain 3-5 questions, ordered by importance
- Questions should be specific and answerable — not "tell me more about your world" but "What does your protagonist want more than anything, and what are they afraid to admit they want?"
- gaps and followUpQuestions should correspond — each gap should have a question that addresses it
- If the material is very sparse, note that the coreConcept may be preliminary and flag more gaps
- Do not invent characters, world details, or themes that aren't in the material
- Return only valid JSON, no preamble or explanation`
}

export function formatProjectType(type: ProjectType): string {
  const labels: Record<ProjectType, string> = {
    'video-game': 'video game',
    'screenplay': 'screenplay or script',
    'novel': 'novel',
    'short-story': 'short story',
    'comic': 'comic or graphic novel',
    'album': 'album or EP',
    'visual-novel': 'visual novel',
    'tabletop-rpg': 'tabletop RPG',
    'creepypasta': 'horror story or creepypasta',
    'podcast': 'podcast',
    'interactive-fiction': 'piece of interactive fiction',
    'other': 'creative project',
  }
  return labels[type]
}

export function buildFollowUpPrompt(
  originalParsed: ParsedIdea,
  questionId: string,
  answer: string
): string {
  const question = originalParsed.followUpQuestions.find(q => q.id === questionId)
  if (!question) throw new Error(`Question ${questionId} not found`)

  return `You previously parsed a creative project and asked this follow-up question:

Question: "${question.question}"
Purpose: "${question.purpose}"

The creator answered:
"${answer}"

Update the parsed idea to incorporate this answer. Return only the fields that should change, as a partial JSON object. Maintain the creator's exact language wherever possible. Do not add ideas beyond what they provided.`
}
