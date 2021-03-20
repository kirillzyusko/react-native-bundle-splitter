import optimized from './optimized';
import { mapLoadable } from './bundler';
import { Component, EnhancedPreLoadable, PreLoadable } from './interface';
import { getComponent, isCached } from './map';

const defaultPreLoadable: EnhancedPreLoadable = {
    cached: true,
    placeholder: null,
    extract: 'default',
};

let i = 0;

const register = (component: PreLoadable & Partial<EnhancedPreLoadable>) => {
    const enhancedComponent: Component = {
        name: `Component${i++}`,
        ...defaultPreLoadable,
        ...component
    };
    const { name } = enhancedComponent;

    if (mapLoadable[name] !== undefined) {
        throw new Error(`You try to add new component with already existing name: ${name}`);
    }

    mapLoadable[name] = enhancedComponent;

    return optimized(name);
};

const component = (name: string) => getComponent(name);

const group = (name: string) => {
    const components = Object.keys(mapLoadable).filter((componentName) => mapLoadable[componentName].group === name);

    return Promise.all(components.map((name) => component(name)))
};

const preloadAPI = {
    component,
    group
};

const preload = () => preloadAPI;

// API
export {
    register,
    preload,
    isCached
}
