# Pergola Management Audit - Full Progress Log
Day54, LLC - Lead: Yonatan (Jhonathan Paran) - Co-lead/manager: Nachshon Fertel
Snapshot date: June 18, 2026

This file consolidates everything gathered so far, including items that lived only in working notes (the GL coding finding, the LCS invoice analysis, the paused live walkthrough, and open action items). It is the single source of truth to resume from. The client-facing version of the confirmed findings is in `01_Deliverable/Pergola_Audit_Findings.docx`.

---

## 1. Engagement at a glance

- Client: Pergola Management, a property management company, ~600 units across Minneapolis/St. Paul and Rochester, MN. ~$13-14M revenue.
- Scope: $5,000 fixed-fee, 2-3 week operations and technology audit. Diagnosis only; implementation is a separate conversation.
- Core goal: help Pergola get more out of Rent Manager (RM). Produce a complete RM feature inventory for Brian with documented adopt/skip verdicts and reasoning for each feature. The framing is additive (what RM can do for you), not just a list of problems.
- Deliverable: written findings + prioritized roadmap + walkthrough call.
- Strategic context: post-COVID the business intentionally contracted ~45-50%. They are not trying to grow; the goal is to run what they have, better. Frame every recommendation through efficiency and visibility, never scale.
- Adoption thesis: they are in the bottom 25% of their RM rep's clients for platform adoption. Brian's phrase: they "haven't squeezed half the juice out of this orange."

---

## 2. People

| Person | Role | Notes |
|--------|------|-------|
| Brian Pergament | Owner / signer, St. Paul side, primary deliverable recipient | Faster adopter. Quiet by design in group settings. brian@pergolaonline.com |
| Joe | Co-owner, Minneapolis side | Slower tech adopter. Half-owner, not staff. Handle all two-location drift neutrally. joe@rentpergola.com |
| Chad Silverman | Senior PM, all A/P, invoice recipient | Relevant to native RM A/P vs AvidXchange investigation. chad@rentpergola.com |
| Jocelyn | PM, Minneapolis properties | Discovery call Jun 17 produced Findings 02-05. |
| St. Paul PM | PM, Brian's side | Name TBC. Discovery call Friday Jun 20, 12 PM. |
| Nachshon Fertel | Day54 co-lead / manager | Hands back into lead Wednesday. nachshon@day54.com |
| Mark | Forwarded the VPO second invoice | - |

The partner tightrope: Brian quietly wants the audit to expose his-side vs Joe-side gaps and nudge Joe to adopt, but told us NOT to advocate for either side. Frame all two-location drift as structural and neutral (two legacy portfolios merged in 2008, processes drifted). Neutrality is the entire value of an outside auditor.

---

## 3. Current state - where to resume

### Live RM feature adoption walkthrough: IN PROGRESS, PAUSED
- Paused at Phase 1, Step 1 (Inspections / rmInspection check), awaiting Yonatan's live-system observation.
- Resume from `Pergola_RM_Audit_LiveLog.md` (NOT included in this zip; it lives in the working session, not the project folder). It contains the resume note and the full Phase 1 sequence.
- KEY CAVEAT: Yonatan's RM login is the WEB version; staff use the LEGACY DESKTOP client. Feature visibility may differ between the two, so confirm anything ambiguous against what staff actually see.

### Remaining RM spot-checks (not started)
- Services -> Service Manager -> Issues (work order closeout audit; quantitative side of Finding 04)
- Services -> Make Ready Board (configured? templates? empty = a finding)
- Rental Info -> Prospects + Prospect Leasing Board (confirms Finding 05 with a screenshot)
- Communication -> Text Messaging Center / rmVoIP logs (RM vs personal phones)

Note: Make Ready Board and native A/P sit in a gray zone between spot-checks and the deeper feature-review layer. Clarify the boundary as work progresses.

### Upcoming
- St. Paul PM discovery call: Friday Jun 20, 12 PM. Prep is in `03_Prep_and_Reference/Pergola_StPaul_PM_Discovery_Plan.pdf`. Two St. Paul-specific probes to watch: utility setup at move-in (does it echo Jocelyn?) and after-hours dispatch (does it echo Minneapolis?). Either one appearing on both sides becomes a two-location-drift finding.

