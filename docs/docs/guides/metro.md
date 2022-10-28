---
sidebar_position: 4
---

# Metro configuration updating

On this stage we are gathering info about which modules will be included in "startup" bundle. And we are sending this information to metro-bundler, so this tool is aware about that.

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

Using info from `packager` folder `metro-bundler` will be aware of the fact, which modules should be included in "startup" bundle, and which modules can de dynamically loaded during runtime of application.

:::tip Try to copy output several times
Once you've added content in `packager` folder and changed `metro` configuration - I highly recommend you to restart `metro` and copy/paster output from `investigate` function into `packager` content once again.

Most likely you will get different output and it's quite reasonable, since you started using ram bundles and now your app starts to load modules only which are really needed for the startup.

I recommend to repeat this operation several times (restart `metro`, copying/pasting new content into `packager` folder), until the output will be constant.
:::

:::info New cycle dependencies
It's fine if you start receiving warnings, that cycle dependencies were detected. Since you are loading modules lazily - bundler can not compute all dependencies tree in advance and build it in optimized way, so you will have to resolve it yourself manually and break cycle dependencies.
:::