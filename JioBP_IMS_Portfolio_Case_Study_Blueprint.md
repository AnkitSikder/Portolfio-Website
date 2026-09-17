# Jio-bp Incident Management System (IMS)
## Complete Portfolio Case Study Blueprint + Visual Placeholder Plan + Antigravity Build Prompt

> **Project positioning:** Designing a role-based safety ecosystem from frontline reporting to enterprise intelligence.

> **Core idea:** One incident. Different decisions. One connected lifecycle.

---

# 0. HOW TO USE THIS DOCUMENT

This document is the production blueprint for building the IMS project-description page on the portfolio website.

It contains:

- Complete portfolio page architecture
- Section-by-section content
- UI screenshot placeholders
- Information architecture
- Incident lifecycle flow
- User flows
- Journey map
- Mind-map structure
- Research synthesis visuals
- Low-fidelity ideation/wireframe plan
- KPI architecture
- Dashboard comparison
- Component showcase plan
- Table/database design
- Gamification/achievement story
- Design system presentation
- Testing/validation structure
- Exact instructions for using the existing HTML screens
- A detailed copy-paste prompt for Antigravity

---

# 1. PROJECT HERO

## Title

# Jio-bp Incident Management System

## Subtitle

**Designing a role-based safety ecosystem from frontline reporting to enterprise intelligence.**

## Hero statement

> **One incident. Different decisions. One connected lifecycle.**

## Supporting description

I studied how safety incidents move through a hierarchical organization and designed role-specific decision environments around the same incident lifecycle — from frontline reporting at a retail outlet, through area-level review and action, to enterprise-level risk intelligence and organizational learning.

## Metadata

| Category | Details |
|---|---|
| Organization | Jio-bp |
| Product | Incident Management System |
| Domain | HSE / Safety Operations |
| Platform | Responsive Enterprise Web Application |
| Primary Users | RO · ASR · SOM · SH · HO |
| Focus | UX Research · IA · Workflow Design · Data Visualization · UI Design |
| Tools | Figma · Design System · HTML/CSS Prototype |

---

## HERO VISUAL PLACEHOLDER

### Recommended composition

Three large screens layered in depth:

```text
              [ ASR DASHBOARD ]
                   ╱     ╲

        [ RO DASHBOARD ]   [ HO DASHBOARD ]
```

The composition should communicate:

```text
RO  →  ASR  →  HO
ACT    DECIDE   GOVERN
```

### Assets to insert

- `[PLACEHOLDER — RO Dashboard HTML Screenshot]`
- `[PLACEHOLDER — ASR Dashboard HTML Screenshot]`
- `[PLACEHOLDER — HO Dashboard HTML Screenshot]`

---

# 2. THE CONTEXT

## Heading

# Safety incidents don't end when they are reported.

An incident begins at the frontline, but responsibility for understanding, resolving and preventing it extends throughout the organization.

A Retail Outlet may identify a hazard. An ASR may review the evidence and decide what happens next. Senior stakeholders may need to identify whether similar incidents are recurring across states or regions.

The challenge was not simply designing a dashboard.

It was designing how incident information moves through an organization.

---

## VISUAL — INCIDENT RESPONSIBILITY EXPANSION

```text
ONE INCIDENT
     │
     ▼
ONE STATION
     │
     ▼
MULTIPLE OUTLETS
     │
     ▼
STATE / REGION
     │
     ▼
ENTERPRISE
```

---

# 3. THE DESIGN CHALLENGE

## Main question

> **How can one incident-management system remain simple enough for frontline users, actionable enough for managers and analytical enough for leadership — without overwhelming any of them?**

## Core UX model

```text
                     SAME INCIDENT DATA
                            │
             ┌──────────────┼──────────────┐
             ▼              ▼              ▼
            RO             ASR             HO
             │              │              │
            ACT           DECIDE          GOVERN
             │              │              │
          STATION          AREA        ENTERPRISE
          SAFETY       PERFORMANCE       RISK
```

### Key principle

> **The information model stays connected. The decision model changes by role.**

---

# 4. DOMAIN IMMERSION

## Heading

# Before designing the interface, I studied the system behind it.

### What I needed to understand

- How incidents are reported
- Who reviews them
- Who owns the next action
- How escalation works
- How decisions are recorded
- How evidence is attached
- How incidents are closed
- How recurring incidents become organizational learning

---

## DOMAIN MIND MAP

```text
                         IMS
                          │
      ┌───────────────────┼───────────────────┐
      ▼                   ▼                   ▼
   PEOPLE               INCIDENTS            KNOWLEDGE
      │                   │                   │
 RO → ASR → SOM → SH → HO │              SOPs / Policies
                          │                   │
                    ┌─────┼─────┐             │
                    ▼     ▼     ▼             ▼
                 Report Review Action      Prevention
                    │     │     │
                    ▼     ▼     ▼
                 Evidence Decision Timeline
```

---

## RESEARCH VISUAL PLACEHOLDER

`[PLACEHOLDER — DOMAIN RESEARCH / NOTES / WORKFLOW ANALYSIS IMAGE]`

Recommended presentation:
- Photo or screenshot of notes
- System workflow annotations
- Existing screen observations
- Role hierarchy diagram

---

# 5. RESEARCH METHODOLOGY

## Process

```text
DISCOVER
   ↓
EXPLORE
   ↓
UNDERSTAND USERS
   ↓
BENCHMARK
   ↓
SYNTHESIZE
   ↓
DEFINE
   ↓
DESIGN
   ↓
VALIDATE
```

### Discover
- Domain immersion
- HSE context study
- Existing-system walkthrough

### Explore
- Existing UI audit
- Workflow reconstruction
- Screen inventory
- Interaction analysis

### Understand Users
- Role/task analysis
- Permission analysis
- Organizational hierarchy

### Benchmark
- Enterprise incident-management patterns
- Reporting workflows
- Evidence handling
- Corrective action patterns
- Analytics patterns

