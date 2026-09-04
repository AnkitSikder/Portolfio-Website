# Antigravity Prompt — Makhana Case Study / Phase 1

You are editing an existing personal portfolio website.

The Makhana project case-study page already exists, but its current body sections after the hero need to be completely replaced.

## NON-NEGOTIABLE

1. Keep the existing Makhana HERO exactly as it is.
2. Do not redesign, rewrite, move, or restyle the hero.
3. Delete the existing Makhana case-study sections AFTER the hero.
4. Rebuild those sections using the exact information architecture and content direction below.
5. Keep the existing portfolio-wide design system. Inspect another finished project-detail page and reuse its typography, spacing, grid, border language, buttons, section headers, card styles and responsive behavior.
6. Do not create a new unrelated visual language for this page.
7. Do not modify unrelated pages.
8. Use the provided project assets rather than generating replacement product/research imagery.

## DESIGN INTENT

This should read like a strong product-design portfolio case study, not like a 55-slide academic presentation.

The narrative should make the viewer understand:

Makhana context → how the production cycle works → where the problem is → why seed collection deserves intervention → what existing methods look like → what ergonomics revealed → what the design brief requires → how the research was conducted → who the user is → what the user thinks/feels/does → what opportunity was identified → what user needs the design must satisfy.

Use visuals as evidence and text as explanation.

Keep sections scannable for a recruiter or design lead.

Do not dump full slide screenshots unless the source artifact itself is the thing being presented. Re-compose the information into the web layout.

The portfolio should feel intentional, editorial and visual.

A useful principle is: every section should answer a question raised by the previous section.

---

# SECTION 01 — INTRODUCTION

## Title

A crop grown in water, harvested by hand.

## Layout

Desktop:
- Two-column composition.
- LEFT = approximately 50–55% width.
- RIGHT = approximately 45–50% width.
- Left starts with a concise introduction to makhana.
- Under the paragraph, place KPI/stat cards.
- Right contains the source image from slide 4.

Mobile:
- Text first.
- KPI cards next.
- Image after the KPI block.
- Do not put the image into a tiny half-width column.

## Copy

Makhana (Euryale ferox), also known as fox nut or gorgon nut, is an aquatic cash crop cultivated in lowland ponds, particularly across Bihar and other parts of eastern India. Much of India’s production comes from Bihar, making the crop deeply connected to the region’s agricultural economy and traditional harvesting communities.

The important context for this project is simple: the crop has a modern, high-value market, but one of its most demanding stages is still performed through highly manual pond-based work.

## KPI cards

Use large number + short descriptor. Do not use long explanations inside cards.

80%+
OF INDIA’S MAKHANA

85%+
OF GLOBAL SUPPLY

4–6 FT
TYPICAL WATER DEPTH MENTIONED IN THE PROJECT

6–8 HRS
DAILY SUBMERSION DURING HARVESTING

IMPORTANT:
The first two values are from the project introduction and should be written carefully as project-source statistics. The remaining values are process context.

## Image

Use the source image from slide 4:
`01_introduction/slide_04_img_01.png`

Use object-fit: cover while preserving subject visibility.

Optional small caption:
“From pond cultivation to seed collection, the entire system is shaped by water.”

---

# SECTION 02 — THE PRODUCTION CYCLE

## Title

Before the tool, understand the cycle.

## Intro copy

Makhana moves through a long seasonal chain — from pond cultivation and seed collection to drying, processing, popping and finally packaging. The collection stage sits at the transition between cultivation and everything that follows.

## Main interaction

Build a HORIZONTAL FLOW CHART on desktop using the exact process information from the left side of slide 5.

Do NOT use the slide screenshot as the flow chart itself.

Turn the source diagram into a clean responsive web flow.

## Flow content

STEP 01
Makhana plant
Grown in pond

STEP 02
Flower
Produces flower with changes to fruit

STEP 03
Fruit
After bursting, seeds settle at the bottom of the pond

STEP 04
Harvesting
Traditional tools such as Kara & Ganjaa are used

STEP 05
Processing of raw makhana
Seeds are graded by size and moved into processing

STEP 06
Puffed makhana
Post-processing produces puffed makhana

STEP 07
Polishing, cleaning, grading & packaging

STEP 08
Packaging & marketing

Also represent the post-harvest branch from the source diagram:

