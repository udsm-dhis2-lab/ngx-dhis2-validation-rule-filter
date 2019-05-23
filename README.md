# Dhis2 Validation Rule Group Filter Library

[![Build Status](https://travis-ci.org/interactive-apps/ngx-dhis2-validation-rule-filter.svg?branch=master)](https://travis-ci.org/interactive-apps/ngx-dhis2-validation-rule-filter)
[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/interactive-apps/ngx-dhis2-validation-rule-filter/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage)](https://codeclimate.com/github/interactive-apps/ngx-dhis2-validation-rule-filter/test_coverage)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Gitter chat](https://badges.gitter.im/interactive-apps/gitter.png)](https://gitter.im/interactive-apps/community)
![GitHub](https://img.shields.io/github/license/interactive-apps/ngx-dhis2-validation-rule-filter.svg)
[![commitizen on stackoverflow](https://img.shields.io/badge/stackoverflow-community-orange.svg?longCache=true&style=flat-square&logo=stackoverflow)](https://stackoverflow.com/tags/dhis-2) [![Greenkeeper badge](https://badges.greenkeeper.io/interactive-apps/ngx-dhis2-validation-rule-filter.svg)](https://greenkeeper.io/)
![npm](https://img.shields.io/npm/v/@iapps/ngx-dhis2-validation-rule-group-filter.svg)
![GitHub All Releases](https://img.shields.io/github/downloads/interactive-apps/ngx-dhis2-validation-rule-filter/total.svg)
![GitHub issues](https://img.shields.io/github/issues/interactive-apps/ngx-dhis2-validation-rule-filter.svg)
![GitHub closed issues](https://img.shields.io/github/issues-closed/interactive-apps/ngx-dhis2-validation-rule-filter.svg)
![GitHub package.json version](https://img.shields.io/github/package-json/v/interactive-apps/ngx-dhis2-validation-rule-filter.svg)
## Introduction

Dhis2 Validation Rule Group(DVRG) is a user interface component library for developing [DHIS2](http://www.dhis2.org/) applications. DHIS2 Team from UDSM uses and maintain this component to ensure visual and usability consistency where it is used in the process of developing different DHIS2 web application.

## Features
- Fetching all the validation rules group from the [DHIS2](http://www.dhis2.org/) Instance where the you have installed the Web app you are developing and use this library as part of it.
- Give support to use to select the validation rule group available withing the instance and proceed with the analysis process.
- Give support to De-select the validation rule group if it wrong selection.
- It give support to select and de-select all the selection i.e validation rule group all at once.

## Quickstart Guide

### Prerequisite Requirements
Install the following dependencies withing your project before starting using the following library.

 - NgRx Store v7.4.0 or Higher- [@ngrx/store](https://www.npmjs.com/package/@ngrx/store)
 - NgRx Effects v7.4.0 or Higher- [@ngrx/effects](https://www.npmjs.com/package/@ngrx/effects)
- DHIS2 Http Client library
 v2.0.2 or Higher - [@hisptz/ngx-dhis2-http-client](https://www.npmjs.com/package/@ngrx/effects)
- RxJS: Reactive Extensions For JavaScript v6.5.2 or Higher - [rxjs](https://www.npmjs.com/package/rxjs)
- Dhis2 Validation Rule Group Filter Library
 v1.0.0-alpha.4 or Higher - [@iapps/ngx-dhis2-validation-rule-group-filter
](@iapps/ngx-dhis2-validation-rule-group-filter
)

### Installation Commands
    npm i @ngrx/store@7.4.0

    npm i @ngrx/effects@7.4.0

    npm i rxjs@6.5.2

    npm i --save lodash@4.17.11

    npm i @hisptz/ngx-dhis2-http-client@2.0.2

    npm i @iapps/ngx-dhis2-validation-rule-group-filter@1.0.0-alpha.5


### Installation Procedure
Import **StoreModule**, **EffectsModule** and **HttpClientModule** to the appModule.ts. Below is an example of configuration for a fresh project, but if you have already done installation based on your configuration the follow all along to see what is need to be added to make installation successfully

    import { StoreModule } from '@ngrx/store';
    import { EffectsModule } from '@ngrx/effects';
    import { HttpClientModule } from '@angular/common/http';
    import { NgxDhis2ValidationRuleFilterModule } from '@iapps/ngx-dhis2-validation-rule-group-filter';

    @NgModule({
        declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        HttpClientModule,
        NgxDhis2ValidationRuleFilterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }

### How to use
After installation you can use the following tags to start using it in your project.

    <lib-ngx-dhis2-validation-rule-
        [dataSelection]='dataSelections' 
        (update)="onUpdateValidationRule($event)"
        (close)="onUpdateValidationRule($event)">
    <lib-ngx-dhis2-validation-rule-filter>


## Versioning
> Current version of this build of **Dhis2 Validation Rule Group Filter Library**

![GitHub package.json version](https://img.shields.io/github/package-json/v/interactive-apps/ngx-dhis2-validation-rule-filter.svg)

## Licence
![GitHub](https://img.shields.io/github/license/interactive-apps/ngx-dhis2-validation-rule-filter.svg)

## Information

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

