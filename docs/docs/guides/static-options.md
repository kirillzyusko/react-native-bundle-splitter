---
sidebar_position: 2
---

# Static options

Sometimes you need to specify `static` members for your Presentation class.

```javascript
class HomeScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Home',
  };

  /* render function, etc */
}
```

Unfortunately you can't just wrap your screen with `register` function if you are using any `static` class members in your function.

In order to make it working you need to pass all your `static` to register component you can do it in the following way:

```ts
import { register } from 'react-native-bundle-splitter';

export default register({ 
    loader: () => import('./View'), 
    static: { 
        navigationOptions: { 
            title: 'Home' 
        } 
    } 
});
```

Of course, you can pass not only plain objects, but functions as well:

```ts
import { register } from 'react-native-bundle-splitter';

export default register({ 
    loader: () => import('./View'), 
    static: { 
        navigationOptions: ({ navigation }) => { 
            // all code from your component
            return {
                title: 'Home' 
            }
        } 
    } 
});
```

And `navigationOptions` already will not be used from your presentational class, so you can remove it.

```ts
class HomeScreen extends React.Component {
  // navigationOptions are removed - now they are in register function

  /* render function, etc */
}
```
