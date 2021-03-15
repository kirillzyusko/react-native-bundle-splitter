import { Platform } from 'react-native';
// quick and dirty
declare var require: any;

export const investigate = () => {
    if (Platform.OS === 'web') {  // prevent crash on web and use mock data
        // since I don't know, whether it's possible to get the data in the
        // same way and form as on react-native side
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