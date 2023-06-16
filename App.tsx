/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import HomeView from './src/views/HomeView';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


const App = (): JSX.Element => {
  return (
    <Provider store={store}>
     <HomeView/>
    </Provider>
  );
}

export default App;
