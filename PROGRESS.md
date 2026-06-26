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
- DELIVERABLE PURPOSE (Jun 22): the audit is not only a problem report. For meaningful findings it must also present the SOLUTION Day54 would deliver — described and scoped enough to demonstrate value, not actually built in Phase 1. The deliverable is the vehicle to earn a Phase 2 implementation contract. We do not do the fixing now; we show Brian what we can and will do so he signs Phase 2.
- RECOMMENDATION TIERING: split findings into (a) give-away quick wins the team can do themselves or via the RM rep (portal lease setting, attach receipts to work orders, prospect logging) and (b) Phase 2 builds Day54 would deliver (utility anomaly dashboard, parts/inventory + procurement system, turnover system if RM cannot do it natively). Giving away the quick wins freely is the trust-builder that makes the paid Phase 2 proposals credible.
- DELIVERABLE THESIS / through-line (Jun 22): Pergola runs on COST data without OPERATIONAL data. Across findings the pattern repeats — they can see what was spent or that something happened, but not the detail needed to manage it proactively. Utilities: cost yes, consumption no. Parts: GL total yes, per-property/per-job/volume no. Leasing (05): applications yes, funnel no. Turnover (09): that a unit turned yes, documented steps/damage no. Day54's value is converting cost data into operational data the owner can act on. Use this as the spine of the executive summary and the framing for every Phase 2 pitch.

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

ROOT CAUSE CORRECTED (Jun 23) — see Section 14.B. Scoping is RULED OUT; the picker emptiness, view-only setup lists, and locked template all collapse into ONE cause: insufficient add/update privilege on the JD audit login (confirmed by explicit RM error). Finding 09 language to be tightened from "permissions/account-scoping" to "read-only Service Manager privileges on the audit login." Finding 07 stays relevant to consolidation but is no longer the explanation for this bug.

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

- [x] RM rep email sent to Camille Brigano (camille.brigano@rentmanager.com). Covers: Make Ready Board permissions (Finding 09), utility consumption path into RM (Finding 01), rmVoIP call-linking issue (Finding 10). Awaiting reply. Note: Camille is the RM rep for operational/feature questions; Caitlin Carry (caitlyn.carry@rentmanager.com) is the separate LCS migration contact for the consolidation track only.
- [ ] Chad -> Zego/PayLease on exporting/integrating consumption data; Yonatan may get direct Zego access via Brian.
- [ ] Verify Make Ready Board multi-unit view + automatic tenant pull once permissions resolved. Bobby (St. Paul) and Darcy (Rochester) both cite these as adoption prerequisites.
- [ ] Market rent visibility — decide if in-scope as a finding (Bobby surfaced; no RM tool, manual spreadsheets).
- [DECIDED Jun 22] Parts procurement + visibility becomes its own finding (likely Finding 11), confirmed by Bobby, Chris, and Mark. Two linked problems: (A) PROCUREMENT — fragmented buying across Home Depot/Menards/Pro Supply plus a marked-up middleman (Maintech/JC), ad-hoc trips costing time/fuel/vehicle wear, and a parts list Brian/Joe say exists but maintenance does not use (failed because a static list is slower to check than eyeballing the shelf — any replacement must be FASTER than counting). (B) VISIBILITY — parts flow as receipts to Chad, so the GL shows only a lump expense; no per-property, per-job, per-tech, turnover-vs-routine, or volume breakdown. Consequences: cannot tell if a building is a money pit, cannot budget per property, cannot catch shrinkage/duplicate buying, cannot charge back tenant damage, and cannot negotiate volume pricing because nobody knows category volume. Same disease as Finding 01 (cost visible, operational detail invisible). Staged recommendation: (1) consolidate to 2-3 suppliers with online ordering + account/volume pricing to kill trips and the Maintech markup, (2) lightweight par-level list per building that is faster than counting, (3) parts/inventory tracking system as a Phase 2 build only if 1-2 fall short. Quick-win sub-fix (give away): attach the parts receipt photo to the RM work order before it goes to Chad — creates the chargeback record and per-job attribution at near-zero friction. OPEN: confirm live whether RM has an Inventory / Purchase Order module already sitting unused (changes whether the Phase 2 build is even needed).
- [ ] Darcy mobile RM login broken — flag to RM rep.
- [ ] Decide scope on Chris's items (resident onboarding printout, appliance standardization, turnover scope) — in-scope findings vs. phase-2/out-of-scope.
- [ ] Cleanup: remove/deactivate `ZZ-TEST-Turnover`.

---

## 13. Session update - June 22, 2026

### A. RM rep call (Caitlin, LCS) - location consolidation feasibility

Source: call with Caitlin (Kattelynn) Carry at LCS (caitlyn.carry@rentmanager.com) — LCS migration team, consolidation track only. Separate from Camille Brigano (RM rep, operational questions).

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

### D. RM live system check — Service Issues (Jun 22)

Direct observation in RM web, Services > Service Manager > Issues. Company code: pergola.

**Headline: the service issues module is HEAVILY used and generally well-managed — a strength, not a gap.** (An initial open-only view was misleading and briefly suggested the opposite; including closed issues reversed it. Lesson logged: do not conclude from a filtered view.)

- With both Open and Closed issues shown, the footer reads 19,383 total issues, average age 13:20:13 (~13 hours). ~19,300 are resolved/closed. Most issues are closed, and fast (observed live: issue 29241 "Lost mailbox" created and Resolved in ~2 minutes).
- The "Default List" saved view defaults to OPEN issues only. On that filtered view alone: 71 open, average age ~485 hours (~20 days), oldest open ~6,847 hours (~9.5 months). The open backlog skews old precisely because the system closes most things fast — what lingers is the minority that fell through.
- Tickets are created across channels: `<TWA Submitted>` (tenant portal) plus staff (Darcy, rthompson, Will, George, chad). RM is genuinely the intake and resolution point for the bulk of logged work, across multiple properties (Rochester Heights, Rosetree, Grand/Cleveland/Lincoln/Ashland/Dayton Ave) — portfolio-wide, not single-location.

**Real but NARROW finding — stale/untriaged open tail:** of the ~71 open tickets, a handful date to 2024 ("Laundry Room Issue" 04/25/24, "Club house exercise" 06/12/24) and several are untriaged (Category and Priority both `<Unassigned>`). The system closes most things quickly, but the minority that don't get closed fast become orphaned and sit indefinitely. This is a triage/hygiene cleanup item — modest, not systemic.

**Effect on Finding 04:** must be rewritten DOWN. The original "urgent maintenance bypasses RM entirely; minor jobs often never logged" does not survive 19K+ logged issues. The defensible version is narrow: (a) a specific subset of urgent/after-hours text jobs may still bypass RM (per interviews), and (b) a stale open-ticket tail needs periodic triage/cleanup. The volume claim is the opposite of a problem.

**Closeout quality + parts check (Jun 22, sampled closed tickets):**
- Closed tickets HAVE resolution notes — they are not closed blank. Good news; Finding 04's closeout concern shrinks further (record exists, just lacks photos and parts).
- No photos attached on the sampled tickets. Minor.
- The issue detail has a "Work Orders" sub-section: a per-job line-item grid (Item, Description, Quantity, Cost, Sale Price, Total) with Add Item / Create Item Links / Print Work Order. THIS is RM's native parts/materials area. It is EMPTY on the sampled tickets ("There are no work order items for this issue"). Checklist also empty.
- KEY: the "Sale Price" column makes this grid the built-in CHARGEBACK mechanism (Cost = paid, Sale Price = billed, Total flows to billing). So one empty grid = BOTH the parts-tracking gap AND the chargeback gap. Same "owned but unused" pattern as the rest of the audit.
- Caveat: sample, not census — but consistent with interviews (parts -> receipts -> Chad, never into RM), so a sound read. To lock it airtight, check a turnover issue (parts most likely there).

