import { createStore } from "redux"
import { actionCreaterAddMessageType, actionCreaterChengeNewMessageType, dialogPageReducer } from "./dialogPageReducer"
import { actionCreaterAddPostType, actionCreaterChengeNewPost, profilePageReducer } from "./profilePageReducer"


export type PostType = {
    id: string
    message: string
    likeCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPost: string
}

export type ChatType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    message: string
}

export type DialogType = {
    message: MessageType[]
    newMessage: string
}

export type DialogToUser = {
   [ key:string]: DialogType
}

type DataSideBerType = {
    name: string
    to: string
}

export type DialogPage = {
    chats: Array<ChatType>
    dialogs: DialogToUser
}

export type SidebarType = {
    dataSideBar: DataSideBerType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPage
    sidebar: SidebarType

}

export type ActionType = actionCreaterAddPostType | actionCreaterChengeNewPost | actionCreaterChengeNewMessageType | actionCreaterAddMessageType

export type storeType = {
    _state: RootStateType,
    getState: () => RootStateType
    _callSubscriber:(store: storeType) => void
    subscribe: ( observer: (store: storeType) => void) => void
    dispatch: (action:ActionType) => void
}

export const store: storeType = {
    _state : {
        profilePage: {
            posts: [
                {id: '1', message: "Hi, how are you?",likeCount: 12},
                {id: '1', message: "It is my first post?",likeCount: 11},
                {id: '1', message: "BlaBla",likeCount: 5},
                {id: '1', message: "Dada",likeCount: 11},
            ],
            newPost: 'it-incubator'
        },
        dialogPage: {
            chats: [
                {id: '1kkk', name:"Dimych"},
                {id: '2kk', name:"Alina"},
                {id: '3jkj', name:"Sasha"},
                {id: '499', name:"Masha"},
                {id: '5hh', name:"Vera"},
            ],
            dialogs : {
                ['1kkk']: {
                    message:[{id:'1', message: "How is your it-kamasutra?"},
                      {id:'2',message: "ok!"}],
                    newMessage:''},
                ['2kk']: {
                    message:[{id:'1', message: "How are you"},
                      {id:'2',message: "ok!"}],
                    newMessage: ''},
                ['3jkj']: {
                    message:[{id:'1', message: "Let's go for a walk"},
                      {id:'2',message: "ok!"}],
                    newMessage: ''},
                ['499']: {
                    message: [{id:'1', message: "Will you eat"},
                      {id:'2', message: "ok!"}],
                    newMessage: ''},
                ['5hh']: {
                    message: [{id:'1',message: "Hi!"},
                    {id:'2',message: "Hi!"}],
                    newMessage: ''}
            }
        },
        sidebar: {
                dataSideBar : [
                    { 
                      name:"Profile",
                      to: '/profile'
                    },
                    {
                      name:"Message",
                      to: '/message'
                    },
                    {
                      name:"News",
                      to: '/news'
                    },
                    {
                      name: "Music",
                      to: '/music'
                    },
            ]
        }
    },
    getState () {
        return  this._state
    },
    _callSubscriber () {
    },
    subscribe  (observer: (store: storeType) => void) {
        this. _callSubscriber = observer
    },
    dispatch (action) {
        this._state.dialogPage = dialogPageReducer(this._state.dialogPage,action);
        this._state.profilePage = profilePageReducer(this._state.profilePage,action);
        this. _callSubscriber(this)
    }
}




// window.store = store
// `@ts-ignore`

