import React from "react";
import Pages from "./Pages";
import {Provider} from 'react-redux';
import store from './components/redux/store';

function App() {

  return (
    <Provider store={store}>
      <Pages/>
    </Provider>
  );
}

export default App;
