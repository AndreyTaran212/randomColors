import {combineReducers} from 'redux';
import {persistedSettingsReducer} from '@/redux/reducers/persistedSettingsReducer';

const rootReducer = combineReducers({
  settings: persistedSettingsReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
export default rootReducer;
