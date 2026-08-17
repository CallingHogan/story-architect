# Story Architect — Product Plan

## Vision

Story Architect is a creative companion for novice and amateur creators. It takes a raw idea — a chat log, a voice memo, a napkin sketch — and turns it into a structured path to completion, then walks with you every step of the way.

The creator writes every word. The app handles everything else.

---

## The Problem We're Solving

Most creative projects die not because the creator lacks talent, but because they lack process. They have the idea. They don't know what to do next — not in a vague sense, but concretely: what do I do *today*? What comes after that? How do professional creators actually do this?

Existing tools (Notion, Scrivener, Google Docs) give you a blank canvas. Story Architect gives you a methodology.

---

## Core Principles

1. **Next step, always.** The user never stares at a blank page. The app always knows what comes next.
2. **The creator owns the work.** Every word, every idea comes from the user. The app is the process, not the pen.
3. **"AI" does not appear anywhere in the app.** Not in the UI, not in copy, not in onboarding. This is a calculated product decision, not a technical one. Most people don't know what AI actually is — they know there's a cultural panic about it. The word is a distraction. The product is about creative process. Smart tools are just how it works, same as any modern software. This may relax over time; the architecture should support that without requiring a redesign.
4. **Process from the masters.** Creator profiles are built from documented, researched methodologies of accomplished creators. Users run on proven rails, not made-up frameworks.
5. **Meet the creator where they are.** A messy brain dump is a valid starting point. The app meets you there.
6. **Long haul durability.** Creative projects take months or years. Data is ironclad — cloud-persisted with on-device backup. Every artifact the user creates is stored and exportable. The app has to be something they trust their life's work to.

---

## How It Works — The User Journey

The entire onboarding flow is a single continuous view. The user never navigates away — each step flows into the next like a stylish, opinionated wizard. No blank pages. No "set up your workspace first."

### Step 1: What Are You Making?
Landing screen: **"What would you like to create?"**

Primary options (large, prominent):
- Video Game
- Screenplay / Script
- Novel
- Short Story
- Comic / Graphic Novel
- Album / EP

Secondary (collapsed "More" button):
- Visual Novel
- Tabletop RPG
- Creepypasta / Short Horror
- Podcast
- Narrative Podcast
- Interactive Fiction
- Other (open field)

### Step 2: Narrow It Down
A series of clean follow-up menus based on the selection. Each screen asks one thing:
- Genre ("What kind of video game?")
- Scope ("Is this a solo project or do you have collaborators?")
- Tone ("Serious, lighthearted, horror, literary...?")
- Length/ambition ("Short demo, full release, quick jam project?")

Each answer feeds the system's understanding of what kind of guidance to give.

### Step 3: Creator Template (Optional)
Screen: **"Want to follow a proven creative process?"**

The system surfaces ~4 best-matched creator templates based on what they're making and how they described it. Each card shows:
- Creator name
- One-line description of their approach
- A "best for" tag ("Best for: world-first, lore-heavy projects")

Below the 4 cards: **"Browse all templates →"** opens a full library.

The user can skip this entirely. If they do, the system uses a generalized methodology for their project type.

**Legal note:** Creator templates are derived from publicly documented creative processes — interviews, books, lectures, behind-the-scenes material. Methodologies and processes are not copyrightable. The product does not imply creator endorsement. Names are used in a factual, educational context (the same way design books reference "the Eames approach" or film schools teach "the Kubrick method"). No creator likeness or trademarked branding is used.

### Step 4: Idea Intake
The user drops in raw material — a chat log, a voice note transcript, bullet points, a rambling paragraph. No format required. If they have nothing yet, they can answer a short series of questions instead.

The system:
- Parses the input
- Extracts core vision, characters, themes, world, goals
- Surfaces what it found ("Here's what I understood — correct me if I'm wrong")
- Asks a small number of targeted follow-up questions to fill critical gaps

### Step 5: Roadmap
The system generates a large-scale roadmap — the big stages between now and done, based on the chosen methodology and project type. The user sees the whole mountain before they start climbing.

From here, they're in the workspace.

