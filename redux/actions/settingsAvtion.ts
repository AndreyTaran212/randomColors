import types from '../types';

export const updateBackgroundColor = (bg: string) => ({
  type: types.SET_BG,
  payload: bg,
});

export const updateBackgroundType = (bgType: string) => ({
  type: types.SET_BG_TYPE,
  payload: bgType,
});
