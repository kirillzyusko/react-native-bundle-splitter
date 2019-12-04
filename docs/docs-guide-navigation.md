---
id: navigation
title: Navigation libraries integration
sidebar_label: Navigation libraries integration
---

As was mentioned in the description of this library - you can easily split your bundle by navigation routes. And this library may be easily integrated with almost all navigation solutions. in this chapter we will have a look on the most popular solutions for navigation: [react-navigation](https://reactnavigation.org/) and [react-native-navigation](https://wix.github.io/react-native-navigation/#/)

Let's consider basic example with two screens. Let's assume we have the next application structure:

## Basic architecture

```jsx
// home.ts
import React from 'react';
import { Button, View, Text } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}
```

```jsx
// details.ts
import React from 'react';
import { Button, View, Text } from 'react-native';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
```

## React Navigation integration

Your App container will be the same and there is no any changes.

```jsx
// App.ts
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { AppNavigator } from './navigator';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
```

All changes will be only in route declaration.

### Before

```js
// navigator.ts
import { createStackNavigator } from 'react-navigation';

import DetailsScreen from './details';
import HomeScreen from './home';

export const AppNavigator = createStackNavigator(
  {
    'Home': HomeScreen,
    'Details': DetailsScreen
  },
  {
    initialRouteName: 'Home'
  }
);
```

### After

```js
// navigator.ts
import { createStackNavigator } from 'react-navigation';
import { register } from 'react-native-bundle-splitter';

export const AppNavigator = createStackNavigator(
  {
    'Home': register({ require: () => require('./home') }),
    'Details': register({ require: () => require('./details') })
  },
  {
    initialRouteName: 'Home'
  }
);

```

## React Native Navigation Integration