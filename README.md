# Linting, Formatting, and Testing in JavaScript

This repo serves as an example of how to setup

 - linting:    [ESLint](https://eslint.org/)
 - formatting: [Prettier](https://prettier.io/)
 - testing:    [Jest](https://jestjs.io/)
 - CI:         [GitHub Actions](https://docs.github.com/en/actions)

see the `.github/` folder for an example of how to set up GitHub Actions

check out the "scripts" section in `package.json` for helpful command-line shortcurs

## Running Locally

you'll need node v14+ installed, either from [nodejs.org](https://nodejs.org/en/)

or using NVM
 - [linux, mac](https://github.com/nvm-sh/nvm#installing-and-updating)
 - [windows](https://github.com/coreybutler/nvm-windows#installation--upgrades)

the same commands as the CI server can be run locally

    npm install # do this once
    npm run check
    npm test

## EditorConfig

[EditorConfig](https://editorconfig.org/) is a quick way to standardize whitespace formatting between developers.

You might need a plugin:
 - [VSCode](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
 - [Sublime Text](https://github.com/sindresorhus/editorconfig-sublime#readme)

## Quick Links

SonarLint is one way to take things further (requires Java)

 - [SonarLint Plugin For VSCode](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode)

ESLint

 - [Configuring Rules in ESLint](https://eslint.org/docs/user-guide/configuring/rules#configuring-rules)
 - [List of ESLint Rules](https://eslint.org/docs/rules/)


Prettier

 - [Configuring Prettier](https://prettier.io/docs/en/configuration.html)
 - [VSCode Plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
 - [Sublime Text Plugin](https://github.com/jonlabelle/SublimeJsPrettier#readme)


Jest

 - [Getting Started](https://jestjs.io/docs/getting-started)
 - [Matchers](https://jestjs.io/docs/expect)
 - [Testing Asynchronous Code](https://jestjs.io/docs/asynchronous)
 - [Mocking with Jest.fn](https://jestjs.io/docs/mock-functions)
