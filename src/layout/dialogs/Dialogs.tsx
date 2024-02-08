import { Chats } from "./Chats"
import { ChatsDialogs } from "./ChatsDialogs"
import s from "./Dialogs.module.css"

export const Dialogs = () => {
    const dialogPage =  {
        chats: [
            {id: 1, name:"Dimych"},
            {id: 2, name:"Alina"},
            {id: 3, name:"Sasha"},
            {id: 4, name:"Masha"},
            {id: 5, name:"Vera"},
            {id: 6, name:"Valeria"},
        ],
        dialogs : [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your it-kamasutra?"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Hi!!!"},
        ]  
    }
    
    return (
        <div className={s.dialogs}>
            <Chats chats={dialogPage.chats}/>
           <ChatsDialogs dialogs={dialogPage.dialogs}/>
        </div>
    )
}