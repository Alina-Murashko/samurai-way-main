import { DialogPage } from "../../redax/state"
import { Chats } from "./Chats"
import { ChatsDialogs } from "./ChatsDialogs"
import s from "./Dialogs.module.css"

type  DialogPageType = {
    dataDialogs: DialogPage
}

export const Dialogs:React.FC<DialogPageType> = (props) => { 
    return (
        <div className={s.dialogs}>
            <Chats chats={props.dataDialogs.chats}/>
           <ChatsDialogs dialogs={props.dataDialogs.dialogs}/>
        </div>
    )
}