### The Companion (Day-to-Day)
The user is always in a specific stage. Within that stage, the app:
- Surfaces the current task ("Write a one-paragraph description of your core game feel")
- Provides context ("Here's how Miyamoto described the genesis of Super Mario's feel")
- Offers built-in tools relevant to the task (templates, exercises, reference docs, examples)
- Tracks progress and surfaces what's missing
- Moves them to the next task when done

This is not a chatbot. It's a structured workspace that knows where you are.

### Phase 5: Knowledge Compilation
As the user works, the system:
- Maintains a living document of everything they've created (characters, lore, rules, decisions)
- Identifies contradictions and gaps
- Surfaces relevant prior decisions when working on something new ("You said in Week 2 that the protagonist's father was dead — this scene assumes otherwise")
- Builds a searchable knowledge base of the project

---

## Creator Profiles (V1 Candidates)

Each profile is a researched, structured representation of how a real creator approaches their craft. These are not vibes — they're process models.

**Game Design**
- Shigeru Miyamoto — feel-first, prototype early, cut until fun
- Sid Meier — one more turn design, player agency as north star
- Hideo Kojima — cinematic narrative-driven, theme before mechanics

**Novel / Fiction**
- Stephen King — write fast, write messy, edit ruthlessly (pantser)
- Brandon Sanderson — hard magic systems, structural outlining (plotter)
- George R.R. Martin — Gardener vs Architect, world-first, character-led

**Screenplay**
- Christopher Nolan — start with the ending, work backwards, non-linear structure
- Pixar — 22 rules of storytelling, "yes and but therefore" scene structure
- Aaron Sorkin — theme as spine, dialogue as argument

**World-building**
- J.R.R. Tolkien — language-first, mythology-first, world before story
- Brandon Sanderson — Sanderson's Laws of Magic, internal consistency as trust

---

## AI Engagement Tiers

### Default (Free) — Smart Tool
AI powers the app the same way smart tools power Photoshop. The user doesn't need to think about it, acknowledge it, or feel a way about it. It's just how the app works.

What it does:
- Parses raw idea input into structured project state
- Generates roadmap and step recommendations based on chosen methodology
- Compiles and cross-references project knowledge as the user works
- Identifies gaps and contradictions in the background
- Surfaces creator profile guidance framed as the methodology ("Miyamoto always started here"), not as AI output

What the user sees: their workspace, their tasks, their tools. Nothing that says "AI."

**Note on timing:** The current cultural moment has labeled AI as "anti-artist." That will shift. The product should be designed so AI can be surfaced more explicitly as that sentiment evolves — no architectural debt from hiding it, just a deliberate choice not to lead with it.

### Paid Tier — Direct Assistance
For users who want more active collaboration and are comfortable with it:
- Conversational help on specific creative problems ("Why isn't this scene working?")
- More aggressive gap identification with explicit reasoning
- AI-generated options for the user to react to and modify (never wholesale use)
- Deeper analysis of their work against the chosen methodology

Framing: "more horsepower," not "AI writing your stuff." The creator still decides everything.

---

## Technical Architecture

### Frontend (Vercel / Next.js)
- Workspace UI — the primary creative environment
- Project dashboard — roadmap view, stage progress
- Tool library — templates, exercises, reference docs
- Knowledge base viewer — compiled project state

### Backend (GCP)
- **Cloud Run** — API layer, AI orchestration, document processing
- **Firestore** — project data, user profiles, creator methodology definitions
- **Cloud Tasks** — async processing (idea parsing, knowledge compilation, gap detection)
- **Cloud Storage** — raw uploads, generated documents, project exports
- **Vertex AI / Anthropic API** — the actual AI layer

### Auth
- Firebase Auth (Google sign-in to start)

---

## V1 Scope — Colin's Game

V1 is not a product. V1 is a proof of the loop, built around one real project: Colin's game.

**What V1 must do:**
1. Accept a raw idea dump (the Claude chat log about the game)
2. Parse it and produce a structured project overview
3. Ask the right follow-up questions to fill gaps
4. Generate a methodology-based roadmap (Miyamoto or equivalent)
5. Present Stage 1 with a concrete first task and the tools to complete it
6. Persist work and track progress

