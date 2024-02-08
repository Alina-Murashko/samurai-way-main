import React from 'react';
import s from './App.module.css';
import { Sidebar } from './layout/sidebar/Sidebar';
import { Header } from './layout/header/Header';
import { Content } from './layout/content/Content';



export function App() {

  const DataSideBar = [
    { 
      name:"Profile",
      href: ''
    },
    {
      name:"News",
      href: ''
    },
    {
      name:"Message",
      href: ''
    },
    {
      name: "Music",
      href: ''
    },
    ]
  return (
        <div className={s.app_wrapper}>
          <Header/>
          <Sidebar dataSidebar={DataSideBar}/>
          <Content/>
          
        </div>
  );
}
