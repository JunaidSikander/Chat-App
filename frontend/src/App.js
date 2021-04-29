import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import Join from "pages/Join";

function App() {
  return (
      <BrowserRouter>
        <Route exact path='/' component={Join}/>
      </BrowserRouter>
  );
}

export default App;