### Synthesize
- Observations
- Pain points
- Needs
- Opportunities
- UX principles

### Define
- Information architecture
- Incident lifecycle
- Role-based access
- User flows

### Design
- Low-fidelity ideation
- Dashboard architecture
- Components
- Data visualization
- High-fidelity UI

### Validate
- Task-based walkthroughs
- Heuristic review
- Role-based evaluation
- Accessibility checks

---

# 6. USER & STAKEHOLDER ECOSYSTEM

## Organizational hierarchy

```text
                         HO
                   Head Officer
                         │
                         ▼
                         SH
                     State Head
                         │
                         ▼
                        SOM
               Sales Officer Manager
                         │
                         ▼
                        ASR
            Area Sales Representative
                         │
                         ▼
                        RO
                   Retail Outlet
```

---

# 7. ROLE-BASED INFORMATION STRATEGY

## The same system, three different decision environments.

| Role | Scope | Primary Goal | Core Question |
|---|---|---|---|
| RO | One outlet | Execute | What is happening here? |
| ASR | Multiple outlets | Decide | What needs my action? |
| SOM / SH | State operations | Review | Where is risk increasing? |
| HO | Enterprise | Govern | What patterns affect the business? |

---

## VISUAL — ROLE CARDS

### RO
**ACT**
Station-level safety

### ASR
**DECIDE**
Area-level operations

### HO
**GOVERN**
Enterprise-level risk

`[PLACEHOLDER — ROLE STRATEGY INFOGRAPHIC]`

---

# 8. RESEARCH SYNTHESIS

## Insight 01

# Incident management is a lifecycle, not a form.

The reporting form is only the entry point.

---

## Insight 02

# Role determines information density.

Frontline users need clarity and actionability.

Leadership needs aggregation and patterns.

---

## Insight 03

# Status alone is not enough.

Users need:

**Status + Owner + Next Action + SLA**

---

## Insight 04

# Decisions need context.

Rejecting, closing or escalating an incident should happen after reviewing the evidence, history and current state.

---

## Insight 05

# Evidence should stay connected to the incident.

Photos, documents, remarks and decisions should remain part of one traceable record.

---

## Insight 06

# Data changes meaning as scope increases.

```text
INCIDENT
   ↓
STATION
   ↓
AREA
   ↓
STATE
   ↓
ENTERPRISE
```

---

## Insight 07

# Resolution should create learning.

```text
INCIDENT
   ↓
ROOT CAUSE
   ↓
CORRECTIVE ACTION
   ↓
VERIFICATION
   ↓
LESSON LEARNED
   ↓
SOP / POLICY
   ↓
PREVENTION
```

---

## Insight 08

# Safety participation should be positively reinforced.

The objective is to encourage:

- Early reporting
- Complete reporting
- Evidence quality
- Consistency
- Follow-through

---

# 9. PROBLEM → INSIGHT → OPPORTUNITY

## INFORMATION VISUALIZATION

| Problem | Insight | Opportunity |
|---|---|---|
| One dashboard for different roles | Roles have different decisions | Role-based dashboards |
| Long incident lists | Users need prioritization | Action queues |
| Status lacks context | Users need ownership and next steps | Action states + SLA |
| Evidence is fragmented | Decisions need context | Unified incident record |
| Closed incidents disappear | Organizations need memory | Learning from incidents |
| Reporting may feel unrewarding | Participation needs reinforcement | Recognition system |

`[PLACEHOLDER — RESEARCH SYNTHESIS INFOGRAPHIC]`

---

# 10. INFORMATION ARCHITECTURE

```text
IMS
│
├── Overview
│
├── Incidents
│   ├── All Incidents
│   ├── My Incidents
│   ├── Assigned to Me
│   ├── Drafts
│   ├── In Progress
│   ├── Escalated
│   ├── Rejected
│   └── Closed
│
├── Report Incident
│
├── Investigation
│   ├── Findings
│   ├── Severity
│   ├── Root Cause
│   └── Corrective Actions
│
├── Learning
│   ├── Lessons Learned
│   ├── SOPs
│   ├── Policies
│   └── Best Practices
│
├── Analytics
│   ├── Incident Trends
│   ├── Station Performance
│   ├── State Performance
│   ├── Regional Performance
│   └── Business Impact
│
└── Administration
    ├── Users
    ├── Roles
    ├── Notifications
    └── Settings
```

---

## VISUAL PLACEHOLDER

`[PLACEHOLDER — FULL-WIDTH INFORMATION ARCHITECTURE DIAGRAM]`

Design treatment:
- Large nodes
- Green connecting lines
- White cards
- Clean editorial spacing
- Minimal enterprise aesthetic

---

# 11. END-TO-END INCIDENT FLOW

```text
INCIDENT OCCURS
       ↓
REPORT
       ↓
ADD EVIDENCE
       ↓
SUBMIT
       ↓
REVIEW
       ↓
CLASSIFY
       ↓
ASSIGN OWNER
       ↓
ACTION / ESCALATION
       ↓
CORRECTIVE ACTION
       ↓
VERIFY
       ↓
CLOSE
       ↓
LEARN
       ↓
SOP / POLICY / TRAINING
       ↓
PREVENT RECURRENCE
```

## Flow visual placeholder

`[PLACEHOLDER — HORIZONTAL INCIDENT LIFECYCLE FLOWCHART]`

---

# 12. USER JOURNEY MAP

## RO Journey

| Stage | Observe | Report | Submit | Track | Learn |
|---|---|---|---|---|---|
| Goal | Identify hazard | Capture issue | Complete report | Know status | Improve practice |
| Need | Clarity | Speed | Confidence | Visibility | Recognition |
| Pain Point | What counts as an incident? | Too many fields | Uncertainty | No feedback | No motivation |
| Opportunity | Guidance | Simplified form | Clear confirmation | Event timeline | Achievement system |

## ASR Journey

