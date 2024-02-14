import { DialogPage } from "../../redax/state"
import { Chats } from "./Chats"
import { ChatsDialogs } from "./ChatsDialogs"
import s from "./Dialogs.module.css"

type  DialogPageType = {
    dataDialogs: DialogPage
    changeNewMessage: (symb: string,chatId: string) => void
    addNewMessage:(chatId: string) => void
}

export const Dialogs:React.FC<DialogPageType> = (props) => { 
    const chatId = '1kkk'// откуда возьмем, подними из чата по котрому кликаем?
    return (
        <div className={s.dialogs}>
            <Chats chats={props.dataDialogs.chats}/>
            <ChatsDialogs dialogs={props.dataDialogs.dialogs[chatId].message} 
            chatId={chatId}
            changeNewMessage={props.changeNewMessage}
            newMessage={props.dataDialogs.dialogs['1kkk'].newMessage}
            addNewMessage={props.addNewMessage}
            />
        </div>
    )
}