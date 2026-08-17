import type { CreatorProfile } from '@/lib/types'

export const miyamoto: CreatorProfile = {
  id: 'miyamoto',
  name: 'Shigeru Miyamoto',
  knownFor: ['Super Mario', 'The Legend of Zelda', 'Donkey Kong', 'Pikmin'],
  tagline: 'Start with the feel. Everything else follows.',
  approach: `Miyamoto designs from physical sensation outward. Before a single mechanic is finalized, he asks: what does it feel like to play this? The answer to that question becomes the north star. Every system, every level, every enemy is evaluated against it. If it doesn't serve the feel, it gets cut — no matter how clever it is.

He draws constantly from real-world observation. Mario's jump came from watching people hop between platforms in everyday life. Pikmin emerged from memory of childhood exploration in the garden. The world is the design library.

Miyamoto builds horizontally before vertically — he wants the core loop to be unmistakably fun before anything is built on top of it. He famously delays rather than ships something that isn't fun yet. "A delayed game is eventually good. A bad game is bad forever."`,
  bestFor: [
    'Mechanic-first games',
    'Games with a strong physical feel',
    'Projects where the core loop is the product',
    'Designers who want to prototype early and cut ruthlessly',
  ],
  projectTypes: ['video-game'],
  icon: '🍄',
  methodology: {
    startingPoint: 'feel',
    paceStyle: 'iterative',
    planningStyle: 'hybrid',
    keyPrinciples: [
      'Define the core feel before designing any mechanic',
      'Prototype early and play it constantly',
      'Cut anything that doesn\'t serve the feel, no matter how clever',
      'Observe real life — the best ideas come from the world around you',
      'The core loop must be fun in isolation before building anything on top',
      'Horizontal first: get the loop right before adding content',
      'Delay before shipping something that isn\'t fun',
    ],
    phases: [
      {
        id: 'miyamoto-1',
        name: 'Define the Feel',
        description: 'Before anything else, nail the physical, emotional sensation of playing your game.',
        guideText: `Miyamoto always started here. Not with a story, not with mechanics — with feel.

Think about the games you love. What does it *feel* like to play them? Super Mario feels bouncy, responsive, joyful. Dark Souls feels weighty, deliberate, tense. Celeste feels precise and kinetic.

Your goal in this phase is to write one paragraph — the "feel statement" — that captures exactly what it will feel like to play your game. Not what happens. Not the story. The sensation.`,
        tools: ['free-write'],
        outputs: ['Core feel statement (1 paragraph)'],
        estimatedDuration: '1-3 days',
      },
      {
        id: 'miyamoto-2',
        name: 'Find the Seed',
        description: 'Identify the single real-world observation or experience your game grows from.',
        guideText: `Miyamoto traced almost every game back to a specific personal experience or observation. Pikmin came from the feeling of being a tiny creature navigating a giant garden. Zelda came from the wonder of exploring caves as a child.

What is the seed of your game? It doesn't have to be profound. It has to be *true* — something you actually felt, saw, or experienced that the game can be built to recreate.

This seed becomes the compass. When you're lost later, you come back here.`,
        tools: ['free-write'],
        outputs: ['The seed — 2-3 sentences describing the real-world origin'],
        estimatedDuration: '1-2 days',
      },
      {
        id: 'miyamoto-3',
        name: 'Prototype the Core Loop',
        description: 'Build the smallest possible playable version of the core mechanic.',
        guideText: `This is where most designers want to jump straight to — but Miyamoto always arrived here after establishing feel and seed. By now you know what you're trying to make the player *feel*, and you know where that feeling came from.

Now: what is the one thing the player does over and over? That's your core loop. In Mario, it's run-jump-land. In Zelda, it's explore-discover-solve.

Your job in this phase is to prototype just that loop — nothing else. No story, no levels, no content. Just the loop, playable. Then play it a hundred times. Is it fun? Does it deliver the feel you defined?

Cut anything that doesn't serve the loop. No matter how clever it is.`,
        tools: ['free-write', 'structured-form'],
        outputs: [
          'Core loop description (the one action the player repeats)',
          'Prototype notes / first build',
          'Play-feel assessment against the feel statement',
        ],
        estimatedDuration: '1-4 weeks',
      },
      {
        id: 'miyamoto-4',
        name: 'Build the World',
        description: 'Design the environment that makes the core loop sing.',
        guideText: `Only now does the world matter. Miyamoto designed worlds as stages for the loop — every environment is an opportunity to express the core mechanic in a new way.

Ask: what configurations of the world make my core loop feel best? What obstacles reveal new dimensions of it? What would make the player feel like they've mastered something?

The world isn't decoration. It's the mechanic expressed spatially.`,
        tools: ['world-builder', 'structured-form'],
        outputs: [
          'World rules and constraints',
          'List of 10+ "moments" the world creates for the player',
          'First area/level design sketch',
        ],
        estimatedDuration: 'Ongoing',
      },
      {
        id: 'miyamoto-5',
        name: 'Characters and Story',
        description: 'Add characters and narrative only in service of the feel.',
        guideText: `For Miyamoto, story and character are packaging — important packaging, but packaging nonetheless. Mario doesn't save Peach because that's a profound narrative. He saves Peach because it gives the player a reason to go left-to-right through increasingly difficult worlds.

Design your characters to serve the feel and the loop. Who makes the player feel the way you want them to feel? What story gives them a reason to keep playing?

This doesn't mean story doesn't matter — it means it's in service of the experience, not the other way around.`,
        tools: ['character-sheet', 'free-write'],
        outputs: [
          'Core character roster with roles',
          'Narrative premise (1-2 sentences)',
          'How each character serves the feel',
        ],
        estimatedDuration: '1-2 weeks',
      },
      {
        id: 'miyamoto-6',
        name: 'Playtest and Cut',
        description: 'Play constantly. Cut ruthlessly. Ship when it\'s fun.',
        guideText: `Miyamoto's studio was famous for iterating until something was unmistakably fun — then cutting everything that diluted it.

Watch people play your game. Not people who will be nice to you. Watch where they get confused, where they get bored, where they get delighted. Trust the delight. Kill the confusion.

"A delayed game is eventually good. A bad game is bad forever." Ship when it's fun, not when it's done.`,
        tools: ['checklist'],
        outputs: [
          'Playtest log',
          'Cut list',
          'Revised feel statement (does the game still deliver it?)',
        ],
        estimatedDuration: 'Ongoing',
      },
    ],
  },
}