**Effect on Finding 11 (parts):** RM natively handles Problem B (per-job parts + chargeback) via the Work Orders line-item grid — NO build needed; recommendation is "use the feature you own," or the lighter give-away "attach the receipt photo to the ticket." Friction (will techs fill it in?) is the open risk, but the tool exists at zero cost. (Problem A framing CORRECTED in subsection E below — RM also has a native inventory/reorder/PO suite, so Problem A is NOT an external build either.)

### E. RM live system check — Inventory / Purchasing (Jun 22)

Direct observation in RM web. CORRECTS my earlier assumption that Finding 11 Problem A (stock/trips/procurement) needs an external build. It does not — RM has the full native toolset, unused.

**What exists:**
- Inventory Items catalog (Accounting > Inventory Items): ~13 items, ALL Quantity 0.00. Items are mostly CHARGE items configured for chargeback/billing (Maint. Tech. Labor cost $55 / markup $15; Tenant Locked Out $75; Replacement Locks/Keys $45 + $5 markup; Window Blinds; disposal/snow/carpet fees; reimbursements). Columns: Cost, Markup, Expense Chart Account, Income Charge Type. This is a CHARGEBACK PRICE BOOK, not a stock system — and it is the catalog that feeds the Work Orders "Add Item" dropdown.
- Full native inventory report suite (via Command Launch "inventory"): Inventory History, Inventory Reorder, Inventory Valuation Summary, Inventory Items Listing, Physical Inventory Worksheet. The "Inventory Reorder" report + "Physical Inventory Worksheet" are exactly the stock-level + auto-purchase-list system Yonatan envisioned.
- Purchase Orders module exists but is EMPTY.
- CONFIRMED census-level: Inventory History, Inventory Reorder, and Inventory Valuation Summary reports are ALL empty = zero inventory transactions ever. The module is untouched, not lightly used. The ~13 catalog items are a billing price book with no stock behind them. Finding 11 Problem A "unused" conclusion is airtight, not sample-based.
- (Menu confirms for other findings: Services menu shows Metered Utilities with MU Import From File, Meter Types, Meter Readings Setup/Statuses — relevant to Finding 01; Make Ready Templates + Make Ready Board under Services > Make Ready — Finding 09. RM version 12.260552.)

**Conclusion (measured):** RM natively supports stock-level inventory + reorder + purchase orders across locations — the exact tooling Problem A needs. It is unused (quantities 0, POs empty); the catalog that IS set up is a billing price book, not stock. Same owned/configured/unused pattern as utilities and make-ready.

**Effect on Finding 11 Problem A:** pitch shifts from "build an external system" to "ACTIVATE RM's existing inventory/reorder/PO module." Cheaper, more credible Phase 2. HONEST CAVEAT (do not over-promise): activation is not free — the reorder report only works if each physical part is set up as an inventory item with stock count, reorder point, and per-building location, AND the counts are kept current. That ongoing count-maintenance is the same friction that likely killed it before. The Phase 2 value is designing a count process techs will sustain, not flipping a switch. Supplier consolidation / online ordering (Pro Supply etc.) remains a parallel non-RM operational rec.

**Recoverable-money angle:** the chargeback price book (labor + markup, lockout, locks/keys) means the ability to bill tenant damage back with parts + labor + markup was already built. Empty Work Orders grids mean it is not used. Every tenant-damage turnover where the cost is eaten instead of billed is recoverable money — a concrete dollar argument for Brian.

**Through-line reinforced:** owned, often partially configured, left idle — utilities (module empty), make-ready (lists populated, board not activated), inventory/parts (price book set up, quantities 0, Work Orders grids empty, POs empty). The deliverable's value is activation + adoption, not buying anything new.

### F. Finding 11 recommendation — RIGHT-SIZED (Jun 22)

Critical correction to the "activate RM inventory" pitch: the MANUAL nature of RM inventory is almost certainly WHY it was never used, so "just turn it on" would script the same failure. RM inventory is manual at the two points that matter — decrement on every part used, increment on every restock. For 3 techs across buildings that is the adoption-killer, and it likely killed the parts list Brian/Joe mentioned. Do NOT lead the recommendation with "activate RM inventory."

Self-maintaining mechanism (the only thing that rescues RM inventory): RM is designed so adding an inventory item to a work order auto-decrements stock — so per-job parts logging (Problem B, done anyway for chargeback) IS the inventory-maintenance mechanism; one action = chargeback record + stock drawdown. CONFIRM exact behavior with Camille. But this still depends on the logging habit sticking, so it consolidates friction rather than removing it.

RIGHT-SIZED recommendation order for Finding 11 (lead with lowest-overhead, highest-value):
1. Supplier consolidation + online ordering/delivery (Pro Supply etc.) — kills trips and the Maintech markup, ZERO inventory overhead, pure procurement. Biggest cheapest win.
2. Par-level VISUAL lists per building — faster-than-counting glance sheet, NOT a maintained RM quantity. Lightweight version of Yonatan's original idea.
3. Parts on work orders for chargeback (Problem B) — worth it alone for recoverable tenant-damage money.
4. Full RM inventory (counts/reorder/POs) = OPTIONAL, SEQUENCED future step only — turn on AFTER the parts-logging habit proves sustainable (so it self-maintains via work-order drawdown). Flag adoption cost honestly; do not oversell. For a 3-tech/600-unit shop full inventory may cost more admin time than it saves; right-size, do not default to it because it is "owned."

Principle captured: "owned" does not mean "right." A feature the team already abandoned for friction reasons should not be re-recommended without removing the friction that killed it.

### G. RM live system check — Prospects (Jun 22, Finding 05)

Direct observation, Rental Info > Prospects. ~4 active prospects total (3 at MPLS/BLOOMINGTON pending approval + 1 at other location), all recent (06/17-06/22). Sample record: Eddwin Rojas, Acct #2363, Essex Green Apartments. History shows "Account created through Online Application" 06/17 -> Screening Report 06/18 -> attachments 06/22.

**Confirms Finding 05 at system level, and refines it:**
- Prospect records are BORN AT APPLICATION ("Account created through Online Application"). The prospect did not exist in RM before applying online, so the entire pre-application top of funnel (inquiry, first contact, showing, no-shows, dropped leads) was never captured. Low volume (~4) is consistent: only applicants exist as records.
- REFINEMENT: the BACK half of the funnel works and is tracked (application -> screening -> approval -> signed lease -> future move-in; there is a list of approved future tenants awaiting move-in). The gap is specifically the FRONT half (lead -> contact -> showing -> applied) — which is exactly the part Brian needs to diagnose vacancy.
- Lead Information section is EMPTY on all records (no source, no leasing agent) even though RM auto-created them from online applications. So even applicants carry no source attribution — cannot tell Zillow vs Apartments.com conversion.
- Stages ARE visible via the notes/history timeline, but only post-application stages, not pre-application funnel.
- Spans both locations at low volume; consistent with all three PM interviews (Jocelyn, Bobby, Darcy) who keep external Google Sheets for showing logs.

