---
id: version-1.x-register
title: register
sidebar_label: register
original_id: register
---


### `register` - allow you wrap your component/screen into separate bundle

`register(params: Object)` - return react component 

- `name` (optional) - you need to specify this param only if you will call `preload` function for this screen
- `require` - function, that return your presentation component. Example: `() => require('./Presntational.js'')`
- `group` (optional) - You need specify it, only if you need to `preload` entire group of screens
- `static` (optional) - all static members from your presentational class.
- `cached` (optional) - Default: `true`. Set to `false` if you don't need cache your screens. _**Warning:**_ it may decrease performance of your application.
- `placeholder` (optional) - React component which will display during screen loading. Should specify if you don't use `preload` for this screen.