import optimized from './optimized';
import { getScreen } from './map';

const preloaded = new Set();

export const preload = (screenName: string, staticProps?: object) => {
    preloaded.add(screenName);

    return optimized(screenName, staticProps);
};

export const loadAll = () => {
    for (const item of preloaded.keys()) {
        setTimeout(() => getScreen(item), 0);
    }
};