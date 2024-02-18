import { ActionType, DialogPage } from "../../redax/state"
import { Chats } from "./Chats"
import { ChatsDialogs } from "./ChatsDialogs"
import s from "./Dialogs.module.css"

type  DialogPageType = {
    dataDialogs: DialogPage
    dispatch: (action:ActionType) => void
}

export const Dialogs:React.FC<DialogPageType> = (props) => { 
    const chatId = '1kkk'// откуда возьмем, подними из чата по котрому кликаем?
    return (
        <div className={s.dialogs}>
            <Chats chats={props.dataDialogs.chats}/>
            <ChatsDialogs dialogs={props.dataDialogs.dialogs[chatId].message} 
            newMessage={props.dataDialogs.dialogs[chatId].newMessage}
            chatId={chatId}
            dispatch={props.dispatch}
            />
        </div>
    )
}