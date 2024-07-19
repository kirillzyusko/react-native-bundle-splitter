---
sidebar_position: 3
---

# Basic usage

This library contains pretty minimalistic API. And we will look on this a little bit later.
Let's assume we have next folder structure

    .
    ├── ...
    ├── Login                   # Folder with your screen
    │   ├── View.jsx            # Your presentational component
    │   ├── styles.ts           # Your styles for the component
    │   └── index.ts            # Your entry point to the screen
    └── ...

And your `index.ts` file looks like this:

```js
import View from './View';

export default View;
```

You can easily rewrite it with this library!

```js
import { register } from 'react-native-bundle-splitter';

export default register({ loader: () => import('./View') });
```

That's all! You can reload your application to see the results and guarantee this changes will not break anything.

:::tip
If you are using TypeScript in your project, then you may want to specify `Props` for your lazily loaded component. You can do it in this way:

```ts
import { register } from 'react-native-bundle-splitter';
import type {Props} from './types';

export default register<Props>({ loader: () => import('./View') });
```
:::

:::caution Avoid direct references to lazy-loaded file
Please, be sure, that you have such `index.ts` file. This library works only in case if you don't have any `import` statements which refers to your file. In other words: be sure that you do **NOT** import this file (`View`) from anywhere in your code.
:::

To assure, that you are doing everything in correct way this library provides a way for checking the performance.

In order to capture your metrics you should change your `App.js` file:

```diff
import React, { Fragment, PureComponent } from 'react';
...
+import { investigate } from 'react-native-bundle-splitter/dist/utils';

+console.log('Bundle Info: ', investigate());

class App extends PureComponent {
...
}
```

Usually your output from log will look like `Bundle Info: { loaded: 2731, waiting: 141 }`. Such way allows to understand is your changes make sense or not. After adding new screen to this library count of loaded files should be decreasing. Of course, ideal way is when you load as minimum modules as you can. For example only one page with login. In this case your startup time will be almost the same as just created application. And splash screen will not take a lot of time.
But it depends absolutely on you and yours architecture solutions. Feel free to play around this library and find suitable way for separating your files.
