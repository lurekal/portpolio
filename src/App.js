import React from 'react';
import Main from "./components/Main";
import { BrowserRouter } from 'react-router-dom';


function App() {


  return (
    <div>
        <BrowserRouter>
      <Main/>
        </BrowserRouter>
    </div>
  );
}

export default App;
