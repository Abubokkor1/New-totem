# TOTEM SMP Website

A responsive Minecraft network landing page inspired by premium gaming-network layouts, with original Totem SMP branding and a yellow/lime visual theme.

## Included content
- Game mode: Survival only
- Ranks: Coming Soon
- Crates & Keys: Coming Soon
- Server IP: Coming Soon
- Port: N/A
- Discord: https://discord.gg/rusgu7pRFq

## Deploy to the existing Netlify site
1. Download and extract this ZIP.
2. Upload/replace the files in the root of your connected GitHub repository (`Abubokkor1/Website`). Keep `index.html`, `assets/`, `content/`, and `admin/` at the repository root.
3. Commit to `main`. Netlify should build and deploy automatically because the repository is already connected.
4. Open the site and check the homepage.

## Admin CMS
The CMS interface is at `/admin/`. It is configured to edit `content/site.json` in this GitHub repository. GitHub OAuth still needs to be configured before login can work. Do not treat the CMS as secured until OAuth is configured and tested. Add your OAuth provider URL as `base_url` in `admin/config.yml` when you set up the provider. Never put a GitHub personal access token in browser code or commit secrets to this repository.

After CMS authentication is configured, edits saved in the CMS commit to GitHub and Netlify automatically redeploys the site. You will not need to create or upload a new ZIP for ordinary content changes.
