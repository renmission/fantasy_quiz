/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
export const themeInitialValue = 'dark';

export const ThemeReducer = (state = themeInitialValue, { type, payload }) => {
  switch (type) {
    case 'CHANGE_THEME':
      return state === 'dark' ? 'light' : 'dark';
    default:
      return state;
  }
};