**MANUAL-ENTRY THROUGH-LINE (sharper spine for the deliverable):** the consistent failure point across the whole audit is not the modules — it is any data requiring a HUMAN to enter it at the moment of an operational action. Auto-captured data works everywhere (online applications, GL cost postings, portal work-order submissions). Manual-at-point-of-action data is empty everywhere (lead source/inquiries, parts on work orders, inventory counts, meter readings). This supersedes/sharpens the earlier "cost data without operational data" thesis: the operational data is missing specifically where it depends on manual entry. Every Phase 2 recommendation should minimize or eliminate manual entry, or the data will not get captured.

**Finding 05 recommendation — REVISED (Jun 22, after critique).** Earlier draft said "auto-populate every listing inquiry into RM as a prospect record." REJECTED: interviews say inquiry volume is high and conversion low, so auto-creating a full record per inquiry imports mostly noise (spam, no-responses, unqualified, ghosts) and creates another unmaintained list. The flaw was collapsing two different needs:
- FUNNEL METRICS (what Brian needs): aggregate counts + conversion at each stage to diagnose the Rochester vacancy. The non-converters ARE the denominator — needed as a COUNT, not as individual records.
- PROSPECT RECORDS (CRM nurture): a record per lead. Not what Brian asked for; this is the noise.

REVISED fix — assemble the funnel from where each stage's data already lives:
- Top of funnel (inquiries, views, leads, response time): Zillow / Apartments.com dashboards already track this. SURFACE the metric, do not rebuild records in RM. CONFIRM what those dashboards actually expose (leads + views likely; response-time + showing outcomes need verifying) before recommending any manual tracking.
- Middle (contacted -> showing -> applied): neither platform nor RM captures this; the only part worth a lightweight tracker. Create a record only once a lead becomes REAL (responds / requests showing), source tagged — a manageable handful, not the flood.
- Bottom (application -> move-in): already works in RM (confirmed in subsection G).
- This answers Brian's exact question (marketing vs response-speed vs conversion) by sourcing each stage's number from the system that already measures it, while avoiding BOTH failure modes: no manual logging of every lead (the through-line), and no auto-dump of every tire-kicker (the noise).

