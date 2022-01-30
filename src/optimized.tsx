import * as React from 'react';

import { getComponent, isCached, getComponentFromCache } from './map';
import { mapLoadable } from './bundler';

type Props<T> = {
  forwardedRef: React.Ref<T> | null
};

type State = {
  isComponentAvailable: boolean;
};

const optimized = <T extends {}>(screenName: string): any => {
  class OptimizedComponent<T> extends React.PureComponent<Props<T>, State> {
    private component: React.ElementType | null = null;
    private placeholder: React.ElementType | null = mapLoadable[screenName].placeholder;

    constructor(props: Props<T>) {
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
      const { forwardedRef, ...rest } = this.props;
      const BundleComponent = this.component;
      const Placeholder = this.placeholder;
      const PlaceholderComponent = Placeholder ? <Placeholder /> : Placeholder;

      return this.state.isComponentAvailable && BundleComponent ?
        <BundleComponent ref={forwardedRef} {...rest} /> : PlaceholderComponent;
    }
  }

  const registerData = mapLoadable[screenName];

  if (registerData.static) {
    Object.keys(registerData.static).forEach((key: string) => {
      // @ts-ignore
      OptimizedComponent[key] = registerData.static[key];
    });
  }

  return React.forwardRef((props: Props<T>, ref: React.Ref<T> | null) => {
    return <OptimizedComponent {...props} forwardedRef={ref} />;
  });
};

export default optimized;