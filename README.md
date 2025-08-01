# MReceipts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.

## M-Receipts: Core Purpose

A mobile-first PWA that helps Kenyan users:

--Organize M-Pesa transactions by parsing SMS/PDF receipts

--Visualize spending with simple analytics

--Share records (for business accounting or personal tracking)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## primeng installation

-I have used primeng v16 to match with my angular version 16 using : npm install primeng@16 primeicons
-imported necessary files in angular.json:
"styles": [
"node_modules/primeicons/primeicons.css",
"node_modules/primeng/resources/themes/lara-light-blue/theme.css",
"node_modules/primeng/resources/primeng.min.css",
"src/styles.css"
]

## primeng usage

-I have used primeng for tables and icons

## bootstrap installation

-installed bootstrap library using:
-npm install bootstrap
-added bootstrap to angular.json under styles array
"styles": [
"node_modules/bootstrap/dist/css/bootstrap.min.css",
"node_modules/primeicons/primeicons.css",
"node_modules/primeng/resources/themes/lara-light-blue/theme.css",
"node_modules/primeng/resources/primeng.min.css",
"src/styles.css"
]

## Mobile-First vs. Responsive Web App

-Since M-Pesa is primarily mobile-driven, we’ll prioritize a mobile-first approach, but design it as a Progressive Web App (PWA) to cover all bases:

## Why PWA?

Works offline (caches receipts).

Installable on Android/iPhones like a native app.

Easier to maintain than separate iOS/Android codebases.

## Set Up Angular PWA

installed using: ng add @angular/pwa

## auth component is the launch screen

const routes: Routes = [
{path:'',component:AuthComponent}
];

-Set Up App Component (app.component.html):
Replace the default content with <router-outlet> to render routed components:

<!-- app.component.html -->

<router-outlet></router-outlet>

## auth app default container

Our default .container class is a responsive, fixed-width container, meaning its max-width changes at each breakpoint.
