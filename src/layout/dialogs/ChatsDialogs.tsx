import React, { ChangeEvent } from 'react'
import { MessageType } from '../../redax/state'
import s from './ChatsDialogs.module.css'
import { MessageInDialogsType } from './MessageInDialogs'


type ChatsDialogs = {
   dialogs:  MessageType[]
   newMessage: string
   changeNewMessage: (symb: string,chatId: string) => void
   addNewMessage: (chatId: string) => void
   chatId: string
}

export const ChatsDialogs = (props: ChatsDialogs) => {

    const onClickHandler = () => {
      props.addNewMessage(props.chatId)
    }

    const onChangeHandker = (e: ChangeEvent<HTMLInputElement>) => {
        const message = e.currentTarget.value;
        props.changeNewMessage(message,props.chatId)
    }

    return (
        <div className={s.chatDialogs}>
            <div>{props.dialogs.map(el => {
                return <MessageInDialogsType key={el.id} message={el.message}/>
            })}</div>
            <input className={s.input} value={props.newMessage} onChange={onChangeHandker}/><button onClick={onClickHandler}>'+'</button>
        </div>

    )
}