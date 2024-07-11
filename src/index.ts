import optimized from './optimized';
import { mapLoadable } from './bundler';
import { Component, EnhancedPreLoadable, PreLoadable } from './interface';
import { cache, getComponent } from './map';

const defaultPreLoadable: EnhancedPreLoadable = {
    cached: false,
    placeholder: null,
    extract: 'default',
};

let i = 0;

const isCached = cache.has;

const register = <P extends {}>(component: PreLoadable & Partial<EnhancedPreLoadable>) => {
    const name = `Component${i++}`;
    const enhancedComponent: Component = {
        name,
        ...defaultPreLoadable,
        ...component
    };

    if (mapLoadable.get(name) !== undefined) {
        console.warn(`You are trying to add a new component with already existing name: ${name}. If you see this warning after fast/hot reloading and you use 'register' function in Navigator without separate 'index' files - it's fine. In other cases it may indicate an issue, since by default it will overwrite the data and screen will not be cached. See https://github.com/kirillzyusko/react-native-bundle-splitter/issues/29 for more details.`);
    }

    mapLoadable.set(name, enhancedComponent);

    return optimized<P>(name);
};

const component = (name: string) => getComponent(name);

const group = (groupName: string) => {
    const components: ReturnType<(typeof getComponent)>[] = [];
    mapLoadable.forEach(({ group, name }) => {
        if (group === groupName) {
            components.push(component(name))
        }
    });

    return Promise.all(components)
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