Sun drying → Grading → Pre-heating → Tempering → Roasting & subsequent popping → Puffed makhana

Where the source includes temperatures/time values, preserve the source values exactly if displayed. Do not invent or round them.

## Interaction design

Desktop:
- horizontal connected sequence
- small connector arrows/lines
- step number
- short title
- one-line explanation

Mobile:
- do NOT squash the horizontal flow into unreadable cards.
- Convert to a vertical timeline/flow.
- Keep arrows/connector continuity.
- Maintain step numbering.

The flow should visually emphasize STEP 04 — HARVESTING as the point where this case study begins to focus.

---

# SECTION 03 — FIELD / PROCESS IMAGE CAROUSEL

## Title

What the production system looks like.

Use an AUTO-SCROLLING HORIZONTAL IMAGE CAROUSEL using all usable individual images from slide 5.

Source folder:
`02_cycle/`

Images include pond cultivation, flowers/seeds, harvesting, drying, processing and related stages.

## Behavior

Desktop:
- full-width / near full-width horizontal marquee
- images should have varied but controlled widths
- slow continuous movement
- seamless loop
- hover pauses autoplay
- drag / mouse wheel should still work

Mobile:
- convert to a touch-friendly horizontal carousel
- still auto-scroll slowly
- pause on touch interaction
- show partial next image to indicate horizontal movement
- never crop key subjects aggressively

Respect `prefers-reduced-motion`:
- disable continuous movement
- show a static horizontally scrollable strip instead

This section should feel cinematic and atmospheric, not like a gallery grid.

---

# SECTION 04 — PROBLEM OVERVIEW / OPPORTUNITY GAP

## Title

The bottleneck is not growing the crop. It is collecting it.

This is a major section.

Use a BENTO GRID rather than a conventional card grid.

Combine important information from:
- slide 9: Identifying Opportunity Gap
- slide 11: Problem Overview
- slide 12: Market Opportunities in India

Do not reproduce the tables.

Transform the information into visual evidence blocks.

## Bento structure

Create a responsive grid with different card spans.

CARD A — HERO STAT

6–8 HOURS
SUBMERGED DAILY

Supporting line:
Workers collect seeds from pond beds in 4–6 ft murky water, often in bent-over / prone positions.

Use a pond/worker image from slide 9.

CARD B — HEALTH

78%
LOWER-BACK PAIN

67%
NECK PAIN

52%
WRIST / HAND PAIN

Keep these numbers visually dominant.

Use an appropriate close-up hand/body image from slide 9 as a visual tile.

CARD C — PHYSICAL LOAD

112.86 BPM
WORKING HEART RATE

“Classified in the project as a heavy to very heavy workload.”

CARD D — PRODUCTIVITY

3.8–4.0 KG/HR
CURRENT PRODUCTIVITY

Supporting line:
The current process remains dependent on repetitive manual collection.

CARD E — SEED LOSS

15.8%
LEFT UNCOLLECTED

Important: this is the value stated on the slide 11 problem overview.

Do NOT replace it with later interview findings.

CARD F — DAILY EARNINGS

₹250–600 / DAY

“Extreme physical work for relatively low daily earnings.”

CARD G — WORKFORCE

YOUNGER WORKERS ARE LEAVING

Supporting line:
The project identifies labor shortages as a threat to continuity of the occupation.

CARD H — INDUSTRY

₹3,000+ CRORE
MAKHANA INDUSTRY IN BIHAR

Supporting line:
The project frames labor availability as an industry-level concern.

CARD I — TECHNOLOGY GAP

TRADITIONAL TOOLS
vs.
EXPENSIVE MECHANIZATION

Supporting line:
The project identifies an affordable intermediate hand-tool opportunity.

CARD J — HAND TOOL FEASIBILITY

₹500–5,000
TARGET RANGE IDENTIFIED IN THE GAP ANALYSIS

Supporting line:
Affordable enough to sit between unchanged traditional tools and ₹1–3 lakh mechanical alternatives.

## MARKET / SYSTEM CARDS

Use smaller bento cards for the slide 12 figures.

₹8.5B
INDIA MAKHANA MARKET — 2024

₹19.6B
PROJECTED — 2033

9.22%
CAGR

80–90%
OF INDIA’S SUPPLY FROM BIHAR (PROJECT SOURCE)

₹3,000 CRORE
BIHAR’S CURRENT MAKHANA ECONOMY

