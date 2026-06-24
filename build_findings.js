const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  HeadingLevel, AlignmentType, BorderStyle, WidthType, ShadingType,
  LevelFormat, PageNumber, Footer, TabStopType, TabStopPosition
} = require('docx');
const fs = require('fs');

// ── Colours ──────────────────────────────────────────────────────────────────
const NAVY   = "1F3A5F";
const AMBER  = "B07C3A";
const LIGHT  = "EEF2F8";
const RED_BG = "FFF1F0";
const RED_BD = "C0392B";
const GRN_BG = "F0FFF4";
const GRN_BD = "1E8449";
const AMB_BG = "FFF8EC";
const AMB_BD = "D68910";
const WHITE  = "FFFFFF";
const GREY   = "CCCCCC";

const border1 = { style: BorderStyle.SINGLE, size: 1, color: GREY };
const borders = { top: border1, bottom: border1, left: border1, right: border1 };
const noBorder = { style: BorderStyle.NONE, size: 0, color: WHITE };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

// ── Helpers ───────────────────────────────────────────────────────────────────
function spacer(sz = 120) {
  return new Paragraph({ children: [new TextRun("")], spacing: { before: sz, after: 0 } });
}

function rule() {
  return new Paragraph({
    children: [new TextRun("")],
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: NAVY, space: 1 } },
    spacing: { before: 0, after: 160 }
  });
}

function bodyText(text, opts = {}) {
  return new Paragraph({
    children: [new TextRun({ text, font: "Arial", size: 22, color: "333333", ...opts })],
    spacing: { before: 60, after: 60 }
  });
}

function bullet(text, bold = false) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    children: [new TextRun({ text, font: "Arial", size: 22, color: "333333", bold })],
    spacing: { before: 40, after: 40 }
  });
}

function labelValue(label, value) {
  return new Paragraph({
    children: [
      new TextRun({ text: label + ": ", font: "Arial", size: 22, bold: true, color: NAVY }),
      new TextRun({ text: value, font: "Arial", size: 22, color: "333333" })
    ],
    spacing: { before: 60, after: 40 }
  });
}

function sectionHeading(num, title) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    children: [
      new TextRun({ text: `${num}  `, font: "Arial", size: 30, bold: true, color: AMBER }),
      new TextRun({ text: title, font: "Arial", size: 30, bold: true, color: NAVY })
    ],
    spacing: { before: 320, after: 80 }
  });
}

function findingHeader(id, title, priority) {
  const colours = {
    "Quick Win":   { bg: GRN_BG, bd: GRN_BD },
    "High Impact": { bg: RED_BG, bd: RED_BD },
    "Strategic":   { bg: AMB_BG, bd: AMB_BD }
  };
  const c = colours[priority] || colours["High Impact"];

  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [7200, 2160],
    rows: [
      new TableRow({
        children: [
          new TableCell({
            borders,
            width: { size: 7200, type: WidthType.DXA },
            shading: { fill: NAVY, type: ShadingType.CLEAR },
            margins: { top: 100, bottom: 100, left: 160, right: 80 },
            children: [new Paragraph({
              children: [
                new TextRun({ text: `Finding ${id}  `, font: "Arial", size: 22, bold: true, color: AMBER }),
                new TextRun({ text: title, font: "Arial", size: 22, bold: true, color: WHITE })
              ]
            })]
          }),
          new TableCell({
            borders,
            width: { size: 2160, type: WidthType.DXA },
            shading: { fill: c.bg.replace("#",""), type: ShadingType.CLEAR },
            margins: { top: 100, bottom: 100, left: 120, right: 120 },
            children: [new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ text: priority, font: "Arial", size: 20, bold: true, color: c.bd.replace("#","") })]
            })]
          })
        ]
      })
    ]
  });
}

function findingRow(label, value, isGrey = false) {
  return new TableRow({
    children: [
      new TableCell({
        borders,
        width: { size: 2160, type: WidthType.DXA },
        shading: { fill: isGrey ? "F4F7FB" : WHITE, type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 140, right: 100 },
        children: [new Paragraph({ children: [new TextRun({ text: label, font: "Arial", size: 20, bold: true, color: NAVY })] })]
      }),
      new TableCell({
        borders,
        width: { size: 7200, type: WidthType.DXA },
        shading: { fill: isGrey ? "F4F7FB" : WHITE, type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 140, right: 120 },
        children: [new Paragraph({ children: [new TextRun({ text: value, font: "Arial", size: 20, color: "333333" })] })]
      })
    ]
  });
}

function findingBulletRow(label, bullets, isGrey = false) {
  return new TableRow({
    children: [
      new TableCell({
        borders,
        width: { size: 2160, type: WidthType.DXA },
        shading: { fill: isGrey ? "F4F7FB" : WHITE, type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 140, right: 100 },
        children: [new Paragraph({ children: [new TextRun({ text: label, font: "Arial", size: 20, bold: true, color: NAVY })] })]
      }),
      new TableCell({
        borders,
        width: { size: 7200, type: WidthType.DXA },
        shading: { fill: isGrey ? "F4F7FB" : WHITE, type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 80, right: 120 },
        children: bullets.map(b => new Paragraph({
          numbering: { reference: "bullets-small", level: 0 },
          children: [new TextRun({ text: b, font: "Arial", size: 20, color: "333333" })]
        }))
      })
    ]
  });
}

function findingTable(rows) {
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [2160, 7200],
    rows: rows.map((r, i) => {
      if (r.type === "bullets") return findingBulletRow(r.label, r.values, i % 2 === 0);
      return findingRow(r.label, r.value, i % 2 === 0);
    })
  });
}

