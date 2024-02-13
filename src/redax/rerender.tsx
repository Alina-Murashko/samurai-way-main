import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../App';
import { BrowserRouter } from 'react-router-dom';
import state, { addPost, newPostOnChange } from './state'



export const rerenderEntireTree = (state: any) => {
    debugger
    ReactDOM.render(
    <BrowserRouter>
    <App state={state} addPost={addPost} newPostOnChange={newPostOnChange}/>
    </BrowserRouter>,
    document.getElementById('root')
)};