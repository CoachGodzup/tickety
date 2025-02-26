# Tickety

A minimal TODO list in Next JS, React and Typescript, that runs in your browser.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
It uses [Mantine library](https://mantine.dev/) for UI and [Redux Toolkit](https://redux-toolkit.js.org/) to manage the state.

## Screenshot
![Tickety Screenshot](./assets/tickety-screenshot.png)

## Feature

1. 😎 _Privacy First_: It just uses your [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API). No data collected! Trust me... or your network panel, for what I care
1. 🟧 _Minimal_: no graphical, data, other stuffs. Just strict to the point
1. 🧘 _Stress Free_: no due date. No planning. Just pin what you want to remember, and they stay here for all the time you need!
1. 🤝 _Open Source_: I mean, you see it here, on [Github](https://github.com/CoachGodzup/tickety), so... it's free as in free speech!

## Getting Started

First, run the development server:

```bash
pnpm dev
#if your node version with nvm is old, update at least to version 14
nvm use node
npm run dev
```

If you are a whale lover and you prefer to use [Docker](https://docs.docker.com/get-started/)
, go on and use it!
```bash
docker compose up
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result and... 📌 happy pinning!


This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
