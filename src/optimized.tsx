import * as React from 'react';

import { getComponent, getComponentFromCache, isCached } from './map';
import { mapLoadable } from './bundler';

type Props<T> = T & {
  screenName: string;
};

const Suspender = React.forwardRef(function <T extends {}>({ screenName, ...rest }: Props<T>, ref: React.Ref<any>) {
  let OptimizedComponent = isCached(screenName) ? getComponentFromCache(screenName).component : null;

  if(!OptimizedComponent) {
    throw getComponent(screenName).then(({ component }) => {
      OptimizedComponent = component;
    });
  }

  return <OptimizedComponent ref={ref} {...rest} />;
})

const optimized = <T extends object>(screenName: string): React.ForwardRefExoticComponent<React.PropsWithoutRef<T> & React.RefAttributes<unknown>> => {
  return React.forwardRef((props: T, ref) => {
    const { placeholder } = mapLoadable[screenName];

    return (
    <React.Suspense fallback={placeholder}>
      <Suspender ref={ref} screenName={screenName} {...props} />
    </React.Suspense>
    );
  })
}

export default optimized;