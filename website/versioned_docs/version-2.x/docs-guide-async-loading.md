---
id: version-2.x-async-loading
title: Async loading
sidebar_label: Async loading
original_id: async-loading
---

If you did not load all the screens at the stage of opening the application, then, of course, you need to load them after (for example, if the user logs in and you need to redirect him to another screen, which has not yet been loaded).

This library will load it automatically and cache, if it's needed. However, it can lead to application freezes or the appearance of “white blinks”.

To avoid this, you can load the necessary screens asynchronously.

## One specific screen

More often you need this library when you have any async operations, between navigating. Let's have a look at the next example:

```js
// home.ts
import React from 'react';
import { Button, View, Text } from 'react-native';

const REGISTERED = 'REGISTERED';

const doLoginRequest = (): Promise<{ status: string }> => new Promise((resolve) => {
    setTimeout(() => resolve({ status: REGISTERED }), 3000);
})

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login</Text>
        <Button
          title="Go to Details"
          onPress={this.doLogin}
        />
      </View>
    );
  }
  
  doLogin = async () => {
      const { status } = await doLoginRequest();
      if (status === REGISTERED) {
          this.props.navigation.navigate('Dashboard');
      }
  }
}
```

You can rewrite this code to this

```js
import { preload } from 'react-native-bundle-splitter';

// ...
doLogin = async () => {
  const [{ status }] = await Promise.all([
    doLoginRequest(),
    preload().component('Dashboard')
  ]);
  if (status === REGISTERED) {
    this.props.navigation.navigate('Dashboard');
  }
}
// ...
```

In this case you can be sure, that your component will be loaded before usage and you can make transition to screen in usual way. But in order to do this you need to wrap your `Dashboard` component to `register` function:

```js
// dashboard/index.ts
import { register } from 'react-native-bundle-splitter';

export default register({ loader: () => import('./View'), name: 'Dashboard' });
```

## Group of screens

Of course, applications do not consist of one screen. Therefore, most likely, you will need to load groups of such screens.

Assume you still have `HomeScreen`. But if login is successful, then you need load `Dashboard`, `Settings` and `Profile`.

You can do it in the following way:

```javascript
// home.ts
import { preload } from 'react-native-bundle-splitter';

// ...
doLogin = async () => {
  const [{ status }] = await Promise.all([
    doLoginRequest(),
    preload().group('LOGGED')
  ]);
  if (status === REGISTERED) {
    this.props.navigation.navigate('Dashboard');
  }
}
// ...
```

And for screens:

```js
// dashboard/index.ts
import { register } from 'react-native-bundle-splitter';

export default register({ loader: () => import('./View'), group: 'LOGGED' });
```

```js
// settings/index.ts
import { register } from 'react-native-bundle-splitter';

export default register({ loader: () => import('./View'), group: 'LOGGED' });
```

```js
// profile/index.ts
import { register } from 'react-native-bundle-splitter';

export default register({ loader: () => import('./View'), group: 'LOGGED' });
```

So, what are you doing here? Instead of specifying `name` and calling `preload().component()` you specify `group` for screens, and call `preload().group()`.

## Live example

### Without pre-loading

Click on "Go to details". You will see how app is freezing. However after routes get loaded, they will be cached and navigation to them will be instant (click on "Back" icon and then again on "Go to details". Have you seen the freeze again?)

<div data-snack-id="@kiryl.ziusko/2b3c05" data-snack-platform="web" data-snack-preview="true" data-snack-theme="light" style="overflow:hidden;background:#fafafa;border:1px solid rgba(0,0,0,.08);border-radius:4px;height:505px;width:100%"></div><script async src="https://snack.expo.io/embed.js"></script>

### With pre-loading

### Using `placeholder` option

## Summary

This library does not do any magic. It simply allows you to transfer the time (which is required to load the bundle at the start of the application) to runtime execution.

This way you can load additional parts of the application when doing other asynchronous operations (such as HTTP calls, reading data from storage, etc.) and reduce initial load times.