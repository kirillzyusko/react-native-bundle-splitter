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
    for (const [key, module] of modules) {
        if (module.isInitialized) {
            loaded.push(module.verboseName);
        } else {
            waiting.push(module.verboseName);
        }
    }

    return { loaded, waiting }
};
