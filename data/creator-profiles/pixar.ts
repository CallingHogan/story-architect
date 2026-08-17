import type { CreatorProfile } from '@/lib/types'

export const pixar: CreatorProfile = {
  id: 'pixar',
  name: 'The Pixar Method',
  knownFor: ['Toy Story', 'Up', 'Finding Nemo', 'Inside Out', 'WALL-E'],
  tagline: 'Make the audience care first. Everything else is craft.',
  approach: `Pixar's story process is the most studied and documented in Hollywood, partly because it's genuinely unusual. The studio has an internal group called "Story Trust" — senior creative figures who watch cuts of in-progress films and give blunt, constructive feedback. The rule is that notes from Story Trust are not mandates; they're observations from "a loving friend who happens to have the same goal you have."

The Pixar process starts with empathy. Before anything else, the audience must *care*. Not be impressed, not be entertained — care. About a character, about a situation, about a question. If they don't care, nothing else works.

Structure is approached through the "yes/and but/therefore" framework: every scene should either move the story forward (and) or create a complication (but/therefore). Scenes that do neither get cut. The story is always moving.

Theme is not added at the end. At Pixar, the theme is the engine — the central question the story is exploring. The best Pixar films can be summarized in a thematic question: "What makes life worth living?" (Up) "Can you love someone who's different from you?" (Finding Nemo) "What are we when no one's watching?" (Toy Story).`,
  bestFor: [
    'Emotionally-driven narratives',
    'Stories with ensemble casts',
    'Animation, family, or broad-audience projects',
    'Anyone who struggles with structure and "what happens next"',
    'Writers who want a rigorous, collaborative-style process even when working alone',
  ],
  projectTypes: ['screenplay', 'novel', 'short-story', 'video-game'],
  icon: '🎬',
  methodology: {
    startingPoint: 'theme',
    paceStyle: 'structured',
    planningStyle: 'plotter',
    keyPrinciples: [
      'Make the audience care before anything else — empathy is the foundation',
      'Every scene moves forward (and) or creates complication (but/therefore) — nothing else',
      'Theme is the engine, not the decoration — know what question your story is asking',
      'The ending comes first — work backwards from where you want the audience to feel',
      '"Story Trust" thinking: seek honest notes from people who love your work and want it to succeed',
      'Your first idea is the obvious one — explore further before committing',
      'What your character wants vs. what they need: the gap between them is the story',
      'Coincidences that get characters into trouble are fine — coincidences that get them out are cheating',
    ],
    phases: [
      {
        id: 'pixar-1',
        name: 'The Emotional Premise',
        description: 'Find the feeling you want the audience to leave with.',
        guideText: `Pixar starts here, not with plot. What do you want someone to *feel* when they finish your story? Not what do you want them to think, or what lesson do you want to teach — what do you want them to feel?

Up is a movie that wants you to feel that adventure and love aren't opposites. Inside Out wants you to feel that sadness is necessary and valid. WALL-E wants you to feel longing and hope at the same time.

Write the emotion first. Then ask: what kind of story creates that emotion? What kind of character, in what kind of situation, going through what kind of journey?

Everything else flows from here.`,
        tools: ['free-write'],
        outputs: ['Emotional premise — the feeling the story should leave in the audience'],
        estimatedDuration: '2-3 days',
      },
      {
        id: 'pixar-2',
        name: 'The Thematic Question',
        description: 'Identify the central question your story is genuinely exploring.',
        guideText: `The best Pixar films aren't about their plot. They're about a question.

"Finding Nemo" is about: can you protect someone you love without controlling them?
"Coco" is about: is being remembered worth more than being loved while you're alive?
"Toy Story 3" is about: how do you let go of a version of yourself that no longer exists?

Your thematic question isn't a message or a moral. It's a question the story honestly explores — one the characters have different answers to, one that doesn't have an obvious right answer at the start.

Write your thematic question. If you already know the answer, it's probably not interesting enough yet.`,
        tools: ['free-write'],
        outputs: ['Thematic question — one sentence, genuinely unanswered at the start'],
        estimatedDuration: '2-5 days',
      },
      {
        id: 'pixar-3',
        name: 'Character: Want vs. Need',
        description: 'Define what your protagonist wants vs. what they actually need.',
        guideText: `This is Pixar's most reliable structural tool. Every great protagonist wants something and needs something different.

Marlin (Finding Nemo) WANTS: to find his son and bring him home safely.
Marlin NEEDS: to learn to let go and trust Nemo's capability.

The want is the engine that drives the plot. The need is what the character discovers by the end. The story is the gap between them.

Write your protagonist's want and need. Then ask: what situation forces them to choose? What happens when the want and the need are in direct conflict? That moment is your climax.`,
        tools: ['character-sheet'],
        outputs: [
          'Protagonist want vs. need',
          'The moment of conflict between them',
          'Supporting character roster — who challenges each of these?',
        ],
        estimatedDuration: '3-7 days',
      },
      {
        id: 'pixar-4',
        name: 'The Spine',
        description: 'Write your story as a single "Once upon a time" structure.',
        guideText: `Pixar uses a simple spine structure to test whether a story holds together:

Once upon a time ___. Every day ___. Until one day ___. Because of that ___. Because of that ___. Until finally ___. And ever since then ___.

This isn't an outline — it's a diagnostic. If you can't fill in each blank naturally, the story has a structural gap. The "because of that" chain is the most important part — events should cause each other, not just follow each other.

Write your spine. Then read it out loud. Does each "because of that" feel inevitable? Does the ending feel earned by everything that preceded it?`,
        tools: ['structured-form'],
        outputs: ['Complete story spine — the 7-beat structure'],
        estimatedDuration: '3-5 days',
      },
      {
        id: 'pixar-5',
        name: 'Scene Structure: But/Therefore',
        description: 'Build scenes that always move — forward or into complication.',
        guideText: `Pixar's "but/therefore" rule (popularized by South Park creators Trey Parker and Matt Stone, adopted widely): replace "and then" with "but" or "therefore."

BAD: The hero finds the map, and then they go to the cave, and then they find the treasure.
GOOD: The hero finds the map, BUT it's incomplete, THEREFORE they must find the cartographer, BUT the cartographer is missing, THEREFORE...

Every "and then" is a scene that doesn't need to exist. Every "but" is a complication. Every "therefore" is a consequence. Stories are made of complications and consequences, not events.

Map your major scenes using but/therefore. Remove any scene that's only "and then."`,
        tools: ['beat-sheet'],
        outputs: [
          'Scene map using but/therefore structure',
          'Cut list — scenes that were only "and then"',
        ],
        estimatedDuration: '1-2 weeks',
      },
      {
        id: 'pixar-6',
        name: 'Draft and Story Trust',
        description: 'Write the draft, then seek honest notes from people who want it to succeed.',
        guideText: `Write the draft from your spine and scene map. Pixar's draft process is iterative — they make many, many passes, but each pass is informed by Story Trust feedback.

Apply Story Trust thinking to your own process:
- Who in your life will give you honest notes that come from wanting your work to succeed?
- Schedule a read-through or share the draft with them
- Listen for what confused them, what they felt, what they predicted wrong (in a good way)
- Notes are observations, not mandates — you decide what to do with them

The goal isn't to please the note-givers. It's to use outside eyes to see your own work clearly.`,
        tools: ['free-write', 'checklist'],
        outputs: [
          'Complete draft',
          'Story Trust notes (from readers or self-applied)',
          'Revision priorities',
        ],
        estimatedDuration: '1-6 months',
      },
    ],
  },
}
