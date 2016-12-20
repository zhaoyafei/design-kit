# S,M,L,XL - Architizer Design Kit


## About

The purpose of this kit is to enable Architizer’s designers to be familiar with our styles and components and to be able to use the symbols and assets in here to piece together future designers. It will further serve as a complement to our living style guide that serves as the bridge between our designers and engineers.

## How to use this

The best way to use this file is to download it from GitHub or find it in our [_Design Resources](https://www.dropbox.com/sh/7lyl5cwkbrlbiks/AAAe901ekNM6ErFaCEWNRXTua?dl=0) folder on Dropbox, and then copy it into your Sketch Templates folder (Finder -> Go To Folder -> ~/Library/Application Support/com.bohemiancoding.sketch3/Templates/). When then starting a new project in Sketch, use the "New From Template" menu item and open the file. You'll then have all the symbols and styles at your disposal.

You can also drag and drop the elements you want to use from the template file that lives in Dropbox, but then you won't have your grids or anything already setup. Another option is to copy this file itself and simply delete all the artboards/pages so that all the components are available to you via the “Insert > Symbols” menu. For the most part the components in this document are at the scale to be used at our base 1200px wide breakpoint. When building for responsive or if you need more information about a particular element, reference the respective Sketch document in the _AppKit or _UIKit folders in our Dropbox folder.

Ultimately, both designers and engineers should have a solid enough understanding of our UI components that designers will not need to concern themselves with making everything pixel-perfect and defined by visual specs because the implementation in code will already have been defined and understood by all parties. Everything down to the sizing and spacing of elements is to be defined in a hierarchical system in this document and reflected in code.

A note about where this document lives. The working copy of it lives in our [_Design Resources](https://www.dropbox.com/sh/7lyl5cwkbrlbiks/AAAe901ekNM6ErFaCEWNRXTua?dl=0) folder on Dropbox and the master version lives in Github, with the most updated date in its file name. Changes should not be regularly made on the Dropbox version of the file. When style changes happen and items need to be added, we will do so as a team and update the “master file” which lives here, in Github, which documents all the changes made over time and grants us access to older versions.

## Semantic Kitchen Sink Quick Setup

```bash
npm install -g gulp
npm install semantic-ui
cd semantic
gulp build
```
Then open `kitchen-sink/index.html` in your browser. No server needed.

If you intend to change Semantic styles, run `gulp watch`.

## Bootstrap Documentation Site

Run the documentation site with the following command:

```bash
docker-compose up
```

Visit <http://localhost:9001> in your browser.

## Editing Bootstrap styles

Add any custom styles or Sass variable overwrites to the `/bootstrap/scss/_custom.scss` file. 

To compile, keep this running:

```bash
cd bootstrap
grunt watch
```

(We don't run the watcher inside of a container because it is prohibitively slow to do so)

### Errors

**Unable to find local grunt**

```bash
build_docs_1  | grunt-cli: The grunt command line interface (v1.2.0)
build_docs_1  |
build_docs_1  | Fatal error: Unable to find local grunt.
build_docs_1  |
build_docs_1  | If you're seeing this message, grunt hasn't been installed locally to
build_docs_1  | your project. For more information about installing and configuring grunt,
build_docs_1  | please see the Getting Started guide:
build_docs_1  |
build_docs_1  | http://gruntjs.com/getting-started
designkit_build_docs_1 exited with code 99
```
To resolve, run `npm install` inside a `build_docs` container:

```bash
docker-compose run build_docs sh

npm install
```

**Node Sass could not find a binding for your current environment**

```bash
Error: Missing binding /Users/Dan/Library/Application Support/Atom/dev/packages/source-preview-sass/node_modules/node-sass/vendor/darwin-x64-47/binding.node
Node Sass could not find a binding for your current environment: OS X 64-bit with Node.js 5.x
Found bindings for the following environments:

OS X 64-bit with Node.js 6.x
This usually happens because your environment has changed since running npm install.
Run npm rebuild node-sass to build the binding for your current environment.
```

If you encounter this error in the container output logs, run `npm rebuild node-sass` inside of the container:

```bash
docker-compose run build_docs sh

npm rebuild node-sass
```

If you encounter this error while running `grunt watch` outside of the container, run this:

```bash
npm rebuild node-sass
```



