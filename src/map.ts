import { mapLoadable } from './bundler';

const cache = {} as any;

export const isCached = (componentName: string) => !!cache[componentName];

export const getComponent = (componentName: string) => {
    if (!isCached(componentName)) {
        const { require, ...rest } = mapLoadable[componentName];
        const component = require();
        cache[componentName] = {
            ...rest,
            component,
        };

        return cache[componentName];
    }

    return cache[componentName];
};