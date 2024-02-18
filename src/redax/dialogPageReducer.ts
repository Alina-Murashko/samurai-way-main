import { ActionType, DialogPage, MessageType } from "./state";

export type actionCreaterChengeNewMessageType = ReturnType<typeof actionCreaterChengeNewMessage>
export type actionCreaterAddMessageType = ReturnType<typeof actionCreaterAddMessage>

export const dialogPageReducer = (state: DialogPage, action: ActionType) => {
    switch(action.type) {
        case 'CHANGE_NEW_MESSAGE' :
           state.dialogs[action.payload.chatId].newMessage = action.payload.message
            return state
        
        case 'ADD_NEW_MESSAGE' : 
        const newMessage: MessageType= {
            id: 'dfgggd',
            message: state.dialogs['1kkk'].newMessage
        }
        state.dialogs[action.payload.chatId].message.push(newMessage);
        state.dialogs[action.payload.chatId].newMessage = ''
            return state
        default: return state
    }
}

export const actionCreaterChengeNewMessage = (chatId: string, message: string) => {
    return {
        type : 'CHANGE_NEW_MESSAGE',
        payload: {
            chatId,
            message
        }
    } as const
}

export const actionCreaterAddMessage = (chatId: string) => {
    return {
        type : 'ADD_NEW_MESSAGE',
        payload: {
            chatId: chatId,
        }
    }as const
}