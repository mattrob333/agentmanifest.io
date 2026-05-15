# Pedigree Agent Manifest Workbench

Customer-ready onboarding tool for turning Workday-style HR exports, manual org input, and messy discovery-call transcripts into a Pedigree-ready Agent Manifest.

## What is included

- Three onboarding paths: Workday CSV, start from scratch, or messy hybrid discovery
- Iterative imports: upload partial data, parse notes, fill gaps, then re-run discovery later
- Workday-style CSV normalization with sensitive HR field exclusion
- Messy transcript parser for people, reporting lines, AI agents, ownership, and requested scopes
- Gap tracking for missing emails, managers, departments, duplicate IDs, and orphaned agents
- Human permission envelopes derived from org rank, department, manager chain, and business scope
- Pedigree-style Org Rank and Permission Ceiling view
- Agent inventory with parent-ceiling fit checks
- `pedigree_import` output shaped for the current Pedigree 4 MVP dashboard API
- Canonical Agent Manifest template in `docs/agentmanifest-template.json`

## Output

The generated `manifest.json` includes:

- `humans`
- `reporting_relationships`
- `permission_envelopes`
- `agents`
- `data_quality`
- `pedigree_import.humans`
- `pedigree_import.agents`
- `pedigree_import.demo_summary`

`pedigree_import` mirrors the current Pedigree 4 demo API shapes for `/v1/humans`, `/v1/agents`, and `/v1/demo/summary`.

## Local preview

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173`.

## Deploy

This is a static site. Deploy the repository to Vercel or GitHub Pages and point `agentmanifest.io` at the deployment.
