import reducer from '../reducers';
import {
  configureStore,
  applyMiddleware,
  compose,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {AppState} from 'react-native';
import thunk from 'redux-thunk';

export default configureStore(
  {
    reducer,
  },
  //@ts-ignore
  compose(applyMiddleware(thunk)),
);
export type RootState = AppState;
