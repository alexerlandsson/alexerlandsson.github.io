# Alex Erlandsson

This is the repository for https://alexerlandsson.com hosted with GitHub Pages. This is my own personal website and it is basically used as a playground for me.

## Before you start

### Install dependencies (npm)

```shell
$ npm install
```

## Build

To build the project, run gulp from the project root. After the project has been built, the production files are located in the folder `docs`. This folder is published using GitHub Pages.

```shell
$ gulp
```

To watch for changes, a watch gulp task is also added. Start it by running the following command.

```shell
$ gulp watch
```

## Build Process

This repsoitory uses gulp to build the project. Make the changes in `/src` and it will be compiled into `/docs` after the projects has been built.

### HTML

The HTML is separated into parts that gets imported into the mail html files using `gulp-file-include`. This method is used to create a cleaner work environment and to add the possibility to reuse components in multiple files. The prefix used to include html files is set to "@@" as can be found in `gulpfile.js`.

The file `src/index.html` is compiled into the main html file.

#### AMP

Another html file (`src/amp.html`) is used to create an AMP version of the site. This file contains AMP specific markup such as AMP, AMP Boilerplate Code, AMP Analytics and a canonical link to the main page.

Everything other than the AMP specific parts should be the same as `src/index.html` but the AMP link and default Google Analytics snippet.

### CSS

The CSS is built using SCSS and can be found in `src/style`. The SCSS in compiled into CSS using `gulp-sass` and later included as minified CSS placed inline in the document head. This results in no additional request for CSS and therefore a faster load speed.

All SCSS written should be following the lint rules. The rules can be found in `.sass-lint.yml`.

### Images

Images should be placed in `src/images` and will later be copied into the build folder (`/docs`).

### Other unique files

Other files such as CNAME, robots.txt and sitemap.xml could be placed directly in `/docs` as of now since there is no automation included in creating these files. The build process will not delete these files on build.