// ── Cover page ────────────────────────────────────────────────────────────────
function buildCover() {
  return [
    spacer(2400),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: "PERGOLA MANAGEMENT", font: "Arial", size: 52, bold: true, color: NAVY })]
    }),
    spacer(80),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: "Operations & Technology Audit", font: "Arial", size: 36, color: AMBER })]
    }),
    spacer(40),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: "Findings & Recommendations", font: "Arial", size: 30, color: "555555" })]
    }),
    spacer(600),
    new Table({
      width: { size: 5040, type: WidthType.DXA },
      columnWidths: [1800, 3240],
      rows: [
        new TableRow({ children: [
          new TableCell({ borders: noBorders, width: { size: 1800, type: WidthType.DXA }, margins: { top: 60, bottom: 60, left: 80, right: 80 },
            children: [new Paragraph({ children: [new TextRun({ text: "Prepared by", font: "Arial", size: 20, bold: true, color: NAVY })] })] }),
          new TableCell({ borders: noBorders, width: { size: 3240, type: WidthType.DXA }, margins: { top: 60, bottom: 60, left: 80, right: 80 },
            children: [new Paragraph({ children: [new TextRun({ text: "Day54, LLC", font: "Arial", size: 20, color: "333333" })] })] })
        ]}),
        new TableRow({ children: [
          new TableCell({ borders: noBorders, width: { size: 1800, type: WidthType.DXA }, margins: { top: 60, bottom: 60, left: 80, right: 80 },
            children: [new Paragraph({ children: [new TextRun({ text: "Prepared for", font: "Arial", size: 20, bold: true, color: NAVY })] })] }),
          new TableCell({ borders: noBorders, width: { size: 3240, type: WidthType.DXA }, margins: { top: 60, bottom: 60, left: 80, right: 80 },
            children: [new Paragraph({ children: [new TextRun({ text: "Brian Pergament, Pergola Management", font: "Arial", size: 20, color: "333333" })] })] })
        ]}),
        new TableRow({ children: [
          new TableCell({ borders: noBorders, width: { size: 1800, type: WidthType.DXA }, margins: { top: 60, bottom: 60, left: 80, right: 80 },
            children: [new Paragraph({ children: [new TextRun({ text: "Date", font: "Arial", size: 20, bold: true, color: NAVY })] })] }),
          new TableCell({ borders: noBorders, width: { size: 3240, type: WidthType.DXA }, margins: { top: 60, bottom: 60, left: 80, right: 80 },
            children: [new Paragraph({ children: [new TextRun({ text: "June 2026  [DRAFT — IN PROGRESS]", font: "Arial", size: 20, color: "333333" })] })] })
        ]}),
        new TableRow({ children: [
          new TableCell({ borders: noBorders, width: { size: 1800, type: WidthType.DXA }, margins: { top: 60, bottom: 60, left: 80, right: 80 },
            children: [new Paragraph({ children: [new TextRun({ text: "Confidential", font: "Arial", size: 20, bold: true, color: NAVY })] })] }),
          new TableCell({ borders: noBorders, width: { size: 3240, type: WidthType.DXA }, margins: { top: 60, bottom: 60, left: 80, right: 80 },
            children: [new Paragraph({ children: [new TextRun({ text: "Internal use only", font: "Arial", size: 20, color: "333333" })] })] })
        ]})
      ]
    }),
    new Paragraph({ children: [new TextRun({ text: "", break: 1 })], pageBreakBefore: true })
  ];
}

// ── Executive summary ─────────────────────────────────────────────────────────
function buildExecutiveSummary() {
  return [
    sectionHeading("01", "Executive Summary"),
    rule(),
    bodyText("Day54 was engaged by Pergola Management to conduct a focused 2–3 week operations and technology audit. The engagement centers on how Pergola's team uses Rent Manager — identifying underused features, workflow inconsistencies, and opportunities to operate more efficiently without adding complexity or cost."),
    spacer(80),
    bodyText("Pergola is a well-run, intentionally right-sized property management company of approximately 600 units across Minneapolis/St. Paul and Rochester. The business is not seeking growth; the goal is to run current operations better, with greater visibility and less reliance on individual knowledge and manual workarounds."),
    spacer(80),
    bodyText("The audit is examining four lanes:"),
    bullet("Rent Manager feature adoption and underutilized modules"),
    bullet("Workflow consistency across the two-location structure (St. Paul and Minneapolis)"),
    bullet("Maintenance closeout and turnover documentation"),
    bullet("Utility trend reporting and data visibility"),
    spacer(80),
    bodyText("This document captures findings as they are confirmed and will be finalized with a prioritized roadmap and implementation recommendations upon completion of all interviews and system review."),
    spacer(160),

    // Status table
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      columnWidths: [4680, 4680],
      rows: [
        new TableRow({ children: [
          new TableCell({ borders, width: { size: 4680, type: WidthType.DXA },
            shading: { fill: NAVY, type: ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 140, right: 120 },
            children: [new Paragraph({ children: [new TextRun({ text: "Audit Lane", font: "Arial", size: 20, bold: true, color: WHITE })] })] }),
          new TableCell({ borders, width: { size: 4680, type: WidthType.DXA },
            shading: { fill: NAVY, type: ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 140, right: 120 },
            children: [new Paragraph({ children: [new TextRun({ text: "Status", font: "Arial", size: 20, bold: true, color: WHITE })] })] })
        ]}),
        ...([
          ["Rent Manager utility module audit", "Complete — Finding 01 logged"],
          ["GL / utility expense coding review", "Complete — Finding 06 logged"],
          ["Software licensing & spend review", "Complete — Findings 07–08 logged"],
          ["Maintenance closeout & service-issue review", "Complete — Finding 04 (RM heavily used)"],
          ["Turnover / Make Ready review", "Complete — Finding 09, pending RM rep on access"],
          ["Parts, procurement & inventory review", "Complete — Finding 11 logged"],
          ["Communication / rmVoIP review", "Complete — Finding 10 logged"],
          ["Minneapolis PM discovery call (Jocelyn)", "Complete — Findings 02–05"],
          ["St. Paul PM discovery call (Bobby)", "Complete — Findings 05, 09 reinforced"],
          ["Rochester PM (Darcy) + maintenance (Chris)", "Complete — Findings 09, 11 inputs"],
          ["RM feature inventory", "Drafted — Section 02; live confirms open"],
          ["Synthesis & roadmap", "Drafted — Section 04"]
        ].map(([lane, status], i) =>
          new TableRow({ children: [
            new TableCell({ borders, width: { size: 4680, type: WidthType.DXA },
              shading: { fill: i % 2 === 0 ? "F4F7FB" : WHITE, type: ShadingType.CLEAR },
              margins: { top: 80, bottom: 80, left: 140, right: 120 },
              children: [new Paragraph({ children: [new TextRun({ text: lane, font: "Arial", size: 20, color: "333333" })] })] }),
            new TableCell({ borders, width: { size: 4680, type: WidthType.DXA },
              shading: { fill: i % 2 === 0 ? "F4F7FB" : WHITE, type: ShadingType.CLEAR },
              margins: { top: 80, bottom: 80, left: 140, right: 120 },
              children: [new Paragraph({ children: [new TextRun({ text: status, font: "Arial", size: 20, color: "333333" })] })] })
          ]})
        ))
      ]
    }),
    spacer(200),

    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      children: [
        new TextRun({ text: "Software Spend, Reconciled", font: "Arial", size: 26, bold: true, color: NAVY })
      ],
      spacing: { before: 120, after: 80 }
    }),
    bodyText("The kickoff brief framed Pergola's software spend as roughly $18K/year and \"half-used.\" The billing review confirms the spend is real and accounted for — it is not hidden waste — and clarifies where it goes. London Computer Systems (Rent Manager) bills approximately $14.8K/year directly: a $14.1K/year core platform plus a variable ~$0.7K/year for printed resident notices (VPO). The remainder of the ~$18K figure is the integration partners — AvidXchange (A/P) and Zego/PayLease (tenant payments) — which are billed separately by those vendors, not by LCS."),
    spacer(60),
    bodyText("Two points carry forward into the findings: (1) the subscription spans roughly seven separately-numbered RM accounts, the licensing footprint of the two-location structure (Finding 07); and (2) Rent Manager's AI and automation add-ons — Orion AI, Smart Bills, and Bank Sync — are not currently licensed, which is the relevant baseline if AI-assisted tooling is revisited in a later phase."),
    spacer(120)
  ];
}