₹6,000+ CRORE
PROJECTED IN ~5 YEARS

25,130+
EXPORT SHIPMENTS MENTIONED IN THE PROJECT

Makhana Board
ANNOUNCED IN UNION BUDGET 2025

Hundreds of thousands
DIRECT + INDIRECT EMPLOYMENT MENTIONED IN PROJECT

NOTE:
These are contextual market/economic statistics from the project source. They should support the story, not overpower the human problem.

## Visual rule

Use 4–6 source images within this bento grid, but do not let images replace the statistics.

Recommended source images:
`03_problems/slide_09_img_01.png`
`03_problems/slide_09_img_02.png`
`03_problems/slide_09_img_03.png`
`03_problems/slide_09_img_04.png`
`03_problems/slide_09_img_05.png`
`03_problems/slide_09_img_06.png`

Also optionally use:
`03_problems/slide_12_img_01.png`
for the market forecast visualization, but keep it as a supporting visual rather than the dominant element.

## Important data honesty rule

There are two different seed-loss statements in the source:
- 15.8% left uncollected appears in the earlier problem overview.
- 25–30% seed loss was later confirmed through interviews.

Do not merge these into one number.

Use:
“15.8% left uncollected — project problem overview”

and later:
“25–30% seed loss — repeatedly reported in interviews”

This distinction is important for credibility.

---

# SECTION 05 — EXISTING PRODUCTS / METHODS

## Title

Before designing something new, I looked at what workers already had.

Use TWO PRIMARY CARDS side by side on desktop.

CARD 01 — KAARA

Kaara
Traditional bamboo anchor pole

Image first or visually dominant.

Data:
- Length: 2–3 m
- Function: anchoring reference point in pond
- Limitation: provides no collection assistance
- Still requires full submersion

Use image:
`04_existing_methods/slide_16_img_03.jpg`

CARD 02 — GANJAA

Ganjaa
Traditional bamboo sieve

Data:
- Cone-shaped form, approximately 40–60 cm diameter
- Separates seeds from mud by density
- Requires vigorous shaking
- No ergonomic handle
- Can cause hand fatigue after repeated use

Use image:
`04_existing_methods/slide_16_img_04.jpg`

You may use the other slide 16 imagery as contextual supporting visuals if useful.

## Transition statement

Traditional tools are not “wrong”; they are optimized around local knowledge, available materials and familiar working methods.

The opportunity is to improve the experience without forcing workers to abandon that knowledge.

Desktop:
2-column cards.

Mobile:
stack cards vertically with image → title → function → limitations.

Do not turn this into a product-comparison pricing table.

---

# SECTION 06 — ERGONOMIC FINDINGS + ANTHROPOMETRY

## Title

The biggest opportunity was ergonomic, not digital.

Use the data from slide 17 plus selected anthropometric data from:
`🌾 Final Design Summary.docx`

## Main comparison visual

Create a horizontal benchmark / range graphic:

MANUAL
4.0 kg/hr

IMPROVED DIVING KIT
11.3 kg/hr

MECHANICAL
12.6 kg/hr

Then highlight:

TARGET OPPORTUNITY
6–8 kg/hr

Supporting text:
“The project identified an intermediate hand-tool opportunity between traditional manual harvesting and expensive mechanical systems.”

## Ergonomic findings

Use 4 concise points:

78%
Lower-back pain associated with prolonged bent/prone work.

REPETITIVE SWEEPING
High musculoskeletal stress.

NO MECHANICAL ADVANTAGE
Current tools rely heavily on manual effort.

NO INTEGRATED PROTECTION
Thorns and contaminated water remain direct hazards.

## Anthropometric reference

Create a compact visual table / measurement ladder.

Indian male reference values from Final Design Summary:

Elbow height
5th: 945 mm
50th: 1039 mm
95th: 1123 mm

Knee height
5th: 419 mm
50th: 464 mm
95th: 517 mm

Forward reach
5th: 749 mm
50th: 849 mm
95th: 939 mm

Shoulder breadth
5th: 341 mm
50th: 380 mm
95th: 422 mm

Hand length
5th: 163 mm
50th: 180 mm
95th: 198 mm

Grip diameter (inside)
5th: 42 mm
50th: 49 mm
95th: 56 mm

Do not show all six as giant numbers. Make them a compact, readable reference block.

## Design relevance

End the section with:

