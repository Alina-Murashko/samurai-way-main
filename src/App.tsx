import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import { Sidebar } from './layout/sidebar/Sidebar';
import { Header } from './layout/header/Header';
import { Content } from './layout/content/Content';


export function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Sidebar/>
        <Content/>
      </div>
    </BrowserRouter>
    
  );
}
