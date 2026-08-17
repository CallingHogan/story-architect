import type { CreatorProfile } from '@/lib/types'

export const nolan: CreatorProfile = {
  id: 'nolan',
  name: 'Christopher Nolan',
  knownFor: ['Inception', 'Interstellar', 'The Dark Knight', 'Memento', 'Oppenheimer'],
  tagline: 'Start with the ending. Work backwards. Theme is the spine.',
  approach: `Nolan begins with a concept — usually a philosophical or structural idea — and asks: what is the most emotionally powerful way to explore this idea cinematically? Theme is not something he adds. It is the engine from which everything else is derived.

He is famously backwards in his construction. He knows the ending before he knows the beginning. The entire architecture of the story is designed to make the ending land with maximum emotional impact. Everything in the first act exists to set up what the last act pays off.

Nolan is obsessed with the subjective experience of his audience. He asks: what does the audience know, when do they know it, and how does that shape what they feel? Information asymmetry — the audience knowing something characters don't, or vice versa — is one of his primary tools.

He works in practical terms wherever possible: what can be built, photographed, felt? This bleeds into his storytelling — the ideas are abstract, but they're always grounded in physical, visceral experience.`,
  bestFor: [
    'High-concept narratives with structural ambition',
    'Stories where the audience\'s experience of information is part of the design',
    'Writers who know their ending and want to build backwards',
    'Thematically-driven projects where the idea comes before the plot',
    'Screenplays and narrative games with non-linear structure',
  ],
  projectTypes: ['screenplay', 'novel', 'video-game', 'interactive-fiction'],
  icon: '🎥',
  methodology: {
    startingPoint: 'theme',
    paceStyle: 'slow-deliberate',
    planningStyle: 'plotter',
    keyPrinciples: [
      'Theme first — what is this story genuinely about? Not the plot, the idea.',
      'Know the ending before the beginning — build backwards from the emotional destination',
      'Information architecture — decide what the audience knows and when, deliberately',
      'Structure is an emotional tool, not just an organizational one',
      'Ground abstract ideas in physical, visceral reality',
      'If you can remove the dialogue and still understand the scene, you\'ve succeeded',
      'Every scene earns its place by serving theme, not just plot',
      'Complexity in service of emotional simplicity — the most complex structures should create the clearest feelings',
    ],
    phases: [
      {
        id: 'nolan-1',
        name: 'The Central Idea',
        description: 'Identify the philosophical or experiential idea at the heart of your work.',
        guideText: `Nolan doesn't start with a character or a plot. He starts with an idea — often a question about time, identity, memory, or morality — and asks: what is the most powerful way to explore this through story?

Memento: What would it mean to lose the ability to form new memories? How does identity survive without continuity?
Inception: What is the nature of an idea? How do ideas shape reality and how does reality shape ideas?
Interstellar: What survives the collapse of everything? What is the relationship between love and physics?

Write your central idea. It should be a question or a tension, not an answer. It should feel like something worth two hours of someone's life to explore.`,
        tools: ['free-write'],
        outputs: ['Central idea — the philosophical or experiential question at the heart of the work'],
        estimatedDuration: '3-7 days',
      },
      {
        id: 'nolan-2',
        name: 'The Ending',
        description: 'Write or clearly define the ending before anything else.',
        guideText: `Nolan knows where he's going before he starts building. The ending is not discovered — it's designed.

Your ending has two layers:
1. **Plot ending** — what literally happens in the final scene
2. **Emotional ending** — what the audience feels and understands in the final moment

Write both. Then ask: what does the audience need to have experienced, in what order, for this ending to land with maximum force? The answer to that question is your structure.

Don't worry about how you'll get there yet. Just know where you're going.`,
        tools: ['free-write'],
        outputs: [
          'Plot ending — what literally happens',
          'Emotional ending — what the audience feels',
          'The central image or moment the whole film builds to',
        ],
        estimatedDuration: '3-5 days',
      },
      {
        id: 'nolan-3',
        name: 'Information Architecture',
        description: 'Map what the audience knows, and when they know it.',
        guideText: `This is Nolan's most distinctive tool and one of the least discussed in screenwriting. He designs the audience's *experience of information* as carefully as he designs the plot.

Ask for each major revelation in your story:
- When does the audience learn this?
- What do they think before they learn it?
- How does learning it recolor what came before?
- Does knowing it before the character creates tension, or does the character knowing it before the audience create tension?

Draw a simple timeline: across the top, put story events in chronological order. Below, put the audience's knowledge of those events as they unfold. The gap between the two lines is where Nolan lives.`,
        tools: ['timeline', 'structured-form'],
        outputs: [
          'Information architecture map — what audience knows vs. when',
          'List of major revelations and their designed placement',
        ],
        estimatedDuration: '1-2 weeks',
      },
      {
        id: 'nolan-4',
        name: 'Structural Blueprint',
        description: 'Build the structure backwards from the ending.',
        guideText: `Now build backwards. You have your ending and your information architecture. Working from the end:

- What must happen immediately before the ending to make it land?
- What must the audience know going into the final sequence?
- What is the midpoint — the moment of maximum complication?
- What does the opening need to establish, plant, or promise?

Nolan often works in parallel timelines or nested structures. Ask: does my story benefit from non-linear structure? Sometimes the answer is no — linear is often underrated. But if the idea itself is about time, memory, or perception, structure can be your primary storytelling tool.

Write a structural blueprint: the major beats in the order the audience will experience them.`,
        tools: ['beat-sheet', 'timeline'],
        outputs: [
          'Structural blueprint — major beats in audience-experience order',
          'Note on linear vs. non-linear choice and why',
        ],
        estimatedDuration: '1-2 weeks',
      },
      {
        id: 'nolan-5',
        name: 'The Draft',
        description: 'Write with visual clarity — if you can remove the dialogue, the scene should still work.',
        guideText: `Nolan writes visually. His test for a scene: if you turned off the sound, would the scene still communicate what it needs to communicate? Dialogue should deepen what images establish, not replace them.

As you write each scene, ask:
- What is this scene about thematically, not just plot-wise?
- What does the audience feel at the start vs. the end of this scene?
- Can I cut the dialogue and still tell the story?
- Does every element of this scene — location, time of day, sound, action — serve the theme?

Write with confidence. Nolan's scripts are characteristically spare — they trust the image.`,
        tools: ['free-write'],
        outputs: ['Complete draft'],
        estimatedDuration: '2-6 months',
      },
    ],
  },
}
