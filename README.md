# The AA Driving School coding challenge for testers!

This repository contains two sub folders:

## /api

Contains a basic Apollo server implementation intended to serve instructor data.

1. `cd` into `api` directory.
2. `yarn install` to install dependencies.
3. `yarn start` to run the server.

## /ui

Contains a simple React app featuring a data table populated with instructor data and a modal containing lesson details. The table also features a limit feature to control the number of instructor results returned.

1. `cd` into `ui` directory.
2. `yarn install` to install dependencies.
3. `yarn start` to run the app.
4. Write e2e tests in `cypress/features`
5. Run e2e tests with `yarn cypress:open`.