// ── Feature inventory ─────────────────────────────────────────────────────────
function invRow(cells, isGrey) {
  const widths = [2880, 3120, 3360];
  return new TableRow({ children: cells.map((text, i) =>
    new TableCell({
      borders, width: { size: widths[i], type: WidthType.DXA },
      shading: { fill: isGrey ? "F4F7FB" : WHITE, type: ShadingType.CLEAR },
      margins: { top: 70, bottom: 70, left: 120, right: 100 },
      children: [new Paragraph({ children: [new TextRun({ text, font: "Arial", size: 19, color: i === 0 ? NAVY : "333333", bold: i === 0 })] })]
    })
  )});
}

function inventoryTable(rows) {
  const widths = [2880, 3120, 3360];
  const header = new TableRow({ children: ["Feature / Module", "Status today", "Verdict"].map((t, i) =>
    new TableCell({
      borders, width: { size: widths[i], type: WidthType.DXA },
      shading: { fill: NAVY, type: ShadingType.CLEAR },
      margins: { top: 70, bottom: 70, left: 120, right: 100 },
      children: [new Paragraph({ children: [new TextRun({ text: t, font: "Arial", size: 19, bold: true, color: WHITE })] })]
    })
  )});
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: widths,
    rows: [header, ...rows.map((r, i) => invRow(r, i % 2 === 0))]
  });
}

function buildFeatureInventory() {
  return [
    sectionHeading("02", "Rent Manager Feature Inventory"),
    rule(),
    bodyText("Brian's framing was whether Pergola is squeezing the juice out of what it already pays for. This is the complete inventory: every licensed add-on and major in-platform module, what it does today, and a verdict. Adopt means use it or keep using it; Fix means owned and used but misconfigured; Activate means owned but sitting idle; Confirm means adoption is not yet verified in the live system. Verdicts cross-reference the detailed findings (F01–F11)."),
    bodyText("It is built from the billing detail (what is actually licensed) and the live system review. Items marked Confirm need a final check on the legacy desktop client staff use, since the review was run on the web version.", { italics: true, color: "555555" }),
    spacer(120),
    roadmapSubheading("Licensed add-ons (billed monthly)"),
    inventoryTable([
      ["RM12 desktop (6 accounts)", "Core platform; staff work here daily", "Adopt — consolidation open (F07)"],
      ["Rent Manager Online (web)", "Owners ramping; not yet rolled to staff", "Adopt — finish web migration"],
      ["Tenant Portal (WPS)", "Payments + ~75% of work orders; leases not shown", "Fix — enable lease post-back (F02)"],
      ["Owner Portal / upward reporting", "Not used; no staff reporting to ownership", "Activate — Brian's stated want"],
      ["rmService (maintenance mobile)", "Intake is mostly text, not the app", "Confirm — likely underused (F04)"],
      ["rmInspection", "Walkthrough paused here; unconfirmed", "Confirm live"],
      ["Online Applications (Web Dev Suite)", "Working — prospects enter at application", "Adopt (F05 front-funnel gap)"],
      ["Unit Availability (Web Dev Suite)", "Unconfirmed", "Confirm live"],
      ["Unlimited Text Broadcast", "Outbound blasts go out and log", "Adopt"],
      ["RM12 API ($95/mo)", "Rep says API/Open Access not enabled", "Clarify — paid vs. enabled (see note)"],
      ["rmVoIP / phone (~$266/mo)", "Calls auto-link but go un-notated; recording/eFax unverified", "Adopt — verify utilization (F10)"],
      ["VPO printed notices (~$58/mo)", "~49 batches/mo, actively used", "Optimize — shift to email (F08)"],
      ["Orion AI / Smart Bills / Bank Sync", "Not licensed", "Skip now — Phase 3 footnote"]
    ]),
    spacer(60),
    bodyText("Note — a contradiction to resolve: the subscription carries a billed \"RM12 API\" line at roughly $95/month, yet the RM rep states API / Open Access is not enabled. Most likely the partner-integration API (powering AvidXchange and Zego) is active while the self-serve Open Access read layer is not — but it should be confirmed, because a paid line for a capability that cannot be used is either recoverable cost or a switch waiting to be turned on for the Phase 2 utility build.", { italics: true }),
    spacer(140),
    roadmapSubheading("In-platform modules (included)"),
    inventoryTable([
      ["Metered Utilities", "All sub-sections empty", "Activate (F01)"],
      ["Service Manager / Issues", "Heavily used — 19,383 issues", "Adopt — triage stale tail (F04)"],
      ["Make Ready Board", "Owned; blocked by privileges", "Activate after privilege fix (F09)"],
      ["Inventory / Purchase Orders", "Empty; chargeback price book only", "Optional / sequenced (F11)"],
      ["Work Orders parts grid", "Empty on sampled tickets", "Activate for chargeback (F11)"],
      ["Prospects / Leasing Board", "Used only at application", "Fix front-funnel (F05)"],
      ["General Ledger / Accounting", "Used; utility coding drifts by side", "Adopt — standardize (F06)"],
      ["Blue Moon eSignatures", "Signing works; portal post-back off", "Fix setting (F02)"],
      ["Accounts Payable (native vs AvidXchange)", "AvidXchange in use; native A/P unreviewed", "Investigate (Chad)"]
    ]),
    spacer(120),
    bodyText("Six items remain marked Confirm or Investigate — the final live-system checks that close the inventory: rmService and rmInspection adoption, Unit Availability, rmVoIP utilization, the API / Open Access status, and native Accounts Payable versus AvidXchange.", { color: "555555" }),
    spacer(120)
  ];
}

