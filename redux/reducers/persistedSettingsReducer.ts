import types from '../types';

const initialState = {
  bg: '#000',
  bgType: 'hex',
};

export const persistedSettingsReducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case types.SET_BG:
      return {...state, bg: action.payload};
    case types.SET_BG_TYPE:
      return {...state, bgType: action.payload};
    default:
      return state;
  }
};
