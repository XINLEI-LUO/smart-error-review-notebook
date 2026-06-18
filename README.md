# Smart Error Review Notebook | 智能错题复习系统

A bilingual, browser-based learning analytics web app for recording mistakes, scheduling review tasks, and analysing learning weaknesses by subject and knowledge tag.

一个中英双语的学习分析型错题复习网站，用于记录错题、自动生成复习任务，并按科目和知识点标签分析薄弱环节。

## Live demo

After publishing with GitHub Pages, add your URL here:

```text
https://YOUR-USERNAME.github.io/smart-error-review-notebook/
```

## Why this project matters

Many students collect mistakes, but they often do not know which questions should be reviewed first or which knowledge areas are repeatedly causing errors. This project turns a traditional error notebook into a small learning analytics system:

- converts mistakes into structured data;
- prioritises review using a spaced-repetition style algorithm;
- tracks accuracy, attempts, weak tags, and due questions;
- supports bilingual use for English and Chinese learners;
- works offline-first using local browser storage.

## Key features

- Add questions manually with text or image
- Support single-choice, multiple-choice, and fill-in-the-blank questions
- Unlimited number of options for choice questions
- Categorise questions by subject, such as Mathematics or English
- Add knowledge point tags, such as Calculus, Derivatives, Grammar, Vocabulary
- Search mistakes by question text, options, answer, explanation, category, or tags
- Edit question content, explanations, tags, answers, and options
- Delete and modify options
- Mark questions as mastered and unmaster them later
- Generate daily review tasks automatically
- Smart review mode based on due date, error rate, last review time, and correct streak
- Analytics dashboard for accuracy, due questions, categories, and weak knowledge tags
- Import/export JSON backups
- Bilingual interface: English by default, switchable to 中文
- PWA-ready structure with manifest and service worker

## Business analytics relevance

This project is designed to demonstrate business analytics capability rather than only front-end coding. It shows:

| Capability | How it is demonstrated |
|---|---|
| Problem framing | Defines a real user problem: inefficient mistake review and weak learning feedback |
| Data modelling | Stores each question, answer, attempt, tag, review status, and review history as structured data |
| Decision rules | Uses a review-prioritisation algorithm to decide which questions should be reviewed first |
| KPI design | Tracks accuracy, total attempts, wrong attempts, due tasks, mastered items, and weak knowledge areas |
| Dashboarding | Turns user behaviour data into actionable charts and rankings |
| Product thinking | Provides bilingual UX, backup/restore, offline-first use, and PWA readiness |
| Ethical data practice | Uses user-owned data and avoids any private, unpublished, or scraped datasets |

## Review algorithm

The smart review mode gives higher priority to questions that are:

1. due today or overdue;
2. frequently answered incorrectly;
3. not reviewed for a long time;
4. newly added and never reviewed;
5. low in correct streak.

When a user answers correctly, the next review interval gradually increases:

```text
1 correct streak  -> review after 1 day
2 correct streaks -> review after 3 days
3 correct streaks -> review after 7 days
4 correct streaks -> review after 15 days
5 correct streaks -> review after 30 days
6 correct streaks -> review after 60 days
7+ streaks        -> review after 120 days
```

When a user answers incorrectly, the question becomes due again immediately.

## Analytics dashboard

The dashboard includes:

- total number of questions;
- number of questions due today;
- mastered question count;
- total attempts;
- overall accuracy;
- review activity trend;
- subject/category performance;
- weak knowledge tag ranking;
- most urgent questions for review.

## Tech stack

- HTML
- CSS
- Vanilla JavaScript
- LocalStorage
- JSON import/export
- PWA manifest and service worker
- No backend required for the current MVP

## Project structure

```text
.
├── index.html
├── styles.css
├── app.js
├── manifest.json
├── sw.js
├── sample-data/
│   └── demo-questions.json
├── docs/
│   ├── analytics-design.md
│   ├── data-dictionary.md
│   ├── deployment-guide.md
│   └── product-roadmap.md
└── README.md
```

## Run locally

Option 1: open `index.html` directly in a browser.

Option 2, recommended:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy with GitHub Pages

This is a static website, so it can be hosted directly with GitHub Pages. GitHub Pages supports publishing HTML, CSS, and JavaScript files from a repository. See `docs/deployment-guide.md` for step-by-step instructions.

## Data and privacy

The current version stores data in the user's browser localStorage. No personal data is sent to a server. Users can export and import their own JSON backup files.

## Limitations

- Data is local to one browser unless exported/imported manually.
- Fill-in-the-blank answers are matched as text, not mathematically equivalent expressions.
- OCR and AI explanation generation are not included in this MVP.
- Multi-user login and cloud sync require a backend such as Supabase or Firebase.

## Future improvements

- Cloud database and login
- OCR for image questions
- AI-assisted explanation generation
- Calendar heatmap
- More advanced spaced repetition model
- Question difficulty rating
- React/Next.js refactor
- Mobile app version using Expo or React Native

## License

MIT License.