| Stage | Receive | Review | Understand | Decide | Follow up |
|---|---|---|---|---|---|
| Goal | Find priorities | Review evidence | Build context | Take correct action | Ensure closure |
| Need | Prioritization | Context | Ownership | Confidence | Traceability |
| Opportunity | Action queue | Incident detail | Timeline | Guardrails | SLA monitoring |

## HO Journey

| Stage | Monitor | Compare | Detect | Investigate | Govern |
|---|---|---|---|---|---|
| Goal | Understand enterprise health | Compare regions | Find patterns | Drill down | Improve prevention |
| Need | Macro visibility | Context | Signals | Evidence | Learning |
| Opportunity | KPIs | Rankings | Trends | Map | SOP adoption |

`[PLACEHOLDER — JOURNEY MAP INFOGRAPHIC]`

---

# 13. LOW-FIDELITY IDEATION

## Why this section matters

Show that the final interface did not begin with polished UI.

The process should demonstrate:

```text
CONTENT INVENTORY
      ↓
PRIORITIZATION
      ↓
LAYOUT EXPLORATION
      ↓
WIREFRAME
      ↓
COMPONENT STRUCTURE
      ↓
HIGH-FIDELITY UI
```

---

## WIREFRAME PLACEHOLDER A

### Early dashboard hierarchy

```text
┌──────── Sidebar ────────┬──────────────────────────────┐
│                         │ Header                       │
│ Dashboard               ├───────────┬───────────┬──────┤
│ Incidents               │ KPI       │ KPI       │ KPI  │
│ Learning                ├───────────┴───────────┴──────┤
│ Settings                │                              │
│                         │       MAIN CONTENT           │
│                         │                              │
└─────────────────────────┴──────────────────────────────┘
```

---

## WIREFRAME PLACEHOLDER B

### Action-first ASR dashboard

```text
┌───────────────────────────────────────────────────────┐
│ KPIs                                                  │
├──────────────────────────┬────────────────────────────┤
│ INCIDENTS REQUIRING      │ STATION PERFORMANCE        │
│ YOUR ACTION              │                            │
│                          │                            │
├──────────────────────────┴────────────────────────────┤
│ Incident Trend / Severity / Status                    │
└───────────────────────────────────────────────────────┘
```

---

## WIREFRAME PLACEHOLDER C

### RO dashboard

```text
┌───────────────────────────────────────────────────────┐
│ MY INCIDENTS  │ DRAFTS │ IN PROGRESS │ CLOSED         │
├──────────────────────────────┬────────────────────────┤
│ MY RECENT INCIDENTS          │ STATION SAFETY         │
│                              │                        │
├──────────────────────────────┼────────────────────────┤
│ ACTIVITY HEATMAP             │ ACHIEVEMENT PROGRESS   │
└──────────────────────────────┴────────────────────────┘
```

---

# 14. DASHBOARD STRATEGY

# RO — ACT

## Core question

> How is my station doing, and what do I need to do?

### KPI layer
- My Reported Incidents
- Draft Reports
- Total Incidents
- In Progress
- Rejected
- Closed

### Station health
- Station Safety
- Average Resolution Time

### Activity
- Incident Activity Heatmap

### Engagement
- Achievement Progress
- Safety Contribution

### Design decision

I intentionally avoided complex trend and donut charts for RO because their operational scope is one station.

The goal was not to provide less information.

The goal was to provide information appropriate to their responsibility.

---

## RO SCREEN PLACEHOLDER

`[UI SCREENSHOT — RO DASHBOARD FROM HTML]`

### Annotate with callouts

1. **Personal incident visibility**
2. **Station-level safety health**
3. **Activity heatmap**
4. **Recognition and achievements**

---

# 15. SAFETY ENGAGEMENT & RECOGNITION

## Heading

# Encouraging better safety participation

The RO dashboard includes a badge and achievement system designed around positive safety behaviors.

### Behaviors reinforced
- First report
- Fast reporting
- Evidence submission
- Consistency
- Detail quality
- Reporting milestones

### Important design principle

Do not reward raw incident volume alone.

The system should encourage:

> **Better safety behavior, not simply more incidents.**

---

## GAMIFICATION LOOP

```text
OBSERVE
   ↓
REPORT
   ↓
RECEIVE FEEDBACK
   ↓
EARN RECOGNITION
   ↓
BUILD SAFETY HABIT
   ↓
REPORT EARLIER
   ↓
MORE COMPLETE SAFETY DATA
```

---

## UI PLACEHOLDERS

`[UI IMAGE — ACHIEVEMENTS LOCKED STATE]`

`[UI IMAGE — ACHIEVEMENTS EARNED STATE]`

Recommended visual treatment:
- Full-width achievement interface
- Badge crops floating around it
- Short behavioral rationale beside it

---

# 16. ASR — DECIDE

## Core question

> What requires my attention, and how are my outlets performing?

### Action KPIs
- Assigned to Me
- My Incidents
- Overdue
- Escalated

### Area KPIs
- Total Incidents
- Resolution Rate
- Average Response Time
- Average Resolution Time
- Critical Incidents
- Stations Requiring Attention

### Analytics
- Incident trend
- Status distribution
- Severity distribution
- Top stations
- Station performance ranking

---

## ASR SCREEN PLACEHOLDER

`[UI SCREENSHOT — ASR DASHBOARD FROM HTML]`

### Annotate

1. **Action queue**
2. **Regional KPIs**
3. **Performance comparison**
4. **Analytics for decision-making**

---

# 17. ACTION QUEUE

## Title

# Incidents Requiring Your Action

### Subtitle

> Review, respond and move assigned incidents toward resolution.

### Recommended card anatomy

```text
INCIDENT ID

Incident Title

Station / Location

Severity
Current Owner
Current Stage
SLA

NEXT REQUIRED ACTION

[ REVIEW & ACT → ]
```

### UX principle

Avoid placing dangerous decisions such as:

`Reject | Close | Escalate`

directly inside a dense list.

Instead:

