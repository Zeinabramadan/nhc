This is project was built with [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of contents

- [Getting Started](#getting-started)

### Getting Started (Development)

- First you must have a *node.js* installed locally on your machine.

- Clone the project on your machine, then from the terminal window go to the application directory and create `.env` file and to place this url `https://dummyjson.com` with this key `NEXT_PUBLIC_API_URL` as the `.env.dist` file.

- Then run `npm run dev` from root directory and it will run the server on `http://localhost:3000`.

### Deployment

- You can go to this link `https://nhcc.netlify.app` for the deployed version.

#### Architecture

Form `src` directory:

- `/app` holds all pages for the application (about/products/product) pages.

- `/components` holds all reusable components (Header/Footer/Search... etc).

- `/containers` for the products page.

- `/context` holds the state management for the app.

- `/services` contains the API calls.
