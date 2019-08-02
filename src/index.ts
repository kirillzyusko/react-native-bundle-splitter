import optimized from './Optimized';
import { mapLoadable } from './bundler';
import { PreLoadable } from './interface';
import { isCached } from './map';

export const register = (component: PreLoadable) => {
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

export {
  isCached
}