---

## 4. Findings logged (8)

All eight are written into `Pergola_Audit_Findings.docx`. Priority key: Quick Win (team can do directly), High Impact (significant improvement, may need guidance), Strategic (longer-term / architectural, shapes phase-2).

| # | Finding | Priority | Source |
|---|---------|----------|--------|
| 01 | Metered Utilities module completely unused; no consumption data in RM (cost-only). Includes the Rochester Heights ~60% YoY gas-cost increase with no attribution capability. | High Impact | RM system review |
| 02 | Residents cannot view signed leases in the tenant portal; PM emails PDFs manually. | Quick Win | Jocelyn call |
| 03 | Unit-transfer lease re-issuance pulls the old unit and requires Joe to work around it. | Quick Win | Jocelyn call |
| 04 | Urgent maintenance requests bypass RM entirely; minor jobs often never logged. | High Impact | Jocelyn call |
| 05 | Leasing funnel invisible; prospects only enter RM at application, not at first contact. | High Impact | Jocelyn call |
| 06 | Utility expenses coded differently on each side: Rochester uses clean dedicated accounts; Minneapolis/St. Paul uses a catch-all "Gas & Electric (joint service)" account. | High Impact | GL / Chart of Accounts review |
| 07 | RM account fragmentation: ~7 separately-numbered RM accounts mirror the two-location split; ties to the open merge question. | Strategic | LCS billing invoices |
| 08 | Printed resident notices (VPO) ~$700/yr; shift portal/email-eligible residents to electronic delivery. | Quick Win | LCS VPO invoice |

Findings 02-05 came from the Jocelyn discovery call (Jun 17). Finding 01 is the headline utility finding. Findings 06-08 were added Jun 18 from the GL review and the LCS invoice analysis.

---

## 5. Software spend and billing analysis (LCS / Rent Manager, Account #4046)

The kickoff brief estimated ~$18K/yr software spend, "half-used." The billing review confirms the spend is real and accounted for (not hidden waste) and breaks it down.

### Invoice 1 of 2 - Core platform (inv 1545834, dated 06/01/26, auto-paid, $0 due)
- Total: $1,176.65/mo (~$14.1K/yr)
- Line items:
  - RM Online Monthly Fee $155 (per-2nd; bundles WPS, rmService, rmInspection)
  - RM12 Primary Account $95 (per-1st)
  - 5x RM12 Additional Account $53 each (per-3rd through per-7th)
  - Web Developer Suite $75 (Unit Availability, Online Applications)
  - Unlimited Text Broadcast $95
  - RM12 API $95
  - Full rmVoIP / NDT phone ~$266 (8 NDT licenses, 5 trunk lines, 5 call recording, 7 DIDs plus dedicated Rochester DID 507-216-4402, e911, eFax, ATA)
  - Rent Manager Online Location $95
- NOT licensed: Orion AI, Smart Bills, Bank Sync (relevant baseline if AI tooling is revisited later)
- Account fragmentation: ~7 numbered "per-Nth" accounts = 6 desktop RM12 (1 primary + 5 additional) + 1 RM Online. This is the licensing footprint of the two-location structure and supports the merge question (Finding 07).

### Invoice 2 of 2 - VPO add-on (inv 1544836, dated 06/01/26, auto-paid, $0 due)
- Total: $58.38/mo (~$700/yr, varies with mailing volume)
- 49 VPO (Virtual Post Office) batches at ~$0.99-$1.20 each (printed/mailed resident notices)
- This is the "second invoice / a-la-carte add-ons" Brian flagged; forwarded by Mark
- Audit read: VPO is an actively-adopted paid feature. Optimization angle is shifting mailed notices to email/portal where residents have email on file (ties to Finding 02 portal underuse). See Finding 08.

