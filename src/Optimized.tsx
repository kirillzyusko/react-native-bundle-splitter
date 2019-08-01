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

      // @ts-ignore
      return this.state.needsExpensive ? <Component {...this.props} /> : null;
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