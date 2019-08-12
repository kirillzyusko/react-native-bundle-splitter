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

export const register = (component: PreLoadable) => {
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

const component = (name: string) => new Promise((resolve, reject) => {
    try {
        if (isCached(name)) {
            resolve();
        } else {
            getComponent(name);
            resolve();
        }
    } catch (e) {
        reject(e);
    }
});

const group = (name: string) => {
    const components = Object.keys(mapLoadable).filter((componentName) => mapLoadable[componentName].group === name);

    return Promise.all(components.map((name) => component(name)))
};

export const preload = () => ({
    component,
    group
});

export {
    isCached
}