`Review & Act →`

Then allow the decision after context has been reviewed.

---

# 18. HO — GOVERN

## Core question

> What is happening across the organization, where is risk increasing, and what requires leadership attention?

### Enterprise KPIs
- Total Incidents
- Critical Incidents
- Open Incidents
- Resolution Rate
- SLA Compliance
- Repeat Incident Patterns

### Enterprise intelligence
- Business impact
- State performance
- Regional performance
- Incident categories
- Severity
- Geographic distribution

---

## HO SCREEN PLACEHOLDER

`[UI SCREENSHOT — HO DASHBOARD FROM HTML]`

### Annotate

1. **Enterprise KPI layer**
2. **Regional comparison**
3. **State performance ranking**
4. **Geographic risk visibility**
5. **Category and severity analysis**

---

# 19. KPI ARCHITECTURE

## RO KPIs — Personal / Station

```text
MY REPORTS
DRAFTS
IN PROGRESS
CLOSED

STATION SAFETY
AVG. RESOLUTION TIME
```

## ASR KPIs — Area / Operational

```text
ASSIGNED TO ME
OVERDUE
ESCALATED

TOTAL INCIDENTS
RESOLUTION RATE
AVG. RESPONSE TIME
```

## HO KPIs — Enterprise / Strategic

```text
TOTAL INCIDENTS
CRITICAL INCIDENTS
SLA COMPLIANCE
REPEAT PATTERNS

BUSINESS IMPACT
REGIONAL RISK
STATE PERFORMANCE
```

---

## KPI COMPONENT PLACEHOLDER

`[PLACEHOLDER — KPI COMPONENT FAMILY]`

Show:
- Default KPI
- Positive KPI
- Warning KPI
- Critical KPI
- Trend variation
- Comparison variation

---

# 20. DATA VISUALIZATION STRATEGY

## RO

**Activity Heatmap**

Purpose:
> When does incident activity occur?

---

## ASR

- Incident Trend
- Status Distribution
- Severity Distribution
- Top Stations
- Performance Ranking

---

## HO

- Region Comparison
- State Ranking
- Geographic Map
- Category Analysis
- Severity Matrix
- Business Impact

---

## Visualization principle

> Visualization complexity should increase with the user's scope of responsibility.

---

# 21. INCIDENT DETAIL — SINGLE SOURCE OF TRUTH

## Heading

# One incident. One complete record.

The incident detail experience brings together:

```text
CONTEXT
   +
EVIDENCE
   +
REMARKS
   +
OWNERSHIP
   +
DECISIONS
   +
TIMELINE
   +
ACTIONS
   +
RESOLUTION
   +
LEARNING
```

---

## UI PLACEHOLDER

`[UI IMAGE — INCIDENT DETAIL / STATUS MODAL]`

### Detail crops

`[CROP — INCIDENT CONTEXT]`

`[CROP — ATTACHMENT / EVIDENCE]`

`[CROP — REMARKS]`

`[CROP — EVENT LOG]`

`[CROP — APPROVAL / STATUS TIMELINE]`

---

# 22. EVENT LOG & TIMELINE

```text
18 Mar · 09:14
Incident submitted by RO

        ↓

18 Mar · 09:42
Assigned to ASR

        ↓

18 Mar · 10:17
ASR added a remark

        ↓

18 Mar · 10:21
Escalated to SOM

        ↓

19 Mar · 09:20
Corrective action assigned

        ↓

21 Mar · 11:08
Resolution evidence uploaded

        ↓

21 Mar · 16:14
Incident closed
```

### Why it matters
- Accountability
- Traceability
- Visibility
- Context
- Auditability

---

# 23. DECISION GUARDRAILS

## High-consequence actions should ask for context.

### Reject
**Why is this being rejected?**

### Close
**What evidence confirms resolution?**

### Escalate
**Why does this require senior intervention?**

### Assign
**Who owns the next action?**

---

# 24. STATUS VS ACTION STATE

## Status

**In Progress**

## Action State

**Awaiting ASR Review**

Other examples:
- Awaiting Resolution Evidence
- Awaiting SOM Decision
- Awaiting Verification

This makes the next required action explicit.

---

# 25. LEARNING FROM INCIDENTS

## Heading

# Closing an incident should create knowledge.

### Example framework

```text
PATTERN DETECTED
14 similar incidents

        ↓

COMMON ROOT CAUSE
Improper equipment inspection

        ↓

CORRECTIVE ACTION
Inspection checklist updated

        ↓

PREVENTIVE ACTION
Monthly inspection introduced

        ↓

KNOWLEDGE ASSET
SOP — Equipment Inspection v2.1
```

---

# 26. GRID VS LIST

## List view

Best for:
- Scanning
- Comparison
- Sorting
- Filtering
- High-volume work

## Grid view

Best for:
- Recognition
- Exploration
- Cards
- Incident summaries
- Mobile

### UX rationale

> **List optimizes comparison. Grid optimizes recognition.**

---

# 27. TABLE DESIGN

## Recommended columns

| Priority | Incident | Location | Reported | Severity | Owner | Status | SLA | Action |
|---|---|---|---|---|---|---|---|---|

### Table interaction design

- Sticky header
- Search
- Filters
- Sorting
- Status indicators
- Severity badges
- Grid/List toggle
- Row hover
- Empty states
- Loading states
- Responsive adaptation

---

## UI PLACEHOLDER

`[UI IMAGE — INCIDENT DATABASE TABLE]`

`[UI IMAGE — GRID VIEW]`

---

# 28. DESIGN SYSTEM

## Foundations

### Brand Green
`#00A94F`

### Secondary Green
`#008A40`

### Primary Text
`#0F172A`

### Neutral UI
`#F8FAFC` → `#0F172A`

### Brand Yellow
`#FFD100`

### Jio Red
`#E31E24`

---

## Typography

- Display / Hero
- Heading 1
- Heading 2
- Heading 3
- Heading 4
- Subtitle
- Body
- Caption
- Overline

