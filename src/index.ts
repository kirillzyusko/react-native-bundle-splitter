import optimized from "./Optimized";

const mapLoadable = {};

type Preloadable = {
    name: string;
    require: () => ({});
    priority: number;
    group: string;
    static?: object | Function;
};

export const register = (component: Preloadable) => {
    const { name, ...rest } = component;
    mapLoadable[name] = rest;
};

export const preload = (componentName: string, staticProps?: object) => optimized(componentName, staticProps);