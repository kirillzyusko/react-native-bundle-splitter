import optimized from './optimized';
import { mapLoadable } from './bundler';
import {Component, EnhancedPreLoadable, PreLoadable} from './interface';
import { isCached } from './map';

const defaultPreLoadable: EnhancedPreLoadable = {
    cached: true,
    placeholder: null,
    extract: 'default',
};

export const register = (component: PreLoadable) => {
    const enhancedComponent: Component = {
        ...defaultPreLoadable,
        ...component
    };
    const { name } = enhancedComponent;

    if (mapLoadable[name] !== undefined) {
        throw new Error(`You try to add new component with already existing name: ${name}`);
    }

    mapLoadable[name] = enhancedComponent;
    // do we need to do this?
    return use(name);
};

// @ts-ignore
export const use = (componentName: string) => optimized(componentName);

export const preload = () => {
    // @ts-ignore
    return  new Promise.resolve('');
};

export {
  isCached
}