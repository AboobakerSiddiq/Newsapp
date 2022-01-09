import React from 'react';
import Store from "./store/store";
import {Provider} from "react-redux";
import Tech from './components/tech';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Tech/>
    </div>
    </Provider>

  );
}

export default App;
