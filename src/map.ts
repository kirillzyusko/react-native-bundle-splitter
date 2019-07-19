// pre-cache
const map = {};

const getWrap = (screenName: string) => {
  switch (screenName) {
    case 'FirstScreen':
      return require('../../FirstScreen');
    default:
      return require('../../FirstScreen');
  }
};

export const getScreen = (screenName: string) => {
  // console.log(`I require: ${screenName}`);
  // console.log(54353, map);
  if (!map[screenName]) {
    const screen = getWrap(screenName);
    map[screenName] = screen;

    return screen;
  }

  return map[screenName];
};