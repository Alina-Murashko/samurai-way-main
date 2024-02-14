type MessageInDialogsType = {
    message: string
}
export const MessageInDialogsType: React.FC<MessageInDialogsType> = (props) => {
    return ( 
    <div>
        <span>{props.message}</span>
    </div>)
}