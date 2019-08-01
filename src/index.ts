import optimized from './Optimized';
import { mapLoadable } from './bundler';

type Preloadable = {
    name: string;
    require: () => ({});
    priority: number;
    group: string;
    static?: object;
};

export const register = (component: Preloadable) => {
    const { name } = component;

    if (mapLoadable[name] !== undefined) {
        throw new Error(`You try to add new component with already existing name: ${name}`);
    }

    mapLoadable[name] = component;
};

// @ts-ignore
export const use = (componentName: string) => optimized(componentName);

export const preload = () => {
    // @ts-ignore
    return  new Promise.resolve('');
};