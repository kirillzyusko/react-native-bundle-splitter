import { mapLoadable } from './bundler';

const map = {};

export const getScreen = (screenName: string) => {
    // console.log(`I require: ${screenName}`);
    // console.log(54353, map);
    if (!map[screenName]) {
        const screen = mapLoadable[screenName].require();
        map[screenName] = screen;

        return screen;
    }

    return map[screenName];
};