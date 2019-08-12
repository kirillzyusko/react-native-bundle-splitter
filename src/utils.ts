export const investigate = () => {
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