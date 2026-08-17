import type { CreatorProfile } from '@/lib/types'

export const stephenKing: CreatorProfile = {
  id: 'stephen-king',
  name: 'Stephen King',
  knownFor: ['The Shining', 'It', 'The Stand', 'Carrie', 'On Writing'],
  tagline: 'Write fast. Write messy. Trust the story to know where it\'s going.',
  approach: `King writes to discover, not to execute a plan. He describes his process as excavating a fossil — the story is already there, buried, and his job is to uncover it without breaking it. He does not outline. He starts with a situation, puts characters in it, and follows them.

He writes fast and writes every day — 2,000 words minimum, including holidays and birthdays. The first draft is written "with the door closed" — for himself, no audience, no self-criticism. The second draft is written "with the door open" — now it's for the reader.

The "what if" premise is everything. Before King starts a book, he can always articulate the central what-if. What if a woman was trapped in a car with a rabid dog? (Cujo.) What if a writer was held captive by his biggest fan? (Misery.) The premise is simple, human, and immediately generates dramatic pressure.

Character drives plot in King's world, not the reverse. He puts real people (drawn from observation) in impossible situations and watches what they do. The horror comes from the characters, not the monsters.`,
  bestFor: [
    'Writers who freeze when they try to outline',
    'Character-driven stories',
    'Horror, thriller, and dark fiction',
    'Anyone who needs permission to write badly first',
    'Long-form projects that need sustained daily output',
  ],
  projectTypes: ['novel', 'short-story', 'creepypasta'],
  icon: '📖',
  methodology: {
    startingPoint: 'premise',
    paceStyle: 'fast-messy',
    planningStyle: 'pantser',
    keyPrinciples: [
      'The "what if" is everything — one sentence that creates immediate dramatic pressure',
      'Don\'t outline — trust the story to know where it\'s going',
      'Write every day, minimum 2,000 words, no exceptions',
      'First draft: door closed (for you). Second draft: door open (for the reader)',
      'Character drives plot — put real people in impossible situations',
      'The horror is always human — monsters are metaphors',
      'Kill your darlings — if a passage makes you too proud, cut it',
      'Read a lot. Write a lot. There are no shortcuts.',
    ],
    phases: [
      {
        id: 'king-1',
        name: 'The What-If',
        description: 'Find the single "what if" that creates immediate dramatic pressure.',
        guideText: `King starts every book with a what-if. Not a theme, not a character, not a world — a situation.

"What if a woman was trapped with a rabid dog in the summer heat?" "What if a hotel was haunted and drove a writer to madness?" "What if the girl everyone bullied had telekinetic powers?"

Notice what these have in common: they're simple, they're immediately tense, and they put a specific kind of person under specific pressure. There's no ambiguity about whether something is *at stake*.

Write your what-if. One sentence. If you need more than one sentence to explain it, it's not ready yet.`,
        tools: ['logline-builder'],
        outputs: ['The what-if premise — one sentence'],
        estimatedDuration: '1-3 days',
      },
      {
        id: 'king-2',
        name: 'Know Your People',
        description: 'Build your characters from real observation before you write a word.',
        guideText: `King doesn't invent characters. He finds them. He draws from people he's known, observed, overheard — then puts them in the situation.

Before you start writing, you need to know your people. Not their backstory. Not their trauma. Their voice. How do they talk? What do they want, badly? What are they afraid of? What do they think of themselves vs. what's actually true about them?

Write a paragraph about each major character as if you're describing a person you know. Not a character — a person.`,
        tools: ['character-sheet'],
        outputs: [
          'Character sketches for each major character (written as real people, not archetypes)',
        ],
        estimatedDuration: '3-7 days',
      },
      {
        id: 'king-3',
        name: 'First Draft — Door Closed',
        description: 'Write fast, write messy, write for yourself. No editing.',
        guideText: `This is the hardest phase for most writers and the most important for King's method. The first draft is not for the reader. It's for you. It's the raw material — the fossil you're excavating.

King's rules for the first draft:
- Write at least 2,000 words per day
- Do not go back and re-read what you wrote yesterday
- Do not edit as you go
- Do not show it to anyone
- Do not think about whether it's good

Your only job is to get to the end. The end is the most important discovery — you often won't know what your book is actually about until you write the last page.

The first draft is supposed to be bad. Give yourself permission.`,
        tools: ['free-write'],
        outputs: ['Complete first draft — raw, unedited, start to finish'],
        estimatedDuration: '3-6 months (at 2,000 words/day)',
      },
      {
        id: 'king-4',
        name: 'The Drawer',
        description: 'Put the first draft away. Don\'t look at it.',
        guideText: `King puts the first draft in a drawer for at least six weeks before reading it. This is not optional.

The distance is the tool. You need to forget what you intended to write so you can read what you actually wrote. They are different things.

During this time: write something else, read, live. When you come back to the draft, you'll be closer to the reader than to the writer — which is exactly where you need to be for the second draft.`,
        tools: ['checklist'],
        outputs: ['Nothing — this phase is intentional rest'],
        estimatedDuration: '6 weeks minimum',
      },
      {
        id: 'king-5',
        name: 'Second Draft — Door Open',
        description: 'Read it as a reader. Cut what doesn\'t serve the story.',
        guideText: `Now the door is open. You're writing for the reader.

King's formula: Second draft = First draft minus 10%.

Read the whole thing first without editing. Make notes in the margin. Then go back and cut. Look for:
- Adverbs (almost always a sign that the verb is weak)
- Passages you're too proud of ("kill your darlings")
- Scenes that don't move the story forward
- Dialogue that sounds like writing rather than speech
- Anything that slows the reader down without paying them back

The story you discovered in the first draft now becomes the story you're telling deliberately.`,
        tools: ['free-write', 'checklist'],
        outputs: [
          'Second draft — tighter, clearer, 10% shorter',
          'Cut list (what came out and why)',
        ],
        estimatedDuration: '1-3 months',
      },
    ],
  },
}