**What V1 explicitly does not need:**
- Multiple users
- Auth (or just basic Google auth)
- Payment / tier system
- Multiple creator profiles (start with 1-2 for games)
- Mobile optimization
- Polish

**V1 Done:** Colin has used Story Architect to get through the first major stage of his game's development and knows exactly what comes next.

---

## Build Order

1. **Data model** — Project, Stage, Task, CreatorProfile, KnowledgeEntry (Firestore schema)
2. **Idea intake** — Upload/paste raw idea → AI parsing → structured ProjectSummary
3. **Roadmap generation** — ProjectSummary + CreatorProfile → Stage list
4. **Workspace** — Stage view, current task, built-in tool, mark complete
5. **Knowledge base** — As user completes tasks, system compiles entries
6. **Gap detection** — Background job identifies missing/contradictory info
7. **Second creator profile** — Expand beyond Miyamoto

---

## Design Philosophy — The World Arrives

Story Architect has one core visual idea that no other tool has: **the UI becomes the creative world you're entering.**

The app opens on a clean, neutral background — white or near-white, minimal, no preconceptions. As the user selects their project type, the world arrives. Not an instant theme swap — a gradual transformation. Background texture bleeds in. Typography shifts. Accent color warms or cools. By the time they reach the creator profile screen, they're already inside the environment that mirrors what they're making.

The structural skeleton — roadmap, tasks, tools, knowledge base — is identical across all project types. The visual skin is completely different. Same bones, different world.

### Theme Directions by Project Type

| Type | Visual World |
|---|---|
| Novel / Fiction | Aged parchment, ink texture, candlelight warmth, serif-heavy |
| Horror / Creepypasta | Dark paper, unsettling grain, cool desaturated palette, typewriter font |
| Screenplay / Script | Soundstage black, Hollywood lighting rigs, spot-lit workspace, film noir |
| Coding Project | Terminal green on near-black, scanlines, monospace, matrix-adjacent |
| Game Design | Adapts to genre — pixel grid, blueprint lines, or dark cinematic |
| Comic / Graphic Novel | Halftone dots, bold ink outlines, primary color pops |
| Album / EP | Dark studio booth, mixing board textures, waveform motifs |

### Implementation Notes
- All themes share the same design token structure — colors, type, spacing are all CSS custom properties that the theme overrides
- The transition on project type selection is a deliberate, cinematic moment — not an instant swap
- Creator profiles can add a secondary layer of flavor on top of the project type theme
- Genre sub-selections (horror vs literary fiction, for example) can shift the theme further
- This is a long-term build — V1 can ship with 2-3 themes fully realized and stubs for the rest

### Why This Matters
This is not a feature. It's the product identity. Every other creative tool is a blank canvas or a generic workspace. Story Architect is an environment. The tool reflects the creator's world back at them before they've written a word. That's rare. That's memorable. That's what makes creatives — who are highly sensitive to aesthetics — trust the product.

---

## What Makes This Different

| Tool | What it does | What it lacks |
|---|---|---|
| Notion | Blank canvas, flexible | No process, no guidance |
| Scrivener | Writing-focused structure | Writing only, no methodology |
| ChatGPT | Answers questions | No persistent project context, AI-forward |
| MasterClass | Teaches craft | Passive, no active guidance on your work |
| Story Architect | Walks with you through your specific project using proven methodology | — |

The gap is active, project-specific, methodology-driven guidance. Nobody does this.

---

## Extension: Coding Projects

Software is a creative project too. For users building apps, games, or tools, Story Architect can extend into the development phase:

- **Setup guide:** Walk the user through installing Claude Code (the local AI coding tool) step by step
- **Custom CLAUDE.md generation:** Based on everything captured in the project — tech stack, decisions, tone, scope, collaborators — Story Architect generates a tailored `CLAUDE.md` file that gives the coding assistant full context on the project and how to work on it
- **Handoff artifact:** At the end of the creative/planning phase, the user gets a ready-to-use development context file, not a blank repo

This is a natural extension for game developers and app builders. The planning and the building become one continuous arc rather than a context switch. The CLAUDE.md becomes a living artifact that Story Architect updates as the project evolves.
