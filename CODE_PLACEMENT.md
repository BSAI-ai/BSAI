Project: BSAI — Code placement and deployment notes

Purpose
- Quick reference showing where core files belong and how to build/deploy on Vercel.

Files and placement
- Frontend (Vite + React):
  - `src/Chat.jsx` — React chat component (present in repo). Renders chat UI and posts to `/api/ai`.
  - `src/App.jsx` — App entry that imports and renders `Chat` (already updated).
  - `index.html` — Vite entry in repo root.

- Serverless API (Vercel functions):
  - `api/ai.js` — Node serverless handler that receives POST { message } and calls OpenAI. Keep this file at project root under `api/ai.js` (already present).

Config and dependencies
- `package.json` must include:
  - `scripts`: `dev`, `build`, `preview` (vite defaults) — already present.
  - dependency: `openai` (added).
  - `engines.node`: `18.x` for Vercel compatibility (added).

- `vercel.json` (project root) configures two builds:
  - static build (Vite) -> `dist` output
  - Node serverless functions under `api/*.js`

Environment variables (on Vercel dashboard)
- Add `OPENAI_API_KEY` in Project Settings -> Environment Variables. This is required for `api/ai.js` to call the OpenAI API.

Local build & verification
1. Install dependencies:
```bash
npm install
```
2. Build the static site:
```bash
npm run build
```
3. Serve preview locally (optional):
```bash
npm run preview
```

Vercel deploy checklist
- Push latest `package.json`, `vercel.json`, and `api/ai.js` to your GitHub repository branch connected to Vercel.
- Ensure `OPENAI_API_KEY` is set in Vercel for the environment (Preview/Production as needed).
- Trigger a redeploy from the Vercel dashboard or by pushing to the branch.

Troubleshooting
- If the build fails on Vercel:
  - Check build logs for missing packages: run `npm install` locally and commit the updated `package-lock.json` (or ensure Vercel runs install).
  - Confirm `engines.node` matches the Node version Vercel uses.
  - If `api/ai.js` fails, verify `OPENAI_API_KEY` is set and that the `openai` package version matches the API usage in the file.

Optional: safer `api/ai.js`
- Consider adding input validation, catching and logging error details, and returning helpful messages for debugging in `api/ai.js`.

If you want, I can:
- Convert `api/ai.js` to a more defensive implementation and/or update it to the latest `openai` SDK usage pattern.
- Run a local build and produce any errors if you provide access (or paste Vercel build logs).

Local debugging checklist (quick):
- Start dev server: `npm run dev` and open the app.
- In browser DevTools -> Network, observe the POST to `/api/ai` when sending a message.
- Inspect the response body and status. If you see `{ error: ... }`, copy that message.
- If the request fails with network error, check terminal where `vite` is running for server errors.
- For Vercel deploys, view the Build & Function logs in the Vercel dashboard for detailed errors.
