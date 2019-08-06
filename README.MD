## Description

Library, which provide easy way to split your bundle.

#### Video

#### Context and motivation

## Docs

## Setup
enabling RAM bundle format for native optimizations and so on...

## Usage

Example with react-navigation

#### Before

```typescript jsx
// navigator.ts
import { createStackNavigator } from 'react-navigation';

import DetailsScreen from './details';
import HomeScreen from './home';

export const AppNavigator = createStackNavigator(
  {
    'home': HomeScreen,
    'details': DetailsScreen
  },
  {
    initialRouteName: 'home'
  }
);
```

#### After

```typescript jsx
// navigator.ts
import { createStackNavigator } from 'react-navigation';
import { register } from 'react-native-bundle-splitter';

export const AppNavigator = createStackNavigator(
  {
    'home': register({ name: 'home', require: () => require('./home') }),
    'details': register({ name: 'details', require: () => require('./details') })
  },
  {
    initialRouteName: 'home'
  }
);

```
## API

- register(component: PreLoadable): ReactComponent
- preload(componentName: string): Promise<void>
- use(componentName: string): ReactComponent
- isCached(componentName: string): boolean
