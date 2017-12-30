# example-web-comp-standard
Example of a standard web component (HTML Import, Template, Custom Element, Shadow DOM)

Based on the web components v1 spec. and implements most of the best practices from Google developers posts (https://developers.google.com/web/fundamentals/web-components/best-practices).

Warning: Experimental features. At the time of writing the features used in project is supported in Chrome 63 (You might have to enable "Experimental Web Platform features" in chrome://flags). Not tested in any other browsers.

## Setup
```npm i```

## Run (watch)
```gulp watch```

## Zero build
One of the goals of this project was to use as much of the currently available web platform features as possible to get a build less dev process. The only tools included is gulp and browsersync, just for convenience when developing. Included server and auto-refresh. (In a production environment you would of course add minification as a build step).

## Problems
Mozilla has stated that they will not implement support for HTML Import as the spec. is now. (Read more about it here: https://hacks.mozilla.org/2014/12/mozilla-and-web-components/). They have also stated that they want to see what happens with ES2015 modules in regards to web components.