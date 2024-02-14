import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import state, { RootStateType, addNewMessage, addPost, changeNewMessage, changeNewPost, subscribe } from './redax/state';


export const rerenderEntireTree = (state: RootStateType) => {
    debugger
    ReactDOM.render(
    <BrowserRouter>
    <App state={state} addPost={addPost} changeNewPost={changeNewPost} 
    changeNewMessage={changeNewMessage} addNewMessage={addNewMessage}/>
    </BrowserRouter>,
    document.getElementById('root')
)};

rerenderEntireTree(state)

subscribe(rerenderEntireTree)