// ── Findings section ──────────────────────────────────────────────────────────
function buildFindings() {
  return [
    sectionHeading("03", "Findings"),
    rule(),
    bodyText("Each finding is classified by priority:"),
    bullet("Quick Win — implementable by the team directly, low effort, high immediate value"),
    bullet("High Impact — significant operational improvement, may require guidance or outside help to implement"),
    bullet("Strategic — longer-term or architectural; shapes the phase-2 roadmap"),
    spacer(160),

    // ── FINDING 01 ────────────────────────────────────────────────────────────
    findingHeader("01", "Metered Utilities Module Completely Unused", "High Impact"),
    spacer(40),
    findingTable([
      { label: "Module", value: "Services → Metered Utilities" },
      { label: "Observed", value: "All sub-sections empty: Utilities, Meter Types, Meter Readings, Meter Readings Setup, Meter Readings Statuses, Post RUBS — zero configuration." },
      { type: "bullets", label: "What exists in RM", values: [
        "Utility provider setup (name, charge type, linked properties, contact, email)",
        "Meter Types — define water, gas, electric, etc.",
        "Meter Readings — log actual consumption by meter and date",
        "Meter Readings Setup & Statuses — workflow and validation rules",
        "Post RUBS — ratio utility billing to residents",
        "MU Export/Import — bulk data in and out via file",
        "Post Utilities — post billed charges to tenant ledgers"
      ]},
      { label: "What this means", value: "Rent Manager is fully equipped to capture utility consumption (gallons, kWh, therms) by property, track it over time, and bill residents via RUBS. None of this has ever been configured. All utility management currently happens through PayLease (RUBS billing) and AvidXchange (vendor bill payment) — with zero consumption data living inside RM." },
      { label: "The gap", value: "Without consumption data in RM, there is no way to trend usage, normalize to occupancy, compare year-over-year, or flag an anomaly mid-month. The business is currently reactive — it can see what it paid, but not how much it used or whether that is changing." },
      { type: "bullets", label: "Why it matters", values: [
        "Utility costs on a 600-unit portfolio are a material expense line — any building trending up without an occupancy or rate explanation is leaking money quietly",
        "Concrete example already in the data: Rochester Heights shows roughly a 60% year-over-year increase in gas cost, and there is currently no way to attribute it — rate change, weather, occupancy, or a genuine consumption problem are indistinguishable without usage data",
        "RM already has a water-pressure event in its history (referenced by Brian) that should have been detectable as a consumption spike — it wasn't, because the data was never captured",
        "Brian expressed direct interest in utility trend visibility as a management metric during the initial call"
      ]},
      { type: "bullets", label: "Recommendation", values: [
        "Phase 1 (Quick Win — native RM): Configure utility providers and meter types. Begin logging monthly readings for each property. This alone enables RM's built-in consumption reports and the range-based outlier report at no added cost.",
        "Phase 2 (Strategic — build): Pull consumption + occupancy data via RM's Open Access read views or REST API into an external reporting layer. Compute cost-per-occupied-unit, year-over-year by month, with proactive threshold alerts when a building drifts beyond a set range mid-month. This is a contained data-engineering build suited to Day54's capabilities.",
        "Faster path identified (Jun 19): consumption data already exists in Zego/PayLease, in a utility recovery performance tab showing provider and sub-metered usage. Rather than only manual meter entry, explore importing that existing usage into RM via MU Import From File or the API, pending confirmation that Zego can export it and that RM's API / Open Access is enabled.",
        "Prerequisite: Confirm whether API / Open Access is enabled on Pergola's RM subscription before scoping the Phase 2 build."
      ]},
      { label: "Effort to fix", value: "Phase 1: Low — data entry and configuration, no technical complexity. Phase 2: Medium — requires API access, a small data pipeline, and a reporting surface." }
    ]),
    spacer(200),

    // ── FINDING 02 ────────────────────────────────────────────────────────────
    findingHeader("02", "Residents Cannot View Signed Leases in the Tenant Portal", "Quick Win"),
    spacer(40),
    findingTable([
      { label: "Source", value: "Minneapolis PM (Jocelyn) — discovery call, Jun 17" },
      { label: "The pain", value: "After a lease is signed, residents cannot access it through the Rent Manager tenant portal. Jocelyn has to email a copy to every resident manually after each signing. It is a small recurring task that happens every time a lease is executed or renewed." },
      { label: "What RM can do", value: "The tenant portal is designed to surface lease documents to residents. Blue Moon eSignatures (visible in RM's Communication menu) handles the signing workflow. The likely issue is that signed documents are not being pushed back to the portal after completion — a configuration step that may simply have been missed during setup." },
      { type: "bullets", label: "Recommendation", values: [
        "Check the Blue Moon eSignatures integration settings to confirm whether completed documents are set to post back to the tenant portal automatically.",
        "If not enabled, turn it on. Residents get self-serve access to their lease; Jocelyn stops emailing PDFs manually.",
        "Confirm with RM support if the setting is not immediately obvious — this is a known configuration point."
      ]},
      { label: "Effort to fix", value: "Very low — likely a single settings toggle. No retraining needed." }
    ]),
    spacer(200),

    // ── FINDING 03 ────────────────────────────────────────────────────────────
    findingHeader("03", "Unit Transfer Lease Re-Issuance Requires Owner Workaround", "Quick Win"),
    spacer(40),
    findingTable([
      { label: "Source", value: "Minneapolis PM (Jocelyn) — discovery call, Jun 17" },
      { label: "The pain", value: "When an existing resident moves to a different unit within the portfolio, Rent Manager pulls the old unit's information when Jocelyn attempts to issue the new lease. She cannot complete the process herself — Joe has to step in and manually work around the system to push it through. This creates a dependency on Joe for what should be a routine task, and slows the transfer process." },
      { label: "What this suggests", value: "This is likely a known workflow limitation in how RM handles mid-tenancy unit transfers, or a configuration gap in how the lease template is linked to unit records. It may have a documented resolution via RM support or a specific sequence of steps that avoids the conflict." },
      { type: "bullets", label: "Recommendation", values: [
        "Flag this specific scenario to Pergola's Rent Manager rep and ask whether there is a supported workflow for intra-portfolio unit transfers.",
        "If a resolution exists, document the correct steps so Jocelyn can handle transfers independently without involving Joe.",
        "If it is a product limitation, log it as a known workaround so it is at least consistent and understood."
      ]},
      { label: "Effort to fix", value: "Low — a support conversation and documentation task. No system changes likely needed." }
    ]),
    spacer(200),

    // ── FINDING 04 ────────────────────────────────────────────────────────────
    findingHeader("04", "Maintenance Logging Is a Strength; the Real Gaps Are a Stale Open-Ticket Tail and After-Hours Intake", "Quick Win"),
    spacer(40),
    findingTable([
      { label: "Source", value: "Minneapolis PM (Jocelyn) — discovery call, Jun 17; St. Paul PM (Bobby) — Jun 19; live RM system review of Service Manager → Issues, Jun 22" },
      { label: "What the live review found", value: "An initial open-only view suggested maintenance largely bypasses RM. Including closed issues reversed that conclusion entirely. With both open and closed shown, Service Manager holds 19,383 issues at an average age of roughly 13 hours — the system is the genuine intake and resolution point for the bulk of logged work. Tickets are created across channels (tenant portal submissions plus multiple staff) and span the full portfolio, not one location. RM maintenance adoption is a strength, not a gap." },
      { label: "The narrow, real gaps", value: "Two specific issues survive the correction. (1) A stale open-ticket tail: of roughly 71 open tickets, a handful date back to 2024 and several are untriaged (Category and Priority both unassigned). Because the system closes most things fast, the minority that don't get closed become orphaned and sit indefinitely. (2) After-hours and urgent intake: per the PM interviews, an urgent subset still arrives by text or call and may be worked before — or without — a ticket being opened." },
      { label: "Closeout quality", value: "Sampled closed tickets do carry resolution notes — they are not closed blank, which is good news. What is missing is photos and, more importantly, parts and labor: each issue has a Work Orders line-item grid (with a Sale Price column that is RM's native chargeback mechanism) and it sits empty. That parts/chargeback gap is treated in full under Finding 11." },
      { type: "bullets", label: "Recommendation", values: [
        "Reframe for Brian as reassurance: maintenance logging is working at scale. The action items are small and targeted, not a system overhaul.",
        "Institute a periodic triage of the open tail — assign Category and Priority on untriaged tickets and close or escalate anything aged beyond a threshold. This is hygiene, done monthly.",
        "For urgent/after-hours work, adopt a simple rule: even a same-day, after-the-fact ticket with a one-line note and a Completed status closes the documentation gap.",
        "Confirm key findings against the legacy desktop client staff actually use — the review was run on the RM web version, where some behavior may differ."
      ]},
      { label: "Effort to fix", value: "Low — a recurring triage habit and a one-line after-the-fact logging rule. No system limitation; the platform is already absorbing the volume." }
    ]),
    spacer(200),

    // ── FINDING 05 ────────────────────────────────────────────────────────────
    findingHeader("05", "Leasing Funnel Is Invisible — Prospects Enter RM Only at Application", "High Impact"),
    spacer(40),
    findingTable([
      { label: "Source", value: "Minneapolis PM (Jocelyn) — discovery call, Jun 17; St. Paul PM (Bobby) — discovery call, Jun 19" },
      { label: "The pain", value: "Inbound inquiries come through Zillow and Apartments.com. Prospects are not entered into Rent Manager until they formally apply. Everything between first contact and application — inquiry volume, response time, showing scheduling, no-shows, dropped leads — is invisible. Both the Minneapolis PM (Jocelyn) and the St. Paul PM (Bobby) independently confirmed this pattern: both maintain separate Google Sheets to log showings because no equivalent exists in RM. There is no way to see how many people expressed interest, how quickly they were contacted, or where they fell out of the process." },
      { label: "Why it matters now", value: "Brian identified a live vacancy problem in Rochester and said directly that he has no data to diagnose it — he does not know if it is a marketing problem, a response-speed problem, or a showing-to-lease conversion problem. This is now confirmed across multiple locations: the Minneapolis PM and the St. Paul PM both independently described the same workaround (personal Google Sheets for showing logs). The leasing funnel does not exist in RM, and the off-system workaround is company-wide." },
      { label: "What the live review found", value: "Rental Info → Prospects confirms the pattern at the system level and refines it. Prospect records are born at application — every record reads \"Account created through Online Application,\" so no one existed in RM before applying. The Lead Information section (source, leasing agent) is empty even on these auto-created records, so even applicants carry no source attribution. Importantly, the back half of the funnel does work and is tracked: application → screening → approval → signed lease → future move-in. The gap is specifically the front half: inquiry → contact → showing → applied." },
      { type: "bullets", label: "What RM can do", values: [
        "Rent Manager has a Prospects module and a Prospect Leasing Board that can log a lead with a source and advance it through stages to application.",
        "But the goal is the funnel metric Brian needs, not a record for every lead — and those are two different things. The non-converters are needed as a count (the denominator), not as individual CRM records."
      ]},
      { type: "bullets", label: "Recommendation — assemble the funnel from where each stage already lives", values: [
        "Top of funnel (inquiries, views, response time): Zillow and Apartments.com already track this. Surface those numbers; do not rebuild a record per inquiry in RM — that imports mostly noise (spam, no-responses, ghosts) and creates another unmaintained list.",
        "Middle (contacted → showing → applied): neither platform nor RM captures this; it is the only part worth a lightweight tracker. Create a record only once a lead becomes real (responds or requests a showing), with the source tagged — a manageable handful, not the flood.",
        "Bottom (application → move-in): already works in RM; no change needed.",
        "This answers Brian's exact question — marketing vs. response-speed vs. conversion — by sourcing each stage's number from the system that already measures it, while avoiding both failure modes: no manual logging of every lead, and no auto-dump of every tire-kicker."
      ]},
      { label: "Effort to fix", value: "Low to medium. Surfacing the platform dashboards is reporting, not data entry. The middle-funnel tracker is a light habit for real leads only. The Phase 2 upgrade is a small pipeline that pulls platform lead counts and RM application counts into one conversion view." }
    ]),
    spacer(200),

    // ── FINDING 06 ────────────────────────────────────────────────────────────
    findingHeader("06", "Utility Expenses Are Coded Differently on Each Side of the Business", "High Impact"),
    spacer(40),
    findingTable([
      { label: "Source", value: "Rent Manager General Ledger / Chart of Accounts review" },
      { label: "Observed", value: "The two locations post utility expenses to different account structures. The Rochester side uses clean, dedicated accounts that separate the utility types. The Minneapolis/St. Paul side posts to a single catch-all account labeled \"Gas & Electric (joint service),\" which combines two distinct utilities into one line." },
      { label: "The gap", value: "Because the same expense type is coded two different ways, there is no clean cross-portfolio utility view, and on the Minneapolis/St. Paul side gas and electric cannot be separated at all. Any utility trend analysis — including the Finding 01 reporting layer — inherits this inconsistency at the source." },
      { type: "bullets", label: "Why it matters", values: [
        "This is the GL-level expression of the two-location drift flagged at kickoff: two legacy portfolios merged in 2008, and the chart of accounts drifted apart over time. It is structural, not anyone's fault.",
        "It silently undercuts the exact visibility Brian asked for — you cannot trend or compare what you cannot cleanly separate.",
        "It is a prerequisite to fix before the Finding 01 phase-2 build, because a reporting layer is only as consistent as the account coding underneath it."
      ]},
      { type: "bullets", label: "Recommendation", values: [
        "Standardize the utility expense account structure across both locations — dedicated per-utility accounts (gas, electric, water/sewer, trash) rather than a combined catch-all.",
        "Re-map the Minneapolis/St. Paul catch-all going forward; optionally re-class history if a clean trend baseline is wanted.",
        "Sequence this before scoping the Finding 01 phase-2 reporting build."
      ]},
      { label: "Effort to fix", value: "Low to medium — a chart-of-accounts cleanup and a bookkeeping convention. No system limitation; it is a consistency decision." }
    ]),
    spacer(200),

    // ── FINDING 07 ────────────────────────────────────────────────────────────
    findingHeader("07", "RM Account Fragmentation Mirrors the Two-Location Split", "Strategic"),
    spacer(40),
    findingTable([
      { label: "Source", value: "London Computer Systems / Rent Manager billing invoices (Account #4046)" },
      { label: "Observed", value: "The subscription carries roughly seven separately-numbered RM accounts: six desktop RM12 accounts (one primary plus five additional at $53/month each) and one Rent Manager Online location. This is the licensing-level footprint of running two legacy portfolios inside one platform." },
      { label: "What this means", value: "The fragmented account structure is the same two-location drift seen in workflow (the PM calls) and in GL coding (Finding 06), expressed in the billing. Each additional account is a recurring per-account charge, and the structure is the practical backdrop to the question Brian raised about whether the two locations can be merged on the management side." },
      { type: "bullets", label: "Open question (not yet resolved)", values: [
        "Can the two locations be merged in Rent Manager without losing history? This is an open investigation item, not a settled recommendation.",
        "If they can be consolidated, does that reduce the per-account licensing count, or is the account structure independent of the location structure?"
      ]},
      { type: "bullets", label: "Recommendation", values: [
        "Put both questions to Pergola's RM rep directly: merge feasibility without data loss, and any licensing impact of consolidation.",
        "Treat merging as an opportunity to raise, not a battle to pick — Brian is open to it in principle but it does not bother either partner day-to-day.",
        "Do not recommend a merge until the data-loss question is answered; the cost of getting a migration wrong outweighs the per-account saving."
      ]},
      { label: "Effort to fix", value: "Investigation only at this stage — a support conversation. Any consolidation itself would be a scoped, carefully-staged migration, not a quick toggle." }
    ]),
    spacer(200),

    // ── FINDING 08 ────────────────────────────────────────────────────────────
    findingHeader("08", "Printed Resident Notices (VPO) Are a Standing Cost That Could Shift to Portal/Email", "Quick Win"),
    spacer(40),
    findingTable([
      { label: "Source", value: "LCS Virtual Post Office (VPO) add-on invoice — the second invoice Brian flagged" },
      { label: "Observed", value: "A separate ~$58/month (~$700/year, varies with volume) invoice covers roughly 49 batches per month of printed-and-mailed resident notices at about $1 each. This is the \"à-la-carte second invoice\" Brian asked about." },
      { label: "Read", value: "VPO is an actively-adopted, working feature — this is healthy use, not waste. The optimization angle is narrow and concrete: every notice mailed to a resident who already has an email or active tenant portal on file could shift to electronic delivery at near-zero marginal cost." },
      { label: "Why it matters", value: "It ties directly to Finding 02 (tenant portal underuse). The more residents are active in the portal, the more of this mailed volume becomes avoidable. It is a small, recurring saving that also reinforces the portal-adoption push rather than competing with it." },
      { type: "bullets", label: "Recommendation", values: [
        "Review what share of the ~49 monthly VPO notices go to residents who already have a portal account or email on file, and switch those to electronic delivery.",
        "Keep mailed delivery for legally-required physical-service notices and for residents without email.",
        "Revisit after the Finding 02 portal fix raises portal adoption — the avoidable share should grow."
      ]},
      { label: "Effort to fix", value: "Low — a delivery-preference review and a default change. No system change required." }
    ]),
    spacer(200),

    // ── FINDING 09 ────────────────────────────────────────────────────────────
    findingHeader("09", "Turnover Tracked in External Excel; Make Ready Board Owned but Not Yet Activated", "High Impact"),
    spacer(40),
    findingTable([
      { label: "Source", value: "Rochester PM (Darcy) — interview Jun 18; St. Paul PM (Bobby) — interview Jun 19; live RM system review (Jun 18–19); Brian call (Jun 18)" },
      { label: "The pain", value: "Off-system turnover tracking is confirmed across multiple locations. Darcy (Rochester, 147 units across 7 buildings) runs the entire turnover process on a personal Excel sheet, manually copy-pasting tenant details and every step from Rent Manager. Bobby (St. Paul, 12 units) does the same in a Google Sheet. In both cases the work lives outside RM, no one else can see where a unit stands in its turn, and the record sits on one person's device. Darcy's underlying need is also partly a reporting gap: a native RM report that surfaces her turnover columns automatically would meet her core ask even before the Make Ready Board is fully activated." },
      { type: "bullets", label: "What exists in RM", values: [
        "The Make Ready module is included in Pergola's contract and its interface is modern and capable.",
        "Each make-ready item is a full Service Issue: Action, Description, Category, Priority, Status, Assigned To, Vendor, due-date and scheduled-date offsets, notify-when-ready, and a nested checklist.",
        "A template is a sequenced set of these items that attaches to one or more properties, with an optional Enforce Action Sequence control.",
        "This is materially richer than a spreadsheet: every turnover step becomes a dated, assignable, trackable work order shared across the team."
      ]},
      { label: "What the live review found", value: "The module is owned and the underlying Service Manager taxonomy is populated and actively used: eight make-ready actions and a 21-item issue-category list both exist in Service Setup. One template already exists — \"Rochester Heights,\" with six configured items — but the board has never been put into service. On the audit login the template builder's Action, Category, Priority, and Status pickers return no results despite those lists being populated; the Service Setup lists are view-only; and the existing template is locked with Save disabled even under administrator rights. Live testing isolated the cause: selecting the same property the working template uses did not populate the pickers (ruling out location scoping), and enabling a separate feature, Meter Estimates, returned an explicit Rent Manager error — \"Insufficient privileges to add or update data.\" The three symptoms collapse into one root cause: the audit login lacks add/update privileges across the Service Manager and Metered Utilities modules. The \"Administrator\" flag grants visibility, not the per-feature add/edit/delete rights, so existing data renders but every interactive action is inert. This is an access problem, not absent configuration." },
      { label: "The gap", value: "Turnover lives in Excel not by preference but because the in-system tool the team already owns has never been usable to them: the add/update privileges that make the board configurable were never granted. The capability is present; the access is not." },
      { type: "bullets", label: "Why it matters", values: [
        "Turnover documentation is a priority Brian named directly. \"Clipboard and experience\" loses repair records, so a fix done during a turn cannot be charged back later.",
        "Moving turnover onto the board gives shared visibility, preserves the record off any one person's laptop, and ties each step to an assignable, dated work order.",
        "If the board's unit view meets Darcy's needs, it replaces the Excel sheet with something the whole team can see."
      ]},
      { type: "bullets", label: "Recommendation", values: [
        "Resolve the privilege gap first: the account admin grants the PM/audit login add/edit/delete on the Service Manager nodes (Service Issues, Inspections, Make Ready Items) and select-level access to the Service Setup lists, then retry. If a full-privilege login also hits the wall, escalate to the RM rep with the exact error string rather than re-toggling the Administrator flag, which alone does not grant these rights.",
        "Once unblocked, build a turnover template (a draft 8-step sequence with date offsets is ready) and attach it to one property.",
        "Validation gate: apply it to one live turning unit and confirm two things specifically — a multi-unit, line-per-unit view and automatic tenant in/out pull. Adopt only if it genuinely improves on Darcy's Excel; do not force a switch that leaves her worse off.",
        "Once validated, extend to the other properties and the Minneapolis/St. Paul side."
      ]},
      { label: "Effort to fix", value: "Medium and front-loaded. Resolving the permissions and scoping and configuring assignable Maintenance Techs is the real work; once done, building templates and running turns is low-effort and ongoing. No system limitation found; this is access and configuration, not capability." },
      { label: "Status / open item", value: "In progress, pending the privilege fix. The same add/update gap also blocks Finding 01 (Meter Estimates), so resolving it unblocks two findings at once. Once access is granted, two adoption prerequisites still need live verification — a multi-unit, line-per-unit view and automatic tenant in/out pull — both cited by Bobby (St. Paul) and Darcy (Rochester). Quick-win parallel path: a native RM turnover report built from existing data can meet Darcy's core reporting need (a portfolio roster) even before the board is activated. The board is the workflow upgrade; the report is the faster roster fix." }
    ]),
    spacer(200),

    // ── FINDING 10 ────────────────────────────────────────────────────────────
    findingHeader("10", "Communication Logging Is Partial: Calls Auto-Link but Go Un-Notated, and Individual Email Stays in Outlook", "Quick Win"),
    spacer(40),
    findingTable([
      { label: "Source", value: "Live RM system review (Jun 18 and Jun 23); RM rep (Camille Brigano) reply" },
      { label: "What the review found", value: "An initial concern — a prospect with a logged call but an empty Communication history — did not survive verification. On a tenant record (phone on file) the rmVoIP call appears correctly in History/Notes, auto-linked to the contact whose number matches. The RM rep confirmed the design: calls auto-link by matching the inbound number to a contact record, and the \"Unlinked Calls\" view holds calls from numbers not in RM. The original empty-history case was an unlinked call (number not saved) or the wrong view, not a sync defect. rmVoIP linking works as designed." },
      { type: "bullets", label: "The real, narrower observations", values: [
        "Calls auto-log but are not notated: the entry reads \"rmVoIP Call To … , Caller ID:\" with no conversation content. RM captures the call metadata; a person still has to record what was said, and that step is being skipped.",
        "Communication is mostly email. Email sent through RM (showing schedules, surveys, notices) does auto-log to the contact. But individual, two-way correspondence handled in Outlook never reaches RM, so a contact's history shows outbound blasts more than real conversations (consistent with the St. Paul PM, who searches Outlook for context).",
        "One genuine defect remains: the \"Unlinked Calls\" view buffers indefinitely without loading — a support ticket regardless of the above."
      ]},
      { label: "Why it matters", value: "A contact's interaction history is only as complete as what gets captured, and the missing pieces here are exactly the human-entered ones — call notes and individual email threads. This is the same pattern that runs through the audit: the data that goes missing is whatever depends on manual entry at the moment of action." },
      { type: "bullets", label: "Recommendation", values: [
        "Adopt a light habit of notating calls; in the Express interface RM can auto-summarize the call when the detail is opened, which lowers the friction.",
        "Bring individual tenant email into RM where it matters — log or BCC critical threads to the contact record — rather than leaving the history of record in Outlook.",
        "Open a support ticket specifically for the spinning Unlinked Calls view; that is the one item that is an actual product issue."
      ]},
      { label: "Status", value: "Downgraded. Call-linking works as designed; net items are the call-notation habit, the inbound-email gap, and the single Unlinked Calls support ticket. Folds naturally into the broader communication-logging picture rather than standing as an rmVoIP defect." }
    ]),
    spacer(200),

    // ── FINDING 11 ────────────────────────────────────────────────────────────
    findingHeader("11", "Parts and Procurement: Spend Is Visible Only as a Lump, and the Tools to Fix It Are Owned but Unused", "High Impact"),
    spacer(40),
    findingTable([
      { label: "Source", value: "Maintenance (Chris) — interview Jun 19; St. Paul PM (Bobby) — Jun 19; Brian/Joe context; live RM review of Service Issues, Inventory Items, and Purchasing (Jun 22)" },
      { label: "The pain — two linked problems", value: "Procurement is fragmented and visibility is nonexistent. (A) Parts are bought ad hoc across Home Depot, Menards, and Pro Supply, plus a marked-up middleman (Maintech/\"JC\") for delivery; the trips cost time, fuel, and vehicle wear. A parts list reportedly exists but maintenance does not use it, because a static list is slower to check than eyeballing the shelf — any replacement has to be faster than counting. (B) Parts flow to the senior PM as receipts, so the General Ledger shows only a lump expense. There is no breakdown by property, by job, by tech, by turnover-vs-routine, or by volume." },
      { type: "bullets", label: "What this costs the business", values: [
        "Cannot tell which buildings are money pits, or budget parts per property.",
        "Cannot catch shrinkage or duplicate buying.",
        "Cannot charge tenant-caused damage back, because the parts and labor were never attached to a job.",
        "Cannot negotiate volume pricing, because no one knows category volume."
      ]},
      { label: "What the live review found", value: "Rent Manager already contains the tools for both problems, unused. Each Service Issue has a Work Orders line-item grid — Item, Description, Quantity, Cost, Sale Price, Total — which is RM's native per-job parts and chargeback mechanism (the Sale Price column is the built-in markup-and-bill path). It is empty on sampled tickets. Separately, RM has a full native inventory suite: an Inventory Items catalog, an Inventory Reorder report, a Physical Inventory Worksheet, and Purchase Orders. All are empty — quantities are zero, no purchase orders exist, and the inventory history shows zero transactions ever. The roughly 13 catalog items that are set up are a chargeback price book (labor, lockout, locks/keys), not stock. Same owned-but-unused pattern as the utility and make-ready modules." },
      { type: "bullets", label: "Recommendation — right-sized, lowest-overhead first", values: [
        "1) Consolidate to two or three suppliers with online ordering and delivery (e.g., Pro Supply). This kills the ad-hoc trips and the middleman markup with zero inventory overhead — the biggest, cheapest win, and pure procurement.",
        "2) Keep a par-level visual list per building — a faster-than-counting glance sheet, not a maintained RM quantity. A lightweight tool that respects the \"must beat eyeballing the shelf\" test.",
        "3) Log parts on the work order for chargeback (Problem B). Worth it on its own for recoverable tenant-damage dollars; it also creates per-job, per-property attribution at near-zero added friction. The give-away version is simply attaching the receipt photo to the ticket.",
        "4) Full RM inventory (live counts, reorder points, purchase orders) is an optional, sequenced future step — turn it on only after the parts-logging habit proves sustainable, because adding an item to a work order can auto-decrement stock and thus self-maintain the count. For a three-tech, 600-unit shop, full inventory may cost more admin time than it saves; do not default to it just because it is owned."
      ]},
      { label: "Recoverable money", value: "The chargeback price book means the ability to bill tenant damage back — parts plus labor plus markup — was already built. The empty Work Orders grids mean it is not used. Every tenant-damage turnover where the cost is absorbed instead of billed is recoverable money; sampling a few turns and multiplying by annual turn volume produces a concrete dollar figure." },
      { label: "Effort to fix", value: "Low for supplier consolidation and receipt-on-work-order (process and habit, no system change). Medium and sequenced for full inventory, and only if the logging habit holds — the manual nature of inventory is almost certainly why it went unused before, so the value is designing a process techs will sustain, not flipping a switch." }
    ]),
    spacer(200),

    // ── Operational notes (outside RM scope) ──────────────────────────────────
    new Paragraph({
      children: [new TextRun({ text: "Operational notes (outside Rent Manager's scope, captured for completeness): mixed appliance brands and models within a property add maintenance time, and there is no defined turnover/remodel scope at acquisition, which drives \"round one, then round two\" rework. Both are process observations rather than RM configuration findings.", font: "Arial", size: 22, color: "333333", italics: true })],
      spacing: { before: 80, after: 80 }
    }),
    spacer(80),

    // ── Placeholder for future findings ───────────────────────────────────────
    new Paragraph({
      children: [new TextRun({ text: "Open items still in motion: the systematic RM feature-adoption walkthrough (spot-checks complete; a feature-by-feature pass remains), AvidXchange vs. native RM accounts-payable (not yet reviewed), and three verifications gated on access — Make Ready privileges, the Zego utility-consumption export, and the location-consolidation quote. These will be folded in as they resolve; the findings below are current as of this version.", font: "Arial", size: 22, color: "999999", italics: true })],
      spacing: { before: 80, after: 80 }
    }),
    spacer(120)
  ];
}

