# example-web-comp-es2015-modules
Example of web components using ES2015 Modules (ES2015 Modules, Custom Element, Shadow DOM)

Based on the web components v1 spec. and implements most of the best practices from Google developers posts (https://developers.google.com/web/fundamentals/web-components/best-practices).

Components are created as ES2015 Modules and then imported. Using this method requires a different handling for views.

Some alternatives for handling views:
* Parsing template strings. (Used in this example project).
* Manually build view using HTML elements.
* Load and parse views in html files.
* Third party view libraries.

Another new feature is included in this project: link rel=modulepreload
This is currently only supported in Chrome 64-beta (Behind flag "Experimental Web Platform Features"). It should typically be used for modules that is required for first paint to faster get first usable paint on screen. Since dependant modules are loaded in a waterfall this can be a great improvement for first loads. 
You can read more about it here: https://developers.google.com/web/updates/2017/12/modulepreload

Warning: Experimental features. At the time of writing the features used in project is supported in Chrome 63 (You might have to enable "Experimental Web Platform features" in chrome://flags) and enable "Enable ECMAScript 6 modules", "Enable ECMAScript 6 modules dynamic import" in chrome://flags. Not tested in any other browsers.

## Setup
```npm i```

## Run (watch)
```gulp watch```

## Zero build
One of the goals of this project was to use as much of the currently available web platform features as possible to get a build less dev process. The only tools included is gulp and browsersync, just for convenience when developing. Included server and auto-refresh. (In a production environment you would of course add minification as a build step).

## Why use ES2015 Modules over HTML Imports
Mozilla has stated that they will not implement support for HTML Import as the spec. is now. (Read more about it here: https://hacks.mozilla.org/2014/12/mozilla-and-web-components/). They have also stated that they want to see what happens with ES2015 modules in regards to web components.
