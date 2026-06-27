# Blog repository guidance

This is Benjamin DeMann's personal blog. The written content — blog posts in
`posts/` and gallery entries in `gallery/` — is **his own original work**. As
stated on his "Use of AI" page, it matters to him that readers can trust the
writing is genuinely his, not AI-generated.

## Authorship

Do not ghost-write or generate original blog prose. The ideas, arguments, and
wording of the posts are Benjamin's. Help is welcome for proofreading,
copy-editing suggestions, formatting, and the site's code — but not for
producing the writing itself.

## Commit co-author attribution

**Do NOT add a `Co-Authored-By: Claude ...` trailer to commits that create or
substantially shape original written content.** Those commits must show Benjamin
as the sole author, so the history makes clear the writing is his.

This applies to:

- First drafts of any post or gallery entry.
- Major or substantive edits: rewriting, restructuring, adding paragraphs or
  ideas, reworking arguments, or changing meaning or voice.

The `Co-Authored-By: Claude ...` trailer **is** appropriate (and should still be
included) when Claude helped with the work, for changes such as:

- Minor proofreading: spelling, grammar, punctuation, and typo fixes.
- Formatting / prose-wrapping (e.g. Prettier).
- Code, configuration, tooling, build, and infrastructure changes.

The trailer reflects who helped with the work, not who wrote the commit message.
If Benjamin made the change himself and Claude is only drafting the commit
message (or running the `git` commands), do NOT add the `Co-Authored-By:
Claude ...` trailer.

When unsure whether an edit to written content counts as "major," ask before
committing rather than guessing.
