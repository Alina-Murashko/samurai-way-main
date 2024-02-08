import { DialogType } from '../../redax/state'
import s from './ChatsDialogs.module.css'

type ChatsDialogs = {
   dialogs: DialogType[]
}

export const ChatsDialogs = (props: ChatsDialogs) => {
    return (
        <div className={s.chatDialogs}>
            <div>{props.dialogs.map(el => {
                return <span>{el.message}</span>
            })}</div>
            <input className={s.input}/>
        </div>

    )
}