import {
  CHANGE_THEME_COLOR,
  TOGGLE_HEADER,
  TOGGLE_SIDE_MENU,
} from '../types';

const INITIAL_STATE = {
  themeColor: 'rgb(0, 150, 136)',
  showHeader: true,
  showSideMenu: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_THEME_COLOR:
      return {
        ...state,
        themeColor: payload,
      };
    case TOGGLE_HEADER:
      return {
        ...state,
        showHeader: payload,
      };
    case TOGGLE_SIDE_MENU:
      return {
        ...state,
        showSideMenu: payload,
      };
    default:
      return state;
  }
};
