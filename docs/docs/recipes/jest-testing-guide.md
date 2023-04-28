---
sidebar_position: 3
---

# Jest testing guide

This library doesn't require any mocks. However unit tests are running in `Node.js` runtime and dynamic import statement doesn't work out-of-box. To make your tests running again you'll need to add `dynamic-import-node` plugin for `test` environment and modify your `babel.config.js` or `.babelrc` files accordingly.

## Installing new babel dependency

First of all you'll need to install `babel-plugin-dynamic-import-node` to `devDependencies`.

```bash
yarn add babel-plugin-dynamic-import-node --dev
# or
# npm install babel-plugin-dynamic-import-node --save-dev
```

## Add plugin to babel config

If you are using `babel.config.js` format, then you can add conditional statement to include `dynamic-import-node` plugin only for test environment.

```ts
// The plugin was added because jest can't use dynamic imports and was changing the imports and
// final module had following shape { __esModule: true, default: RealModule }.
// So, react-native-bundle-splitter can't resolve this import format.
if (process.env.NODE_ENV === "test") {
  config.plugins.push("dynamic-import-node");
}
```

If you are using `JSON` format (i. e. `.babelrc`), then you'll need to add plugin under `env.test` key.

```json
{
    "presets": ...
    "plugins": [
        ...
    ],
    "env": {
        "test": {
            "plugins": ["dynamic-import-node"]
        }
    }
}
```
