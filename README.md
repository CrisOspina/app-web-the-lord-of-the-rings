## Getting Started

Create `.env` with the following content:

```md
THE_OPEN_API_KEY=string
THE_OPEN_API_URL=string
```

The `key` and `url` can be obtained from [the-one-api](https://the-one-api.dev/documentation)

First, install dependencies:

```bash
pnpm i
```

Second run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Dashboard private, signin with user demo user and password for login:

```md
username: smeagol
password: gollum
```

Run build for test:

```bash
pnpm test
```

Run build for production:

```bash
pnpm build
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
