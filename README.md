# Alex Erlandsson

This is the repository for https://alexerlandsson.com hosted with GitHub Pages. This is my own personal website and it is basically used as a playground for me.

## Before you start

### Install dependencies (npm)

```shell
$ npm install
```

## Work in this repository

This project is hosted using GitHub Pages and being built from the `/docs` folder in the `master` branch. There are no CI/CD jobs building the project and the only preprocessor used is Sass.

### Writing CSS

The CSS is built using SCSS and can be found in `/scss`. The SCSS in compiled into CSS using `Dart Sass`. Compile the SCSS in this project into CSS by running the following command.

```bash
npm run sass
```

### Code formatting

This project uses [Prettier](https://prettier.io/) to format the code. To format all files, run the following command.

```bash
npm run prettier
```

### Lint

This project uses [Stylelint](https://stylelint.io) to lint the _scss_. The settings is based on `stylelint-config-standard-scss`. To run the lint, run the following command.

```bash
npm run stylelint
```
