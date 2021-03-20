---
id: version-2.x-enabling-ram-bundle
title: Enabling Ram Bundle
sidebar_label: Enabling Ram Bundle
original_id: enabling-ram-bundle
---


## RAM... What is it? About RAM Bundle format

### RAM Bundle format

[Metro](https://facebook.github.io/metro/) bundler for react-native offers special format - RAM (Random Access Memory). RAM bundle is a new format of React Native application packaging that helps to optimize load times of your app. 

You can read [more](https://facebook.github.io/metro/docs/bundling) about this bundle format.

### Context and motivation

React Native is a still JS application. In the browser all your JavaScript and modules have to be bundled (combined, minified, and maybe even uglified) before deploying. As a result, you drastically reduce the number of files (usually down to one) along with the total size of the code you’re serving by removing all information not necessary for production, i.e., mercilessly rewriting function and variables names, deleting code comments, and so on.

The whole procedure stays pretty much the same when you’re developing a React Native app. It’s still (React-flavored) JavaScript you write there, right?

But here’s a problem: when your app grows, so does the bundle size, and let’s just say that React Native apps are usually more than a few kilobytes in size. The heavier your app bundle is, the more time it needs to be fully loaded into memory, parsed, and executed, before even showing you a splash screen!

However, the difference is that a React Native app is executed in a different environment — on your mobile device running Android or iOS (coming soon on Windows devices) rather than in your browser. This allows React Native to be smarter about what it loads to memory and when. And this is when RAM bundles come into play: they define a new bundling format that enables on-demand loading of individual app modules, resulting in a smoother user experience.

### Formats

The official way to bundle your React Native apps at the moment is using Metro Bundler, which currently supports the following bundling formats:

- **Plain**: Good old, pure JavaScript bundle. This is the default type that doesn’t offer any optimizations.

- **Indexed RAM Bundle**: This format defines a binary file with a header that can be used for quickly finding a specific module. For example, the header can tell us that module number 23 (all JavaScript modules in React Native apps are given numerical identifiers) can be found at offset 320 in the RAM bundle file, and has a length of 430 bytes. How does this help us? React Native runtime now doesn’t need to read the entire bundle file into memory, and can load specific modules only when they are needed (e.g., via inline requires).

- **File RAM Bundle**: With this approach, every module is stored in a separate file with the name `js-modules/${id}.js`, where `${id}` is the module’s ID. This format is used by default on Android devices but has the same purpose: to have fast access to individual modules in your bundle.

## Enabling RAM Bundle feature in your application

For enabling this format in your application you need to do pretty simple steps for each platform.

> *Note:* Although enabling RAM Bundle format is recommended for both platforms, you can only enable it for one if necessary.

### Android

Open `android/app/build.gradle` and edit your file in the following way.

```diff
project.ext.react = [
        entryFile              : "index.js",
+       bundleCommand          : "ram-bundle",
+       extraPackagerArgs      : ["--indexed-ram-bundle"]
    ...
```

> *Note:* You can choose between formats, since Android support both format (indexed and file). But since iOS support only `indexed` format, would be reasonable to keep both platform in consistent and use `indexed` format. But if you decided for some reasons to use `file` format, you don't need to add `extraPackagerArgs: ["--indexed-ram-bundle"]` line. By default android uses `file` format.

> *Note:* If you are trying to enable this feature with Hermes engine, you may faced with application crash. It's a known [issue](https://github.com/facebook/react-native/issues/25730). As a temporary solution you can don't activate this bundle format for Android, since Hermes is using similar [mechanism](https://github.com/facebook/react-native/issues/25730#issuecomment-514115115). 

### iOS

For enabling RAM format for iOS you need to open XCode, select the project, go to `Build Phases`, and edit phase `Bundle React Native code and images`. Before `../node_modules/react-native/scripts/react-native-xcode.sh` you need to add `BUNDLE_COMMAND="ram-bundle"`:

```diff
+export BUNDLE_COMMAND="ram-bundle"
 export NODE_BINARY=node
 ../node_modules/react-native/scripts/react-native-xcode.sh                                        
```

### macOS

Enabling `RAM Bundles` on macOS should be done exactly in the same way as for `iOS`

Just open macOS specific project and repeat the same steps.

### web

No extra steps for `web` as there is no such term as "RAM bundles". Webpack itself will be able to split your JS bundle into small parts and will load them as soon as they are needed.

## Summary

Basically you have completed native set up and now you are ready for using this library!

> *Advice*: To be sure, that your application isn't broken after all manipulations you can rebuild your application and see, that it works correctly.