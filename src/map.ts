import { mapLoadable } from './bundler';

const cache = {} as any;

export const isCached = (componentName: string) => !!cache[componentName];

const DEPRECATED_API_MESSAGE = "You are using a deprecated API that will be removed in a future releases. Please consider using `loader` instead of `require`";

export const getComponent = async (name: string) => {
    if (!isCached(name)) {
        const { require: load, loader, ...rest } = mapLoadable[name];
        let component = null;

        if (loader) {
            component = await loader();
        } else if (load) {
            console.warn(DEPRECATED_API_MESSAGE);
            component = load();
        }

        cache[name] = {
            ...rest,
            // @ts-ignore
            component: component[rest.extract],
        };
    }

    return cache[name];
};

export const getComponentFromCache = (name: string) => cache[name];