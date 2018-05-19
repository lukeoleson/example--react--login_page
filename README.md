# React Login Exercise

## Remember

* Add a footer
* Change the background color to something more interesting
* Add your media queries for the members area
* Fix your media queries for the main card element (tablet size)
* Don't forget to add prefixing to your production pipeline. 
* Double check that you hit all your alt tags and other html/css style guidelines
* Check caniuse for any HTML5, CSS3, ES6 stuff you use. 
* Read the fake DB info from a JSON file
* Create a fancier valid/invalid class toggling system

## If you have extra time
* Download the icons you want so you don't have to use the CDN
* Think about making a favicon with the 'alfred' logo from the ad.
* Change the word "alfred" to orange in the image.
* Make the background transparent in the logo
* Add some CSS3 animations (animate the logo or maybe make the card flip over for login versus registration)
* 


## Production Build

* To get a production build run `npm run build` from the root directory. This will create and populate a folder called "build". 
* At this point the production build is transpiled, bundled, minified and prefixed. It is totally ready to deploy, but you should double check that it is properly prefixed as well. 


## Development

* If you have pulled this repo fresh to your machine, then you can just run `npm install` from the root directory to install all your dependencies. 

* Use `npm start` to start up the development environment. This will give you a live server with hot reload. In order to get your SCSS compiled you also need to run `gulp watch` from the root directory (I recommend doing it in another terminal tab so you can see any gulp errors separate from any npm errors).

* To deploy you need to just upload the `build` directory to a static server such that `index.html` is the root of the app.