### Cost reconciliation
- Core $14.1K + VPO ~$0.7K = ~$14.8K/yr billed directly by LCS
- ~$3.2K short of the ~$18K brief figure
- The gap is NOT hidden LCS charges. It is the AvidXchange (A/P) and Zego/PayLease (tenant payments) integration partners, billed separately by those vendors, plus estimate slack.

---

## 6. Open action items (from Nachshon sync)

- Investigate native RM A/P vs AvidXchange (via Chad meeting)
- Re-investigate whether the two Pergola locations can be merged in RM without data loss (feeds Finding 07; do not recommend a merge until the data-loss question is answered)
- Schedule 10-minute maintenance team interviews
- Pursue utility integration if relatively lightweight
- Operating cadence: update Slack task tracker twice weekly; share deliverable doc twice weekly; log daily time in the hello/goodbye Slack channel
- Slack task-tracker channel name still needs to be provided directly by Yonatan (keyword searches returned nothing)

---

## 7. Guardrails and operating principles

- Discovery mode only through Tuesday. Small feasibility probes are fine; do NOT start building the utility pipeline. The deliverable is the gap analysis, not the system.
- Frame is efficiency, not AI. AI/marketing is a "later, once basics run" footnote.
- Both sides of a finding matter. Two-location inconsistencies ARE findings; frame them structurally, never as Joe's fault.
- Small improvements count. Do not filter out "small" findings.
- The feature-review layer is a FULL assessment: adopt or skip with documented reasoning for each feature, not a filter that discards features.
- Utility findings are stronger framed as company-wide gaps, not single-property anomalies.

---

## 8. Technical / analysis learnings

### Granola (meeting notes)
- Project folder: "pergola", folder ID `a350f2f0-6f14-417c-ba8f-97898d2e607f`
- Contains: kickoff call (Jun 15), two Jun 15 internal strategy sessions, Jocelyn discovery call (Jun 17)
- The Jun 9 Brian initial call is NOT in this folder and cannot be retrieved
- Retrieval pattern: `list_meetings` with `time_range: this_week`, then fetch by ID via `get_meetings`

### Parsing RM General Ledger PDFs with pdfplumber (via bash)
- Correct regex for two decimal digits: `\.\d{2}` (NOT `\.\d2`, which silently fails)
- Expense account headers appear only on the first page of each account's section. Page-range-based parsing is more reliable than header detection across multi-page sections.
- Transaction line format: `MM/DD/YY BILLITM [ref] [description] [debit amount] [balance]`. The second-to-last numeric value is the debit amount.
- Income-side RUBS charge lines use type `CHARGE`, not `BILLITM`.

### Build conventions
- Working directory for builds: `/home/claude/`
- Findings and working drafts: keep in plain text or markdown only to conserve usage. Only build the formatted `.docx` when Yonatan explicitly requests a polished deliverable to send to the client.
- The deliverable is generated by `build_findings.js` (docx-js). Add a `findingHeader()` + `findingTable()` block per finding, then run `node build_findings.js`.

---

## 9. What Brian actually wants (priority order from the brief)

1. Leasing-funnel metrics (the keystone). Leads -> contact -> tours -> applications -> leases -> move-ins, none tracked. Live Rochester vacancy he is "flying blind" on.
2. Kill off-system workarounds (spreadsheets, Docs, clipboards, text threads). Find where and why: awareness, habit, friction, or real gap.
3. Turnover documentation. "Clipboard and experience" loses repair records, so a fix done during a turn cannot be charged back later.
4. Reporting and accountability upward. No staff report to ownership today; he wants consistent, known reporting.
5. AI / marketing. Last, only once the basics run.

---

## 10. Tools and resources

- Rent Manager (RM) by London Computer Systems - platform under audit. Yonatan on web version; staff on legacy desktop.
- Granola - meeting notes, project folder via MCP connector
- Slack - task tracker + daily check-in (exact channel name still needed)
- AvidXchange - current A/P tool being evaluated vs native RM A/P
- Zego / PayLease - tenant payments + RUBS parsing and resident statements
- `Pergola_RM_Audit_LiveLog.md` - live audit log with resume point and Phase 1 sequence (in working session, not this zip)
- pdfplumber via bash - parsing RM General Ledger PDF exports

