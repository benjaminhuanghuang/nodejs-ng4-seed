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

// RxJS
import 'rxjs';
