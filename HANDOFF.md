# Pergola Management Audit — Project Handoff
**Day54, LLC · Prepared by Yonatan (Jhonathan Paran)**
**As of: June 17, 2026**

---

## Context

Day54 was engaged by Brian Pergament (Pergola Management) for a $5,000 fixed-fee, 2–3 week operations and technology audit. The goal is to surface where the team can get more out of Rent Manager, remove daily pain points, and identify workflow gaps — not a technical overhaul, not an AI pitch. Small, concrete, implementable improvements.

**Yonatan is sole lead through Tuesday.** Nachshon hands back on Wednesday.

---

## File Architecture

### Deliverable (live, grows with each finding)
| File | Description |
|------|-------------|
| `Pergola_Audit_Findings.docx` | The client deliverable. Cover + Executive Summary + Findings (5 logged) + Roadmap placeholder. Rebuilt from `build_findings.js` each time a new finding is added. |

### Source / Build
| File | Description |
|------|-------------|
| `build_findings.js` | Node.js script that generates the .docx. Add new `findingHeader()` + `findingTable()` blocks here to append findings. Run with `node build_findings.js` from `/home/claude`. |

### Prep & Reference PDFs (internal use)
| File | Description |
|------|-------------|
| `Pergola_Kickoff_Master_Brief.pdf` | Full pre-kickoff brief — business context, people, dynamics, partner tightrope, all priorities. |
| `Pergola_Kickoff_CheatSheet.pdf` | One-page during-call reference for the Jun 15 kickoff. |
| `Pergola_Interview_Kit.pdf` | 4-page question kit for all staff 1:1s with workaround capture grid. |
| `Pergola_StPaul_PM_Discovery_Plan.pdf` | 3-page pain-focused question plan for St. Paul PM (Friday Jun 20, 12 PM). |
| `Pergola_Minneapolis_PM_Discovery_Plan.pdf` | 3-page pain-focused question plan for Jocelyn (completed Jun 17). |
| `Pergola_Utility_Audit_Checklist.pdf` | Step-by-step RM utility module audit checklist (checkbox format, for use in live system). |

### HTML Source (for PDFs above)
`cheatsheet.html`, `master_brief.html`, `interview_kit.html`, `discovery_plan.html`, `jocelyn_discovery.html`, `utility_audit.html`
Regenerate any PDF with: `python3 -c "from weasyprint import HTML; HTML('file.html').write_pdf('output.pdf')"`

---

## Completed Work

### Calls & Interviews
- [x] **Jun 9** — Brian Pergament initial call (Nachshon lead). Full transcript captured.
- [x] **Jun 15** — Kickoff call (Brian, Joe, Chad, Nachshon, Yonatan). Notes in Granola > Pergola folder.
- [x] **Jun 15** — Nachshon/Yonatan debrief. Work split confirmed. Notes in Granola.
- [x] **Jun 17** — Jocelyn discovery call (Minneapolis PM). Notes in Granola > "Meeting with Jocelyn."
- [ ] **Jun 20, 12 PM** — St. Paul PM discovery call. **Scheduled. Yonatan leads.**

### System Audit
- [x] Full Rent Manager menu map captured (all 7 modules, all sub-items). Logged in Claude memory.
- [x] Services → Metered Utilities → all 7 sub-sections confirmed **completely empty** (Finding 01).
- [ ] Services → Service Manager → Issues (work order closeout audit) — **not started**
- [ ] Services → Make Ready Board — **not started**
- [ ] Rental Info → Prospects + Prospect Leasing Board — **not started**
- [ ] Communication → Text Messaging Center / rmVoIP logs — **not started**
- [ ] Accounting → General Ledger Reports (utility expense history) — **not started**

### Findings Logged (in `Pergola_Audit_Findings.docx`)
| # | Finding | Priority | Source |
|---|---------|----------|--------|
| 01 | Metered Utilities module completely unused | High Impact | RM system review |
| 02 | Residents can't view signed leases in tenant portal | Quick Win | Jocelyn call |
| 03 | Unit transfer lease re-issuance requires owner workaround | Quick Win | Jocelyn call |
| 04 | Urgent maintenance requests bypass RM entirely | High Impact | Jocelyn call |
| 05 | Leasing funnel invisible — prospects only enter RM at application | High Impact | Jocelyn call |

---

## Exact Next Steps

### Before the St. Paul PM call (Friday 12 PM)
1. Re-read `Pergola_StPaul_PM_Discovery_Plan.pdf` — question set and arc are ready.
2. Note the two St. Paul–specific probes: utility setup at move-in (does it echo Jocelyn's issue?) and after-hours dispatch (does it echo Minneapolis?). Either one appearing on both sides becomes a finding.
3. Have the side-by-side capture table ready (page 3 of the discovery plan) — filling it out after both calls produces the two-location drift finding.

### RM system audit (do before Tuesday)
4. **Services → Issues** — pull a sample of recently closed work orders. Check: are notes, photos, parts, and time logged, or are they closed blank? This is the quantitative side of Finding 04.
5. **Services → Make Ready Board** — is it configured? Any active templates? Empty = a finding (they own purpose-built turnover tooling they're not using).
6. **Rental Info → Prospects** — any prospect records? Any sources logged? Empty confirms Finding 05 with a screenshot.
7. **Communication → Text Messaging Center** — are texts going through RM or personal phones? Check log volume.
8. **Accounting → General Ledger Reports** — run a utility expense report for one property, 24 months. Confirms cost data exists but consumption data doesn't (supports Finding 01).

### After the St. Paul call
9. Log any new findings into `build_findings.js` and rebuild the .docx.
10. Fill in the two-column capture table and write the two-location drift finding if the data supports it.

### By Tuesday (handoff to Nachshon)
11. `Pergola_Audit_Findings.docx` should have all confirmed findings from: utility audit, both PM calls, and the RM system spot-checks above.
12. The Roadmap section (Section 03) can be drafted once findings are complete — sort by Quick Win first, then High Impact, then Strategic.
13. Brief Nachshon on what's confirmed, what's still open, and what the St. Paul call surfaced.

---

## Key People

| Person | Role | Contact |
|--------|------|---------|
| Brian Pergament | Owner / signer (St. Paul side) | brian@pergolaonline.com |
| Joe | Co-owner (Minneapolis side, slower adopter) | joe@rentpergola.com |
| Chad Silverman | Senior PM, all A/P, invoice recipient | chad@rentpergola.com |
| Jocelyn | PM, Minneapolis properties | — |
| St. Paul PM | PM, Brian's side | Name TBC from call |
| Nachshon Fertel | Day54 lead (back Wednesday) | nachshon@day54.com |

---

## Important Context to Keep in Mind

- **Frame is efficiency, not AI.** Brian was explicit: squeeze the juice out of what they already pay for before anything cutting-edge.
- **Both sides of the finding matter.** The business runs two RM locations (St. Paul / Minneapolis). Inconsistencies between them *are* findings — frame them structurally, never as Joe's fault.
- **Small improvements count.** Nachshon's framing: even minor pain points are valuable to surface. Don't filter out "small" findings.
- **Guardrail on builds.** Discovery mode only until Tuesday. Small feasibility probes are fine; don't start building the utility pipeline.
- **Invoice status.** $5,000 single bill sent to Chad (chad@rentpergola.com) after the kickoff. Brian CC'd.