// ── Roadmap ───────────────────────────────────────────────────────────────────
function roadmapSubheading(text) {
  return new Paragraph({
    children: [new TextRun({ text, font: "Arial", size: 24, bold: true, color: NAVY })],
    spacing: { before: 220, after: 60 }
  });
}

function buildRoadmap() {
  return [
    sectionHeading("04", "Prioritized Roadmap"),
    rule(),
    bodyText("The findings sort into three tiers. The sequence is deliberate: clear the prerequisites that unblock several findings at once, hand the team and the RM rep the quick wins they can do directly, then take on the builds that convert Pergola's existing data into the visibility Brian asked for."),
    bullet("Unblock first — access and cleanup that gate other work."),
    bullet("Quick wins — low effort, implementable by the team or the RM rep now."),
    bullet("Phase 2 builds — outside assistance, scoped to deliver the operational visibility the business lacks."),
    spacer(80),
    bodyText("One principle runs through all of it. The data Pergola is missing is consistently the data that depends on a person entering it at the moment of an action — call notes, lead sources, parts on a job, meter readings. Auto-captured data (online applications, cost postings, portal work orders) is already complete. Every recommendation below therefore either removes that manual step or reads data the systems already capture, rather than asking staff to log more.", { italics: true }),
    spacer(120),

    roadmapSubheading("Tier 0 — Unblock first (prerequisites)"),
    findingTable([
      { label: "RM privileges", value: "Grant the PM/audit login add/edit/delete on the Service Manager nodes and select-level access to the Service Setup lists. This single fix unblocks both Finding 09 (Make Ready) and Finding 01 (Meter Estimates), which fail on the same wall. Owner: account admin, escalate to RM rep with the exact error if a full-privilege login also fails." },
      { label: "Zego access", value: "Confirm Zego/PayLease can export provider and sub-metered consumption, and secure direct access so it does not sit only with one person. Prerequisite for the Finding 01 utility build. Owner: Brian/Chad with Zego." },
      { label: "Consolidation scope", value: "Answer LCS's trial-balance-history question so the location-consolidation project can be quoted (Finding 07). Owner: Brian with LCS." },
      { label: "Utility GL coding", value: "Standardize per-utility accounts across both locations (Finding 06) before any utility reporting layer is built — the layer is only as clean as the coding beneath it." }
    ]),
    spacer(160),

    roadmapSubheading("Tier 1 — Quick wins (team or RM rep, now)"),
    findingTable([
      { label: "Portal leases (02)", value: "Check the Blue Moon eSignature post-back setting so signed leases surface in the tenant portal; stops the manual PDF emails. Very low effort." },
      { label: "Unit transfer (03)", value: "Get the supported intra-portfolio transfer path from the RM rep and document it so the PM can handle transfers without Joe. Low." },
      { label: "Open-ticket triage (04)", value: "Monthly pass to assign category/priority on untriaged tickets and close or escalate the aged tail. Low, recurring." },
      { label: "Electronic notices (08)", value: "Switch VPO mailed notices to email/portal for residents with email on file; keep mail for legally-required service. Low." },
      { label: "Communication habits (10)", value: "Notate calls (Express can auto-summarize), log or BCC critical tenant email into RM, and open the Unlinked Calls support ticket. Low." },
      { label: "Receipt on work order (11)", value: "Attach the parts receipt photo to the job before it goes to the PM — creates per-job attribution and the chargeback record at near-zero friction. Low." },
      { label: "Real-lead tracker (05)", value: "Create a prospect record only once a lead becomes real (responds/requests a showing), with the source tagged — a manageable handful, not every inquiry. Low habit." }
    ]),
    spacer(160),

    roadmapSubheading("Tier 2 — Phase 2 builds (Day54-delivered)"),
    findingTable([
      { label: "Utility anomaly dashboard (01)", value: "Monthly Zego export, normalized per occupied unit, year-over-year by month, with threshold alerts when a building drifts mid-month. Building it off Zego rather than pushing into RM sidesteps both the disabled-API blocker and the double-charge concern. The Rochester Heights gas spike is the demonstration case. Medium." },
      { label: "Leasing-funnel view (05)", value: "Pull platform lead counts (Zillow/Apartments.com) and RM application counts into one conversion view that answers Brian's question — marketing vs. response-speed vs. conversion — without asking staff to log every lead. Medium." },
      { label: "Turnover system (09)", value: "After privileges are fixed, activate the Make Ready Board if it delivers the multi-unit view and automatic tenant pull; otherwise build the native turnover report that replicates Darcy's sheet from existing RM data. Medium." },
      { label: "Parts & procurement (11)", value: "Staged: supplier consolidation with online ordering first (kills trips and the middleman markup), par-level visual lists, parts-on-work-orders for chargeback; full RM inventory only if the logging habit proves sustainable. Low-to-medium, sequenced." },
      { label: "Capital-planning analytics", value: "Mine the roughly 19,000 closed service issues by property and issue type to surface which buildings and systems recur — turning a decade of reactive history into a budgeting and preventive-maintenance signal. Pure analytics on data already in hand; no staff behavior change. Medium." },
      { label: "Operational Data Layer", value: "The unifying build: one read-only pipeline across Rent Manager, Zego, and AvidXchange feeding the dashboards above. The strategic frame for Phase 2 — surface what the systems already capture instead of asking staff to enter more." }
    ]),
    spacer(120),
    bodyText("Rent Manager's AI and automation add-ons (Orion AI, Smart Bills, Bank Sync) are not currently licensed and are intentionally left as a later footnote — worth revisiting only once the basics above are running, consistent with Brian's stated priority order.", { italics: true, color: "555555" }),
    spacer(120)
  ];
}

// ── Build document ────────────────────────────────────────────────────────────
const doc = new Document({
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } }
        }]
      },
      {
        reference: "bullets-small",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "\u2013", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 360, hanging: 220 } } }
        }]
      }
    ]
  },
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 30, bold: true, font: "Arial" },
        paragraph: { spacing: { before: 320, after: 80 }, outlineLevel: 0 } }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 }
      }
    },
    footers: {
      default: new Footer({
        children: [
          new Paragraph({
            tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
            children: [
              new TextRun({ text: "Pergola Management — Audit Findings  |  Day54, LLC  |  Confidential", font: "Arial", size: 16, color: "999999" }),
              new TextRun({ text: "\t", font: "Arial", size: 16 }),
              new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 16, color: "999999" })
            ],
            border: { top: { style: BorderStyle.SINGLE, size: 4, color: "CCCCCC", space: 6 } }
          })
        ]
      })
    },
    children: [
      ...buildCover(),
      ...buildExecutiveSummary(),
      ...buildFeatureInventory(),
      ...buildFindings(),
      ...buildRoadmap()
    ]
  }]
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync("/home/claude/Pergola_Audit_Project/01_Deliverable/Pergola_Audit_Findings.docx", buf);
  console.log("Done");
});
