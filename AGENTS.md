<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the linked Hungry Since Birth visual identity as locally referenced CDN asset pointers; the homepage reproduces its chrome emblem and photographic background around the uploaded interactive pager, so the experience stays branded without rebuilding the artwork in CSS.
- Keep pager slogans, clock formatting, and audio-track slots in a separate pure module; this makes user-defined rules testable and future song files easy to attach.
- Prebundle homepage React and control dependencies together in Vite development; late dependency discovery can swap the React module during HMR and blank an open preview with an invalid hooks dispatcher.
