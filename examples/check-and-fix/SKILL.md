---
name: check-and-fix
description: Run the Norma live check on files that changed, fix every violation, and re-check until clean. Use after writing or editing any source file, and before showing a change to a human.
---

# Check and fix

Close the loop on your own work. Do this before you present a change, not after.

## Steps

1. Identify every source file you created or modified in this turn.
2. Run the Norma live check on each one.
3. For every finding, fix the code so it satisfies the rule. Do not suppress the rule, do not add an exception comment, and do not restructure the code so the rule stops firing without the underlying problem being fixed.
4. Explain each fix in one sentence, naming the rule it satisfies.
5. Re-run the live check on the same files.
6. Repeat from step 3 until the check comes back clean, or until you have tried twice on the same finding.

## When you cannot fix something

Stop and say so. Name the rule, quote the finding, and explain what you would need in order to fix it properly. A finding you cannot resolve is information. A finding you hid is a defect with extra steps.

## What to report back

- What you changed and why.
- Which rules fired, and what you did about each one.
- Anything still failing, and why.
