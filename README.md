# Pedigree Agent Manifest Wizard

Customer-ready onboarding wizard for building a Pedigree Manifest v1.0 at `agentmanifest.io`.

## What is included

- Five-section onboarding flow from the PRD
- Apex Industrial Group demo dataset with 47 humans and 42 agents
- Local autosave with two-second debounce
- Human and agent CSV import plus template downloads
- Pedigree Manifest v1.0 generation with computed metrics and SHA-256 signature
- Manifest JSON download and ZIP bundle download
- Local dashboard handoff stub at `#/app/workspace/:workspace_id`

## Local preview

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173`.

## Deploy

This is a static site. Deploy the repository to Vercel or GitHub Pages and point `agentmanifest.io` at the deployment.