Use the existing Jio-bp design-system typography and token definitions as the source of truth.

---

## Component families

### Core
- Buttons
- Inputs
- Dropdowns
- Search
- Tabs
- Chips
- Badges
- Alerts
- Modals

### IMS-specific
- KPI Card
- Incident Card
- Severity Badge
- Status Indicator
- Action State
- Progress Tracker
- Timeline
- Event Log
- Evidence Attachment
- Remark Block
- SLA Indicator
- Approval Chain
- Decision Guardrail
- Achievement Badge
- Incident Table
- Grid/List Toggle
- Empty State
- Loading State

---

## DESIGN SYSTEM VISUAL PLACEHOLDER

`[PLACEHOLDER — DESIGN TOKENS]`

`[PLACEHOLDER — COMPONENT LIBRARY]`

`[PLACEHOLDER — KPI COMPONENTS]`

`[PLACEHOLDER — STATUS / SEVERITY COMPONENTS]`

---

# 29. RESPONSIVE UX

## Desktop

High information density and multi-column analytics.

## Tablet

Adaptive layouts and simplified comparison.

## Mobile

Task-focused interaction.

### RO mobile priority
- Report
- My Incidents
- Notifications
- Achievements

### ASR mobile priority
- Assigned Incidents
- Incident Detail
- Review & Act
- Notifications

---

## RESPONSIVE PLACEHOLDER

```text
DESKTOP
   ↓
TABLET
   ↓
MOBILE
```

`[PLACEHOLDER — RESPONSIVE SCREEN COMPARISON]`

---

# 30. LOGIN EXPERIENCE

The redesigned login experience supports:

- Password login
- Mobile OTP login
- Password help
- Accessible input fields
- Clear hierarchy
- Modern brand presentation

---

## LOGIN UI PLACEHOLDER

`[UI SCREENSHOT — LOGIN PAGE FROM HTML]`

### Callouts

1. **Two authentication methods**
2. **Password login**
3. **Mobile OTP login**
4. **Help / password recovery**
5. **Brand visual hierarchy**

---

# 31. USABILITY TESTING PLAN

## RO tasks
- Report an incident
- Save a draft
- Find a previous report
- Check station safety
- View an achievement

## ASR tasks
- Find an assigned incident
- Review evidence
- Add a remark
- Reject
- Close
- Escalate
- Find a high-risk station

## HO tasks
- Identify a high-risk region
- Compare states
- Find a critical category
- Inspect a severe incident
- Find a relevant SOP

---

# 32. TESTING METRICS

### Effectiveness
Task completion rate

### Efficiency
Time on task

### Errors
Incorrect action rate

### Decision quality
Decision accuracy

### Findability
Time to locate relevant information

### Comprehension
Status interpretation accuracy

### Confidence
Post-task confidence

### Critical metric

# Time to Decide

For ASR:

> Open incident → Understand context → Choose correct next action

---

# 33. ACCESSIBILITY

- Text contrast
- Non-color status communication
- Visible focus states
- Adequate touch targets
- Clear labels
- Inline validation
- Accessible error messages
- Predictable navigation
- Descriptive icons
- Confirmation for high-consequence actions

---

# 34. OUTCOME

## Designed to achieve

- Faster frontline reporting
- Clearer role-based decision-making
- Better incident accountability
- Stronger evidence traceability
- More actionable analytics
- Better organizational learning
- Higher safety participation

---

# 35. REFLECTION

## What changed in my thinking?

> I started by redesigning an incident dashboard.

> I ended up redesigning how incident information moves through an organization.

### Final lesson

> **Enterprise UX is not about giving everyone more information. It is about giving every role the right information at the right level of responsibility.**

---

# 36. COMPLETE UI ASSET CHECKLIST

Antigravity should look for and place screenshots for:

## Required hero/product screens
- `[ ] Login Page`
- `[ ] RO Dashboard`
- `[ ] ASR Dashboard`
- `[ ] HO Dashboard`

## Supporting screens
- `[ ] Incident Detail`
- `[ ] Incident Timeline`
- `[ ] Draft Report Form`
- `[ ] Incident Table`
- `[ ] Grid View`
- `[ ] Achievements — Locked`
- `[ ] Achievements — Earned`
- `[ ] Learning from Incidents`
- `[ ] Mobile view, if available`

---

# 37. EXACT HTML SCREENSHOT INSTRUCTIONS

When the HTML project files are available inside the Antigravity workspace:

1. Locate the existing IMS HTML screens.
2. Identify:
   - Login page
   - RO Dashboard
   - ASR Dashboard
   - HO Dashboard
3. Run each screen in the browser using the existing project setup.
4. Capture clean desktop screenshots.
5. Do not redesign the screenshots.
6. Use the actual rendered HTML as the portfolio visual evidence.
7. Crop screenshots intelligently for detail sections.
8. Use the complete dashboard screenshots for major case-study sections.
9. Use cropped UI sections for:
   - KPI cards
   - Tables
   - Charts
   - Achievements
   - Timeline
   - Incident details
10. Preserve the original screen proportions and visual fidelity.

If the HTML files are not present in the workspace, keep the explicit placeholders instead of inventing screenshots.

---

# 38. FIGMA MCP CONTEXT

The existing Jio-bp Figma file/design system should be used as a visual reference.

## Figma file

`EcfPLRwuAhgT9GcUfeIXnM`

## Design system evidence available

### Brand green
`#00A94F`

### Secondary green
`#008A40`

### Brand yellow
`#FFD100`

### Jio red
`#E31E24`

### Primary text
`#0F172A`

### Typography
Jio-bp design system typography scale and semantic token structure.

Use the Figma design system for:
- Color tokens
- Typography
- Spacing rhythm
- UI styling
- Component language

Do not blindly copy the design-system documentation into the case study. Use it as the visual foundation.

---

# 39. ANTIGRAVITY — MASTER BUILD PROMPT

