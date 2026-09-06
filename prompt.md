# Agent Prompt: Update personal-website-bertin.vercel.app

You are updating an existing personal portfolio site . **Do not redesign the site.** Match the existing design language exactly — same typography, spacing, color tokens, card components, and tone of voice — for every change below. Only the new "Currently Building" section should introduce a visually distinct card treatment, as specified.

**Before writing any code, read every relevant existing component/page file so you understand the current structure. Do not guess file paths or assume component names — inspect the repo first.**

**Verification rule: do not assume or invent anything.** Every number, date, link, and label below is sourced from the user's actual CV and GitHub profile as of September 2026. If anything here conflicts with what you find in the live codebase, or you're unsure how to implement something (see "Flag, don't guess" at the end), stop and ask rather than filling the gap yourself.

---

## 1. Home page

### 1a. Fix the broken stat counters
The three stat counters ("Projects shipped", "Years research & applied", "Technologies mastered") currently render "0+" — this is either a bug or unset data. Find the source of these numbers and fix it. Do not hardcode a plausible-looking number — derive each count from real data:
- **Projects shipped** = count of project entries that will exist on the Projects page after section 2 below is applied.
- **Years research & applied** = calculate from the earliest dated experience/project on the resume to now (September 2026).
- **Technologies mastered** = count of distinct entries in the final Skills list (section 3c below).

If the counters are driven by a CMS/data file rather than computed, update that data file directly instead of hardcoding, and note in your summary which approach you took.


### 1c. Add a new "Currently Building" section
Place it directly after the hero/stats block, before the site's existing content continues.

Add one intro line above the cards, e.g. "Outside coursework, I'm building..." (adjust wording to match site voice).

**Card 1 — Marsa** (only venture to include right now):
- Name: Marsa
- Tagline: "Marketing and engineering, under one roof"
- Role: Co-Founder
- Description (1-2 sentences): Marsa combines performance marketing with real software engineering — SEO, paid media, web/app development, and AI integration for businesses.

- Live link: https://marsa.ae
- Visual treatment: distinct from the Projects page's GitHub-link-and-tags card style — larger card, metrics shown as callout numbers (like the home page stat counters), and a "Live" badge, since this is a real operating business, not a code repo.


---

## 2. Projects page

### 2a. Add these missing projects
Cross-reference against https://github.com/Bertin-Ir to confirm each repo still exists and grab the current README description before writing the card — don't rely solely on the text below in case the repos have since been updated.

1. **Web & App Ad Click-Through Rate Prediction** — https://github.com/Bertin-Ir/Avazu_CTR_Challenge — Ads Click Through Rate prediction on high-dimensional, sparse, categorical ad/user/device data.
2. **Movie Recommendation Engine** — https://github.com/Bertin-Ir/Recommendation_System - a movie recommendation system,
3. **Peer to Peer File Sharing System** — https://github.com/Bertin-Ir/p2p_file_sharing — A peer-to-peer (P2P) file sharing system built with Python that enables direct file transfers between peers with a central Tracker server coordinating peer discovery
4. **Hand Written Digits Classifier** — https://github.com/Bertin-Ir/Digits_Classifier - A machine learning model capable of automatically identifying handwritten digits (0–9)

Use the same card format/skill-tag style as existing project cards (matching pattern: title, description, "View on GitHub" link, relevant skill tags linking to `/resume/#skills`).

### 2b. Do NOT add
- The "Personal_website" repo itself — it's meta, not a portfolio project.
- Marsa or Ziyara — those belong on the Home page "Currently Building" section (1c), not here. This page is for code/technical projects.

### 2c. Ordering
Consider leading with the technically strongest entries (CTR prediction, P2P file sharing) rather than current/default order, since these best demonstrate depth. This is a suggestion, not a strict requirement — use judgment based on how the page is currently sorted (chronological vs. featured).

---

## 3. Resume page

### 3a. Add these three missing Experience entries
Keep all four currently-listed entries (Mentora, CodePath Technical Interview Scholar, NYU Library Reference Assistant, Areco Rwanda Field Monitor) exactly as they are
**Data Scientist — Sun Wolf Industries** (Aug 2026 – Present, Oklahoma, US)

**Analytics Engineering Intern — Irembo** (May 2026 – Aug 2026, Kigali, Rwanda)
- Eliminated 100% of unauthorised access to production Dagster pipelines by designing and deploying a zero-trust authentication layer (Keycloak, OAuth2 Proxy, Redis, Kong) enforcing verified identity and MFA on every request across all environments.
- Designed, packaged, and deployed the complete platform infrastructure on Kubernetes using Helm charts — covering six interdependent services including the OAuth2 Proxy, Dagster pipeline orchestrator, Keycloak identity provider, HashiCorp Vault, Redis, and Kong — enabling consistent and repeatable deployments across environments through parameterised configuration.

**Mentor — NYU Abu Dhabi Summer Academy** (June 2025 – Aug 2025, Abu Dhabi, UAE)
- Mentored and guided Summer Academy Scholars by providing academic support, residential life management, and ensuring timely completion of assignments.
- Coordinated between faculty, staff, and students to streamline program activities, resolve issues promptly, and enhance the overall Summer Academy experience.

Place these in reverse-chronological order alongside the existing entries (Sun Wolf is most recent/current; Irembo and the Summer Academy mentorship both fall in mid-2025/2026 — order by start date consistent with how the rest of the page is sorted).

### 3b. Update existing entries
- **NYU Library Reference Assistant bullets**: the CV has a fuller three-bullet version of this role than the site's current single line. Replace with:
  - Trained users in effective research methodologies, including database navigation, source evaluation, and systematic literature review techniques.
  - Supported research workflows by assisting with citation management, resource organization, and access to both print and digital collections.
  - Contributed to the development and maintenance of library web content, enhancing accessibility of research guides and digital resources.


### 3c. Replace the Skills section with this exact list, grouped as shown
**Languages:** Python, C, C++, MATLAB, SQL
**Technologies:** HTML, CSS, Dagster, Kubernetes, Docker, Kong, Stata, Git/GitHub, PostgreSQL, Node.js, Google Colab, Arduino, Excel, Notion
**Libraries & Frameworks:** Pandas, NumPy, Matplotlib, Scikit-Learn, Seaborn, PyTorch, Keras, FastAPI

Match the existing skills UI (icon + label chips) — assign a reasonable icon per new skill consistent with the existing icon style; if unsure which icon fits, use a generic placeholder icon rather than guessing at a specific brand icon that doesn't exist in the current icon set.


---

## Before finishing
- Double check every new external link (GitHub repos, marsa.ae) actually resolves.
- Confirm the site still builds/renders correctly in both light and dark mode after changes.
- Summarize exactly what you changed, and list anything from "Flag, don't guess" above that still needs the user's answer.