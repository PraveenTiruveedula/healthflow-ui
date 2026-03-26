

# Clinical Trial Recruitment Platform — Full Build Plan

## Phase 1: Design System Foundation

### Theming & Tokens
- Set primary color `#50B9B6` (teal) with HSL CSS variables for white-label support
- Add semantic colors: success (green), info (blue), warning (purple), error (red)
- Import **Lexend** (headings) and **Inter** (body) from Google Fonts
- Configure light + dark mode with CSS variable switching
- Set global border-radius tokens (12px–24px), soft shadows

### Reusable Components
- **Buttons**: primary, secondary, ghost, destructive variants
- **Inputs**: text, select, checkbox, radio with error/focus states
- **Cards**: default, elevated, highlighted variants
- **Badges**: status-based (qualified, rejected, in-progress, needs-attention)
- **Progress Stepper**: numbered step indicator with active/completed states
- **Chat Bubbles**: sent/received message components
- **Skeleton loaders** and **empty state** components
- **Language selector** dropdown (UI only, no real i18n yet)

---

## Phase 2: Public Experience (Patient Flow)

### Landing Page
- **Navbar**: placeholder logo + name, nav links, language selector, "Check Eligibility" CTA, sticky with backdrop blur
- **Hero**: "Now Enrolling Clinical Trial" headline, subtitle, trust badges (HIPAA, IRB), CTA button
- **About Section**: 2-column image + text layout
- **Benefits**: grid of benefit cards with icons
- **Eligibility**: split card (inclusion vs exclusion criteria) with CTA
- **Process**: 4-step horizontal flow with visual connectors
- **Locations**: cards-based site locations
- **Footer**: links, legal, contact info

### Primary Screener (Multi-Step Form)
- **Intro screen**: time estimate, privacy note, start button
- **Multi-step form**: progress bar, question types (yes/no, text input, radio, checkbox), conditional logic, back/next navigation
- **Contact info step**: highlighted as important moment
- **Validation**: inline errors, disabled submit
- **Submission**: loading spinner, success/failure states

### Outcome Screens
- **Qualified**: success message, next steps (site selection)
- **Disqualified**: friendly soft rejection, optional retry/help links

---

## Phase 3: Admin Portal

### Layout
- Desktop: sidebar navigation + main content area
- Mobile: responsive top nav
- Dark/light mode toggle in header

### Login Screen
- Clean email + password form with error states (UI only, no real auth)

### Dashboard
- Patient data table with columns: ID, date, status badge, contact, actions
- Status color-coded badges
- Filters (status, date range), search bar
- "Needs Attention" row highlighting
- Empty state when no data

### Patient Detail Modal
- Large modal, split layout:
  - **Left panel**: tabs (Primary Screener / Secondary Assessment), assign site dropdown, enrollment toggle
  - **Right panel**: read-only Q&A for primary screener, editable form for secondary assessment (yes/no toggles, notes), submit CTA, pass/fail banner on completion

### Messaging Screen
- Left panel: conversation list with patient names + last message preview
- Right panel: chat thread with sent/received bubbles, input box + send button
- WhatsApp/iMessage-inspired UX

### Users Management
- Table of users with role badges
- Add/edit user modal with role selection (Admin/Nurse)

---

## Phase 4: Polish & Advanced UX

- RTL-aware layout (CSS logical properties, direction support)
- Mobile-first responsive breakpoints (single column → 2-column → full)
- WCAG-compliant contrast ratios, focus rings, label associations
- Loading skeletons on all data views
- Toast notifications for actions
- All pages use mock/placeholder data

---

**Routing structure:**
- `/` — Landing page
- `/screener` — Multi-step screener
- `/screener/result` — Outcome screen
- `/admin/login` — Admin login
- `/admin/dashboard` — Patient table
- `/admin/messages` — Chat interface
- `/admin/users` — User management

