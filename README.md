# uh-fullstack-part11-Pipelineify

University of Helsinki Fullstack Open, part 11 CI/CD, exercises 11.20-21: refactor old code and implement pipeline with Github Actions.

The exercises in this part of the Fullstack Open course package consists of two projects; this, and [Pokedex](https://github.com/mattekholm/full-stack-open-pokedex).

## Pokedex

Exercises 11.1-18, the Pokedex project, can be found [here](https://github.com/mattekholm/full-stack-open-pokedex).

## Legacy README.md

Application: <https://uh-phonebook.fly.dev/>

---

## Setup

This project uses `direnv` to load the required Node version. If `direnv` cannot be used, it is also possible to load the correct version using the root level `.nvmrc`:

```bash
nvm use
```

## Run local backend dev with nodemon

```bash
npm run dev
```

## Backend build & deploy scipts

`npm run deploy:full`: builds and deploys frontend and backend to Fly.io

`npm run build:ui`: builds frontend and copies into backend project.

`npm run deploy`: deploys current state of backend (including eventual frontend _dist_ folder to Fly.io).

`npm run logs:prod`: outputs Fly.io runtime log

`npm run dev`: start backend in _development_ mode.

---

&copy; 2025, Mats Holmberg
