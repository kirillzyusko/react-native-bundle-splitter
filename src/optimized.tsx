import * as React from 'react';

import { cache, getComponent } from './map';
import { mapLoadable } from './bundler';

type Props<T> = T & {
  screenName: string;
};

const Suspender = React.forwardRef(function <T extends {}>({ screenName, ...rest }: Props<T>, ref: React.Ref<any>) {
  const isCached = cache.has(screenName);

  if(!isCached) {
    throw getComponent(screenName);
  }

 const { component: Component } = cache.get(screenName)!;

  return <Component ref={ref} {...rest} />;
})

const optimized = <T extends object>(screenName: string): React.ForwardRefExoticComponent<React.PropsWithoutRef<T> & React.RefAttributes<unknown>> => {
  return React.forwardRef((props: T, ref) => {
    const { placeholder } = mapLoadable.get(screenName) || {};

    return (
    <React.Suspense fallback={placeholder || null}>
      <Suspender ref={ref} screenName={screenName} {...props} />
    </React.Suspense>
    );
  })
}

export default optimized;