---

## 11. Commercial mechanics

- Fee: $5,000, one bill at the start (Brian chose the single invoice).
- Invoice to Chad Silverman (chad@rentpergola.com), Brian CC'd. Sent after the kickoff, emailed directly to Chad (not routed through RM/Zego). Status: sent.

---

## 12. Session update - June 19, 2026

This section appends the Jun 19 work to keep PROGRESS.md the single resume point. Items below are not yet written into the findings .docx unless noted.

### A. Action 3 - Make Ready Board feasibility test (RESULT)

Goal: test whether the Make Ready Board can replace Darcy's external Excel turnover sheet, and whether the foundation is configured/configurable.

- Logged out/in after Brian set JD to administrator (Jun 18 call).
- Old template: still locked / uneditable even as admin (cannot edit or assign its 6 actions). Likely creator-owned and/or on a different account/location ("St. Paul side" per Brian).
- New template: CAN create one (`ZZ-TEST-Turnover`). Building items is where the walls are.
- Structure: a Make Ready item is a full "Service Issue" - Action (required), Issue, Description, Category, Priority, Status, Assigned To, Vendor, Due Date Offset, Scheduled Date Offset, Notify when ready, nested Checklist (with checklist templates). Template attaches to Properties; has an Enforce Action Sequence toggle. Richer than a flat spreadsheet.
- First wall: Action/Category/Priority/Status all "No Results Found"; Assigned To only <Property Default>/<Unassigned>.
- BUT Service Setup (Services > Service Setup) shows these lists ARE populated: Make Ready Actions = 8 (Move Out Inspection, Re-key Locks, General Maintenance, Painting, Flooring, Cleaning, Kitchen Renovation, Bathroom Renovation); Issue Categories = 21 (Turn Maintenance, Emergency, "City of St Paul Fire Inspection", CABINET ORDER, etc.).
- Permission limitation: JD can VIEW setup lists but cannot ADD/edit them (no add control), unlike other areas. Matches Brian's "you have most of the permissions."
- Re-test ruled out typeahead: typing "m" in Action and Category still returned "No Results Found." Builder genuinely cannot see the populated lists.

Conclusion (corrected): the earlier "fully unconfigured shell" verdict was WRONG. Module owned, taxonomy populated. Activation blocked by a permissions/account-scoping issue (populated lists may live on a different account than the builder context). Needs RM rep to resolve.

