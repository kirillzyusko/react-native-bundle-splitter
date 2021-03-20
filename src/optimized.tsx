import * as React from 'react';

import { getComponent, isCached, getComponentFromCache } from './map';
import { mapLoadable } from './bundler';

type Props = {};
type State = {
  isComponentAvailable: boolean;
};

const optimized = (screenName: string): any => {
  class OptimizedComponent extends React.PureComponent<Props, State> {
    private component: React.ElementType | null = null;
    private placeholder: React.ElementType | null = mapLoadable[screenName].placeholder;

    constructor(props: Props) {
      super(props);
      const cached = isCached(screenName);

      if (cached) {
        const { component } = getComponentFromCache(screenName);
        this.component = component;
      }

      this.state = {
        isComponentAvailable: cached
      };
    }

    public async componentDidMount(): Promise<void> {
      if (this.component === null) {
        const { component } = await getComponent(screenName);
        this.component = component;

        this.setState({ isComponentAvailable: true });
      }
    }

    public render(): React.ReactNode {
      const BundleComponent = this.component;
      const Placeholder = this.placeholder;
      const PlaceholderComponent = Placeholder ? <Placeholder /> : Placeholder;

      return this.state.isComponentAvailable && BundleComponent ?
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