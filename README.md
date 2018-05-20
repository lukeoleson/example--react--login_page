# React Login Exercise

## Description

* This is a fully responsive login page developed using React, ES6 and SASS. 
* It uses the npm create-react-app and Gulp.js for the development environment and production build. 


## Production Build

* To get an optimized production-ready build run `npm run build` from the root directory. This will create and populate a directory called "build". 
* This build is bundled, transpiled, prefixed and minified with the production file names hashed.
* You can deploy this build by uploading the contents of this directory to a static server with index.html to be used as the entry point. 

* You can see a live version of this project using this exact production build method here:
    * [React Log In Page](http://www.lukeoleson.ca/react-login/demo.html)


## Development

1. Run `npm install` from the root directory to install all the dependencies.
2. Run `npm start` to get a live server with hot reload. 
3. Run `gulp watch` to automatically compile the `.scss` files and move them to `./css`.

* alternatively, you can run `npm start_gulp` to start both the live server and the scss compilation, but this may be more difficult for viewing errors as they will both run in the same terminal with the gulp output being overwritten by the npm output at times.

* This project uses SASS. This means that you need to make your style changes in the `.scss` files NOT the `.css` files. The files in `./src/css/` are autopopulated with the compiled `.scss` files, so if you make changes directly to the `.css` files they will be overwritten the next time you run `gulp watch` or `npm run build`.