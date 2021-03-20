# Changelog

# 2.0.0

## Breaking changes

This release contains no breaking changes, but it does include some important changes, including:

- proposed to use `loader` instead of `require` (however you can still use `require` - this version has backward compatibility);
- `investigate` returns only initially loaded modules;
- screen gets mounted in `async` way;

## Added

- support for `web` platform (with `react-native-web` usage);
- support for `macOS` platform;
- support for `windows` platform;

## Improved

- types compatibility;
- internal naming convention;

## Fixed
 - `requires a peer of react-native@^0.59.1 but none is installed. You must install peer dependencies yourself.` warning;

# 1.0.9

## Fixed

- extending types for `register` method ([PR](https://github.com/kirillzyusko/react-native-bundle-splitter/pull/6))

# 1.0.8

## Improved

- types compatibility improved
- performance tuning (using `PureComponent` instead of `Component`)

# 1.0.7

## Fixed

- Readme info updated (corrected links to contributing guide and documentation). See [issue](https://github.com/kirillzyusko/react-native-bundle-splitter/issues/3)

# 1.0.6

## Fixed

- Changed documentation URL

# 1.0.5

## Fixed

- Fixed a bug [TypeError: require is not a function](https://github.com/kirillzyusko/react-native-bundle-splitter/issues/1)

# 1.0.4

## Improved

- types compatibility improved
- performance tuning

# 1.0.3

## Fixed

- readme updated
- `package.json` issues fixed

# 1.0.2

## Fixed

- Fixed types compatibility issue

# 1.0.1

## Removed

- removed `use` method from API

## Added

- implemented `preload` feature
- added utils for tracking `loaded` and `waiting` modules
- published in npm

# 1.0.0

This is the first release. It was created initially for testing in a internal project.