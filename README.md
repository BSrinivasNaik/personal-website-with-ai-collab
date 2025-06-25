# Personal Website

> [!NOTE]
> For the full documentation of the website, please refer to the [Website PRD](https://docs.google.com/document/d/16XKvinBQRDKkFo3omCv-9evUIpABeuWkM9r-gQwsjDE/edit?usp=sharing) file.

This website was built using a combination of AI-powered tools, including Lovable and Cursor (with Cline). All project details, including the project brief, product context, system patterns, tech context, and progress, are documented in the `memory-bank` directory.

## How to Run the Project Locally

To run the project locally, you will need to have Node.js and npm installed on your machine.

1.  **Clone the repository:**

    ```sh
    git clone <YOUR_GIT_URL>
    ```

2.  **Navigate to the project directory:**

    ```sh
    cd <YOUR_PROJECT_NAME>
    ```

3.  **Install the dependencies:**

    ```sh
    npm i
    ```

4.  **Start the development server (for development with hot-reloading):**

    ```sh
    npm run dev
    ```

5.  **Build and serve locally (for local production preview):**

    ```sh
    npm run build:local
    npx serve dist
    ```
    This will serve the built application from `http://localhost:3000`.

## Technologies Used

*   **Vite:** A fast and lightweight build tool for modern web projects.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **React:** A JavaScript library for building user interfaces.
*   **shadcn-ui:** A collection of re-usable components for React.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.

## Deployment to GitHub Pages

This website is hosted on GitHub Pages and uses a custom domain purchased from GoDaddy. The deployment process is handled using the `gh-pages` npm package.

1.  **Build the project for GitHub Pages:**
    The `npm run build` command builds the project with the correct base path for GitHub Pages (`/personal-website-with-ai-collab/`).

2.  **Deploy to `gh-pages` branch:**
    The `npm run deploy` command uses the `gh-pages` package to push the contents of the `dist` folder to the `gh-pages` branch of your repository. This branch is then served by GitHub Pages.

    ```sh
    npm run deploy
    ```
    You can also add a custom commit message:
    ```sh
    npm run deploy -- -m "Your custom commit message"
    ```

3.  **Custom Domain Configuration (GoDaddy):**
    To use a custom domain (e.g., `www.srinivasnaikbhukya.in`), ensure a `CNAME` file exists in your `public` directory with your domain name.
    You also need to configure your GoDaddy DNS settings:
    *   **For `www.srinivasnaikbhukya.in` (CNAME record)**:
        *   **Type**: `CNAME`
        *   **Name**: `www`
        *   **Value/Points to**: `BSrinivasNaik.github.io`
    *   **For `srinivasnaikbhukya.in` (root domain - A records)**:
        *   **Type**: `A`
        *   **Name**: `@`
        *   **Value/Points to**:
            *   `185.199.108.153`
            *   `185.199.109.153`
            *   `185.199.110.153`
            *   `185.199.111.153`

    DNS changes can take time to propagate.