Copy everything below into Antigravity.

---

## PROMPT START

You are working inside my existing portfolio website project.

I need you to create a **new premium project case-study page** for my project:

# Jio-bp Incident Management System (IMS)

This must feel like a highly polished **UX/UI portfolio case study**, not a generic landing page and not an academic report.

Before changing anything:

1. Inspect the existing portfolio codebase.
2. Identify the existing technology stack.
3. Identify the existing routing structure.
4. Identify the styling system.
5. Inspect the existing project-detail/internal case-study pages.
6. Reuse the existing portfolio navigation, spacing rhythm, typography, animation style, footer and visual language.
7. Do not redesign the whole portfolio website.
8. Create this page as a natural continuation of the existing portfolio.

---

# PROJECT CONTEXT

This project is a redesign of a **Jio-bp Incident Management System (IMS)** used for safety/HSE incident reporting and management.

The core concept is:

> **One incident. Different decisions. One connected lifecycle.**

I studied how incident information moves through a hierarchical organization and designed role-specific decision environments.

The user hierarchy is:

```text
HO — Head Officer
↓
SH — State Head
↓
SOM — Sales Officer Manager
↓
ASR — Area Sales Representative
↓
RO — Retail Outlet
```

The three primary dashboards are:

### RO — ACT
Station-level safety and frontline reporting.

### ASR — DECIDE
Area-level incident management and operational decision-making.

### HO — GOVERN
Enterprise-level risk, analytics and strategic oversight.

Important principle:

> The information model stays connected. The decision model changes by role.

---

# FIGMA MCP

Use the connected Figma design context where available.

The Jio-bp design-system file key is:

`EcfPLRwuAhgT9GcUfeIXnM`

Use it as a visual reference for:

- Brand green `#00A94F`
- Secondary green `#008A40`
- Brand yellow `#FFD100`
- Jio red `#E31E24`
- Primary dark text `#0F172A`
- Neutral UI palette
- Typography hierarchy
- Existing Jio-bp component language

Do not create a separate design system for the case study. The page should visually respect both:
1. My existing portfolio website style
2. The Jio-bp IMS design system in the product visuals

---

# VERY IMPORTANT: USE ACTUAL HTML SCREENS

Search the current workspace/project files for the actual IMS HTML screens.

I specifically want screenshots/examples from:

1. Login Page
2. RO Dashboard
3. ASR Dashboard
4. HO Dashboard

If these HTML screens exist:

- Run them using the existing project setup.
- Open each in a browser.
- Capture clean screenshots.
- Use the ACTUAL rendered screens in the portfolio case study.
- Do not create fake dashboard images.
- Do not recreate them with generic placeholder UI.
- Preserve the original visual design.

Use the full screenshots in major showcase sections.

Create intelligent cropped versions where necessary for detail sections.

If any screen is not available in the workspace, use a clearly labeled placeholder:

`[UI SCREEN PLACEHOLDER — SCREEN NAME]`

Do not invent missing screens.

---

# VISUAL STYLE

The page must feel:

- Premium
- Editorial
- Minimal
- Modern
- Highly visual
- UX case-study focused
- Spacious
- Confident
- Professional

Avoid:

- Huge walls of text
- Generic SaaS landing-page sections
- Random decorative gradients
- Excessive cards everywhere
- Tiny unreadable diagrams
- Fake research statistics
- Generic stock UI mockups

Use a visual rhythm like:

```text
BIG STATEMENT
↓
SHORT CONTEXT
↓
BIG VISUAL
↓
INSIGHT
↓
DIAGRAM
↓
PRODUCT SCREEN
↓
ANNOTATED DETAIL
↓
NEXT STORY CHAPTER
```

The page should scroll like a designed narrative.

---

# PAGE STRUCTURE

## SECTION 01 — HERO

Large title:

# Jio-bp Incident Management System

Subtitle:

**Designing a role-based safety ecosystem from frontline reporting to enterprise intelligence.**

Hero statement:

> **One incident. Different decisions. One connected lifecycle.**

Show a layered composition of:

- RO Dashboard
- ASR Dashboard
- HO Dashboard

Use the actual HTML screenshots.

Add subtle motion/parallax only if it matches my existing portfolio.

---

## SECTION 02 — PROJECT SNAPSHOT

Create a clean metadata layout.

Include:

- Organization: Jio-bp
- Product: Incident Management System
- Domain: HSE / Safety Operations
- Platform: Responsive Enterprise Web Application
- Users: RO · ASR · SOM · SH · HO
- Focus: UX Research · IA · Workflow Design · Data Visualization · UI Design

Keep this compact.

---

## SECTION 03 — THE CONTEXT

Heading:

# Safety incidents don't end when they are reported.

Explain:

An incident begins at the frontline but responsibility extends through the organization.

Show this vertical expansion:

```text
ONE INCIDENT
↓
ONE STATION
↓
MULTIPLE OUTLETS
↓
STATE / REGION
↓
ENTERPRISE
```

---

## SECTION 04 — THE CHALLENGE

Large statement:

> **How can one incident-management system remain simple enough for frontline users, actionable enough for managers and analytical enough for leadership — without overwhelming any of them?**

Create a strong visual:

```text
SAME INCIDENT DATA
       │
RO ─── ASR ─── HO
ACT    DECIDE   GOVERN
```

---

## SECTION 05 — DOMAIN IMMERSION

Heading:

# Before designing the interface, I studied the system behind it.

Show a visual mind map around:

- People
- Incidents
- Evidence
- Decisions
- Actions
- Escalation
- Learning
- SOPs
- Prevention

Create this as an elegant custom diagram using HTML/CSS/SVG.

---

## SECTION 06 — RESEARCH METHODOLOGY

Create a horizontal or vertical process:

```text
DISCOVER
↓
EXPLORE
↓
UNDERSTAND USERS
↓
BENCHMARK
↓
SYNTHESIZE
↓
DEFINE
↓
DESIGN
↓
VALIDATE
```

