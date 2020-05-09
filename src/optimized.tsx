import * as React from 'react';

import { getComponent, isCached } from './map';
import { mapLoadable } from './bundler';

type Props = {};
type State = {
  needsExpensive: boolean;
};

const optimized = (screenName: string): any => {
  class OptimizedComponent extends React.PureComponent<Props, State> {
    private component: React.ElementType | null = null;
    private placeholder: React.ElementType | null = mapLoadable[screenName].placeholder;

    constructor(props: Props) {
      super(props);
      const cached = isCached(screenName);

      if (cached) {
        const { component } = getComponent(screenName);
        this.component = component;
      }

      this.state = {
        needsExpensive: cached
      };
    }

    public componentDidMount(): void {
      if (this.component === null) {
        const { component } = getComponent(screenName);
        this.component = component;

        this.setState({ needsExpensive: true });
      }
    }

    public render(): React.ReactNode {
      const BundleComponent = this.component;
      const Placeholder = this.placeholder;
      const PlaceholderComponent = Placeholder ? <Placeholder /> : Placeholder;

      return this.state.needsExpensive && BundleComponent ?
        <BundleComponent {...this.props} /> : PlaceholderComponent;
    }
  }

  const registerData = mapLoadable[screenName];

  if (registerData.static) {
    Object.keys(registerData.static).forEach((key: string) => {
      // @ts-ignore
      OptimizedComponent[key] = registerData.static[key];
    });
  }

  return OptimizedComponent;
};

export default optimized;