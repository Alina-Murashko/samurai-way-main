import React, { ChangeEvent } from 'react'
import { ActionType, MessageType } from '../../redax/state'
import s from './ChatsDialogs.module.css'
import { MessageInDialogsType } from './MessageInDialogs'
import { actionCreaterAddMessage, actionCreaterChengeNewMessage } from '../../redax/dialogPageReducer'


type ChatsDialogs = {
   dialogs:  MessageType[]
   newMessage: string
   dispatch: (action: ActionType) => void
   chatId: string
}

export const ChatsDialogs = (props: ChatsDialogs) => {

    const onClickHandler = () => {
      props.dispatch(actionCreaterAddMessage(props.chatId))
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const message = e.currentTarget.value;
        props.dispatch(actionCreaterChengeNewMessage(props.chatId,message))
    }

    return (
        <div className={s.chatDialogs}>
            <div>{props.dialogs.map(el => {
                return <MessageInDialogsType key={el.id} message={el.message}/>
            })}</div>
            <input className={s.input} value={props.newMessage} onChange={onChangeHandler}/><button onClick={onClickHandler}>'+'</button>
        </div>

    )
}