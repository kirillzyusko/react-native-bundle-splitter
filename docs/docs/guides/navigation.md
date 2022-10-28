---
sidebar_position: 1
---

# Navigation libraries integration

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
          onPress={this.goToDetails}
        />
      </View>
    );
  }
  
  private goToDetails = () => {
    // call specific function to perform navigation
    // in case of `react-navigation`: this.props.navigation.navigate('Details')
    // see routes definition below for each library
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
          title="Go to Home... again"
          onPress={this.goToHome}
        />
      </View>
    );
  }
  
   private goToHome = () => {
     // call specific function to perform navigation
     // in case of `react-navigation`: this.props.navigation.navigate('Home')
     // see routes definition below for each library
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

Similarly to `react-navigation` you need only change declaration of your routes - just wrap all screens, that you want to postpone for loading in `register` function.

### Before

```typescript
import { Navigation } from 'react-native-navigation';

import DetailsScreen from './details';
import HomeScreen from './home';

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Details', () => DetailsScreen);
```

### After

```typescript
import { Navigation } from 'react-native-navigation';
import { register } from 'react-native-bundle-splitter';

const DetailsScreen = register({ require: () => require('./details') });
const HomeScreen = register({ require: () => require('./home') });

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Details', () => DetailsScreen);
```

## Summary

As you saw in both cases (integration with `react-navigation` and `react-native-navigation`) you just need to wrap your screens, that you want to postpone for loading, in `register` function.

:::tip
As you can see in this section we used `register` function directly in the navigation declaration, unlike [Basic usage](./basic-usage), where we used `register` in the `index` file. You can choose which way is more preferable for you: use this HOC in the routes declaration or in `index` files. No need to use it twice.
:::