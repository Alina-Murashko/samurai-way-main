import { LinkCastom } from "../../component/LinkCastom";
import { ChatType } from "../../redax/state";
import s from './Chat.module.css'


export const Chat = (props: ChatType) => {
    const data = {
        name: props.name,
        to: '/message'+ '/' + String(props.id)
    }
    return (
        <div className={s.chat} key={props.id}>
            <LinkCastom activeClassName={s.activeClassName} data={data}/>
        </div>
    )
}