Add short explanations.

Do not claim interviews, participant counts or quantitative research unless that data exists in the source files.

---

## SECTION 07 — STAKEHOLDER ECOSYSTEM

Create a beautiful hierarchy:

```text
HO
Head Officer
↓
SH
State Head
↓
SOM
Sales Officer Manager
↓
ASR
Area Sales Representative
↓
RO
Retail Outlet
```

Then show the information abstraction:

```text
RO → STATION
ASR → AREA
SOM/SH → STATE
HO → ENTERPRISE
```

---

## SECTION 08 — RESEARCH INSIGHTS

Use large numbered editorial cards or a scrolling layout.

Insights:

### 01
**Incident management is a lifecycle, not a form.**

### 02
**Role determines information density.**

### 03
**Status is not enough.**
Show: Status + Owner + Next Action + SLA

### 04
**Decisions need context.**

### 05
**Evidence should stay connected to the incident.**

### 06
**Incident data changes meaning across organizational levels.**

### 07
**Resolution should create learning.**

### 08
**Safety participation should be positively reinforced.**

---

## SECTION 09 — PROBLEM → INSIGHT → OPPORTUNITY

Create an elegant three-column visualization.

Use these examples:

Problem → Insight → Opportunity

One dashboard → Different decisions → Role-based dashboards

Long lists → Users need prioritization → Action queues

Status alone → Users need next steps → Action state + SLA

Fragmented evidence → Decisions need context → Unified incident record

Closed incidents disappear → Organization needs memory → Learning module

Low motivation → Participation needs reinforcement → Recognition system

---

## SECTION 10 — INFORMATION ARCHITECTURE

Create a large full-width interactive/static IA diagram.

Use:

```text
IMS
├── Overview
├── Incidents
│   ├── All Incidents
│   ├── My Incidents
│   ├── Assigned to Me
│   ├── Drafts
│   ├── In Progress
│   ├── Escalated
│   ├── Rejected
│   └── Closed
├── Report Incident
├── Investigation
├── Learning
├── Analytics
└── Administration
```

Do not make this tiny.

It must be readable on desktop and stack cleanly on mobile.

---

## SECTION 11 — END-TO-END INCIDENT LIFECYCLE

Create a major visual:

```text
INCIDENT
↓
REPORT
↓
ADD EVIDENCE
↓
REVIEW
↓
CLASSIFY
↓
ASSIGN
↓
ACTION / ESCALATE
↓
CORRECTIVE ACTION
↓
VERIFY
↓
CLOSE
↓
LEARN
↓
SOP / POLICY / TRAINING
↓
PREVENT RECURRENCE
```

This should be one of the strongest infographics.

---

## SECTION 12 — USER JOURNEY

Create a journey-map section for:

- RO
- ASR
- HO

Each journey should show:

- Goal
- Need
- Pain point
- Opportunity

Use the same incident lifecycle stages.

---

## SECTION 13 — LOW-FIDELITY IDEATION

Create a visually convincing process section.

Show:

```text
CONTENT INVENTORY
↓
PRIORITIZATION
↓
LAYOUT EXPLORATION
↓
WIREFRAME
↓
COMPONENT STRUCTURE
↓
HIGH-FIDELITY UI
```

If actual low-fidelity images are available in Figma/files, use them.

If not, create simple neutral schematic wireframes clearly presented as structural ideation, not fake historical artifacts.

Create 3–4 wireframe examples:

- Early dashboard hierarchy
- RO dashboard
- ASR action-first layout
- KPI + table layout

Use grayscale/neutral wireframe styling.

---

# SECTION 14 — THE THREE DASHBOARD STRATEGY

Create a major transition section:

# One system. Three decision environments.

Show three role cards:

### RO
**ACT**
Station-level safety

### ASR
**DECIDE**
Area-level operations

### HO
**GOVERN**
Enterprise-level risk

---

## SECTION 15 — RO DASHBOARD

Heading:

# RO — Designed for action at the frontline.

Question:

> **How is my station doing, and what do I need to do?**

Show actual RO Dashboard HTML screenshot.

Add elegant annotations pointing to:

- My Reported Incidents
- Draft Reports
- Station Safety
- Average Resolution Time
- Total Incidents
- In Progress
- Rejected
- Closed
- Incident Activity Heatmap
- Achievements

Explain the deliberate design decision:

RO manages one station, so complex regional trend charts and comparative donut charts were intentionally avoided.

---

## SECTION 16 — SAFETY ENGAGEMENT & ACHIEVEMENTS

Heading:

# Encouraging better safety participation

Show the actual achievement/badge screens available in the project.

Include:

- Locked achievements
- Earned achievements
- Milestone progress
- How to achieve

Create the behavior loop:

```text
OBSERVE
↓
REPORT
↓
RECEIVE FEEDBACK
↓
EARN RECOGNITION
↓
BUILD SAFETY HABIT
↓
REPORT EARLIER
↓
MORE COMPLETE SAFETY DATA
```

Important:

Frame this as **Safety Engagement & Recognition**, not simplistic gamification.

Mention that the design rewards good safety behavior rather than raw incident volume.

---

## SECTION 17 — ASR DASHBOARD

Heading:

# ASR — Designed for faster decisions across multiple outlets.

Question:

> **What requires my attention, and how are my outlets performing?**

Show actual ASR Dashboard HTML screenshot.

Annotate:

- Assigned to Me
- My Incidents
- Overdue
- Escalated
- Total Incidents
- Resolution Rate
- Average Response Time
- Average Resolution Time
- Station Performance Ranking
- Incident Trend
- Severity Distribution

---

## SECTION 18 — ACTION QUEUE

Create a focused component showcase:

# Incidents Requiring Your Action

Subtitle:

> Review, respond and move assigned incidents toward resolution.

Show the incident card anatomy.

CTA:

**Review & Act →**

Explain that high-consequence decisions should happen after context is reviewed.

---

