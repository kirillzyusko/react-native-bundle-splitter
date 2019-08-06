// @ts-ignore
import React, { Component, ReactNode } from 'react';
import { getComponent, isCached } from './map';
import { mapLoadable } from './bundler';

type Props = {};
type State = {
  needsExpensive: boolean;
};

// @ts-ignore
const optimized = (screenName: string) => {
  class OptimizedComponent extends Component<Props, State> {
    component: ReactNode = null;
    placeholder: ReactNode = mapLoadable[screenName].placeholder;

    constructor(props: Props) {
      super(props);
      const cached = isCached(screenName);

      if (cached) {
        const data = getComponent(screenName);
        this.component = data.component;
      }

      // @ts-ignore
      this.state = {
        needsExpensive: cached
      };
    }

    componentDidMount() {
      if (this.component === null) {
        const data = getComponent(screenName);
        this.component = data.component;

        // @ts-ignore
        this.setState(() => ({
            needsExpensive: true,
        }));
      }
    }

    render() {
      const Component = this.component;
      const Placeholder = this.placeholder;
      const PlaceholderComponent = Placeholder ? <Placeholder /> : Placeholder;

      // @ts-ignore
      return this.state.needsExpensive ? <Component {...this.props} /> : PlaceholderComponent;
    }
  }

  const registerData = mapLoadable[screenName];

  if (registerData.static) {
    Object.keys(registerData.static).forEach((key) => {
      // @ts-ignore
      OptimizedComponent[key] = registerData.static[key];
    });
  }

  return OptimizedComponent;
};

export default optimized;