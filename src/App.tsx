import React from 'react';
import s from './App.module.css';
import { Sidebar } from './layout/sidebar/Sidebar';
import { Header } from './layout/header/Header';
import { Content } from './layout/content/Content';
import { Dialogs } from './layout/dialogs/Dialogs';
import { Route } from 'react-router-dom';
import { NewsFeed } from './layout/news/NewsFeed';
import { Musik } from './layout/music/Musik';
import { RootStateType, addNewMessage } from './redax/state';

type AppType = {
  state: RootStateType
  addPost: () => void
  addNewMessage: (chatId: string) => void
  changeNewPost: (symb: string) => void
  changeNewMessage: (symb: string,chatId: string) => void
}


export function App(props: AppType) {
  return (
        <div className={s.app_wrapper}>
          <Header/>
          <Sidebar dataSidebar={props.state.sidebar.dataSideBar}/>
          <Route path={'/profile'} render={() => <Content addPost={props.addPost}
          changeNewPost={props.changeNewPost}
          dataPosts={props.state.profilePage}
         />}/>
          <Route path={'/message'} render={() => <Dialogs dataDialogs={props.state.dialogPage}
          changeNewMessage={props.changeNewMessage} addNewMessage={props.addNewMessage}/>}/>
          <Route path={'/news'} render={() => <NewsFeed/>}/>
          <Route path={'/music'} render={() => <Musik/>}/>
        </div>
  );
}
