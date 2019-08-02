## Description

#### Video

#### Context and motivation

## Usage

Example with react-navigation

#### Core

```typescript jsx
// screens.ts
export const screens = {
    home: 'Home',
    details: 'Details'
};
```

```typescript jsx
// home.ts
import React from 'react';
import { Button, View, Text } from 'react-native';
import { screens } from './screens';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate(screens.details)}
        />
      </View>
    );
  }
}
```

```typescript jsx
// details.ts
import React from 'react';
import { Button, View, Text } from 'react-native';
import { screens } from './screens';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate(screens.home)}
        />
      </View>
    );
  }
}
```

```typescript jsx
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

#### Before

```typescript jsx
// navigator.ts
import { createStackNavigator } from 'react-navigation';

import DetailsScreen from './details';
import HomeScreen from './home';

export const AppNavigator = createStackNavigator(
  {
    [screens.home]: HomeScreen,
    [screens.details]: DetailsScreen
  },
  {
    initialRouteName: screens.home
  }
);
```

#### After

```typescript jsx
// navigator.ts
import { createStackNavigator } from 'react-navigation';
import { register, use } from 'react-native-bundle-splitter';

register({ name: screens.home, require: () => require('./home') });
register({ name: screens.details, require: () => require('./details') });

export const AppNavigator = createStackNavigator(
  {
    [screens.home]: use(screens.home),
    [screens.details]: use(screens.details)
  },
  {
    initialRouteName: screens.home
  }
);

```
## API

- register(component: { name: string, require: () => object, static: object, priority: number, group: string }): void
- preload(componentName: string): Promise<void>
- use(componentName: string): ReactComponent
- isCached(componentName: string): boolean
