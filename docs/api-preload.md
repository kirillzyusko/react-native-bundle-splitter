---
id: preload
title: Preload
sidebar_label: preload
---


### `preload` - as an optimization, you can also decide to preload a component before it gets rendered.

You can select what you'd like to load:
- `preload().component(componentName: string)` => `Promise`

  - `componentName` - name of your component, that was registered via `register` function
  
- `preload().group(groupName: string)` => `Promise`

  - `groupName` - name of your group, that was specified in `register` function