“These measurements became constraints for handle height, reach, grip and the lifting motion — turning ergonomics into physical design decisions.”

---

# SECTION 07 — DESIGN BRIEF + TARGET USERS

## Title

Designing for the people who already know the pond.

Desktop:
Two content groups / stacked editorial blocks.

## DESIGN BRIEF

Main statement:

“Design an affordable, ergonomically optimized hand tool that helps makhana workers collect seeds more safely, comfortably and productively while preserving traditional harvesting knowledge.”

Then create six compact target cards:

ERGONOMIC
30–50% reduction in postural stress and submersion time

SAFETY
50% reduction in thorn-related injuries

PRODUCTIVITY
4.0 → 6–8 kg/hr target per worker

ECONOMIC
Under ₹5,000 target cost

USABILITY
Learnable in 1 day; maintainable locally

DURABILITY
3–5 year lifespan in aquatic environment

Clearly label these as:
DESIGN TARGETS
not measured results.

## TARGET USERS

Create two concise user profiles.

PRIMARY USER
Makhana harvesters

- Men, 25–55 in the source project profile
- Mallah / Sahni communities
- 10–35 years traditional harvesting experience
- Mithilanchal region
- Chronic physical strain + thorn injuries
- Need reduced strain, better safety and higher productivity

BUYER / EMPLOYER
Small-scale farmers

- 1–5 acres of makhana ponds
- Labor shortages
- Rising wages
- Mechanized harvesters unaffordable
- Limited tool budget
- Need a practical efficiency improvement

Do not make these profiles look like corporate personas. Keep them grounded in the field context.

---

# SECTION 08 — RESEARCH METHOD + FIELD EVIDENCE

## Title

I went back to the work itself.

Do not reproduce the interview-question slides in full.

Merge the information from the relevant interview, observation and insight slides into an evidence-driven methodology section.

## Layout

Use THREE large methodology modules:

01 — TELEPHONIC INTERVIEWS

What I wanted to understand:
- harvesting routine
- tools currently used
- physical pain
- thorn injuries
- seed loss
- earnings and labor
- acceptance of a new tool
- important characteristics such as safety, speed, simplicity and cost

02 — OBSERVATIONAL STUDY

What I looked at:
- worker posture
- water depth and visibility
- interaction with thorny plants
- group-based working
- manual tools
- movement patterns
- collection environment

03 — RESEARCH SYNTHESIS

Evidence was compared against the original research assumptions to identify what was confirmed, what was new, and what needed to influence the design.

## Evidence strip

Show these as concise verification statements:

25–30%
Seed loss reported by multiple farmers

6–8 HOURS
Submersion confirmed through interviews

“WITHOUT HANDS, CANNOT HARVEST”
A key statement reflecting continued manual dependence

5 FT
Reported as a more productive / workable depth compared with shallower conditions

72 HOURS
Total processing timeline mentioned in interview synthesis

65–70%
Material loss noted during processing; 30 kg raw → about 8–10 kg popped was reported

## Visual evidence

Use observational images from:
`05_research/`

Recommended:
slide_25_img_01.jpg
slide_25_img_02.jpg
slide_25_img_03.jpg
slide_25_img_04.jpg

Use them as evidence, not decoration.

Also show a very small “research trail” label:
INTERVIEWS + OBSERVATION + EXISTING-SOLUTION REVIEW

## Important distinction

Do not claim formal quantitative validation happened.
These are interview/observation findings and research synthesis.

---

# SECTION 09 — USER PERSONA + EMPATHY MAP

## Title

Meet Rajesh.

Desktop:
Create a strong TWO-COLUMN composition.

LEFT:
USER PERSONA

RIGHT:
EMPATHY MAP

Do not use a screenshot of the old persona card as the primary layout.
Rebuild the persona and empathy map as native website components using the source information.

Use the existing persona image only as the portrait/reference where appropriate.

## PERSONA

Rajesh
Makhana Seed Harvester

38 years old
22 years of experience
Mallah community
Darbhanga District, Mithilanchal, Bihar

WORK CONTEXT
- 6–8 hours/day during harvest
- 3.8–4.0 kg/hour productivity
- Traditional bamboo tools
- Works with groups of harvesters

PAIN POINTS
- chronic back, neck and wrist pain
- frequent thorn injuries
- low daily earnings
- fear of long-term physical damage
- occupation losing younger workers

