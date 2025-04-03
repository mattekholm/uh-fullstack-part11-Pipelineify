# uh-fullstack-part11-Pipelineify

University of Helsinki Fullstack Open, [part 11 - "CI/CD", exercises 11.20-21](https://fullstackopen.com/en/part11/expanding_further#exercises-11-19-11-21): refactor old code and implement a CI/CD pipeline with Github Actions.

The exercises in this part of the Fullstack Open course package consists of two projects; this, and [Pokedex](https://github.com/mattekholm/full-stack-open-pokedex).

## Pokedex

URLs to exercises 11.1-18, the Pokedex project, can be found here: [https://github.com/mattekholm/full-stack-open-pokedex](https://github.com/mattekholm/full-stack-open-pokedex), and the website [here](https://full-stack-open-pokedex-thrumming-field-9516.fly.dev/).

## UH Phonebook

This project builds on the code from [Fullstack Open, part 3](https://fullstackopen.com/en/part3), project [UH-Phonebook](https://github.com/mattekholm/fullstackopen-phonebook-2024). This project extends that project with a CI/CD based on Github Actions.

Both projects deploy to the same website (which defeats all reasonable purpose of a CI pipeline in the first place... but I digress...).

The deployed website can be found here: [https://uh-phonebook.fly.dev/](https://uh-phonebook.fly.dev/)

---

### Setup

This project uses `direnv` to load the required Node version. If `direnv` cannot be used, it is also possible to load the correct version using the root level `.nvmrc`:

```bash
nvm use
```

### Run locally

Local development requires environment variables:

```env
// .env
PORT=3001
MONGODB_URI=<MongoDB Atlas connection string>
```

To run full project locally (both frontend and backend), first build and copy the frontend to the backend, then run backend in `dev` mode. Both scripts should be run in the backend folder.

```bash
npm run build:ui    # build frontend and copy artifact to backend
npm run dev         # start project
```

### Backend build & deploy scipts

`npm run deploy`: deploys current state of backend (including eventual frontend _dist_ folder to Fly.io).

`npm run deploy:full`: builds and deploys frontend and backend to Fly.io

`npm run logs:prod`: outputs Fly.io runtime log

---

&copy; 2025, Mats Holmberg
