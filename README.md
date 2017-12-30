# example-web-comp-standard
Example of a standard web component (HTML Imports, Template, Custom Element, Shadow DOM)

Based on the web components v1 spec.

Warning: Experimental features. At the time of writing the features used in project is supported in Chrome v63. Not tested in any other browsers.

## Setup
```npm i```

## Run (watch)
```gulp watch```

## Zero build
One of the goals of this project was to use as much of the currently available web platform features as possible to get a build less dev process. The only tools included is gulp and browsersync, just for convenience when developing. Included server and auto-refresh. (In a production environment you would of course add minification as a build step).