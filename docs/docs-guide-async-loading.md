---
id: async-loading
title: Async loading
sidebar_label: Async loading
---

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
    preload().component('Dashboard'),
    doLoginRequest()
  ]);
  if (status === REGISTERED) {
    this.props.navigation.navigate('Dashboard');
  }
}
// ...
```

In this case you can be sure, that your component will be loaded before usage and you can make transition to screen in usual way. But in order to do this you need to wrap your `Dashboard` component to `register` function:

```js
import { register } from 'react-native-bundle-splitter';

export default register({ require: () => require('./View'), name: 'Dashboard' });
```