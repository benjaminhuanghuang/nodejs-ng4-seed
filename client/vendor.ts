// To tell Webpack what belongs in the vendor bundle
// vendor.ts file that only imports the application's third-party modules:

// Angular
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/compiler';
import '@angular/http';
import '@angular/router';
import 'es6-shim';
import 'es6-promise';

/** Evergreen browsers require these. **/
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.

/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
import 'zone.js/dist/zone';  // Included with Angular CLI.

// RxJS
import 'rxjs';
