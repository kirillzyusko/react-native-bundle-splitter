---
id: metro
title: Metro configuration updating
sidebar_label: Metro configuration updating
---

## Initial Configuration

In order to see what is the files should be in primary file you can use helper utility (use this code in `App.js`):

```diff
+import { investigate } from 'react-native-bundle-splitter/dist/utils';

+console.log(`module.exports = ${JSON.stringify(investigate().loaded.sort())};`);
```

Then grab this text and put it in a file named `packager/modules.js`

## Metro Configuration

Then edit your `metro.config.js` as shown below:
```js
const modulePaths = require('./packager/modules');
const resolve = require('path').resolve;
const fs = require('fs');

// Update the following line if the root folder of your app is somewhere else.
const ROOT_FOLDER = resolve(__dirname, '..');

const config = {
  transformer: {
    getTransformOptions: () => {
      const moduleMap = {};
      modulePaths.forEach(path => {
        if (fs.existsSync(path)) {
          moduleMap[resolve(path)] = true;
        }
      });
      return {
        preloadedModules: moduleMap,
        transform: { inlineRequires: { blacklist: moduleMap } },
      };
    },
  },
  projectRoot:ROOT_FOLDER,
};

module.exports = config;
```