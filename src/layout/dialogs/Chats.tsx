
import { ChatType } from '../../redax/state'
import { Chat } from './Chat'
import s from './Chats.module.css'

type ChatsProps = {
    chats: ChatType[]
}

export const Chats = (props:ChatsProps) => {
    
const chats = props.chats.map(chat => {
    return (
        <Chat name={chat.name} id={chat.id}/>
    )
})
    return (<div className={s.chat}>{chats}</div>)
}