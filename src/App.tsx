import React, {useState} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {AuthRootComponent} from "./auth/RootComponent";
import {Button} from "antd";


function App() {
    return (
        <div className="App">
          <Routes>
              <Route path={''}  element={<AuthRootComponent/>}/>
              <Route path={'Register'} element={<AuthRootComponent/>}/>
              <Route path={'Table'} element={<AuthRootComponent/>}/>
          </Routes>
        </div>
    );
}

export default App;