VALUES
- family tradition
- community ties
- occupational pride
- keeping farming alive across generations

TECHNOLOGY COMFORT
- low digital literacy
- prefers hands-on demonstration
- values peer recommendations
- open to practical innovation

## EMPATHY MAP

Create four visually distinct sections:
SAYS
THINKS
DOES
FEELS

SAYS
“My hands are covered in thorn marks and my whole body hurts from this work.”
“These bamboo tools haven’t changed in generations.”
“Young people won’t do this work anymore.”
“There must be a better way to do this.”

THINKS
“My back pain and constant injuries are treated as normal, but they shouldn’t be.”
“I don’t want to leave farming, but this occupation may disappear.”
“Machines exist, but they are too expensive for us.”

DOES
- submerges in murky pond water
- works in bent/prone positions
- manually sweeps and searches for seeds
- uses bamboo sieves and repeated shaking
- works in groups for safety
- passes traditional knowledge to the next generation

FEELS
- physical pain
- frustration with low earnings
- pride in traditional expertise
- concern about the future of the occupation
- strong openness to practical innovation

## Visual direction

The empathy map should look like an actual designed system:
- clear quadrant structure
- large labels
- small supporting icons if the existing design system allows them
- no huge paragraphs
- no generic stock illustrations

Mobile:
Persona first, then empathy map as four stacked sections OR two-column internal grid where readable.
Do not shrink all four empathy quadrants into one tiny card.

---

# SECTION 10 — DESIGN OPPORTUNITY

## Title

The opportunity was not to replace the worker. It was to reduce the work the body should not have to do.

Use the problem statement from the source as the foundation, but rewrite it for web readability.

Main text:

Workers in Bihar’s makhana industry spend hours submerged in murky pond water, working in extreme bent-over positions with traditional tools to search for and collect seeds from the pond bed. The process creates substantial physical strain, repeated thorn exposure, low productivity and seed loss — while the available mechanical alternatives are too expensive or technically demanding for small-scale use.

Then a highlighted statement:

DESIGN OPPORTUNITY

Create an affordable hand tool that uses ergonomic working heights, simple mechanical advantage and integrated collection to reduce unnecessary physical strain while improving seed-collection efficiency.

Add a simple WHY NOW strip:

HIGH PHYSICAL COST
+
LOW PRODUCTIVITY
+
TECHNOLOGY GAP
+
AFFORDABILITY NEED
=
DESIGN OPPORTUNITY

---

# SECTION 11 — USER NEEDS

## Title

What the solution has to do.

Do not reproduce the source tables literally.

Create a priority framework with three levels:

PRIMARY

Reduce musculoskeletal strain
Prevent thorn injuries
Increase productivity and earnings
Maintain occupational dignity

SECONDARY

Reduce submersion time
Improve posture
Improve seed recovery
Enable group-based harvesting

TERTIARY

Access affordable technology
Preserve cultural knowledge
Improve health/safety support
Improve economic agency

## CURRENT → DESIRED visual comparison

Use these source values:

Pain / strain
CURRENT: 78% lower back, 67% neck, 52% wrist
DESIRED: 30–50% reduction target

Thorn injuries
CURRENT: nearly daily puncture exposure in source synthesis
DESIRED: 50% fewer injuries target

Productivity
CURRENT: 3.8–4.0 kg/hr
DESIRED: 6–8 kg/hr

Earnings
CURRENT: ₹250–600/day
DESIRED: ₹400–800/day target from project user-needs table

Submersion
CURRENT: 6–8 hrs
DESIRED: 4–6 hrs target

Seed recovery
CURRENT: 25% seeds reported lost in the user-needs/problem framing
DESIRED: recover 5–10% additional seeds

Affordability
CURRENT: ₹1–3 lakh mechanical options
DESIRED: tool under ₹5,000

Do not present the desired-state numbers as measured outcomes. Label them clearly as:
TARGET / DESIRED STATE

## End transition

End with a compact statement:

“These needs became the criteria against which concepts would be explored next.”

This creates a natural bridge into the next phase, which will be added later.

---

# SECTION ORDER — FINAL

The page after the unchanged hero must be EXACTLY:

01 Introduction
02 Makhana Production Cycle
03 Production Image Carousel
04 Problem Overview / Opportunity Gap
05 Existing Products / Methods
06 Ergonomic Findings + Anthropometry
07 Design Brief + Target Users
08 Research Method + Field Evidence
09 User Persona + Empathy Map
10 Design Opportunity
11 User Needs

