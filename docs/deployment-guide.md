# Deployment Guide

## Option A: GitHub website upload

1. Create a new GitHub repository.
2. Name it something professional, for example `smart-error-review-notebook`.
3. Upload these files to the repository root:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `manifest.json`
   - `sw.js`
   - `README.md`
   - `docs/`
   - `sample-data/`
4. Commit the files.
5. Go to repository `Settings` -> `Pages`.
6. Under `Build and deployment`, choose branch deployment.
7. Select `main` and root `/`.
8. Save and wait for GitHub to publish the site.

Your project website will usually look like:

```text
https://YOUR-USERNAME.github.io/smart-error-review-notebook/
```

## Option B: Git command line

```bash
git init
git add .
git commit -m "Initial commit: bilingual smart error review notebook"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/smart-error-review-notebook.git
git push -u origin main
```

Then enable GitHub Pages in the repository settings.

## Important privacy note

Do not upload your real private study questions if they include copyrighted exam material or private school content. Keep the repository focused on the app code and optional self-created demo data.
