import { mapLoadable } from './bundler';
import { RequireLoader, ImportLoader } from './interface';

const cache = {} as any;

export const isCached = (componentName: string) => !!cache[componentName];

const DEPRECATED_API_MESSAGE = "You are using a deprecated API that will be removed in a future releases. Please consider using `loader` instead of `require`";

// In react-native world call of `require` or `loader` will block thread (since it's sync operation)
// As a result if screen is not loaded yet and you trigger a navigation - app will freeze for a time,
// until screen is not loaded. That's why `setTimeout(..., 0)` code is used here. We simply call this
// function in next event loop iteration. Such approach will not block transition animations.
const nonBlockingLoader = (loader: RequireLoader | ImportLoader) => new Promise((resolve) => {
    let file = null;

    setTimeout(async () => {
        file = await loader();
        resolve(file);
    }, 0);
});

export const getComponent = async (name: string) => {
    if (!isCached(name)) {
        const { require: load, loader, ...rest } = mapLoadable[name];
        let component = null;

        if (loader) {
            component = await nonBlockingLoader(loader);
        } else if (load) {
            console.warn(DEPRECATED_API_MESSAGE);

            component = await nonBlockingLoader(load);
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