Do not add ideation, concept finalization, technical breakdown, renders, impact or conclusion yet.
Those sections will be added later.

---

# RESPONSIVE REQUIREMENTS

The desktop page is NOT the mobile design.

For every section:

- define an intentional mobile layout
- preserve hierarchy
- preserve large statistics
- avoid tiny tables
- avoid unreadable technical/reference graphics
- use touch-friendly horizontal scrolling where appropriate
- avoid hover-dependent meaning
- use accessible focus styles
- use semantic headings
- use meaningful alt text
- respect prefers-reduced-motion

Specific mobile rules:

Introduction:
Text → KPI cards → image

Cycle:
Horizontal desktop flow becomes vertical mobile flow

Image carousel:
Touch-scroll + gentle autoplay + partial next card visibility

Problem bento:
Collapse into a one-column narrative order. Put the most important health/productivity statistics first.

Existing methods:
Stack Kaara above Ganjaa.

Ergonomics:
Benchmark first, anthropometric data second.

Design brief:
Mission → targets → target users.

Research:
Method cards → visual evidence → verified insights.

Persona:
Persona → empathy map.

Opportunity:
Problem → opportunity statement.

User needs:
Primary → secondary → tertiary → current vs desired.

---

# MOTION GUIDELINES

Use motion sparingly and only where it improves comprehension.

Good:
- section entrance reveals
- number counter only if subtle and not misleading
- horizontal image marquee
- flow-chart progression
- card hover elevation if already consistent with site

Avoid:
- excessive parallax
- decorative 3D motion
- heavy page transitions
- autoplay video

All motion must have a reduced-motion fallback.

---

# IMAGE SOURCES

Use the dedicated asset folder supplied with this prompt:

`MAKHANA_PAGE_ASSETS/`

Relevant current-phase folders:

`01_introduction/`
`02_cycle/`
`03_problems/`
`04_existing_methods/`
`05_research/`
`06_persona_empathy/`

Future-phase assets are stored separately and should NOT be used yet except where explicitly referenced:

`07_ideation_future/`
`08_product_concept_future/`

Source files are retained in:

`09_source_materials/`

---

# CONTENT HONESTY / SOURCE RULES

Important:

Do not invent prototype testing results.
Do not call targets “results”.
Do not claim field validation that is not in the source.
Do not turn concept visualizations into real field photographs.
Do not merge conflicting statistics without labeling their context.

The project contains:
- project framing statistics
- literature/benchmark data
- interview findings
- observation findings
- design targets

Keep those categories separate.

The Final Design Summary provides technical/anthropometric values. Use them only in the Ergonomic Findings + Anthropometry section for this phase.

---

# FILES TO USE

Primary project sources:
- `09_source_materials/MAKHANA SEED COLLECTION_ ERGONOMIC HAND TOOL DESIGN(2).pdf`
- `09_source_materials/MAKHANA SEED COLLECTION_ ERGONOMIC HAND TOOL DESIGN(1).pptx`
- `09_source_materials/MAKHANA SEED COLLECTION_ ERGONOMIC HAND TOOL DESIGN(1).txt`
- `09_source_materials/🌾 Final Design Summary.docx`

---

# FINAL QA

Before finishing, verify all of the following:

1. Hero unchanged.
2. Old Makhana body sections deleted.
3. Exactly 11 sections rebuilt in the specified order.
4. Existing portfolio design system reused.
5. No unrelated pages modified.
6. Source images used instead of replacement AI images.
7. Slide 5 process images animate horizontally.
8. Problem section uses a true responsive bento composition.
9. All important statistics from slides 9, 11 and 12 are represented.
10. 15.8% and 25–30% seed-loss figures are kept distinct.
11. Kaara and Ganjaa are clearly explained.
12. Anthropometric values are presented compactly and legibly.
13. Persona + empathy map are rebuilt as native website UI.
14. User needs are clearly ranked by priority.
15. Design targets are explicitly labelled as targets.
16. Mobile has intentional layouts, not just compressed desktop.
17. No section is overloaded with paragraph text.
18. Visual hierarchy favors evidence over decoration.
19. The page ends this phase at User Needs, ready for the next design-process phase.

Do not continue into later project stages until these 11 sections are implemented and visually checked.
