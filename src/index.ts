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

const register = <P extends {}>(component: PreLoadable & Partial<EnhancedPreLoadable>) => {
    const enhancedComponent: Component = {
        name: `Component${i++}`,
        ...defaultPreLoadable,
        ...component
    };
    const { name } = enhancedComponent;

    if (mapLoadable[name] !== undefined) {
        console.warn(`You are trying to add a new component with already existing name: ${name}. If you see this warning after fast/hot reloading and you use 'register' function in Navigator without separate 'index' files - it's fine. In other cases it may indicate an issue, since by default it will overwrite the data and screen will not be cached. See https://github.com/kirillzyusko/react-native-bundle-splitter/issues/29 for more details.`);
    }

    mapLoadable[name] = enhancedComponent;

    return optimized<P>(name);
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
