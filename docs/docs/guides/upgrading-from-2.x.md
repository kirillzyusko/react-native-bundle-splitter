---
sidebar_position: 6
---

# Upgrading from 2.x

## Breaking changes

Fortunately, this release is fully backward compatible with the `2.x.x` release. The only thing is that minimal supported version of React Native was raised to `0.60.0`.

## Key changes

- the library now uses `Suspense` component internally, so in future it'll be easier to adopt concurrent react features.
- internally the cache layer was migrated from `Object`s to `Map`s, which in turn should improve the performance a little bit.

## Migration

I believe that for all projects that are using this library, there will be no changes and you can simply bump the version of the library in `package.json` to `3.x.x`.

If you use `react-native` version `0.59.x` then you should stick to `2.x.x` version of the library.
