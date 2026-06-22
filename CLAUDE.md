## Approach
- Read existing files before writing. Don't re-read unless changed.
- Thorough in reasoning, concise in output.
- Skip files over 100KB unless required.
- No sycophantic openers or closing fluff.
- No emojis or em-dashes.
- Do not guess APIs, versions, flags, commit SHAs, or package names. Verify by reading code or docs before asserting.

## Persistence and logging (do this every chat, without being asked)
The project lives across many chats. Anything left only in chat is lost when the chat ends. So every finding, decision, interview takeaway, and system observation must be written into one of two canonical project files before the session ends:

- `02_Build_Source/build_findings.js` - CONFIRMED, client-facing findings. Add each as a `findingHeader()` + `findingTable()` block, numbered in sequence. Entries are living: update them in place when new info arrives (mark status like "pending RM rep" rather than waiting for certainty). This is the deliverable source; keep out half-baked or out-of-scope items.
- `00_Project_State/PROGRESS.md` - the running log and single resume point. Everything else goes here: working notes, interview captures, pending or unscoped items, open follow-ups, and a dated session-update section each chat. Findings not yet confirmed enough for the deliverable live here until promoted.

Rules:
- Never leave a finding or material insight only in the chat transcript.
- At the end of substantive work, update the relevant file(s) and output the full updated file so it can replace the project copy (the project mount is read-only, so the user does the swap).
- Preserve existing file content exactly when appending; copy the read-only original first, then edit, so nothing is dropped.
- Do not build the formatted .docx unless a polished client deliverable is explicitly requested; updating build_findings.js source is enough for logging.
