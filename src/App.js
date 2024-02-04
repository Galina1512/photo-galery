import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Main } from './components/Main/Main';
  
  
  function App() {
    return (
      <div className='App'>
        <Routes>
          <Route path='*' element = {
            <>
              <Header/>
              <Main/>
            </> 
            } 
          />
        </Routes>    
      </div>
    );
  }  
  

export default App;
