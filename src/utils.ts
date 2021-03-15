import { Platform } from 'react-native';
// quick and dirty
declare var require: any;

export const investigate = () => {
    if (Platform.OS === 'web' || __DEV__) { // prevent crash in release and web
        // this function will not return on web and in release
        return { loaded: [], waiting: [] }
    }

    const modules = require.getModules();
    const moduleIds = Object.keys(modules);
    const loaded = moduleIds
        .filter(moduleId => modules[moduleId].isInitialized)
        .map(moduleId => modules[moduleId].verboseName);
    const waiting = moduleIds
        .filter(moduleId => !modules[moduleId].isInitialized)
        .map(moduleId => modules[moduleId].verboseName);

    return { loaded, waiting }
};