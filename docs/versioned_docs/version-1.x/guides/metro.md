---
sidebar_position: 4
---

# Metro configuration updating

## Initial Configuration

In order to see which files should be loaded on initial start of app you can use helper utility (use this code in `App.js`):

```diff
+import { investigate } from 'react-native-bundle-splitter/dist/utils';

+console.log(`module.exports = ${JSON.stringify(investigate().loaded.sort())};`);
```

Then grab this text and put it in a file named `packager/modules.ios.js` (if you are running your app on iOS platform) or to `packager/modules.android.js` (if you run Android app respectively).

## Metro Configuration

Then edit your `metro.config.js` as shown below:

```js
const resolve = require('path').resolve;
const fs = require('fs');

// Update the following line if the root folder of your app is somewhere else.
const ROOT_FOLDER = resolve(__dirname, '.');

const config = {
  transformer: {
    getTransformOptions: (_, { platform }) => {
      let modulePaths = [];
      const moduleMap = {};

      if (platform === 'android') {
        modulePaths = require('./packager/modules.android');
      } else {
        modulePaths = require('./packager/modules.ios');
      }

      modulePaths.forEach(path => {
        if (fs.existsSync(path)) {
          moduleMap[resolve(path)] = true;
        }
      });

      return {
        preloadedModules: moduleMap,
        transform: {
          inlineRequires: {
            // `blacklist` for RN < 0.64
            blockList: moduleMap,
          },
        },
      };
    },
  },
  projectRoot: ROOT_FOLDER,
};

module.exports = config;
```