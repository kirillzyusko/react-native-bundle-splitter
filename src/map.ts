import { mapLoadable } from './bundler';

const cache = {} as any;

export const isCached = (componentName: string) => !!cache[componentName];

export const getComponent = (name: string) => {
    if (!isCached(name)) {
        const { require, ...rest } = mapLoadable[name];
        // @ts-ignore
        const component = require()[mapLoadable[name].extract];
        cache[name] = {
            ...rest,
            component,
        };

        return cache[name];
    }

    return cache[name];
};