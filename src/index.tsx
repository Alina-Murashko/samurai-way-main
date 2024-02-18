import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { store, storeType } from './redax/store';




export const rerenderEntireTree = (store: storeType) => {
    ReactDOM.render(
    <BrowserRouter>
    <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>,
    document.getElementById('root')
)};

rerenderEntireTree(store)

store.subscribe(rerenderEntireTree)