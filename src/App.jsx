import React from 'react';
import { RouterComp } from './Router/index';
import { ToastContainer } from 'react-toastify';
import { MasterProvider } from './State/MasterContext';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <>
      <MasterProvider >
        <ToastContainer />
        <RouterComp />
      </MasterProvider>
    </>
  );
}

export default App;
