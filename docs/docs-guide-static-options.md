---
id: static-options
title: Static options
sidebar_label: Static options
---

Sometimes you need to specify `static` members for your Presentation class.

```ecmascript 6
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  /* render function, etc */
}
```

Unfortunately you can't just wrap your screen with `register` function if you are using any `static` class members in your function.

In order to make it working you need to pass all your `static` to register component you can do it in the following way:

```ecmascript 6
import { register } from 'react-native-bundle-splitter';

export default register({ 
    require: () => require('./View'), 
    static: { 
        navigationOptions: { 
            title: 'Home' 
        } 
    } 
});
```

And `navigationOptions` already will not use from your presentational class, so you can remove it.

```ecmascript 6
class HomeScreen extends React.Component {
  // navigationOptions are removed - now tey are in register function

  /* render function, etc */
}
```