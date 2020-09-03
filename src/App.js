import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from './components/Dashboard'
import Post from './components/Post'
function App() {
  return (
    <div className="App">
       <Dashboard />

      

    </div>
  );
}

export default App;
