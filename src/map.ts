import { mapLoadable } from './bundler';

const cache = {} as any;

export const isCached = (componentName: string) => !!cache[componentName];

export const getComponent = (name: string) => {
    if (!isCached(name)) {
        const { require: load, ...rest } = mapLoadable[name];

        // @ts-ignore
        const component = load()[rest.extract];
        cache[name] = {
            ...rest,
            component,
        };
    }

    return cache[name];
};