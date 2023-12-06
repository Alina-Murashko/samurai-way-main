import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import state from "./redax/state"

function App() {

  let a = state.dialogPage.message[0].message

  return (
    <BrowserRouter>
      <div className="App">
        App Hello
        <Route path={"/hello"} render={() => <HelloMessage message={a}/>} />
        <Route path={"/bye"} render={() => <ByeMessage message={'Bye Samurai'}/>} />
      </div>
    </BrowserRouter>
    
  );
}


type MessageType = {
  message: string
}

function HelloMessage(props: MessageType) {
  return (
    <h1>{props.message}</h1>
  )
}


function ByeMessage(props: MessageType) {
  return (
    <h1>{props.message}</h1>
  )
}




export default App;
