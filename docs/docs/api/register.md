---
sidebar_position: 1
---

# register

### `register` - allow you wrap your component/screen into separate bundle

`register<P>(params: Object)` - return react component (`P` - component props type, use only in TypeScript projects).

Params:
- `name` (optional) - you need to specify this param only if you will call `preload` function for this screen
- `require` - function, that return your presentation component. Example: `() => require('./Presentational.js')` (**DEPRECATED - will be removed in future releases. Use `loader` instead**)
- `loader` - function, that return your presentation component. Example: `() => import('./View')`
- `group` (optional) - You need specify it, only if you need to `preload` entire group of screens
- `static` (optional) - all static members from your presentational component.
- `cached` (optional) - Default: `true`. Set to `false` if you don't need cache your screens. _**Warning:**_ it may decrease performance of your application.
- `placeholder` (optional) - React component which will display during screen loading. Should specify if you don't use `preload` for this screen.