Still UNVERIFIED (couldn't reach the board): multi-unit line-per-unit view, and automatic tenant in/out pull. Confirm once permissions fixed.

Cleanup: `ZZ-TEST-Turnover` is an empty test template - deactivate/delete.

Draft 8-step turnover sequence (saved for when we can build): Move-out inspection/damage assessment (sched 0 / due 1); Order long-lead materials (1/2); Plumbing/leak check (2/3); Paint (3/5); Flooring (5/7); Deep clean (7/8); Re-key/locks (8/9); Final walkthrough/rent ready (9/10).

Revised Finding 09 (locked language, NOT yet built into build_findings.js): The Make Ready module is owned (Brian's contract) and the underlying Service Manager taxonomy is populated and actively used. But turnover still runs in Darcy's external Excel because the board has never been activated, and activation is currently blocked: the template builder's Action/Category/Priority/Status pickers return no results despite those lists being populated in Service Setup; the setup lists are view-only on the audit login; and the one existing template is locked even with administrator rights. These point to a permissions/account-scoping issue, not absent configuration. Recommendation: resolve with the RM rep, then build and validate a turnover template against Darcy's sheet (multi-unit view + automatic tenant pull still to confirm). Priority High Impact; effort medium, gated by the permissions resolution. Open item: which account/location holds the existing template and populated lists (ties to Finding 07).

### B. New finding - Prospect call logged but rmVoIP / Communication history empty

Source: Nachshon walkthrough, Jun 18. A prospect record shows a logged call (e.g., prior day), but Communication > History is empty and the only other option, "Unlinked Calls," buffers endlessly. Likely an rmVoIP sync / call-linking issue. Flagged to the RM rep (in punch-list email).

### C. Chad utility call - billing & cost recovery (Jun 19)

- RUBS billing runs through Zego (formerly PayLease; "same thing"). Covers water, sewer, trash; gas also included in RUBS.
- Two-location difference (structural): Brian's side bills RUBS to tenants (folded into rent). Joe's side does NOT bill utilities - Joe declines (relationship view). Only electric set up by tenants themselves.
- Common-area utilities: essentially only common-area electric is a routine common-area cost outside RUBS, and it is NOT billed back. No real common-area water.
- Rochester-specific: 7 buildings + office/community building (fitness + community room) carry a separate water/gas bill and a separate stormwater charge that do NOT go through RUBS.
- ~5% chargeback percentage: RUBS does not recover 100%; ~5% left unbilled (approx. the common-area share).
- CONSUMPTION DATA EXISTS in Zego/PayLease: a "utility recovery performance tab" shows provider consumption, sub-metered consumption, recoupment. RM ledger shows COST only - no usage. Gap is "usage lives in Zego, not RM," NOT "no usage data exists."
- Brian's water-pressure/valve event: valve change reduced water usage, tracked in a separate spreadsheet; trend noisy over 12-24 months.

Integration path / next steps:
- Chad to reach out to Zego/PayLease (he's mostly out next week, will follow up when back) re: exporting/integrating usage data with RM.
- Yonatan to ask Brian for direct Zego access so it doesn't sit only on Chad.
- RM-side question (ingest via MU Import From File / API / Open Access; is API enabled) is in the RM rep email.

Impact on findings:
- Finding 01 (Metered Utilities unused): refine - consumption exists in Zego, just not RM. Recommendation shifts toward importing existing Zego data rather than only manual meter-reading entry. API/Open Access enablement still a Phase-2 prerequisite.
- Finding 06 + Joe/Brian billing-philosophy split: reinforced. Joe doesn't bill utilities; Brian bills via RUBS. Frame neutrally as structural drift.

### D. Other interviews captured this session (not yet in findings doc)

Chris (maintenance - Crystal + two Bloomington buildings), Jun 19:
- Confirms Finding 04 from the maintenance side: intake is almost all text message, not RM. Works at his small scale; he himself says larger properties (names Rochester) need more rigor.
- Parts/procurement fragmented: no central purchasing; splits across Home Depot, Menards, and a marked-up middleman ("JC" at Maintech) for delivery. Likely out of RM scope; operational efficiency note.
- Tribal knowledge / single point of failure: personal paper remodel checklists (part numbers, vendors, blind measurements) and unit-stacking layout photos live on his phone, not in RM or anywhere shared.
- No resident onboarding for work-order submission: residents/staff default to texting; his idea = move-in printout / fridge magnet. Quick win.
- No appliance standardization policy: mixed brands/models within a property add repair time.
- No defined turnover/remodel scope on acquisition: causes "round 1, then round 2" rework.
- Supports Brian's turnover-documentation priority: tenant-caused damage relayed verbally/by text, no structured RM record for chargeback.

Brian (RM permissions / make-ready), Jun 18:
- Set JD to administrator; couldn't pinpoint the blocking privilege. Sending RM rep contact.
- RM distinguishes Make Ready Templates (standard turnover) vs Workflow Templates (capital projects/renovations).
- Existing template described as "St. Paul side," tied to Darcy (Rochester) - discrepancy to resolve (which account/location).

Nachshon sync, Jun 18 (strategic):
- Aligned that a "minimal opportunity" conclusion is acceptable; Brian told Nachshon he wouldn't be disappointed. Deliverable format endorsed: full feature inventory with adopt/skip reasoning + a TL;DR; written so reassurance reads as value.
- Utility anomaly alerting likely the headline opportunity (Finding 01).
- Do not recommend platform migration (legacy desktop vs web) and do not recommend leaving RM.

### E. Bobby discovery call — St. Paul PM (Jun 19, 12:10 PM)

Bobby manages ~12 units in St. Paul under Brian. Originally scheduled for Jun 20; happened Jun 19.

- **Turnover:** Personal Google Sheet tracking all 12 properties (tenant, unit, move-out/in dates, maintenance clean status, notes). All underlying data already exists in RM but no native report surfaces it together. Open to the Make Ready Board if it covers all properties in one clean view and auto-pulls data. Direct parallel to Darcy (Rochester/Excel) — confirms off-system turnover tracking on at least two of three sides.
- **Leasing funnel:** Leads from Zillow (primary) and Apartments.com (student properties near U of St. Thomas). Prospects enter RM only at formal application. Maintains a separate Google Sheet for showing logs (name, phone, email, date, location) — direct parallel to Minneapolis/Jocelyn. Confirms Finding 05 cross-location.
- **Maintenance intake:** ~75% of work orders submitted through tenant portal (healthy). 25% via voicemail or email, causing delays before work orders are created. Parts purchased at Home Depot; receipts go to Chad; NOT logged in work orders.
- **Communication logging:** Email correspondence not systematically logged in RM; only critical threads entered manually. Has to search Outlook for historical context.
- **Platform preference:** Prefers desktop RM12 over the web version and mobile app.
- **Market rent:** No RM tool; manually checks Zillow/Apartments.com and builds spreadsheets. RM market rent field updated occasionally but not systematically.

Impact on findings:
- Finding 05: Cross-location confirmed (Minneapolis/Jocelyn + St. Paul/Bobby). Both use Google Sheets for showing tracking; both enter prospects in RM only at application. Strengthens the finding significantly.
- Finding 09: Off-system turnover now confirmed on two of three sides (Rochester/Excel + St. Paul/Google Sheets). Bobby open to Make Ready Board if multi-property view and auto-pull criteria are met.
- New finding candidate: Market rent visibility — no RM tool, manual spreadsheets. Decide scope.
- New finding candidate: Parts not logged in work orders — confirmed by Bobby, Chris, and Mark.

### F. Mark maintenance interview — NE Minneapolis (Jun 19, 1:16 PM)

Mark covers ~11 units in NE Minneapolis including St. Anthony Village; occasional Rochester trips. Different from Chris (Crystal + Bloomington).

- **Work order intake:** ~50/50 from Jocelyn texts and resident portal submissions. Bloomington work orders come through RM and get forwarded to Chris.
- **Parts / inventory:** Dedicated parts rooms per building. Restocking: buys multiples when down to last unit. Preferred suppliers: Pro Supply (primary since ~2020 — plumbing, cabinetry, remodel parts), Menards (preferred over Home Depot for selection/price), appliance parts store as needed. Goal: fix within the hour using on-hand stock.
- **Appliance standardization:** Hotpoint fridges (stocks evaporator motors — known failure point); Frigidaire ranges (considering switching to Hotpoint for repairability); Frigidaire dishwashers. Sticks to same make/model on replacements to simplify stocking and parts.
- **Turnover inspection:** Visual walkthrough by room, paper supply/replacement list during walkthrough, flags in-stock vs. needs-ordering. Consistent process across all properties.
- No formal daily log; work is reactive and memory-driven.
- Confirmed an inventory tracking system that monitors stock levels and automates reordering would make his life easier.

Impact on findings:
- Finding 04: Mark's intake is better than Chris's (~half portal-first) but the "no formal log, memory-driven" pattern holds. Second maintenance-side data point.
- Parts procurement: Mark has a more systematic approach than Chris (dedicated rooms, consistent suppliers, appliance standardization) but still paper-based. Third data point for the "parts not in work orders" pattern alongside Chris and Bobby.

### G. Darcy call supplemental — Rochester PM (Jun 18, 12:05 PM)

Supplemental detail from Granola not previously in PROGRESS.md (core finding already captured in Section 12A).

- **Core ask (clarified):** Darcy's primary need is a reporting gap — a RM report or export that replicates her turnover spreadsheet automatically — not necessarily the Make Ready Board workflow tool. The data exists in RM; it just doesn't surface in the right shape. This matters for the recommendation: offer both paths.
- **Non-English-speaking tenants:** Darcy submits work orders on their behalf; English-speaking tenants use RM directly.
- **Mobile access issue:** Bookmarked RM link stopped working on her phone browser; can't log in from mobile. Small quick win to flag to the RM rep.
- **Prospects:** Not in RM until formal application. Apartments.com primary (Zillow paused, returning soon). Confirms Finding 05 on Rochester side.
- **Logging discipline:** Logs everything in RM even for urgent jobs, citing audit risk if work history looks sparse. Good existing habit.

Impact on findings:
- Finding 09 nuance: Recommendation should offer two paths — (1) activate the Make Ready Board for the full workflow benefit, gated on permissions resolution, AND (2) produce a native RM turnover report as a faster quick win using existing data. Darcy's core need is the report; the board is the longer-term upgrade.
- Quick win candidate: Fix Darcy's mobile RM login (bookmarked link broken) — flag to RM rep.

### H. Brian utility/RUBS call supplemental (Jun 17, 5:34 PM)

Additional context from Granola; predates the Chad utility call (Jun 19).

- RM utilities module empty confirmed (reconfirms Finding 01).
- RUBS on St. Paul/Rochester via Zego; NOT on Minneapolis — Joe's explicit choice. Brian: tenants waste less when they pay directly. Joe: RUBS is zero-sum and frustrates tenants. Structural drift; not a Day54 recommendation either way.
- Billing period inconsistency: RM utility cost entries include charge, date, and location but NOT billing period range or consumption units, making period-over-period comparison unreliable. Configuring unit-level tracking may resolve this.
- RM desktop-to-web migration: Brian and Joe are personally getting comfortable with the web version before rolling it to staff. When recommending RM features, confirm which version staff will actually use.
- Consolidation: Brian had already left a message with RM's migration team by Jun 17 — before the formal Caitlin call on Jun 22.

### I. Open follow-ups (running)

- [ ] Send RM rep email (Caitlin's email confirmed: caitlyn.carry@rentmanager.com). Account #4046. Punch-list covers: Make Ready Board permissions, rmVoIP sync, utility API/Open Access, Darcy mobile login.
- [ ] Chad -> Zego/PayLease on exporting/integrating consumption data; Yonatan may get direct Zego access via Brian.
- [ ] Verify Make Ready Board multi-unit view + automatic tenant pull once permissions resolved. Bobby (St. Paul) and Darcy (Rochester) both cite these as adoption prerequisites.
- [ ] Market rent visibility — decide if in-scope as a finding (Bobby surfaced; no RM tool, manual spreadsheets).
- [ ] Parts not logged in work orders — confirmed by Bobby, Chris, and Mark. Decide scope (finding vs. operational note).
- [ ] Darcy mobile RM login broken — flag to RM rep.
- [ ] Decide scope on Chris's items (resident onboarding printout, appliance standardization, turnover scope) — in-scope findings vs. phase-2/out-of-scope.
- [ ] Cleanup: remove/deactivate `ZZ-TEST-Turnover`.

---

## 13. Session update - June 22, 2026

### A. RM rep call (Caitlin, LCS) - location consolidation feasibility

Source: call with Caitlin (Kattelynn) Carry at LCS (caitlyn.carry@rentmanager.com) re: consolidating the two RM locations into one.

**Locations confirmed:**
- Default/primary: St. Paul w/ suburbs (SPL)
- Secondary (to be absorbed): backend name "Abraham," friendly name MPLS/Bloomington
- Company code: PERGOLA

**What transfers automatically to the default location:**
- Active properties and active units (inactive units do not move)
- Current/future tenants, including current open balances and current credits (NOT full transaction history)
- Security deposits (re-verified post-move against aging receivable + security deposit reports)
- Charge types from the secondary location (mismatches get added to default; if they carry balances, those move too)
- Active owners (Bloomington side looks thin; Caitlin to confirm)
- Vendor names only, not balances (~851 vendors in St. Paul, ~412 in Bloomington; exact-name duplicates skipped on import, near-duplicates import as separate records requiring manual property-association cleanup)
- Open/unpaid payables only (historical paid payables do not move)
- GL trial balances - format/depth is Brian's choice (see blocker below)

**What does NOT transfer (export/archive before cutover):**
- Full tenant transaction ledger history
- History notes
- Attachments
- Sent emails, screenings, applications
- Service issues (work orders)
- Standard workaround: print/export and attach to the tenant's record in the new default location.

**RUBS vs. non-RUBS confirmed NOT a blocker:** utility billing is tenant/property-specific, not location-specific, so Brian's RUBS side and Joe's non-RUBS side can coexist post-consolidation without conflict.

**Operational impact of the move itself:**
- Tenants need new TWA (tenant web portal) accounts - portal URL changes when their record moves to the new default location; new TWA setup letters go out to all Bloomington-side tenants.
- Online payments (Zego) go down for a few days during cutover while ePay bank IDs migrate.
- Recommended timing: mid-month, after rent/late fees for the month are already collected.
- Old (Bloomington) location stays active for a transition window post-migration, then gets deactivated - once deactivated, any remaining data is inaccessible. If a per-location fee currently applies, it continues until deactivation.

**Metered utilities / Zego API question (tangential, raised on the same call):**
- Reconfirmed zero metered utility data lives in RM (consistent with Finding 01).
- Caitlin does not know off-hand whether RM has API support to pull consumption data from Zego into RM - she will check internally.
- RM's "post services" utility team can manually build meter types from provided data, with optional recurring meter-read updates (monthly/yearly) - a service offering, not a confirmed API integration. Still pending an answer; tied to the Finding 01 Phase 2 / RM rep email questions already in flight.

**BLOCKER on getting a quote:** Caitlin needs to know how much GL history to migrate per property before LCS can price the project:
1. One trial balance per property as of the cutover date, or
2. Monthly trial balances per property going back to a chosen start date (more complete, more migration work, likely higher cost)

This question was sent to Brian (Jun 22, concise version) and is unanswered as of this snapshot.

### B. Invoice review - cost of running two locations

Reviewed both LCS invoices (core platform #1545834 and VPO #1544836, both Account #4046, both $0 due / auto-paid) to isolate the incremental cost of the two-location structure.

**Location-specific line items identified (core invoice):**
| Item | Cost/mo |
|------|---------|
| RM Online Monthly Fee (per-2nd) | $155.00 |
| Rent Manager Online Location | $95.00 |
| RM12 Additional Account (per-3rd through per-7th, 5x) | $265.00 ($53 each) |
| Phone Number (DID) - Rochester | $2.00 |
| Phone-e911 - Rochester | $2.00 |
| **Total** | **$466.00/mo (~$5,592/yr)** |

**Caveat - this is a range, not a confirmed number:** it's unclear whether the 5 "RM12 Additional Account" line items are tied to the second location specifically or are desktop-seat licenses independent of location count. Two readings:
- Conservative (only the clearly location-tagged fees - RM Online Monthly Fee + RM Online Location): **$250/mo (~$3,000/yr)**
- Broad (including all 5 additional accounts as location-driven): **$466/mo (~$5,592/yr)**

Open question for Caitlin to collapse the range: are the 5 additional RM12 accounts tied to the Bloomington location, or are they seats independent of which location they connect to? Not yet asked.

VPO invoice (#1544836, $58.38/mo) is unrelated to location count - that's printed/mailed notice volume, not a location fee. No new info on Finding 08 from this invoice beyond what's already logged.

### C. Open follow-ups (added this session)

- [ ] Awaiting Brian's reply on trial balance scope (blocks the consolidation quote).
- [ ] Ask Caitlin whether the 5 RM12 Additional Accounts are location-tied or seat-tied (collapses the two-location cost range to one number).
- [ ] Ask Caitlin (or fold into RM rep email) whether RM has API support to ingest Zego consumption data, or whether it requires LCS's manual utility-team service.
- [ ] Decide whether/how the consolidation discussion becomes a formal finding in build_findings.js, or stays a parallel-track investigation (Brian engaged Day54 for discovery/gap-analysis, not implementation - consolidation is Brian's own initiative with LCS, adjacent to but distinct from the audit scope).
