import React from 'react';
import { Provider } from 'react-redux';
import MainContainer from './src/componate/MainContainer';
import store from './src/redux/store';

const App = () => (
  <Provider store={store}>
    <MainContainer />
  </Provider>
);

export default App;
