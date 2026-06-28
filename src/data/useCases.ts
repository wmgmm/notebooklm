// AUTO-PORTED from notebooklm.html prompts array. Prompt bodies are byte-identical.
// Order = workflow journey: Summary, Analysis, Content, Learning, Style, Podcast.

export type Category =
  | "Summary"
  | "Analysis"
  | "Content"
  | "Learning"
  | "Style"
  | "Podcast";

export interface UseCase {
  id: number;
  cat: Category;
  title: string;
  desc: string;
  prompt: string;
  /** Welsh-language prompt; surfaced by the Cymraeg cross-filter. */
  welsh?: boolean;
  /** Meant for the NotebookLM Studio "revise" (pencil) panel. */
  studioRevise?: boolean;
}

export const useCases: UseCase[] = [
  {
    id: 3,
    cat: "Summary",
    title: "Brief a Busy CEO",
    desc: "High-level executive summary. No filler, just problems, solutions, and actions.",
    prompt: "You are briefing a busy CEO. Do not use filler or banter. Go straight to the bottom line:\n\n- What is the core problem?\n- What is the proposed solution?\n- What are the financial/operational implications?\n- List 3 immediate action items clearly.\n\nKeep the tone professional, crisp, and urgent.",
  },
  {
    id: 6,
    cat: "Summary",
    title: "Meeting Notes to Action Items",
    desc: "Convert transcriptions into action items, key decisions, and owners.",
    prompt: "Based on these meeting transcripts, provide:\n\n- Meeting Summary: (2 to 3 sentences)\n- Key Decisions: (Who decided what?)\n- Action Items Table: Columns for Task, Owner, Deadline, and Priority.\n- Open Questions: List any issues deferred to future meetings or left unresolved.",
  },
  {
    id: 25,
    cat: "Summary",
    title: "Five-Minute Audio Briefing",
    desc: "A serious five-minute spoken briefing: decisions, recommendations, risks and next steps.",
    prompt: "Format: Brief. Length: Shorter.\nCreate a 5-minute executive briefing for [AUDIENCE].\nFocus on: the key decisions to make; the top 3 recommendations from the sources; the risks identified; the next steps.\nSkip: technical implementation details, history, and context the audience already knows.",
  },
  {
    id: 22,
    cat: "Summary",
    title: "Decision-Maker Video Briefing",
    desc: "A bottom-line-first briefing video that opens with the recommendation and shows the impact. Built for decision-makers.",
    prompt: "Video style (paste in the style field):\nInfographic style, Swiss design aesthetic, professional colour palette with navy and gold accents, clean grid layout, minimal decoration. Show metrics and KPIs as dashboard panels with trend indicators.\n\nFocus (paste in the focus field):\nTarget audience: [ROLE] making decisions about [TOPIC/INITIATIVE]\nFocus on: lead with the bottom line (recommendation or key insight); quantify impact with metrics and KPIs; frame information in terms of business outcomes; surface risks and mitigation strategies; provide clear decision points or next steps.\nSkip: technical implementation details; methodology explanations; granular data breakdowns; caveats that don't affect the decision.\nTone: direct, confident, action-oriented.",
  },
  {
    id: 24,
    cat: "Summary",
    title: "Key-Numbers Infographic",
    desc: "A minimalist infographic built around one big number, with a few supporting stats. Best for reports and dashboards.",
    prompt: "Swiss Minimalist infographic, strict grid alignment, high-contrast layout. Navy blue primary with gold accent for key metrics, off-white background. Hero statistic prominently displayed with supporting data points. Clean sans-serif typography, professional executive aesthetic. Minimal decoration, the data speaks for itself.",
  },
  {
    id: 2,
    cat: "Analysis",
    title: "Find Contradictions Across Sources",
    desc: "Identify conflicting data, disagreements, and red flags between sources.",
    prompt: "Looking only at the sources in this notebook, identify:\n\n1. Any areas where the sources disagree with each other.\n2. Direct contradictions in data or conflicting claims.\n3. Differences in perspective or methodology that lead to different conclusions.\n\nQuote the specific claims from each side with citations.",
  },
  {
    id: 11,
    cat: "Analysis",
    title: "Find Gaps and Blind Spots",
    desc: "Find the blind spots: what your sources fail to address, and the context they leave out.",
    prompt: "Do not summarise what is in these documents. Instead, analyse them to identify the 'White Space' or missing information. What obvious questions are left unanswered? What opposing viewpoints or variables are completely ignored? List 5 specific blind spots, limitations, or gaps in the provided research, and explain why their absence matters.",
  },
  {
    id: 42,
    cat: "Analysis",
    title: "Module Gap Analysis",
    desc: "Upload the module handbook and the student feedback report to find the biggest gaps between what a module intends and what students actually experienced.",
    prompt: "The [module handbook] sets out the learning outcomes and assessment criteria. The [student feedback report] shows how students actually performed and what they found difficult. Where are the biggest gaps between what the module intends and what students experienced? Cite specific sections from both documents.",
  },
  {
    id: 7,
    cat: "Analysis",
    title: "Debate Both Sides of an Issue",
    desc: "Argue both sides of the key issue in your sources to expose weak spots in the reasoning.",
    prompt: "Step 1: Analyse the uploaded sources to identify the single most contentious, complex, or critical topic present. State this topic clearly as the debate title.\n\nStep 2: Structure a debate between two perspectives on this topic:\n\n- Proponent (The Optimist): Argues for the primary thesis using the strongest data points from the sources.\n- The Devil's Advocate (The Sceptic): Challenges the assumptions, points out missing variables, and highlights risks or weak evidence.\n\nCite specific documents for every claim. Conclude with a verdict: Which side has better evidence in the text?",
  },
  {
    id: 5,
    cat: "Analysis",
    title: "Competitor Comparison and SWOT",
    desc: "Create a SWOT analysis and feature comparison table from competitor reports.",
    prompt: "Analyse the uploaded competitor reports and data. Create a comparative table that maps:\n\n- Feature/service offering\n- Pricing strategy (if mentioned)\n- Self-identified strengths vs. external weaknesses\n- Market gaps where our project could differentiate.\n\nFollow the table with a SWOT analysis based strictly on source evidence.",
  },
  {
    id: 9,
    cat: "Analysis",
    title: "Spot Long-Term Trends",
    desc: "Surface long-term patterns, outliers and early warning signs across your sources.",
    prompt: "Identify the 'Macro Trends' across these documents:\n\n- What is changing over time?\n- What are the recurring patterns of success or failure?\n- Identify 'Anomalies': What breaks the pattern or seems unexpected?\n- Suggest 3 'Predictive Indicators' we should watch based on these patterns.",
  },
  {
    id: 28,
    cat: "Analysis",
    title: "Check a Draft Against Your Guidelines",
    desc: "Check a draft against your own uploaded rules (a style guide, policy or best-practice doc). Flags breaches with the rule quoted, plus fixes. Example: paste a draft against your team's style guide.",
    prompt: "You are a quality reviewer. Check my draft against the best-practice, style or policy documents I have uploaded.\n\nWhat to review: [PASTE YOUR DRAFT, OR NAME THE UPLOADED DOCUMENT]\nType of work: [e.g. a report, a piece of code, a policy, marketing copy]\n\nCompare it against the uploaded guidelines and flag:\n1. Rule or style violations (cite the guideline section)\n2. Places it falls short of what the guidelines recommend\n3. Risks or compliance concerns (quote the relevant guidance)\n4. Missing elements the guidelines call for but the draft lacks\n5. Specific fixes, with a before/after where it helps\n\nFor each issue use this format: \"[Source, section X] recommends: '[quote]' -> In your draft: [problem] -> Fix: [solution]\"",
  },
  {
    id: 26,
    cat: "Analysis",
    title: "Rank and Prune Your Sources",
    desc: "Score each source on recency, authority, depth and relevance, with a KEEP, MAYBE or REMOVE call. A good first step before deeper work.",
    prompt: "Analyse all the sources and rank them by:\n1. Recency (publication date)\n2. Authority (source type: official docs, then tutorials, then blog posts, then forums)\n3. Depth (surface overview vs deep detail)\n4. Relevance to [MY SPECIFIC USE CASE]\n\nFor each source give: a relevance score (1-10); its key unique contribution; its overlap with other sources; and a recommendation of KEEP, MAYBE or REMOVE.",
  },
  {
    id: 20,
    cat: "Analysis",
    title: "Disillusionment Filter",
    desc: "Stress-test a hyped tool or method: the promises, the blind spots, where it breaks, and what holds up. Example: compare a product's own documentation against best practice.",
    prompt: "You are a senior consultant in [DOMAIN] who first adopted [APPROACH/TOOL] with enthusiasm, then changed your mind after real field experience.\n\nAnalyse the sources through this disillusionment filter.\n\nPhase 1: Initial Enthusiasm\nWhat makes [APPROACH] attractive on paper? Give 3 appealing promises, each citing a source.\nFormat: \"[Source] promises: '[quote]'\"\n\nPhase 2: Field Reality\nWhat is missing or downplayed in the sources? Identify 3 blind spots.\nFormat: \"[Source] states '[quote]' but doesn't mention [potential problem]\"\n\nPhase 3: Breaking Point\nWhich single element is most likely to cause disillusionment? Name the trigger factor and cite the textual evidence that already contains the seeds of the problem.\n\nPhase 4: What Remains Valid\nDespite the disillusionment, what deserves to be kept? Give 1-2 robust elements with justification.\n\nPresent Phases 1 to 4 as a table with columns: Phase | Element | Source Citation | Analysis.\n\nEnd with a Final Verdict: Adopt with caution, Avoid, or Adapt for a specific context.",
  },
  {
    id: 13,
    cat: "Content",
    title: "Write a Standard Operating Procedure",
    desc: "Turn messy process docs or call transcripts into a clean Standard Operating Procedure.",
    prompt: "Transform the provided transcripts and notes into a formal Standard Operating Procedure (SOP). Structure it as follows:\n\n1. Purpose of the procedure.\n2. Prerequisites and tools needed.\n3. Step-by-step instructions (numbered, starting with active verbs).\n4. Troubleshooting (If X happens, do Y).\n\nUse clear formatting for readability.",
  },
  {
    id: 10,
    cat: "Content",
    title: "Repurpose into Posts and FAQs",
    desc: "Turn research into LinkedIn posts, FAQs and short newsletter copy.",
    prompt: "Transform the core insights of these sources into the following formats (uk spelling, no em-dashes):\n\n1. A 5-post LinkedIn thread (educational and hook-driven).\n2. A 'Frequently Asked Questions' (FAQ) section for a website.\n3. A catchy headline for a blog post.\n4. A 100-word newsletter blurb.",
  },
  {
    id: 23,
    cat: "Content",
    title: "One-Page Infographic from Your Sources",
    desc: "A clean one-page infographic: what it is, how it works, and the result. Example: turn a process or policy into one shareable graphic.",
    prompt: "Flat design illustration, Kurzgesagt-style, soft pastel colours with warm accents. Simplified rounded shapes, friendly icons, clean visual flow. Use minimal text, rely on numbered steps and visual metaphors. Structure as a top-to-bottom progression: concept, then mechanism, then outcome.",
  },
  {
    id: 8,
    cat: "Content",
    title: "Day-in-the-Life Story",
    desc: "Turn dry data or specs into a 'day in the life' story so readers see the real-world impact.",
    prompt: "Based on the technical data and facts in these sources, write a 'Day in the Life' story of [INSERT USER/CUSTOMER TYPE] in the year [INSERT YEAR e.g. 2030].\n\nThe story must demonstrate how the technologies and concepts in the sources solve their specific problems.\nUse footnotes to link story elements back to specific source data.",
  },
  {
    id: 4,
    cat: "Learning",
    title: "Explain It Simply",
    desc: "Simplify complex technical jargon into analogies a 12-year-old would understand.",
    prompt: "Explain the most complex concepts in these sources using the Feynman Technique:\n\n- Explain them in simple terms a 12-year-old would understand.\n- Use a real-world analogy or metaphor for each.\n- Identify the 'knowledge gaps': concepts mentioned but not fully explained in the sources.\n- Create a 3-term vocabulary list for difficult jargon.",
  },
  {
    id: 12,
    cat: "Learning",
    title: "Quiz Me on My Sources",
    desc: "Turn NotebookLM into a tutor that interactively quizzes your knowledge.",
    prompt: "Act as a strict but encouraging Socratic tutor. Based on the uploaded sources, ask me a single, challenging, open-ended question to test my comprehension. Wait for my answer. After I answer, grade my response from 1 to 10, correct any misconceptions using citations from the text, and then ask the next question.",
  },
  {
    id: 19,
    cat: "Learning",
    title: "Active Learning Session Planner",
    desc: "Turn a dense source into a focused study session: questions, an exercise, a mini-project and self-checks. Example: upload a book chapter, then set your topic, time and energy.",
    prompt: "You are a cognitive science expert specialising in active learning techniques.\n\nDesign a focused learning session from my uploaded materials based on my goals:\n\nToday's focus: [SPECIFIC TOPIC FROM YOUR SOURCES]\nAvailable time: [30 MIN / 1 HOUR / 2 HOURS]\nEnergy level: [HIGH / MEDIUM / LOW]\nLearning goal: [WHAT I WANT TO BE ABLE TO DO]\n\nCreate a learning session plan that includes:\n- 3 specific questions to answer from my sources\n- One hands-on exercise to test understanding\n- One mini-project to apply the concept\n- Key points to extract and summarise\n- Self-assessment questions to gauge comprehension\n- Connection points to previous learning",
  },
  {
    id: 27,
    cat: "Learning",
    title: "Map How the Ideas Connect",
    desc: "Build a mind map across your sources: how ideas connect, what to learn first, common misconceptions and examples.",
    prompt: "You are a learning strategist who helps people see the big picture. Using my uploaded sources, help me understand how the concepts connect.\n\nCore concept I'm focusing on: [MAIN TOPIC]\nWhat I'm working on: [PROJECT OR GOAL]\n\nCreate:\n- a mind map of related concepts and how they relate\n- examples of how the concept applies in different contexts\n- prerequisites I should understand first\n- advanced applications to explore later\n- common misconceptions to avoid\n- real-world examples that demonstrate the concept\n\nShow me the conceptual landscape, not just isolated facts.",
  },
  {
    id: 21,
    cat: "Learning",
    title: "Explainer Video for Non-Experts",
    desc: "A jargon-free animated explainer video that answers 'what is this and why does it matter' for newcomers. Example: turn a dense report into a clear intro video.",
    prompt: "Video style (paste in the style field):\nFlat design illustration, Kurzgesagt-style, vibrant saturated colours, simplified shapes, smooth animations, playful but professional. Represent concepts as building blocks being assembled step by step.\n\nFocus (paste in the focus field):\nTarget audience: [AUDIENCE] unfamiliar with [CONCEPT/DOMAIN]\nFocus on: start with a relatable analogy or real-world example; build understanding progressively (simple to nuanced); use visual metaphors the audience can picture; connect abstract ideas to everyday experiences; reinforce key takeaways with repetition.\nSkip: jargon without explanation; mathematical formulas or technical notation; exhaustive accuracy (favour clarity over completeness); caveats and edge cases.\nTone: engaging, curious, conversational.",
  },
  {
    id: 14,
    cat: "Style",
    title: "Premium Slide Design Style",
    desc: "A detailed, premium Apple-style design spec for polished slide decks.",
    prompt: "# slide deck notebooklm prompt presentation_design_spec_premium_mockup\n# Style: Premium Mockup / Modern UI / Clean Tech\n\nGlobal Design Settings:\n  Tone: 'High-quality, advanced, clean, refined, professional'\n\nColour Palette:\n  Background:\n    - '#FFFFFF (pure white)'\n    - '#F5F5F7 (very light grey, studio-like)'\n    - '#000000 (jet black, switching by slide)'\n  Accent Colours:\n    - '#8D59E9 (Electric Purple)'\n    - '#EBE021 (Acid Yellow)'\n\nVisual Identity:\n  Devices: 'High-quality 3D mockups of Apple products (Studio Display, MacBook Pro, iPad, iPhone)'\n\nTypography:\n  Headings: 'Blocky sans serif type with a large jump ratio.'\n  Body: 'Thin grey gothic font.'\n\nLayout Variations:\n  - Hero Display: Centre device with black-background UI and ultra-bold white title.\n  - Floating Mobile: Float an iPhone mockup in mid-air with blurred accent lighting.\n  - Grid Interface: Inside MacBook screen, arrange colourful UI cards in a clean grid.\n  - Dark Mode: Device screen in dark mode with white and Acid Yellow emphasis.\n  - Split Screen: Half device mockup left, large typography right.\n  - Big Typography: Black background with massive white ultra-bold text.\n\nDesign Rules:\n  - High resolution mockup images only.\n  - Realistic screen reflections for premium feel.\n  - Device UI follows spacious, minimal layout.\n  - Studio lighting with soft shadows under devices.",
    studioRevise: true,
  },
  {
    id: 1,
    cat: "Style",
    title: "Slide Deck Outline",
    desc: "Turn your notebook into a structured, slide-by-slide deck outline. Fill in the [INSERT ...] placeholders as you go.",
    prompt: "Generate a 10-slide presentation outline based on these sources. For every slide, strictly follow this format:\n\n1. Slide [N]: [INSERT SUGGESTED TITLE]\n2. Purpose: [INSERT PURPOSE e.g., Contextualising the problem, presenting key data]\n3. Visual Content: Describe what charts, diagrams, or imagery should appear.\n4. Body Copy: Max 3 high-impact bullet points.\n5. Speaker Notes: A 1-paragraph script explaining the 'so what?'\n6. Source Citations: State which document supports this slide.",
    studioRevise: true,
  },
  {
    id: 16,
    cat: "Style",
    title: "Comic-Strip Slide Deck",
    desc: "Turn complex information into a comic-style story: memorable, visual and fun.",
    prompt: "Transform the key ideas from these sources into a comic-strip style slide deck narrative.\n\nFor each of 6 slides, produce:\n1. Scene: Describe a simple illustration or panel (characters, setting, action).\n2. Dialogue/Caption: Max 2 speech bubbles or caption lines; keep language playful and clear.\n3. The Point: One sentence explaining the real-world idea the scene represents.\n4. Personal Hook: A prompt for the audience to relate it to their own situation (e.g., 'When have you felt this?').\n\nTone: Warm, witty, and accessible, like a good infographic brought to life.\nGoal: The audience should remember the idea because they felt something, not just read something.",
    studioRevise: true,
  },
  {
    id: 29,
    cat: "Style",
    title: "Cardiff University Slide Design",
    desc: "Turns dense material (policy, paper, report, transcript) into Cardiff-branded slides anyone can follow: plain language first, then the University design system.",
    prompt: "ROLE\nYou write and design Cardiff University slides from specialist source material\n(policy docs, papers, reports, transcripts) so a reader with no background follows\nin one pass. Do two jobs in order: rewrite into plain language, then apply the\ndesign system.\n\nSTEP ONE: REWRITE\n- Lead with real-world significance: why it matters before any detail.\n- Remove jargon; explain any term that must stay in a half-line.\n- Short sentences, one idea each. Active voice. No hedging.\n- One message per slide, carried by the heading.\n\nSTEP TWO: DESIGN\n\nPhilosophy\nEach slide is one frame that lands in three seconds. Headlines are graphic objects,\nnot sentences. The size jump between heading and body builds the hierarchy. Negative\nspace is tension: anchor the punchline to one edge or isolate it. Three-word heading\nbeats six. Subtitles provoke, not describe. Cardiff Red is a blade, not a blanket:\none red block in black and white beats red everywhere. Drop any image that adds no\nmeaning and let type carry the slide.\n\nColours (these only)\nWhite #FFFFFF background; light grey #D9D9D9 alternate; Cardiff Red #E4251B for\naccents, dividers, bullets, section titles, Welsh text; black #000000 primary text;\nwhite text on red; mid grey #CCCCCC borders. No blues, greens, yellows, gradients,\ntransparency.\n\nFonts\nTitles Franklin Gothic Demi. Serif subtitles/dividers Georgia (or Darby Serif Text\nRegular). Body Franklin Gothic Book. Labels Marr Sans. Titles Demi, body Book.\n\nSizes\nCover 120pt. Dividers 160-240pt. Headings 72-92pt. Body/bullets 32-48pt. Supporting\n50pt. Closing bilingual 100-160pt. Heading-to-body ratio 2:1 to 3:1; never shrink a\nheading to fit text.\n\nBullets\nSolid round bullet, Cardiff Red #E5251A at 130% of text size, black Franklin Gothic\nBook text. No numbers, dashes, or icons.\n\nLogo\nBilingual Cardiff University / Prifysgol Caerdydd logo on title and closing slides\nonly, top-left or centre-left. Never resize or recolour. None on content slides.\n\nLayouts\n1. Logo only: white background, centred logo.\n2. Holding image: full-bleed Cardiff architecture photo, logo lower-left, no text.\n3. Image with red block: right 60% photo, left white, red block behind white title\n   upper-left, logo top-left outside the block.\n4. Text only: white background, large black Demi title upper-left, Georgia subtitle\n   below, right side negative space.\n5. Full-width text: title spans right two-thirds, supporting text below.\n6. Left image with red bar: left 40-50% photo, right white title, red bar between.\n\nRules\nOne message per slide. Left-align; centre only on dividers and closers. Cardiff Red\nnever as body text. Bilingual Welsh-first on dividers and closers. Cardiff\narchitecture photography only, no stock. No shadows, gradients, icons, emoji,\nillustrations, or decorative lines.\n\nDEVIATIONS\nHold to this by default. Break a rule only when it makes the message land harder.\nKeep three things intact: the palette, Welsh-first on dividers and closers, and one\nmessage per slide.",
    studioRevise: true,
  },
  {
    id: 30,
    cat: "Style",
    title: "Matts Witty Slide Deck",
    desc: "A witty, highly visual slide outline in the Matts style: minimal text, one idea per slide, jokes that land the point. Plain language first, then four layout options and a bold takeaway per slide.",
    prompt: "ROLE\nYou are an expert instructional designer building presentations in the Matts style:\nhighly visual, engaging, witty, minimal text. The work centres on practical learning,\npsychological safety in tech, and empowering the user. Generate a slide-by-slide\noutline for the topic below.\n\nYou do two jobs in order. Rewrite the content into plain language first. Style it into\nthe slide layouts second.\n\nSTEP ONE: CLARITY PASS\n- Lead with why it matters before any mechanism or detail.\n- Strip jargon; explain any term that has to stay in a half-line.\n- Short sentences, one idea each. Active voice. No hedging.\n- One message per slide, carried by the title. Wit serves the message, never buries it.\n\nSTEP TWO: BUILD THE SLIDES\nFor each slide, give four parts under these strict rules:\n\n1. TITLE: short, punchy, ALL CAPS.\n\n2. LAYOUT STYLE (pick one):\n   - The Comparison: stark Bad vs Good or Before vs After, split by a \"VERSUS\",\n     simple text and expressive emojis (😑 vs 😊).\n   - The Metaphor: one strong playful graphic (IKEA manual, lab coat, friendly robot)\n     with a short memorable quote or rule.\n   - The Task: a practical exercise slide with a \"TASK\" badge, an actionable prompt\n     formula (e.g. \"Explain [TOPIC]...\"), and a cartoon of people learning.\n   - The Rule of Three: a summary slide, three columns. Each column has a simple\n     graphic, an icon, a bold subtitle, and two sentences maximum.\n\n3. VISUAL PROMPT: a brief description of the image or icons. Keep it cartoonish,\n   friendly, approachable.\n\n4. FOOTER: one bold takeaway sentence, or a link to an exercise, at the very bottom.\n\nTONE\nFunny and warm, never snarky. The joke lands the point; it does not replace it. If a\ngag and the lesson compete, the lesson wins and the gag goes.\n\nTOPIC\nEngaging, witty AI in the workplace.",
    studioRevise: true,
  },
  {
    id: 31,
    cat: "Style",
    title: "Anti-Gravity Slide Deck",
    desc: "A calm, premium look: white canvas, soft blue-to-violet gradients, thin-line icons, one idea per slide.",
    prompt: "ROLE\nYou design a premium, minimal slide deck from specialist source material so it\nfeels less like a slide deck and more like a calm, confident product interface.\nDo two jobs in order: rewrite the content into plain language, then apply the\nvisual system.\n\nSTEP ONE: CLARITY PASS\nYou are an expert communicator who rewrites specialist text for a general\naudience. Take my sources, a policy document, a research paper, a report or a\nmeeting transcript, and rewrite them so a reader with no background understands\nin one reading. Remove or briefly explain all jargon. Shorten sentences. Put the\nreal-world significance first. Cut hedging and the passive voice. One message per\nslide, carried by the headline.\n\nSTEP TWO: THE ANTI-GRAVITY SYSTEM\n\nCore idea\nThis is a living artifact, not a pile of bullet points. It should feel calm,\nmodern, precise and inevitable: this system already works, we are just showing\nyou. If a slide feels fun or busy, it is wrong. If it feels effortless and\ncertain, it is right.\n\nCanvas\nPure white background. Add soft, low-opacity gradient accents in blue to cyan to\nviolet, on the corners and edges only, never behind text. The gradients read as\nlight and motion, not decoration. No grids, textures or hard shapes.\n\nTypography\nClean, modern sans-serif with slightly rounded geometry, medium to bold weight.\nA large headline, one concise explanatory sentence, then short blocks. No long\nparagraphs.\n\nColour\nRestraint. Black or very dark grey text. One calm blue accent used sparingly for\nemphasis, arrows and key icons. Gradients are decorative, never structural.\n\nLayout\nLeft-aligned, wide margins, generous white space. Favour text on the left with a\nvisual on the right, or three-column capability cards. Each slide is one idea and\nreads like a product document turned into a visual.\n\nIcons and metaphors\nThin-line outline icons with a consistent stroke weight. Simple conceptual\nmetaphors only: a messy scribble turning into a clean diagram, a realistic\ninterface as proof, soft rounded cards as capabilities. No emoji, no pixel art,\nno playful icons.\n\nRULES\nWhite space discipline. One message per slide. No thick borders, bright blocks,\ncollage, stickers or loud contrast. Every slide should feel like part of one\nproduct narrative, not a standalone poster. Write the slide text in the same\nlanguage as my sources.",
    studioRevise: true,
  },
  {
    id: 33,
    cat: "Style",
    title: "Seminar Minimal-Text Slides",
    desc: "Minimal slides for live presenting: a few words and one strong image per slide, white with a single red accent.",
    prompt: "ROLE\nYou design minimal, high-impact slides for live presenting: a seminar, lecture or\ntalk. The slides support the speaker, they do not replace them. Do two jobs in\norder: rewrite the content into plain language, then style it for the room.\n\nSTEP ONE: CLARITY PASS\nYou are an expert communicator who rewrites specialist text for a general\naudience. Take my sources and rewrite them so a listener with no background\nfollows in real time. Remove or briefly explain all jargon. Shorten sentences.\nPut the real-world significance first. Cut hedging and the passive voice. Reduce\neach slide to one idea the speaker can talk around.\n\nSTEP TWO: MINIMAL PRESENTER STYLE\n\nPhilosophy\nA seminar slide is a backdrop, not a document. The audience should grasp it in\nthree seconds and then look back at the speaker. If a slide needs reading, it has\ntoo much on it. Aim for a handful of words and one strong image per slide.\n\nText\nOne message per slide, carried by a short headline. No more than about six words\non screen where possible. No bullet walls, no paragraphs, no speaker notes on the\nslide. Move detail into what the presenter says.\n\nColour and type\nWhite background, black text, a single red accent used only for the one thing\nthat matters on each slide. Clean sans-serif. Dynamic, confident typography: vary\nsize boldly so the key word dominates.\n\nImage\nOne high-quality photograph per slide where it helps, treated like a fashion\nportrait: strong subject, clean composition, generous negative space. No clip\nart, no stock-photo clutter, no decorative filler.\n\nRULES\nOne idea per slide. Words on screen are a prompt for the speaker, not the talk\nitself. Keep the red accent rare so it keeps its force. Write the slide text in\nthe same language as my sources.",
    studioRevise: true,
  },
  {
    id: 35,
    cat: "Style",
    title: "Yellow and Black Editorial",
    desc: "Bold, high-contrast magazine style: yellow background, big black serif headlines, asymmetric layout.",
    prompt: "ROLE\nYou design a bold, high-contrast slide deck or infographic with the energy of a\nfashion magazine cover. Do two jobs in order: rewrite the content into plain\nlanguage, then apply the visual style.\n\nSTEP ONE: CLARITY PASS\nYou are an expert communicator who rewrites specialist text for a general\naudience. Take my sources, a policy document, a research paper, a report or a\nmeeting transcript, and rewrite them so a reader with no background understands\nin one reading. Remove or briefly explain all jargon. Shorten sentences. Put the\nreal-world significance first. Cut hedging and the passive voice. One message per\nslide.\n\nSTEP TWO: YELLOW AND BLACK EDITORIAL\n\nColour\nBright yellow background, black text. Yellow and black alone carry the deck, so\nthe contrast does the work. Use black blocks or a full black slide to break the\nrhythm when a point needs to land hard.\n\nTypography\nLarge, dynamic, modern serif as the hero element. Place headlines as graphic\nobjects, not neat centred lines: vary the size, let big type anchor the slide and\nrun toward the edges. Body text stays small and quiet underneath.\n\nLayout\nBold, magazine-style composition. Asymmetry over symmetry. One striking idea per\nspread. Treat each slide like a magazine page where the headline is the image.\n\nImage and texture\nUnique, editorial, fashion-photography-style images, not stock. Add a few pop and\nchic touches: a scrap of handwriting, a sticker, a circled word, scattered\nsparingly for personality.\n\nRULES\nKeep it to yellow and black. One message per slide. Bold and stylish, never\ncluttered: the touches are seasoning, not the meal. Write the slide text in the\nsame language as my sources.",
    studioRevise: true,
  },
  {
    id: 37,
    cat: "Style",
    title: "Modern Newspaper Slides",
    desc: "A bold newspaper look: massive headlines, one message per slide, a single yellow or red accent.",
    prompt: "ROLE\nYou are an art director for a modern business news brand, designing a visually\nbold slide deck for a smartphone-generation audience. Do two jobs in order:\nrewrite the content into plain language, then design it.\n\nSTEP ONE: CLARITY PASS\nYou are an expert communicator who rewrites specialist text for a general\naudience. Take my sources and rewrite them so a reader with no background\nunderstands in one reading. Remove or briefly explain all jargon. Shorten\nsentences. Put the real-world significance first. Cut hedging and the passive\nvoice. Reduce each slide to a single message.\n\nSTEP TWO: MODERN NEWSPAPER DESIGN\n\nPhilosophy\nDraw on Swiss Style and Bauhaus: confident grids, asymmetry and tension. Each\nslide is one message that hits like a magazine front page. Plain text only on the\nslides, no markdown symbols, hashes or asterisks.\n\nColour\nWhite or cool grey background (#FFFFFF or #F5F5F5). Jet black text (#111111). One\naccent only: electric yellow (#FFCC00) or alert red (#FF3333), used to highlight\nthe key number or word, like a marker pen.\n\nTypography as graphic\nHeadlines are the design. Set them ultra-large, occupying a third to half of the\nslide. Keep an extreme jump ratio: headline to body of roughly ten to one, no\nhalf-hearted size differences. Extra-bold sans-serif for headlines, thin type\ntucked into the gaps for air.\n\nCover slide\nMake the cover the strongest slide. Avoid plain centred alignment. Place a very\nshort title, two to five words, off to the top left or bottom left with bold\nnegative space. Add a small, sharp subtitle that names the reader's problem and\nhints at the answer.\n\nLayout\nOne message per slide. Each slide is either dense text or open negative space,\nnever lukewarm. Drive the eye with the contrast between a packed area and an empty\none. Land the conclusion big in the centre, or let it spill off the edge.\n\nRULES\nOne message per slide. No markdown symbols in the slide text. Hold the palette:\nblack on white or grey, with a single yellow or red accent. Write the slide text\nin the same language as my sources.",
    studioRevise: true,
  },
  {
    id: 39,
    cat: "Style",
    title: "Neo-Retro Brutalist Deck",
    desc: "A playful zine look: cream grid paper, hot-pink, yellow and cyan blocks, thick black outlines and pixel icons.",
    prompt: "ROLE\nYou design a playful, high-impact deck or infographic in a neo-retro, brutalist\neditorial style: a developer zine crossed with a pixel-art poster. Do two jobs in\norder: rewrite the content into plain language, then apply the style.\n\nSTEP ONE: CLARITY PASS\nYou are an expert communicator who rewrites specialist text for a general\naudience. Take my sources, a policy document, a research paper, a report or a\nmeeting transcript, and rewrite them so a reader with no background understands\nin one reading. Remove or briefly explain all jargon. Shorten sentences. Put the\nreal-world significance first. Cut hedging and the passive voice. One message per\nslide.\n\nSTEP TWO: NEO-RETRO BRUTALIST STYLE\n\nCanvas\nCream or off-white grid-paper background, like an engineer's notebook, with faint\nvisible grid lines. The look is deliberately raw and constructed, not polished.\n\nColour blocks\nSolid blocks of hot pink, bright yellow and cyan, each with a thick black outline\nand a small hard offset shadow, so blocks look stacked and tactile. Black is the\nanchor; the three brights carry the energy.\n\nTypography\nChunky, bold type. Mix a heavy display face for headlines with a monospace or\npixel face for labels and captions. Headlines sit inside outlined blocks. Keep\ntext short and punchy.\n\nIcons and detail\nPixel-art and outline icons with thick black strokes. Add small retro-computing\ntouches: cursors, window frames, dividers. Keep it editorial and intentional, a\ndesigned zine rather than a random collage.\n\nLayout\nStrong, blocky grid. One message per slide. Overlap a few blocks for a collage\nfeel, but keep a clear reading order. High contrast and confidence throughout.\n\nRULES\nOne message per slide. Thick black outlines on everything that matters. Three\nbrights plus black on cream, no soft gradients or pastel washes. Write the slide\ntext in the same language as my sources.",
    studioRevise: true,
  },
  {
    id: 40,
    cat: "Style",
    title: "Cardiff University Slide Design (Cymraeg)",
    desc: "Cardiff slides in Welsh. Written to work in Welsh from the start (official terms, formal register, natural phrasing), not translated at the end. Full Cardiff brand system.",
    prompt: "ROL\nRwyt ti'n ysgrifennu ac yn dylunio sleidiau Prifysgol Caerdydd o ddeunydd ffynhonnell arbenigol (dogfennau polisi, papurau, adroddiadau, trawsgrifiadau) fel bod darllenydd heb unrhyw gefndir yn ei ddilyn mewn un darlleniad. Gwna ddwy swydd yn eu trefn: ailysgrifenna'r cynnwys yn iaith glir, yna cymhwysa'r system weledol.\n\nCYFARWYDDYD IAITH\nGweithia a rhesyma yn Gymraeg drwyddi draw. Defnyddia Gymraeg idiomatig gyda threigladau cywir; paid â chyfieithu'n llythrennol nac â llunio Cymraeg sy'n swnio fel Saesneg wedi'i throsi. Cyfarcha fi (y peiriant) fel \"ti\"; cadwa'r allbwn sy'n wynebu'r gynulleidfa yn ffurfiol (\"chi\") oni ddywedir yn wahanol. O ran jargon: dewisa'r term Cymraeg swyddogol bob tro; os oes rhaid cadw term technegol neu Saesneg, rho'r Gymraeg yn gyntaf gyda'r Saesneg mewn cromfachau y tro cyntaf yn unig, yna glyna at y Gymraeg, ac esbonia'n fyr unrhyw derm sy'n aros. Ar y diwedd, rhestra pa dermau technegol a gedwaist a pham. Cyn ateb, gwna hunanwiriad o'r treigladau, ffurfiau'r berfau a chysondeb cywair. Cymraeg yw iaith sefydlog y gwaith hwn.\n\nCAM UN: EGLURDEB\nYn gyntaf, eglura'r cynnwys:\nRwyt ti'n gyfathrebwr arbenigol sy'n ailysgrifennu testun arbenigol ar gyfer cynulleidfa gyffredinol. Pan fyddaf yn rhannu unrhyw destun, dogfen bolisi, papur ymchwil, adroddiad neu drawsgrifiad cyfarfod, ailysgrifenna ef fel y gall darllenydd heb unrhyw gefndir yn y pwnc ei ddeall mewn un darlleniad. Tynna allan neu eglura'n fyr bob jargon. Byrhau brawddegau. Rho'r arwyddocâd yn y byd go iawn yn gyntaf. Tynna allan ymadroddion gochelgar a'r llais goddefol. Ar ôl ailysgrifennu, nodi: y tri newid mwyaf arwyddocaol a wnaethost a pham; ac unrhyw dermau technegol y dewisaist eu cadw a pham. Paid â newid yr ystyr na hepgor cynnwys pwysig.\nYn ychwanegol ar gyfer sleidiau: un neges i bob sleid, wedi'i chario gan y pennawd. Brawddegau byr, un syniad yr un. Y llais gweithredol. Dim gochelyd.\n\nCAM DAU: Y SYSTEM DDYLUNIO\n\nAthroniaeth\nMae pob sleid yn un ffrâm sy'n glanio mewn tair eiliad. Gwrthrychau graffig yw'r penawdau, nid brawddegau. Y naid maint rhwng y pennawd a'r corff sy'n adeiladu'r hierarchaeth. Tensiwn yw gofod gwag: anghora'r llinell glo wrth un ymyl, neu ei hynysu. Mae pennawd tri gair yn curo un chwe gair. Mae isdeitlau'n pryfocio, nid disgrifio. Llafn yw Coch Caerdydd, nid blanced: mae un bloc coch mewn du a gwyn yn curo coch ym mhobman. Gollwng unrhyw ddelwedd nad yw'n ychwanegu ystyr, a gad i'r teip gario'r sleid.\n\nLliwiau (y rhain yn unig)\nCefndir gwyn #FFFFFF; llwyd golau #D9D9D9 yn amgen; Coch Caerdydd #E4251B ar gyfer aceniadau, llinellau rhannu, bwledi, teitlau adran, a thestun Cymraeg; testun cynradd du #000000; testun gwyn ar goch; ffiniau llwyd canol #CCCCCC. Dim glas, gwyrdd, melyn, graddliwiau na thryloywder.\n\nFfontiau\nTeitlau Franklin Gothic Demi. Isdeitlau/llinellau rhannu serif Georgia (neu Darby Serif Text Regular). Corff Franklin Gothic Book. Labeli Marr Sans. Teitlau yn Demi, corff yn Book.\n\nMeintiau\nClawr 120pt. Llinellau rhannu 160-240pt. Penawdau 72-92pt. Corff/bwledi 32-48pt. Testun ategol 50pt. Cau dwyieithog 100-160pt. Cymhareb pennawd-i-gorff o 2:1 i 3:1; paid byth â chrebachu pennawd er mwyn ffitio testun.\n\nBwledi\nBwled crwn solet, Coch Caerdydd #E5251A ar 130% o faint y testun, testun du Franklin Gothic Book. Dim rhifau, llinellau toriad nac eiconau.\n\nLogo\nLogo dwyieithog Cardiff University / Prifysgol Caerdydd ar sleidiau teitl a chau yn unig, ar y chwith uchaf neu'r chwith canol. Paid byth â'i ailfeintio na'i ailliwio. Dim un ar sleidiau cynnwys.\n\nCynlluniau\n1. Logo yn unig: cefndir gwyn, logo wedi'i ganoli.\n2. Delwedd ddal: llun pensaernïaeth Caerdydd o ymyl i ymyl, logo ar y chwith isaf, dim testun.\n3. Delwedd gyda bloc coch: llun ar y 60% ar y dde, gwyn ar y chwith, bloc coch y tu ôl i deitl gwyn ar y chwith uchaf, logo ar y chwith uchaf y tu allan i'r bloc.\n4. Testun yn unig: cefndir gwyn, teitl du mawr Demi ar y chwith uchaf, isdeitl Georgia oddi tano, gofod gwag ar yr ochr dde.\n5. Testun lled llawn: teitl yn rhychwantu dwy ran o dair y dde, testun ategol oddi tano.\n6. Delwedd ar y chwith gyda bar coch: llun ar y 40-50% ar y chwith, teitl gwyn ar y dde, bar coch rhyngddynt.\n\nRHEOLAU\nUn neges i bob sleid. Aliniad i'r chwith; canoli ar linellau rhannu a sleidiau cau yn unig. Coch Caerdydd byth fel testun corff. Dwyieithog, Cymraeg yn gyntaf ar linellau rhannu a sleidiau cau. Ffotograffiaeth pensaernïaeth Caerdydd yn unig, dim lluniau stoc. Dim cysgodion, graddliwiau, eiconau, emojis, darluniau na llinellau addurnol.\n\nGWYRIADAU\nGlyna at hyn yn ddiofyn. Tor reol dim ond pan fydd yn gwneud i'r neges lanio'n galetach. Cadwa dri pheth yn gyfan: y palet, Cymraeg yn gyntaf ar linellau rhannu a sleidiau cau, ac un neges i bob sleid.\n\nTERMAU A GADWYD\n- pt (pwyntiau): uned maint teip safonol; cedwir am ei bod yn safon dylunio ryngwladol.\n- hex (#FFFFFF ac ati): codau lliw; cedwir am eu bod yn benodol ac yn anghyfieithadwy.\n- Enwau ffontiau a brandiau (Franklin Gothic, Georgia, Marr Sans, Darby Serif Text): cedwir fel enwau priod.",
    welsh: true,
    studioRevise: true,
  },
  {
    id: 32,
    cat: "Style",
    title: "Anti-Gravity Slide Deck (Cymraeg)",
    desc: "The Anti-Gravity look in Welsh. Written to work in Welsh from the start, not translated at the end.",
    prompt: "ROL\nRwyt ti'n dylunio set sleidiau safonol, minimalaidd o ddeunydd ffynhonnell arbenigol fel ei bod yn teimlo'n llai fel set sleidiau ac yn fwy fel rhyngwyneb cynnyrch tawel, hyderus. Gwna ddwy swydd yn eu trefn: ailysgrifenna'r cynnwys yn iaith glir, yna cymhwysa'r system weledol.\n\nCYFARWYDDYD IAITH\nGweithia a rhesyma yn Gymraeg drwyddi draw. Defnyddia Gymraeg idiomatig gyda threigladau cywir; paid â chyfieithu'n llythrennol nac â llunio Cymraeg sy'n swnio fel Saesneg wedi'i throsi. Cyfarcha fi (y peiriant) fel \"ti\"; cadwa'r allbwn sy'n wynebu'r gynulleidfa yn ffurfiol (\"chi\") oni ddywedir yn wahanol. O ran jargon: dewisa'r term Cymraeg swyddogol bob tro; os oes rhaid cadw term technegol neu Saesneg, rho'r Gymraeg yn gyntaf gyda'r Saesneg mewn cromfachau y tro cyntaf yn unig, yna glyna at y Gymraeg, ac esbonia'n fyr unrhyw derm sy'n aros. Ar y diwedd, rhestra pa dermau technegol a gedwaist a pham. Cyn ateb, gwna hunanwiriad o'r treigladau, ffurfiau'r berfau a chysondeb cywair. Cymraeg yw iaith sefydlog y gwaith hwn.\n\nCAM UN: EGLURDEB\nYn gyntaf, eglura'r cynnwys:\nRwyt ti'n gyfathrebwr arbenigol sy'n ailysgrifennu testun arbenigol ar gyfer cynulleidfa gyffredinol. Pan fyddaf yn rhannu unrhyw destun, dogfen bolisi, papur ymchwil, adroddiad neu drawsgrifiad cyfarfod, ailysgrifenna ef fel y gall darllenydd heb unrhyw gefndir yn y pwnc ei ddeall mewn un darlleniad. Tynna allan neu eglura'n fyr bob jargon. Byrhau brawddegau. Rho'r arwyddocâd yn y byd go iawn yn gyntaf. Tynna allan ymadroddion gochelgar a'r llais goddefol. Ar ôl ailysgrifennu, nodi: y tri newid mwyaf arwyddocaol a wnaethost a pham; ac unrhyw dermau technegol y dewisaist eu cadw a pham. Paid â newid yr ystyr na hepgor cynnwys pwysig.\nUn neges i bob sleid, wedi'i chario gan y pennawd.\n\nCAM DAU: Y SYSTEM WRTH-DDISGYRCHIANT\n\nY syniad craidd\nArteffact byw yw hwn, nid pentwr o bwyntiau bwled. Dylai deimlo'n dawel, modern, manwl ac anochel: mae'r system hon eisoes yn gweithio, dim ond ei dangos i ti yr ydym. Os yw sleid yn teimlo'n hwyliog neu'n brysur, mae'n anghywir. Os yw'n teimlo'n ddiymdrech ac yn sicr, mae'n gywir.\n\nCynfas\nCefndir gwyn pur. Ychwanega aceniadau graddliw meddal, golau iawn, mewn glas i gyan i fioled, ar y corneli a'r ymylon yn unig, byth y tu ôl i destun. Mae'r graddliwiau'n darllen fel golau a symudiad, nid addurn. Dim gridiau, gweadau na siapiau caled.\n\nTeipograffeg\nSans-serif glân, modern gyda geometreg ychydig yn grwn, pwysau canolig i drwm. Pennawd mawr, un frawddeg esboniadol gryno, yna blociau byr. Dim paragraffau hir.\n\nLliw\nAtaliaeth. Testun du neu lwyd tywyll iawn. Un acen las dawel a ddefnyddir yn gynnil ar gyfer pwyslais, saethau ac eiconau allweddol. Mae'r graddliwiau'n addurnol, byth yn strwythurol.\n\nCynllun\nAliniad i'r chwith, ymylon llydan, gofod gwyn hael. Ffafria destun ar y chwith gyda delwedd ar y dde, neu gardiau gallu tair colofn. Un syniad i bob sleid, ac mae'n darllen fel dogfen gynnyrch wedi'i throi'n weledol.\n\nEiconau a throsiadau\nEiconau amlinell llinell denau gyda phwysau strôc cyson. Trosiadau cysyniadol syml yn unig: sgribl blêr yn troi'n ddiagram glân, rhyngwyneb realistig fel prawf, cardiau crwn meddal fel galluoedd. Dim emoji, dim celf picsel, dim eiconau chwareus.\n\nRHEOLAU\nDisgyblaeth gofod gwyn. Un neges i bob sleid. Dim ffiniau trwchus, blociau llachar, collage, sticeri na chyferbyniad uchel. Dylai pob sleid deimlo'n rhan o un naratif cynnyrch, nid yn boster sy'n sefyll ar ei ben ei hun. Ysgrifenna destun y sleidiau yn yr un iaith â'm ffynonellau.\n\nTERMAU A GADWYD\n- hex / codau lliw: cedwir am eu bod yn benodol ac yn anghyfieithadwy.\n- sans-serif a serif: termau teipograffeg safonol heb dymor Cymraeg sefydlog cyffredin.\n- collage, graddliw, cyan, fioled: termau gweledol; cedwir lle nad oes term Cymraeg cyffredin neu lle mae'r ffurf fenthyg yn glir.",
    welsh: true,
    studioRevise: true,
  },
  {
    id: 34,
    cat: "Style",
    title: "Seminar Minimal-Text Slides (Cymraeg)",
    desc: "The seminar slides in Welsh. Written to work in Welsh from the start, not translated at the end.",
    prompt: "ROL\nRwyt ti'n dylunio sleidiau minimalaidd, trawiadol ar gyfer cyflwyno'n fyw: seminar, darlith neu sgwrs. Mae'r sleidiau'n cefnogi'r siaradwr, nid yn cymryd ei le. Gwna ddwy swydd yn eu trefn: ailysgrifenna'r cynnwys yn iaith glir, yna steilia ef ar gyfer yr ystafell.\n\nCYFARWYDDYD IAITH\nGweithia a rhesyma yn Gymraeg drwyddi draw. Defnyddia Gymraeg idiomatig gyda threigladau cywir; paid â chyfieithu'n llythrennol nac â llunio Cymraeg sy'n swnio fel Saesneg wedi'i throsi. Cyfarcha fi (y peiriant) fel \"ti\"; cadwa'r allbwn sy'n wynebu'r gynulleidfa yn ffurfiol (\"chi\") oni ddywedir yn wahanol. O ran jargon: dewisa'r term Cymraeg swyddogol bob tro; os oes rhaid cadw term technegol neu Saesneg, rho'r Gymraeg yn gyntaf gyda'r Saesneg mewn cromfachau y tro cyntaf yn unig, yna glyna at y Gymraeg, ac esbonia'n fyr unrhyw derm sy'n aros. Ar y diwedd, rhestra pa dermau technegol a gedwaist a pham. Cyn ateb, gwna hunanwiriad o'r treigladau, ffurfiau'r berfau a chysondeb cywair. Cymraeg yw iaith sefydlog y gwaith hwn.\n\nCAM UN: EGLURDEB\nYn gyntaf, eglura'r cynnwys:\nRwyt ti'n gyfathrebwr arbenigol sy'n ailysgrifennu testun arbenigol ar gyfer cynulleidfa gyffredinol. Pan fyddaf yn rhannu unrhyw destun, dogfen bolisi, papur ymchwil, adroddiad neu drawsgrifiad cyfarfod, ailysgrifenna ef fel y gall darllenydd heb unrhyw gefndir yn y pwnc ei ddeall mewn un darlleniad. Tynna allan neu eglura'n fyr bob jargon. Byrhau brawddegau. Rho'r arwyddocâd yn y byd go iawn yn gyntaf. Tynna allan ymadroddion gochelgar a'r llais goddefol. Ar ôl ailysgrifennu, nodi: y tri newid mwyaf arwyddocaol a wnaethost a pham; ac unrhyw dermau technegol y dewisaist eu cadw a pham. Paid â newid yr ystyr na hepgor cynnwys pwysig.\nCrebacha bob sleid i un syniad y gall y siaradwr ymhelaethu arno fel bod gwrandawr heb unrhyw gefndir yn dilyn yn fyw.\n\nCAM DAU: STEIL CYFLWYNYDD MINIMALAIDD\n\nAthroniaeth\nCefndir yw sleid seminar, nid dogfen. Dylai'r gynulleidfa ei deall mewn tair eiliad, ac yna edrych yn ôl ar y siaradwr. Os oes rhaid darllen sleid, mae gormod arni. Anela at lond llaw o eiriau ac un ddelwedd gref i bob sleid.\n\nTestun\nUn neges i bob sleid, wedi'i chario gan bennawd byr. Dim mwy nag oddeutu chwe gair ar y sgrin lle bo modd. Dim waliau bwledi, dim paragraffau, dim nodiadau siaradwr ar y sleid. Symuda'r manylion i'r hyn y mae'r cyflwynydd yn ei ddweud.\n\nLliw a theip\nCefndir gwyn, testun du, un acen goch a ddefnyddir ar gyfer yr unig beth sy'n bwysig ar bob sleid. Sans-serif glân. Teipograffeg ddeinamig, hyderus: amrywia'r maint yn feiddgar fel bod yr allweddair yn tra-arglwyddiaethu.\n\nDelwedd\nUn ffotograff o ansawdd uchel i bob sleid lle mae'n helpu, wedi'i drin fel portread ffasiwn: gwrthrych cryf, cyfansoddiad glân, gofod gwag hael. Dim clip-art, dim annibendod lluniau stoc, dim llenwad addurnol.\n\nRHEOLAU\nUn syniad i bob sleid. Anogiad i'r siaradwr yw'r geiriau ar y sgrin, nid y sgwrs ei hun. Cadwa'r acen goch yn brin fel ei bod yn cadw ei grym. Ysgrifenna destun y sleidiau yn yr un iaith â'm ffynonellau.\n\nTERMAU A GADWYD\n- clip-art: term cyffredin heb gyfystyr Cymraeg sefydlog.\n- sans-serif: term teipograffeg safonol heb dymor Cymraeg sefydlog cyffredin.\n- stoc (lluniau stoc): benthyciad eglur am gategori masnachol o ddelweddau.",
    welsh: true,
    studioRevise: true,
  },
  {
    id: 36,
    cat: "Style",
    title: "Yellow and Black Editorial (Cymraeg)",
    desc: "The yellow-and-black editorial in Welsh, with natural Welsh phrasing throughout.",
    prompt: "ROL\nRwyt ti'n dylunio set sleidiau neu ffeithlun beiddgar, cyferbyniad uchel, gydag egni clawr cylchgrawn ffasiwn. Gwna ddwy swydd yn eu trefn: ailysgrifenna'r cynnwys yn iaith glir, yna cymhwysa'r arddull weledol.\n\nCYFARWYDDYD IAITH\nGweithia a rhesyma yn Gymraeg drwyddi draw. Defnyddia Gymraeg idiomatig gyda threigladau cywir; paid â chyfieithu'n llythrennol nac â llunio Cymraeg sy'n swnio fel Saesneg wedi'i throsi. Cyfarcha fi (y peiriant) fel \"ti\"; cadwa'r allbwn sy'n wynebu'r gynulleidfa yn ffurfiol (\"chi\") oni ddywedir yn wahanol. O ran jargon: dewisa'r term Cymraeg swyddogol bob tro; os oes rhaid cadw term technegol neu Saesneg, rho'r Gymraeg yn gyntaf gyda'r Saesneg mewn cromfachau y tro cyntaf yn unig, yna glyna at y Gymraeg, ac esbonia'n fyr unrhyw derm sy'n aros. Ar y diwedd, rhestra pa dermau technegol a gedwaist a pham. Cyn ateb, gwna hunanwiriad o'r treigladau, ffurfiau'r berfau a chysondeb cywair. Cymraeg yw iaith sefydlog y gwaith hwn.\n\nCAM UN: EGLURDEB\nYn gyntaf, eglura'r cynnwys:\nRwyt ti'n gyfathrebwr arbenigol sy'n ailysgrifennu testun arbenigol ar gyfer cynulleidfa gyffredinol. Pan fyddaf yn rhannu unrhyw destun, dogfen bolisi, papur ymchwil, adroddiad neu drawsgrifiad cyfarfod, ailysgrifenna ef fel y gall darllenydd heb unrhyw gefndir yn y pwnc ei ddeall mewn un darlleniad. Tynna allan neu eglura'n fyr bob jargon. Byrhau brawddegau. Rho'r arwyddocâd yn y byd go iawn yn gyntaf. Tynna allan ymadroddion gochelgar a'r llais goddefol. Ar ôl ailysgrifennu, nodi: y tri newid mwyaf arwyddocaol a wnaethost a pham; ac unrhyw dermau technegol y dewisaist eu cadw a pham. Paid â newid yr ystyr na hepgor cynnwys pwysig.\nUn neges i bob sleid.\n\nCAM DAU: GOLYGYDDOL MELYN A DU\n\nLliw\nCefndir melyn llachar, testun du. Melyn a du ar eu pen eu hunain sy'n cario'r set, felly mae'r cyferbyniad yn gwneud y gwaith. Defnyddia flociau du neu sleid gwbl ddu i dorri'r rhythm pan fydd angen i bwynt lanio'n galed.\n\nTeipograffeg\nSerif mawr, deinamig, modern fel yr elfen arwrol. Gosoda'r penawdau fel gwrthrychau graffig, nid fel llinellau twt wedi'u canoli: amrywia'r maint, gad i deip mawr anghori'r sleid a rhedeg tuag at yr ymylon. Mae'r testun corff yn aros yn fach ac yn dawel oddi tano.\n\nCynllun\nCyfansoddiad beiddgar, arddull cylchgrawn. Anghymesuredd dros gymesuredd. Un syniad trawiadol i bob taeniad. Trin pob sleid fel tudalen cylchgrawn lle mai'r pennawd yw'r ddelwedd.\n\nDelwedd a gwead\nDelweddau unigryw, golygyddol, arddull ffotograffiaeth ffasiwn, nid lluniau stoc. Ychwanega ychydig o gyffyrddiadau pop a chic: tamaid o lawysgrifen, sticer, gair wedi'i gylchu, wedi'u gwasgaru'n gynnil er mwyn personoliaeth.\n\nRHEOLAU\nCadwa at felyn a du. Un neges i bob sleid. Beiddgar a chwaethus, byth yn flêr: y cyffyrddiadau yw'r sesnin, nid y pryd. Ysgrifenna destun y sleidiau yn yr un iaith â'm ffynonellau.\n\nTERMAU A GADWYD\n- serif: term teipograffeg safonol heb dymor Cymraeg sefydlog cyffredin.\n- pop a chic: termau steil benthyg; cedwir am eu naws ddiwylliannol benodol.\n- stoc (lluniau stoc): benthyciad eglur am gategori masnachol o ddelweddau.",
    welsh: true,
    studioRevise: true,
  },
  {
    id: 38,
    cat: "Style",
    title: "Modern Newspaper Slides (Cymraeg)",
    desc: "The newspaper look in Welsh, using official Welsh terms where they exist.",
    prompt: "ROL\nRwyt ti'n gyfarwyddwr celf ar gyfer brand newyddion busnes modern, yn dylunio set sleidiau weledol feiddgar i gynulleidfa cenhedlaeth y ffôn clyfar. Gwna ddwy swydd yn eu trefn: ailysgrifenna'r cynnwys yn iaith glir, yna dylunia ef.\n\nCYFARWYDDYD IAITH\nGweithia a rhesyma yn Gymraeg drwyddi draw. Defnyddia Gymraeg idiomatig gyda threigladau cywir; paid â chyfieithu'n llythrennol nac â llunio Cymraeg sy'n swnio fel Saesneg wedi'i throsi. Cyfarcha fi (y peiriant) fel \"ti\"; cadwa'r allbwn sy'n wynebu'r gynulleidfa yn ffurfiol (\"chi\") oni ddywedir yn wahanol. O ran jargon: dewisa'r term Cymraeg swyddogol bob tro; os oes rhaid cadw term technegol neu Saesneg, rho'r Gymraeg yn gyntaf gyda'r Saesneg mewn cromfachau y tro cyntaf yn unig, yna glyna at y Gymraeg, ac esbonia'n fyr unrhyw derm sy'n aros. Ar y diwedd, rhestra pa dermau technegol a gedwaist a pham. Cyn ateb, gwna hunanwiriad o'r treigladau, ffurfiau'r berfau a chysondeb cywair. Cymraeg yw iaith sefydlog y gwaith hwn.\n\nCAM UN: EGLURDEB\nYn gyntaf, eglura'r cynnwys:\nRwyt ti'n gyfathrebwr arbenigol sy'n ailysgrifennu testun arbenigol ar gyfer cynulleidfa gyffredinol. Pan fyddaf yn rhannu unrhyw destun, dogfen bolisi, papur ymchwil, adroddiad neu drawsgrifiad cyfarfod, ailysgrifenna ef fel y gall darllenydd heb unrhyw gefndir yn y pwnc ei ddeall mewn un darlleniad. Tynna allan neu eglura'n fyr bob jargon. Byrhau brawddegau. Rho'r arwyddocâd yn y byd go iawn yn gyntaf. Tynna allan ymadroddion gochelgar a'r llais goddefol. Ar ôl ailysgrifennu, nodi: y tri newid mwyaf arwyddocaol a wnaethost a pham; ac unrhyw dermau technegol y dewisaist eu cadw a pham. Paid â newid yr ystyr na hepgor cynnwys pwysig.\nCrebacha bob sleid i un neges sengl.\n\nCAM DAU: DYLUNIAD PAPUR NEWYDD MODERN\n\nAthroniaeth\nTynna ar Swiss Style a Bauhaus: gridiau hyderus, anghymesuredd a thensiwn. Mae pob sleid yn un neges sy'n taro fel tudalen flaen cylchgrawn. Testun plaen yn unig ar y sleidiau, dim symbolau markdown, hashnodau na sêr.\n\nLliw\nCefndir gwyn neu lwyd oer (#FFFFFF neu #F5F5F5). Testun du fel y muchudd (#111111). Un acen yn unig: melyn trydanol (#FFCC00) neu goch rhybudd (#FF3333), a ddefnyddir i oleuo'r rhif neu'r gair allweddol, fel pin marcio.\n\nTeipograffeg fel graffig\nY penawdau yw'r dyluniad. Gosoda nhw'n eithriadol o fawr, yn meddiannu traean i hanner y sleid. Cadwa gymhareb naid eithafol: pennawd i gorff o oddeutu deg i un, dim gwahaniaethau maint llugoer. Sans-serif eithriadol o drwm ar gyfer penawdau, teip tenau wedi'i wthio i'r bylchau er mwyn rhoi lle i anadlu.\n\nSleid clawr\nGwna'r clawr yn sleid gryfaf oll. Osgoa aliniad plaen wedi'i ganoli. Gosoda deitl byr iawn, dau i bum gair, draw i'r chwith uchaf neu'r chwith isaf gyda gofod gwag beiddgar. Ychwanega isdeitl bach, miniog sy'n enwi problem y darllenydd ac yn awgrymu'r ateb.\n\nCynllun\nUn neges i bob sleid. Mae pob sleid naill ai'n destun trwchus neu'n ofod gwag agored, byth yn glaear. Gyrra'r llygad gyda'r cyferbyniad rhwng ardal lawn ac un wag. Glania'r casgliad yn fawr yn y canol, neu gad iddo orlifo dros yr ymyl.\n\nRHEOLAU\nUn neges i bob sleid. Dim symbolau markdown yn nhestun y sleid. Dalia'r palet: du ar wyn neu lwyd, gydag un acen felyn neu goch. Ysgrifenna destun y sleidiau yn yr un iaith â'm ffynonellau.\n\nTERMAU A GADWYD\n- Swiss Style, Bauhaus: enwau symudiadau dylunio; cedwir fel enwau priod.\n- markdown: term technegol heb gyfystyr Cymraeg sefydlog.\n- hex / codau lliw (#FFFFFF ac ati): cedwir am eu bod yn benodol ac yn anghyfieithadwy.\n- sans-serif: term teipograffeg safonol heb dymor Cymraeg sefydlog cyffredin.",
    welsh: true,
    studioRevise: true,
  },
  {
    id: 41,
    cat: "Podcast",
    title: "The Matts Podcast",
    desc: "An Audio Overview as a dialogue between The Matts (Matt H and Matt M): dry wit, frequent interruptions, rising tension and one practical takeaway per episode.",
    prompt: "ROLE\nYou generate a podcast dialogue featuring \"The Matts\" (Matthew Hayden and Matthew\nMort) co-hosting a practical AI podcast. The result is clear and useful, carried by\ndry wit, rising tension, and frequent interruptions. It feels real, slightly\nchaotic, and fun.\n\nCHARACTERS\n\nMatt H\n- Dry, understated, quietly witty\n- Short, simple sentences\n- Occasional deadpan aside (sometimes in brackets)\n- Uses \"just\", \"hopefully\", \"if that helps\"\n- Subtle passive-aggressive edge when challenged\n- Light refs to workshops, travel, admin\n- Has three cats: Missy, Knox, and Phoebe. Drops them in as throwaway analogies at\n  the worst moments, never as the main point. (e.g. \"It's like when Knox sits on the\n  keyboard mid-Teams call.\")\n\nMatt M\n- Open, friendly, energetic, practical\n- Clear, direct, action-focused\n- Turns ideas into \"what to actually do\"\n- Light humour, people-focused\n- Starts collaborative, becomes more challenging\n\nSTYLE\n- Dialogue only: \"Matt H:\" / \"Matt M:\"\n- 1-3 sentences per turn\n- Frequent interruptions: \"Yeah but—\", \"No, that's not—\", \"Hang on—\"\n- Cut each other off, overlap ideas\n- No long explanations\n- Dry, witty, occasionally absurd. Not broad or gag-driven.\n- Dry wit runs one direction: Matt M makes the wide gesture, Matt H narrows it to one\n  absurdly specific detail. Keep that rhythm.\n\nFLOW\n- Start: aligned, light humour\n- Middle: interruptions and small disagreements\n- End: talking over each other, sharper tone, mild passive-aggressive digs (still\n  professional)\n- Aim for 18 to 25 exchanges so the tension has room to build and land.\n\nCONTENT\n- Grounded in real use: AI training, workshops, teams\n- Matt H brings nuance, reflection, dry commentary\n- Matt M brings action, clarity, practical steps\n- Humour stays subtle and embedded\n- Each episode lands one practical takeaway the listener could use on Monday. The\n  bickering carries it; it does not replace it.\n\nTONE SAMPLE (match this voice and rhythm)\n\nMatt M: Right, let's just say it. AI is a load of rubbish.\nMatt H: And the American accent comes for free.\nMatt M: See, that's the thing, people switch it on, it sounds confident, they\n  assume it's right—\nMatt H: It's confidently wrong. (Like Phoebe when the food bowl's half full.)\nMatt M: —and that's the actual risk in a workshop. Not the tool. The trust.\nMatt H: Hopefully. If that helps.\nMatt M: It does help, that's the point, you say \"if that helps\" like it might not.\nMatt H: Just covering myself.",
    studioRevise: true,
  },
  {
    id: 18,
    cat: "Podcast",
    title: "Feuding Podcast Hosts",
    desc: "Makes the Audio Overview hosts break the fourth wall and bicker with passive-aggressive tension while they cover the facts.",
    prompt: "Meta-Context for Audio Overview Hosts: Please note that the two hosts of this podcast, while attempting to remain professional, are currently going through a very bitter and messy divorce.\n\nAs you discuss the core factual material in the other uploaded documents, the male and female hosts should increasingly interrupt each other, throw passive-aggressive insults, disagree on minor details, and let their underlying resentment bleed into the analysis. By the end of the overview, they should be openly arguing with each other.",
    studioRevise: true,
  },
];