## SECTION 19 — HO DASHBOARD

Heading:

# HO — Designed for enterprise intelligence.

Question:

> **What is happening across the organization, where is risk increasing, and what requires leadership attention?**

Show actual HO Dashboard HTML screenshot.

Annotate:

- Enterprise KPIs
- State performance
- Region comparison
- East / West / North / South
- Map view
- Category analysis
- Severity
- Business impact

---

## SECTION 20 — KPI ARCHITECTURE

Create a visual comparison:

RO → Personal / Station

ASR → Area / Operational

HO → Enterprise / Strategic

Show actual KPI component styling where possible.

Also create a small component family:

- Default KPI
- Positive KPI
- Warning KPI
- Critical KPI
- Trend KPI

---

## SECTION 21 — DATA VISUALIZATION

Explain that visualization changes with scope.

RO:
- Heatmap

ASR:
- Trends
- Status
- Severity
- Station performance

HO:
- Region
- State
- Map
- Categories
- Business impact

Use cropped examples from actual dashboards.

---

## SECTION 22 — INCIDENT DETAIL

Heading:

# One incident. One complete record.

Show the actual Incident Detail screenshot.

Use zoomed crops for:

- Context
- Evidence
- Remarks
- Timeline
- Event log
- Actions

Show this architecture:

```text
CONTEXT
+
EVIDENCE
+
REMARKS
+
OWNERSHIP
+
DECISIONS
+
TIMELINE
+
RESOLUTION
+
LEARNING
```

---

## SECTION 23 — EVENT LOG & TIMELINE

Create a strong vertical timeline visualization.

Use generic/sample timestamps only if actual incident data should not be exposed.

Explain:

- Accountability
- Traceability
- Visibility
- Context
- Auditability

---

## SECTION 24 — LEARNING FROM INCIDENTS

Heading:

# Closing an incident should create knowledge.

Create this loop:

```text
INCIDENT
↓
ROOT CAUSE
↓
CORRECTIVE ACTION
↓
VERIFICATION
↓
LESSON LEARNED
↓
SOP / POLICY
↓
TRAINING
↓
PREVENTION
```

---

## SECTION 25 — DATABASE & TABLE DESIGN

Show the incident database.

Use:

```text
Priority | Incident | Location | Reported | Severity | Owner | Status | SLA | Action
```

Explain:

- Search
- Filter
- Sort
- Status indicators
- Severity badges
- Grid/List view
- Responsive behavior

Use actual UI screenshots/crops if available.

---

## SECTION 26 — DESIGN SYSTEM

Create a polished visual section:

# From foundations to reusable patterns.

Show:

### Foundations
- Colors
- Typography
- Spacing
- Radius
- Shadows

### Components
- Buttons
- Inputs
- Cards
- Tabs
- Tables
- Badges

### IMS patterns
- KPI Cards
- Severity
- Status
- Timeline
- Evidence
- SLA
- Achievements

Use the Figma design-system language and screenshots/assets if available.

---

## SECTION 27 — RESPONSIVE DESIGN

Show:

```text
DESKTOP
↓
TABLET
↓
MOBILE
```

Focus especially on:

RO mobile:
- Report
- My Incidents
- Notifications
- Achievements

ASR mobile:
- Assigned
- Incident detail
- Review & Act

---

## SECTION 28 — LOGIN

Show the actual Login Page HTML screenshot.

Explain:

- Password authentication
- Mobile OTP
- Password help
- Clear visual hierarchy

Use a large screen presentation.

---

## SECTION 29 — TESTING & VALIDATION

Do not invent participant numbers.

Frame this as a validation plan / evaluation framework unless actual testing data exists.

Show:

### RO tasks
Report, draft, find previous report, check safety, view achievement.

### ASR tasks
Find assigned incident, review evidence, remark, reject, close, escalate.

### HO tasks
Identify risk region, compare states, inspect category, find SOP.

Metrics:

- Task completion
- Time on task
- Error rate
- Decision accuracy
- Findability
- Comprehension
- Confidence

Highlight:

# Time to Decide

---

## SECTION 30 — OUTCOME

Heading:

# Designed to make safety information more actionable.

Show outcomes as a visual grid:

- Faster frontline reporting
- Clearer decisions
- Better accountability
- Stronger traceability
- More actionable analytics
- Organizational learning
- Higher safety participation

Do not claim unverified numerical results.

---

## SECTION 31 — REFLECTION

Heading:

# What changed in my thinking?

Use:

> I started by redesigning an incident dashboard.

> I ended up redesigning how incident information moves through an organization.

Final statement:

> **Enterprise UX isn't about giving everyone more information. It's about giving every role the right information at the right level of responsibility.**

---

# TECHNICAL REQUIREMENTS

- Preserve the existing portfolio stack.
- Do not introduce a new framework.
- Reuse existing components where appropriate.
- Keep the page fully responsive.
- Optimize large screenshots.
- Lazy-load large media if the current stack supports it.
- Use semantic HTML.
- Maintain accessibility.
- Keep text readable.
- Do not make diagrams too small.
- Ensure screenshots remain crisp.
- Use subtle transitions only.
- Preserve the existing portfolio's navigation and footer.

---

# FINAL CHECKLIST

Before completing:

- [ ] Hero uses actual RO/ASR/HO screens
- [ ] Login screenshot included
- [ ] RO dashboard included
- [ ] ASR dashboard included
- [ ] HO dashboard included
- [ ] Achievements included
- [ ] Incident detail included
- [ ] Information architecture included
- [ ] Incident lifecycle included
- [ ] Role hierarchy included
- [ ] Journey map included
- [ ] Low-fi ideation included
- [ ] KPI architecture included
- [ ] Table design included
- [ ] Design system included
- [ ] Responsive section included
- [ ] No fabricated research statistics
- [ ] Existing portfolio style preserved
- [ ] Page feels like a premium UX case study

Build the page completely and make the final result visually polished.

## PROMPT END
