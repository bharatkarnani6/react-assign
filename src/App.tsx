import React from 'react';
import './App.css';
import Sidebar from '../src/Component/Siderbar/Siderbar';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div>
     <BrowserRouter>
     <Sidebar />
     </BrowserRouter>
  </div>
  );
}

export default App;
