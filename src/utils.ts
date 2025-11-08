import { Platform } from 'react-native';
// quick and dirty
declare var require: any;

export const investigate = () => {
    if (Platform.OS === 'web' || !__DEV__) {
        // prevent crash in release and web
        // this function will not work on web and in release
        return { loaded: [], waiting: [] }
    }

    const modules = require.getModules();
    const loaded = [];
    const waiting = [];
    if (modules instanceof Map) {
        for (const [key, module] of modules) {
            (module.isInitialized ? loaded : waiting).push(module.verboseName);
        }
    } else {
        for (const key of Object.keys(modules)) {
            const module = modules[key];
            (module.isInitialized ? loaded : waiting).push(module.verboseName);
        }
    }

    return { loaded, waiting }
};
