# Active Context

## Current Work Focus

Updating the Memory Bank with the latest changes.

## Recent Changes

*   **Deployment Process Refinement**: Transitioned from GitHub Actions for deployment to using the `gh-pages` npm package. This involved:
    *   Adding `predeploy` and `deploy` scripts to `package.json`.
    *   Configuring `vite.config.ts` and `src/App.tsx` to dynamically use `import.meta.env.BASE_URL` for asset and routing paths, ensuring compatibility with both local development (root path) and GitHub Pages (sub-path or custom domain).
    *   Creating a `public/404.html` for Single Page Application (SPA) routing fallback on GitHub Pages.
    *   Adding a `public/CNAME` file for custom domain configuration.
    *   Multiple iterations to resolve pathing issues (e.g., missing trailing slashes, incorrect base URLs) and `gh-pages` package errors (e.g., "couldn't find remote ref", "nothing to commit").
*   **Asset Path Corrections**: Updated image and PDF references across `src/components/HeroSection.tsx`, `src/components/ProjectsSection.tsx`, and `src/components/AboutSection.tsx` to use `import.meta.env.BASE_URL` for correct resolution in deployed environments.
*   **Favicon Implementation**: Added a `link` tag for the favicon in `index.html` using a relative path to ensure it loads correctly on GitHub Pages.
*   **UI Adjustment**: Adjusted the scroll indicator arrow position in `src/components/HeroSection.tsx`.
*   Updated the `README.md` file to include comprehensive deployment instructions for both local and GitHub Pages, detailing the use of the `gh-pages` npm package and custom domain setup.

## Next Steps

*   Continue to work on the website based on the user's feedback.

## Active Decisions and Considerations

*   How to best implement the user's feedback.

## Important Patterns and Preferences

*   Using Markdown for documentation.
*   Following a component-based approach for website development.

## Learnings and Project Insights

*   The importance of having a well-defined PRD document for website development.
*   The benefits of using a Memory Bank to store and organize project information.
*   The importance of testing the website on different devices and browsers.
*   The importance of getting feedback from the user and iterating on the design.
*   The importance of using a reliable method to find files in the `node_modules` directory.
*   The importance of using a local copy of the `pdf.worker.min.js` file to avoid CORS issues.
*   The importance of using a different approach when the `browser_action` tool is not working.
*   The importance of using a different approach when the `context7-mcp` server is not working.
*   **Complexities of SPA Deployment**: Learned the intricacies of deploying Single Page Applications (SPAs) to GitHub Pages, especially regarding base URL configuration in `vite.config.ts`, router `basename` in `react-router-dom`, and asset pathing (images, PDFs, favicons) using `import.meta.env.BASE_URL`.
*   **GitHub Pages Custom Domains**: Understood the redirection behavior and DNS configuration (CNAME and A records) required for custom domains with GitHub Pages.
*   **`gh-pages` vs. GitHub Actions**: Gained insight into the trade-offs and specific configurations needed for both `gh-pages` npm package and GitHub Actions for deployment, ultimately settling on `gh-pages` for its direct control over the deployment branch.
*   **Debugging Deployment Issues**: Emphasized the iterative process of debugging deployment failures, including checking build outputs, network requests, and error logs to pinpoint root causes (e.g., 404s, "nothing to commit").