NOTE: Finding 05 (per-PERSON showing/lead logs) and Finding 09 (per-UNIT turnover sheets) are DISTINCT workarounds with distinct fixes. The prospect/funnel fix touches only 05. Turnover sheets (Darcy's Excel; Bobby keeps both a turnover sheet AND a showing log) are the Make Ready / turnover-report track (09). Keep them separate in the deliverable; do not lump "the Excel sheets" together.

### C. Open follow-ups (added this session)

- [ ] Awaiting Brian's reply on trial balance scope (blocks the consolidation quote).
- [ ] Ask Caitlin whether the 5 RM12 Additional Accounts are location-tied or seat-tied (collapses the two-location cost range to one number).
- [ ] Ask Caitlin (or fold into RM rep email) whether RM has API support to ingest Zego consumption data, or whether it requires LCS's manual utility-team service.
- [ ] Decide whether/how the consolidation discussion becomes a formal finding in build_findings.js, or stays a parallel-track investigation (Brian engaged Day54 for discovery/gap-analysis, not implementation - consolidation is Brian's own initiative with LCS, adjacent to but distinct from the audit scope).

---

## 14. Session update - June 23, 2026

### A. Camille (RM rep) reply received

Camille Brigano answered the Jun 22 punch-list email (Make Ready permissions, utility consumption, rmVoIP). Summary of what she resolved vs. dodged:

- **Make Ready privileges:** clarified that "Administrator" is just a privilege flag granting feature VISIBILITY, not database add/edit/delete control - those are separate per-feature User Privilege nodes that must be enabled individually. Directionally correct but she did NOT identify which nodes, and did NOT explain the specific picker-empty symptom (see B).
- **Utility consumption:** two hard answers. (1) API / Open Access is NOT enabled on Pergola's subscription - kills the API ingest path unless purchased/enabled. (2) She steered AWAY from pushing readings into RM, citing double-charge risk (RM calculating charges + Zego pushing charges) and said Zego likely has built-in anomaly detection. PUSHBACK NOTED: the double-charge concern only applies if RM-side billing is turned on; importing consumption for MONITORING only (Meter Readings, no billing config) does not auto-create charges. Decision pending: where anomaly detection should live - Zego (her suggestion, unverified "I believe"), a Day54 pipeline, or RM monitoring-only import.
- **rmVoIP:** explained calls auto-link by matching the INBOUND CALLER's number to a contact record (prospect/tenant/owner/vendor); "Unlinked Calls" = calls from numbers not in RM. Punted BOTH real bugs (logged call with empty Communication history; Unlinked Calls view spinning forever) to RM support. Effect on Finding 10 below.

### B. Make Ready picker root cause CORRECTED - it is a privilege wall, account-wide

Two live tests this session settle the diagnosis:

1. **Scoping ruled out.** Created a NEW template and selected the property "1-Rochester Heights" FIRST (the same property the one working template is bound to), then Add item. Action/Category/Priority/Status pickers were STILL empty. If location scope were the cause, that property would have resolved the actions the way it does for the existing template. It didn't. Property/location is not the variable.
2. **Privilege wall confirmed in RM's own words.** Enabling Meter Estimates (Services > Metered Utilities) threw a hard error dialog: **"An error has occurred - Insufficient privileges to add or update data."** Same wall, different module.

CONCLUSION: the three Make Ready symptoms (empty pickers, view-only setup lists, locked template + disabled Save) collapse into ONE root cause - the JD audit login lacks add/update privileges across the Service Manager / Metered Utilities modules. The "Administrator" flag gives visibility (can view setup lists, can open the template dialog, existing data renders) but not the per-feature add/update rights, so every interactive action (picker lookup, Save, enable) is inert. This is ACCOUNT-WIDE, not Make-Ready-specific: it blocks BOTH Finding 09 (turnover) and Finding 01 (utility/meter config).

Ties back to Jun 18 (Section 12.D): Brian set JD to administrator but "couldn't pinpoint the blocking privilege" - which is exactly why he handed off to Camille. The blocker he couldn't find is this add/update privilege gap, now confirmed explicitly.

The "view vs. select" paradox explained: in RM, "view a list in Service Setup" and "select from that list inside the template builder / create a Service Issue" are governed by different privilege nodes. JD has the former, not the latter, hence configured-but-unselectable.

### C. Existing-template discrepancy RESOLVED

Screenshot of the one existing Make Ready Template confirms it is **"Rochester Heights"** (Properties = 1-Rochester Heights), 6 items (Move Out Inspection, Re-key Locks, General Maintenance, Painting, Flooring, Cleaning), all Unassigned, footer "1 of 1 Make Ready Templates." This resolves the line-245 discrepancy: the existing template is Rochester (Darcy), NOT "St. Paul side" as Brian described on Jun 18. Update the Section 12.D note and Finding 09 open item accordingly. Also confirms scope is set at the template HEADER (one Properties binding), not per item - items carry no property of their own.

### D. rmVoIP / Finding 10 - DOWNGRADED (check done)

CHECK DONE (Jun 23, screenshot). Tenant Hannah Holm (Acct #2214), phone on file (704) 960-9860: her History/Notes shows "rmVoIP Call To (704) 960-9860" (01/20/20). The call AUTO-LINKED to the contact whose number matches. So rmVoIP linking WORKS AS DESIGNED when the number is on file - the original "prospect with empty history" symptom was an unlinked call (number not saved) or the wrong tab, NOT a sync defect. The empty-history half of Finding 10 does NOT survive.

What the screenshot actually surfaces (both more useful than the supposed bug):
1. CALL LOGS BUT IS NOT NOTATED: the note reads "rmVoIP Call To ..., Caller ID:" - blank, no conversation content. Auto-captured metadata present, human-entered substance missing. This is the manual-at-point-of-action through-line, not a defect.
2. COMMS IS MOSTLY EMAIL, and RM-SENT email DOES log: history is dominated by outbound Pergola blasts (showings schedule, laundry survey, picnic invites) sent through RM, so they auto-log. This does NOT contradict Bobby's point - the gap is INBOUND/individual two-way threads that live in Outlook, not the outbound blasts.

NET Finding 10: downgrade to the spinning "Unlinked Calls" view only (the one genuine RM support-ticket bug), folded under the broader comms-logging observation (outbound RM mail logs; inbound/individual Outlook correspondence does not, and calls log without notation). Minor data oddity noted, not pursued: "Last Contact 12/17/2014" despite 2015 + 2020 entries.

### E. Action taken - message to Brian (privilege blocker)

Sent Brian a message: the Jun 18 privilege blocker is now confirmed by RM ("Insufficient privileges to add or update data") and is broader than Make Ready - it also blocks Metered Utilities (Finding 01). Two asks: (1) does Brian's OWN login hit the same wall when enabling Meter Estimates / adding a Make Ready item? (isolates "JD's login" vs "account-wide"); (2) take the exact error string to Camille / RM support to identify the precise privilege node, since hand-toggling "administrator" already failed on the 18th. Awaiting Brian's reply.

### F. Open follow-ups (added this session)

- [ ] Awaiting Brian: does his full-privilege login hit the same "insufficient privileges" wall? Decides privilege-grant vs. RM support ticket.
- [ ] Re-ask Camille (once Brian responds) for the SPECIFIC User Privilege nodes (Service Manager / Service Issues / Inspections / Make Ready Items + select-level access to the setup lists) that enable add-item + Save on a template, given the login can VIEW the lists but the builder returns none.
- [ ] Tighten Finding 09 language: root cause = read-only Service Manager privileges on the audit login (scoping ruled out); fix Rochester-Heights-not-St-Paul detail.
- [ ] Decide where utility anomaly detection lives (Zego vs Day54 pipeline vs RM monitoring-only import); push back on Camille's double-charge framing since monitoring-only import does not auto-bill. API/Open Access NOT enabled is now a confirmed Phase-2 prerequisite/cost for any RM-side ingest.
- [x] rmVoIP: verified (Jun 23, Hannah Holm screenshot) - linking works when number is on file; empty-history half does NOT survive. Finding 10 downgraded to spinning Unlinked Calls view only, folded under comms-logging. Open: spinning view stays a support ticket; decide if "calls/inbound email not logged or notated" becomes part of Finding 04/comms finding rather than its own item.
- [ALL-ON-BRIAN, Jun 23] Every actionable in-flight item now waits on Brian: (1) privileges response + his-login test, (2) Zego/PayLease access connection, (3) GL trial-balance reconciliation scope for the consolidation quote. No remaining audit action is unblocked by his input. Clean pause point.

### G. Deliverable sync pass - build_findings.js reconciled (Jun 23)

Reconciled the .docx source to the current research state. All edits are in `build_findings.js`; rebuild with `node build_findings.js` in the build environment (node is not on the local Mac), then swap the .docx into 01_Deliverable. Structural bracket balance verified (parens/brackets/braces all balanced with string literals excluded).

Changes made:
- Finding 04: REWRITTEN DOWN. Old title "Urgent Maintenance Requests Bypass RM Entirely" was contradicted by the 19,383-issue live review. New title "Maintenance Logging Is a Strength; the Real Gaps Are a Stale Open-Ticket Tail and After-Hours Intake," reclassified Quick Win. Frames RM maintenance adoption as a strength; narrow gaps = stale open tail + after-hours intake; closeout has notes but no photos/parts (cross-ref 11).
- Finding 05: recommendation REPLACED. Removed the rejected "log every inquiry in RM" rec; added the assemble-from-sources framing (top of funnel from Zillow/Apartments dashboards, middle = lightweight real-lead tracker, bottom already works) + the system-level confirmation (prospects born at application, Lead Information empty).
- Finding 09: root cause CORRECTED from "permissions or account-scoping" to the privilege wall - scoping ruled out by the property-first test; confirmed by the explicit "Insufficient privileges to add or update data" error; named the existing template as Rochester Heights (not St. Paul); tied to Finding 01 (same gap blocks Meter Estimates).
- Finding 10: DOWNGRADED. Retitled to the communication-logging framing; linking works as designed (Hannah Holm proof); net items = call-notation habit, inbound-email-stays-in-Outlook gap, and the one Unlinked Calls support ticket.
- Finding 11: ADDED (was researched but missing from the doc). Parts/procurement + inventory, High Impact, with the right-sized recommendation order and the recoverable-money/chargeback angle.
- Exec summary status table: refreshed (St. Paul/Bobby complete, parts review complete, roadmap drafted, walkthrough marked partial). Pending-findings note updated to name the open items (systematic walkthrough, AvidXchange, the three access-gated verifications).
- Roadmap (Section 03): WRITTEN from placeholder to a full three-tier roadmap - Tier 0 unblock (privileges, Zego, consolidation scope, GL coding), Tier 1 quick wins (02/03/04/08/10/11/05 give-aways), Tier 2 Phase 2 builds (utility dashboard off Zego, funnel view, turnover system, parts/procurement, the closed-issue capital-planning mine, and the unifying Operational Data Layer). AI add-ons left as a Phase 3 footnote.

### H. Open research prep (unblocked, not yet executed)

- Closed-issue corpus mine (NEW value, no Brian needed): export the ~19,383 Service Manager issues (Issue, Property, Category, Priority, Created/Resolved dates, Assigned To) and cluster by property + issue type to surface money-pit buildings and recurring systems. Becomes a capital-planning/preventive finding. Needs Yonatan to pull the export from RM (web reports, read-only).
- [MESSAGE SENT, Jun 23] AvidXchange vs native RM A/P: async message sent to Chad (the lane was untouched since kickoff, open action item Section 6). Asked: cost/mo, monthly bill volume, what it does that native RM A/P does not, approval workflow + where payment is sent from, whether native RM A/P could handle it, and (softened) how AvidXchange connects to RM (API/file/manual) to test the API-conduit theory. Logs confirmed the questioning is grounded: AvidXchange is the active A/P/vendor-bill-payment integration partner, billed separately (not on the LCS invoice), and Chad owns all A/P. Caveat held: the $95 RM12 API = AvidXchange conduit is a HYPOTHESIS not supported by the logs; connection mechanism may route to Camille/LCS if Chad (a PM, not IT) doesn't know. Awaiting reply, then write up the A/P finding + confirm/drop the API theory. Bank Sync as a native-A/P replacement component is our post-analysis, not a Chad question.
- Methodological: validate key findings (esp. 04, 09 pickers) against the legacy DESKTOP client staff use - Yonatan is on web; visibility may differ.
- Possible latent finding: if even an Administrator login lacks add/update, staff PM logins may be silently blocked on features Pergola pays for. One question to Brian/Camille: do staff hit similar walls?

### I. Feature inventory built + scope decisions (Jun 23)

Yonatan decisions this session (walk-through of gaps C / channels D / plays E):
- Feature-adoption walkthrough: FINISH the systematic pass (not the lighter "table from existing"). Delivered as a new deliverable section (see below) plus a live-confirm punch-list.
- Scope: market-rent finding = OUT; Chris's onboarding printout = OUT; Chris's appliance-standardization + acquisition-turnover-scope = IN as operational notes only (added before the placeholder in build_findings.js).
- Business-continuity-risk framing = NOT added (keep efficiency framing).
- Data channels: bank/card statements = unrealistic (Finding 11 stays qualitative, no markup $ figure); Zillow/Apartments top-funnel = not seen as a valuable deliverable (dropped from Phase 1; Finding 05 unchanged); workaround-file collection (Darcy/Bobby/Chris) = Phase 2 construction work, not Phase 1; service-issue export = Yonatan unsure how to pull, so the closed-issue teaser is deferred (stays a Phase 2 roadmap item, not done now).

NEW deliverable section added to build_findings.js: Section 02 "Rent Manager Feature Inventory" (Findings renumbered to 03, Roadmap to 04). A complete adopt/fix/activate/confirm verdict table for every licensed add-on (from the §5 invoice detail) and every major in-platform module, each cross-referenced to F01-F11. Built from billing detail + live review; structurally validated (sections 01-04 in order, 5 builders wired, 22 rows, brackets balanced). Rebuild with node where available.

VALUABLE CATCH from the systematic pass: the invoice carries a billed "RM12 API" line (~$95/mo, §5) but Camille said API/Open Access is NOT enabled. Likely the partner-integration API (AvidXchange/Zego) is active while self-serve Open Access is not - but unconfirmed. Flagged as a note in the inventory: a paid line for an unusable capability is either recoverable cost or a switch to flip for the Phase 2 utility build. Candidate Finding 12 if confirmed; ask Camille.

LIVE-CONFIRM PUNCH-LIST (what Yonatan must check in the live system to truly close the systematic pass - prefer the legacy DESKTOP client staff use, since the review was on web):
1. rmService (maintenance mobile) - do techs actually use the app, or is intake all text? (F04)
2. rmInspection - adoption unconfirmed; the walkthrough paused here. Relevant to move-out inspections / make-ready (F09).
3. Unit Availability (Web Developer Suite) - used?
4. rmVoIP utilization - the ~$266/mo line: are call recording (5), eFax, and the 8 NDT licenses actually used vs. paid? (F10)
5. RM12 API / Open Access - confirm what the $95 line covers vs. what Camille says is disabled (the API catch above).
6. Native Accounts Payable vs AvidXchange - the untouched lane; needs a Chad session (cost-consolidation play).
7. Validate the load-bearing findings (F04 issue volume, F09 empty pickers) against the desktop client to rule out web-only behavior.

## 15. Session update - June 24, 2026

### A. Privilege wall PARTIALLY breached - Brian's keyword-toggle fixed SELECT, not ADD

Brian worked the User Privileges screen live on the Jhonathan Day54 login (text exchange + screenshots). He searched the privilege tree by keyword **"estimates"** ("1 Filters Applied") and checked the boxes that surfaced - the **Utilities** and **POs/Estimates** subtrees (Manage Meter Estimates Settings; Purchase orders; Change/Approve/Fulfill POs; PO Workflows; Estimates; View estimates from all users), Enabled/Add/View/Edit - then on a second pass checked the **Delete** column too ("All boxes were checked EXCEPT Delete; I have now checked even Delete").

Result on the JD login:
- **GAINED (the positive progress):** can now ASSIGN Action/Category/Priority/Status from the pickers inside an EXISTING Make Ready template. The empty-picker symptom (Section 14.B) is resolved for selection. This confirms the Jun 23 "select-level access to the setup lists" half of the diagnosis - granting add/view/edit on the relevant setup nodes made the lookups populate.
- **STILL BLOCKED (two distinct walls remain):**
  1. **No Add control for NEW action items** - cannot add a new item (= a new Service Issue) to a template.
  2. **Cannot enable Meter Estimates** - same hard error persists: "Insufficient privileges to add or update data."

### B. Sharper diagnosis - the two remaining blocks live OUTSIDE the "estimates" keyword

The keyword-search method is precisely why it is only half-fixed. The two remaining capabilities are governed by nodes the word "estimates" never surfaces:

1. **"Estimates" (POs/Estimates) is NOT "Meter Estimates."** The POs/Estimates subtree Brian toggled (Purchase orders, PO Workflows, Estimates, View estimates from all users) is the A/P purchase-order-estimates feature - irrelevant to both blockers. The only relevant row under the filter is "Manage Meter Estimates Settings" (under Utilities), and that node alone is not sufficient to ENABLE/save the Meter Estimates config; that write needs the broader **Metered Utilities** add/update right (Meter Readings / Meter Types / parent Metered Utilities tree), which the "estimates" filter does not display.
2. **The Make Ready "add item" right is in the Service Manager tree, not Estimates.** A Make Ready item is a Service Issue, so creating one is gated by **Service Manager > Service Issues (Add)** (and/or a Make Ready Items node). "estimates" never surfaces it, so Brian has not toggled it. This is exactly why SELECT now works but ADD does not.

Net: same single root cause as Jun 23 (add/update privilege gap), now resolved for the select layer and isolated to two specific add/update nodes.

### C. Next actions
- [ ] **Re-log and retest first.** RM privilege changes typically require a logout/login to take effect. Brian's Delete-column toggle has not been retested on a fresh session - re-log before concluding it failed (this answers Brian's "try again and let me know").
- [ ] **Two exact setup items confirmed (Jun 24 screenshot of Services > Service Setup).** Both blockers map to named setup lists, each in its own module column - so the privilege nodes are named after those modules, not "Estimates":
  - **Make Ready > Make Ready Actions** - the missing Add button. Privilege search term for Brian: **"Make Ready"** (his "estimates" search never reached it).
  - **Utilities > Meter Estimates** - NOT a search miss (correction): the "estimates" filter matches any node containing "estimate," so it DID surface "Manage Meter Estimates Settings" and Brian checked it - yet it still errors. That node is a single on/off Enabled flag with no Add column, so it cannot grant a data write. The error is literally "add or update DATA," which needs a meter DATA node with Add/Edit columns (likely Metered Utilities / Meter Readings / Meter Types - none of which contain "estimate," which is why the keyword search never pointed Brian at them). Search "Meter" for a row that HAS the Add/Edit columns and check them, then re-log. NB the Utilities parent already shows Add checked yet it still fails, so if no obvious meter Add node resolves it, this half goes to Camille for the exact node.
- [ ] Sent Brian a short message (Jun 24) with those two search terms and the Add/Edit + re-log instruction. If it still fails, hand the same two node names to Camille.
- [ ] Stop hand-toggling by keyword; that surfaced the wrong (A/P Estimates) subtree. Either Brian grants those two nodes directly or Camille confirms the exact node paths.
- Reinforces the latent finding (Section 14.H): if an Administrator-flagged login needs these specific add nodes hand-granted one at a time, staff PM logins are likely silently blocked on add/update for features Pergola pays for. The two-pass nature of this fix is itself evidence for that finding.

### D. Scope decision (Jun 24) - no web-vs-desktop caveat

Yonatan: do NOT hedge findings with a web-vs-desktop disclaimer (reverses the caveat floated earlier this session). Rationale: Brian knows the audit runs on the web client; the web client is treated as the REFERENCE platform and tends to expose MORE than staff's desktop, not less. If a valuable capability exists on web that staff's desktop lacks, that becomes a recommendation ("move to the web client to get X"), not an audit limitation. Consequence: the desktop re-validation of F04/F09 is simply dropped (not needed), and any web-vs-desktop delta is surfaced as upside/opportunity, not a methodology hedge. Punch-list (Section 14.I) is executed web-only on this basis.

## 16. Punch-list execution - June 24 (web client, per 15.D)

Closing the Section 14.I live-confirm items. Order: rmInspection, rmVoIP, Unit Availability, rmService, RM12 API.

### Item 1 - rmInspection [F09]: PAID (bundled) but DORMANT - no web footprint

Checked via Command Launch search ("inspection") + the known menu map. No Inspections menu item, no inspection templates, no inspection records; the search returns only VENDOR records named "...Inspection" (Olsen Fire Inspection, Porcupine Home Inspections, westlind Inspections). 

Invoice cross-ref (Section 5): rmInspection IS licensed - bundled into the RM Online Monthly Fee ($155/mo, per-2nd) together with WPS and rmService. So it is paid for and surfaces nowhere in the client.

Nuance handled: rmInspection is RM's MOBILE inspection app, so a missing WEB menu item alone is not proof of non-use. But if techs ran inspections, templates + completed records would sync back into RM. The total absence of any inspection footprint (no templates, no records, nothing in search) indicates the capability is unprovisioned/unadopted, not merely mobile-only.

VERDICT: Activate-candidate, same pattern as F01/F09 - paying for a turnover/move-out inspection tool that currently runs as a single make-ready action line ("Move Out Inspection") or on paper. Strengthens F09.

Bundle note: the $155 RM Online fee bundles WPS + rmService + rmInspection, so the dollar is NOT isolable to rmInspection; judge the whole bundle's realization after the rmService check (Item 4).

build_findings.js TODO (deliverable pass): inventory row ~line 346 "rmInspection / Walkthrough paused here; unconfirmed / Confirm live" -> "Licensed (RM Online bundle); zero web footprint = dormant; activate, ties F09."

### Item 2 - rmVoIP [F10]: ALREADY CLOSED (no re-check) - corrected mid-session

Not an open item; it was investigated and confirmed earlier this audit (Sections 14.A + 14.D). Caught myself about to re-investigate the call history - it is done:
- Hannah Holm record (#2214) proved rmVoIP calls auto-log and auto-link when the caller's number is on file.
- Camille's email CONFIRMED the mechanism (inbound caller number matched to a contact record; "Unlinked Calls" = numbers not in RM), which killed the "empty history = sync bug" theory - it was an unlinked call / wrong tab.
- F10 downgraded to (a) the comms-logging observation (outbound RM email logs; inbound/individual two-way correspondence lives in Outlook; calls log without notation) and (b) the one spinning "Unlinked Calls" view = the single genuine RM support ticket.

Cost read: rmVoIP is ACTIVELY used, so there is NO dormant-cost finding here (unlike rmInspection). Only residual = pure license right-sizing (8 NDT seats / 5 recording / eFax vs. active users), a billing fact not a UI check; low value given active use. Footnote on the Camille list, not pursued as a live check.

### Item 3 - Unit Availability / Web Developer Suite [$75/mo]: CONFIRMED USED

Yonatan confirmed RM publishes a vacancy/availability listing (Vacancy.pdf shared; could not machine-render locally - no poppler/PDF lib, PEP 668 blocks casual pip install - but the verbal confirmation settles it). Combined with Online Applications already known used (prospects enter RM at the application stage, F05), the Web Developer Suite ($75/mo, bundles Unit Availability + Online Applications) is REALIZED, not dormant. Positive-adoption note (the opposite of rmInspection): one of the few add-ons fully used. No finding; record as "Adopt = already done" in the inventory.

### Item 4 - rmService [F04]: CLOSED by inference (no live check)

rmService = RM's mobile maintenance app, bundled in the $155 RM Online fee (with WPS + rmInspection). Mobile-app use is not directly observable from web, but evidence in hand resolves it: 19,383 logged service issues = RM maintenance is heavily adopted (F04 is a strength), while closeouts carry notes but no photos/parts (F04/F11). Read: the bundle IS used (heavy issue logging), but rmService's richer point-of-work capture (photos, parts) is underleveraged - exactly the F04/F11 closeout-quality gap. No separate dormant-cost finding; folds into F04/F11 as a feature-depth gap. Confirm tech-app specifics with staff only if a maintenance session arises; not chased.

### Item 5 - RM12 API / Open Access: RESOLVED (was F12 candidate / route-to-Camille; superseded by Section 19)

Camille said Open Access is NOT enabled, yet the $95 RM12 API line is billed (Section 14.G catch). Likely the partner-integration API (AvidXchange/Zego) is active while self-serve Open Access is off - either a paid line for a capability Pergola can't self-activate, or a switch to flip for the Phase-2 utility build. RESOLVED Jun 24 (see Section 19): Yonatan confirms Avid runs on an active API and RM12 API is the only API line, so this line IS the Avid conduit (justified cost). Candidate F12 dropped; not chasing Camille.

### PUNCH-LIST COMPLETE (June 24) - feature-inventory systematic pass closed

All Section 14.I live-confirm items resolved, web-only:
1. rmInspection - paid (RM Online bundle), DORMANT -> activate (ties F09)
2. rmVoIP - actively used; F10 already closed (no dormant cost)
3. Unit Availability / Web Suite - CONFIRMED used (realized)
4. rmService - bundle used; rich-capture underleveraged -> folds into F04/F11
5. RM12 API - RESOLVED: AvidXchange conduit, justified cost; candidate F12 dropped (Section 19)
6. (Native A/P vs AvidXchange - Chad meeting Thu/Fri, separate track)

Net: deliverable Section 02 (Feature Inventory) is CLOSED except the AvidXchange lane (Chad); the RM12 API line is resolved (Section 19). Remaining work pivots to the deliverable.

build_findings.js Section 02 inventory rows to update in the deliverable pass:
- rmInspection: dormant -> activate (ties F09)
- rmService: used; depth gap, ties F04/F11
- Unit Availability: used / realized
- rmVoIP: used; F10 closed
- RM12 API: RESOLVED (AvidXchange conduit, justified cost); candidate F12 dropped - see Section 19

## 17. Deliverable source updated - June 24 (build_findings.js)

Applied the Section 16 deliverable-pass edits. All in build_findings.js source; node is NOT on this Mac (no node/bun/deno/nvm), so the .docx must be rebuilt where node lives, then swapped into 01_Deliverable.

Edits made (8 total):
- Section 02 Feature Inventory, 5 verdict rows: rmInspection (Confirm -> Activate; dormant, ties F09), rmService (Confirm -> Adopt; deepen point-of-work capture, F04/F11), Unit Availability (Confirm -> Adopt; confirmed used), rmVoIP (Adopt; in use, F10; dropped the "verify utilization" hedge), RM12 API (status reworded, pending RM rep; still Clarify). Plus consistency fixes: legend Confirm-clause -> "Investigate or Clarify"; methodology note reframed to web-client-is-reference per 15.D (desktop hedge removed); closing summary "Six items remain" -> "Two items remain" (API with Camille, A/P with Chad).
- F09: "What the live review found" gains the June 24 partial-breach sentence (select layer restored; two add-level actions still fail). Recommendation bullet 1 rewritten to name the two specific remaining rights (add a Make Ready Action; Metered Utilities add/update gating Meter Estimates), kept gated. Status/open item updated to partial-progress. New bullet under "What exists in RM" flags rmInspection as owned-but-dormant.

Verification (no JS runtime available): string-aware bracket scan = stack clean, zero mismatches, nothing unclosed at EOF. Raw {} count is off by exactly 2 = the 2 template-literal ${} expressions (checker artifact, NOT a real imbalance; () and [] balanced). Escaped quotes intact. Safe to rebuild.

OPEN: rebuild .docx with node, swap into 01_Deliverable. Deliverable is now current except Brian-gated (privilege/GL/PayLease) and Chad-gated (AvidXchange A/P). [RM12 API line resolved Jun 24, Section 19.]
[RESOLVED in Section 18 - node now installed locally; .docx rebuilt on the Mac.]

## 18. Local toolchain installed - June 24 (retires the "node not local" caveat)

Installed on the Mac via Homebrew at user request: Node.js v26.3.1 + npm 11.16.0, and poppler 26.06.0 (pdftotext + pdftoppm - the latter is what the Read tool needs to render PDFs; Vacancy.pdf-type shares are now readable locally). This retires the standing "node is not on the local Mac" assumption (Sections 14.G, 17): the deliverable can now be rebuilt on this machine.

Project node setup: docx@9.7.1 added (package.json + package-lock.json created; node_modules gitignored). build_findings.js requires only `docx` + built-in `fs`.

build_findings.js output path made ADAPTIVE (non-breaking): writes to the /home/claude web-sandbox path when that directory exists, else next to the script locally (path.join(__dirname, ...)). So both the web sandbox and a local `node build_findings.js` work without further edits.

REBUILT the deliverable locally. IMPORTANT: the on-disk .docx was STALE (dated Jun 22, predating the Jun 23 Section 14.G reconciliation), so this rebuild brings it current through ALL Jun 23 + Jun 24 changes (Section 02 inventory, F04/05/09/10/11 revisions, the three-tier roadmap, plus today's 8 edits). Verified: valid "Microsoft Word 2007+", ~34.7KB, node --check passes, and all five new phrases present in word/document.xml. The 01_Deliverable copy in the web project is now BEHIND this local copy if anyone rebuilds there.

Local rebuild command going forward: `node build_findings.js` from /Users/mac1/Projects/pergola.

Git: build_findings.js + Pergola_Audit_Findings.docx modified; .gitignore + package.json + package-lock.json are new/untracked (commit when ready; node_modules is ignored).

## 19. RM12 API line - RESOLVED; candidate F12 dropped (June 24)

Reverses the "route to Camille" plan (Section 16 Item 5). Yonatan's domain knowledge closes the contradiction without an email: there is an active API for AvidXchange, and RM12 API is the ONLY API line on the invoice. So the billed ~$95/mo line IS the Avid conduit - a justified, in-use cost, NOT recoverable. The candidate Finding 12 (recoverable-cost angle) is DROPPED; it only existed if the line were idle, which it is not.

The rep's "API / Open Access not enabled" referred to the separate self-serve Open Access read layer. That matters only to a possible Phase 2 utility-data build (pulling consumption into a reporting layer), which is out of scope for this audit and which Camille steered away from anyway (double-charge framing). It stays a Phase 2 scoping question inside F01, not a Phase 1 finding - so the F01 Phase-2 Open Access prerequisite language (build_findings.js lines ~412-414) was left intact.

The one genuinely loose thread - whether Avid rides on THIS line vs another mechanism - is already covered by the Chad/AvidXchange session (Thu/Fri), so no separate Camille email is warranted.

Consequence: the Camille list now holds ONLY the privilege-node re-ask (gated on Brian). Deliverable updated + rebuilt: inventory RM12 API row -> "Adopt - justified cost (self-serve Open Access = Phase 2 only)"; the API note reframed from "contradiction to resolve" to resolved; closing summary "two items remain" -> "one item remains" (A/P vs Avid, with Chad); legend "Clarify" verdict dropped (no longer used).

## 20. Session update - June 26, 2026 (transcript re-audit + deliverable conclusions)

Full re-read of every unique Pergola interview transcript (kickoff, Jocelyn, Bobby, Darcy, Chris, Mark, Otis, Darius, Chad utility Jun 19, both Brian calls) cross-checked against the 11 findings and this log to surface missed items. Also pulled the new Jun 26 Chad call (AvidXchange / cost-breakdown) for cost-attribution context only; that meeting is to be processed in full separately (see C). Conclusions below were decided with Yonatan, item by item.

### A. Confirmed additions / changes to existing findings

**F07 (two-location split) - REFRAME.** The maintenance cross-location app-visibility pain is the ORIGINAL driver of the consolidation research, per Joe at kickoff: a tech logged into one RM location cannot see the other location's work orders on the app and must switch locations, which is why work gets relayed by text (e.g., Mark forwards Bloomington work orders to Chris). Frame F07 as first a daily maintenance-visibility problem; the licensing/cost footprint and merge feasibility are the structural fix, not the headline. Connects F07 <-> F04.

**F04 (maintenance closeout) - ADD owner motivations + reassurance.** From Brian at kickoff, three angles to fold in: (1) liability - untracked "while-you're-here" extras create exposure (his example: a tech hanging a flat-screen TV that could break); (2) performance metric - tracked extras distinguish a productive tech from one being "led around" by tenants, useful for annual reviews; (3) an enforcement mechanism Brian himself proposed - gate the next work order / parts request on closing out the current one. Also: field reality is BETTER than Brian assumed - his "I virtually guarantee closeouts aren't happening" / paper-door-tag assumption is contradicted by the techs (Otis, Chris, Mark all write short notes on the service order and close it) and by the live RM review (closed tickets carry resolution notes). Present this as reassurance; the real gap remains photos + parts/chargeback (F11).

**F11 (parts / procurement) - CORRECTIONS.**
- Cost attribution by PROPERTY and by OWNER already EXISTS; the blanket "no breakdown by property/job/tech" is wrong and must be removed. Mechanism: PO codes per property at point of purchase on vendor accounts (Menards on contractor/contractual pricing; Home Depot on a separate card), statements show POs, multi-property buys get split codes (e.g., 889/908) and Chad divides them out. Owner split differs by side: Joe's side uses credit cards (for points) with Joe/Mark/Chris purchases commingled on one monthly statement that Chad allocates line-by-line; Brian's side runs through AvidXchange + check reimbursement; Darcy (Rochester) also uses a card. Returns usually carry NO PO, so they leak from attribution.
- Real gap is therefore (a) OPERATIONAL granularity one layer down - per job/work-order (for chargeback), per unit, per tech, turnover-vs-routine, category volume - which lives in the financial/GL layer (Chad's manual reconciliation), not the operational/work-order layer; and (b) the heavy MANUAL BURDEN on one person (Chad) to split a commingled card statement by hand. Reframe the "what this costs" bullets: they CAN budget per property/owner; what they cannot see is WHY a building is expensive (per-unit/per-issue drivers), and they cannot tie parts to a job for chargeback. Cleaner expression of the cost-data-without-operational-data through-line.
- Parts-in-notes: change "no record" to "UNSTRUCTURED record" - Otis (and others) write parts as prose in the closeout note; it just is not in the structured Work Orders grid with Cost/Sale Price, so it cannot drive chargeback or attribution.
- Procurement is UNSTAFFED BY DESIGN: Pergola cut the dedicated maintenance-manager role, so techs absorbed ordering/scheduling/coordination (Chris). Fix is tooling/process (supplier consolidation + online ordering + delivery + par-lists), NOT a new hire and NOT a PM chore. Chris's "manager pre-walks units to stock/order" idea is aspirational, not current practice, and should not be assigned to the already-overloaded PMs.
- Minor inventory nuance: Mark salvages good used parts from removed appliances and stores them per building; salvaged stock has no SKU/cost and would sit outside any reorder logic if an inventory system is ever scoped.

**Logging discipline - NEUTRAL STRUCTURAL note (NO names).** Logging discipline varies across the team and tracks the person, not the system (owners categorize every call/text/email with tags; some PMs log everything, others keep individual email in Outlook; techs write short notes). Capture structurally where relevant (F04/F10) as "practice varies; the owners-level discipline is the standard worth generalizing." Do NOT name individuals or publish a per-person scorecard (partner-neutrality guardrail).

### B. Items considered and DROPPED

- Darius RM-app failure / Bobby-proxy entry: isolated to Darius, no other tech reported it; treated as user-specific error, not a finding.
- Paper door "hanging tag" as the closeout location: not the norm (techs do write short RM notes); flipped into the F04 reassurance point above.
- PM turnover-walkthrough inconsistencies (PM-with-resident vs PM-pre-check-then-tech vs sheet-review): minor, would read as nitpicking; not carried.
- Move-in electric-setup friction (Jocelyn): tenant-behavior nuisance, not an RM gap; dropped as unimportant.

### C. Parked for the dedicated Jun 26 Chad meeting (process separately)

- Full AvidXchange-vs-Orion analysis (Avid ~$700-800/mo, was $1,000-1,200 in 2023; Brian's "$18K" = ~$14K RM + ~$4K+ Avid/yr - refines the Section 5 / Section 13 spend reconciliation). Orion (RM AI: bank sync, smart bills/receipts/checking) integrated into RM in 2025, would more or less replicate Avid; switching cost vs ~6-7 years on Avid is the open question.
- Ramp / controlled expense-card recommendation - strongly reinforced by the commingled-credit-card manual-split burden on Chad; would auto-categorize, enforce spend controls, and split by entity (Rochester / Crystal / Brian / Joe). To be added as an F11-adjacent recommendation when the meeting is processed.

### D. Deliverable working copy

Created `Pergola_Deliverable_Working_Draft.md` - a separate, human-readable working version of the current deliverable with the A-section conclusions integrated and marked [Updated Jun 26], kept distinct from the formal `Pergola_Audit_Findings.docx` (the build_findings.js output). build_findings.js is NOT yet edited; the working draft is the staging ground until changes are finalized and then ported back into build_findings.js for the .docx rebuild.

## 21. Session update - June 26, 2026 (Chad A/P meeting analysis + Orion/AvidXchange research)

Processes the items parked in Section 20.C. Full analysis of the Jun 26 Chad call (AvidXchange invoice workflow), web research on Rent Manager Orion / Smart Bills vs AvidXchange, and the follow-up question set for Chad.

### A. AvidXchange - current state at Pergola
- Paperless A/P via AvidXchange since ~2019; Chad is sole admin. Flow: invoices in -> Chad categorizes + corrects AI -> approval -> batch-import to RM -> pay.
- Approval has SIMPLIFIED: originally Joe/Brian (and former maintenance manager David Spar) approved; now Chad approves most himself, only large/unique/disputed route to Joe/Brian. (Matters for the Orion single-reviewer question.)
- Payments: ACH autopays, paper checks (now CHARGED by Avid to mail, ~2-week lag), and VCCs (cheaper, vendor pays merchant fee, Pergola gets a small REBATE cut, cash leaves immediately, some vendors refuse them).
- AI pains (Chad's core complaint): miscategorization; account-number dash vs no-dash duplicate-match bug; misreads "I" as "1"; DUPLICATE invoices paid twice; statements read as invoices; stylized fonts/logos trip it.
- Cost: ~$700-800/mo per Chad, down from $1,000-1,200 (2023) - but he visibly CONFLATED check-count with dollars, so the figure is SOFT. Framed as "more than another $4K/yr" over RM.
- Exception vendors bypass Avid: Menards, Home Depot statements, mortgage statements, Xcel Energy (mails paper -> scanned poorly, +1 week).
- Intake: pergola@avidbill.com; one invoice per PDF (no combined PDFs/JPEGs/links). Approval-queue latency (Joe/Brian skip a month) -> late fees. Recent vendor split-billing produced a $22K single-property bill Chad caught by hand.

### B. Orion / Smart Bills vs AvidXchange - research findings
- AvidXchange = two products: AvidPay (payment rail) is NO-COST for RM users IF >=50% of payments route through AvidPay (~$4-6K/yr savings claimed); AvidInvoice (invoice capture + approval automation) is the PAID piece. So Pergola's ~$700-800/mo is almost certainly AvidInvoice + check-mailing fees; part may be recoverable with NO migration by confirming the 50% AvidPay threshold and shifting checks -> VCC/ACH.
- Orion/Smart Bills (RM native AI A/P) replicates Avid (AI capture, vendor email intake, ACH/check/VCC via AvidPay) and adds Smart Receipts (mobile), Smart Check Scanning, Bank Sync + electronic reconciliation. THREE GATES: (1) requires RM Plus/Premium tier - Pergola is NOT on it, so switching = repricing the whole RM subscription, possibly > the Avid line it replaces (the make-or-break unknown); (2) single-reviewer approval ONLY (Avid does multi-tier) - probably fine given Chad-mostly approval, confirm no dual Joe+Brian requirement; (3) RM positions Smart Bills for low-moderate volume/in-house, Avid for med-high/outsourced/complex - need real invoice count.

### C. Verdict / recommendation
- Worth a QUOTE, not a presumed switch. The headline near-term money is OPTIMIZING Avid, not replacing it.
- Sequence: (1) no-migration quick win - confirm AvidPay 50% status, shift checks -> VCC/ACH, right-size the bill; (2) get two quotes side by side: (RM Plus/Premium + Smart Bills) vs (current RM + optimized Avid); switch only if Orion total <= optimized-Avid total AND single-reviewer is sufficient; (3) ask RM whether Smart Bills (capture) can COEXIST with no-cost AvidPay (payment rail) - a best-of-both option (RM frames them as either/or). High migration bar for a lean shop ~6-7 years into Avid.

### D. Follow-up questions for Chad (priority order)
1. Get an ACTUAL recent Avid invoice; split it: AvidInvoice subscription vs check-mailing fees vs per-transaction fees.
2. Are you on no-cost AvidPay - is >=50% of payments routed through AvidPay?
3. VCC rebate % and per-check mailing fee (actual numbers, to model check -> VCC/ACH shift).
4. Monthly INVOICE volume (not check count) - decides Smart Bills (low-mod) vs Avid (med-high) fit.
5. Does any invoice REQUIRE two approvers (Joe AND Brian), or is Chad-only sufficient now?
6. Exact current RM plan tier; have RM quote Plus/Premium + Smart Bills.
7. Avid contract terms - minimums, overage structure, renewal/end date, early-termination.
8. How many vendors still MAIL paper (Xcel et al.)? - a problem for either system, fix regardless.
9. Joe's card setup - number of cards, monthly volume, and whether Joe would accept Ramp (he is the gatekeeper).
- Brian/Joe items: PayLease access still blocked (Chad can't grant - Brian/Joe); confirm Joe has no utility-tracking desire (pays cities directly).

### E. Deliverable changes (in working draft)
- NEW Finding 12 (A/P: AvidXchange cost-optimization + Orion quote-not-switch), High Impact.
- NEW Finding 13 (company-card spend -> controlled expense-card platform / Ramp), High Impact - reinforced by Chad's manual commingled-card split burden.
- Feature-inventory: "Accounts Payable (native vs AvidXchange) - Investigate (Chad)" RESOLVED -> F12; Orion row -> "Investigate - quote vs AvidXchange (F12)".
- Roadmap: AvidPay cost optimization added to Tier 1; A/P decision (Orion vs Avid quote) + Ramp rollout added to Tier 2.
- build_findings.js still NOT edited; working draft remains the staging ground.
