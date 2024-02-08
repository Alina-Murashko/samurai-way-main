import React from 'react';
import s from './App.module.css';
import { Sidebar } from './layout/sidebar/Sidebar';
import { Header } from './layout/header/Header';
import { Content } from './layout/content/Content';
import { Dialogs } from './layout/dialogs/Dialogs';
import { Route } from 'react-router-dom';
import { NewsFeed } from './layout/news/NewsFeed';
import { Musik } from './layout/music/Musik';
import { RootStateType } from './redax/state';

type AppType = {
  state: RootStateType
}


export function App(props: AppType) {
  return (
        <div className={s.app_wrapper}>
          <Header/>
          <Sidebar dataSidebar={props.state.sidebar.dataSideBar}/>
          <Route path={'/profile'} component={Content}/>
          <Route path={'/message'} component={Dialogs}/>
          <Route path={'/news'} component={NewsFeed}/>
          <Route path={'/music'} component={Musik}/>
        </div>
  );
}
