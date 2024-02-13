import { rerenderEntireTree } from "./rerender"

export type PostType = {
    id: number
    message: string
    likeCount: number
}


export type ProfilePageType = {
    posts: Array<PostType>
    newPost: string
}

export type ChatType = {
    id: number
    name: string
}

export type DialogType = {
    id: number 
    message: string
}

type DataSideBerType = {
    name: string
    to: string
}

export type DialogPage = {
    chats: Array<ChatType>
    dialogs: Array<DialogType>
}

type SidebarType = {
    dataSideBar: DataSideBerType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPage
    sidebar: SidebarType

}

export let state : RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?",likeCount: 12},
            {id: 1, message: "It is my first post?",likeCount: 11},
            {id: 1, message: "BlaBla",likeCount: 5},
            {id: 1, message: "Dada",likeCount: 11},
        ],
        newPost: 'it-incubator'
    },
    dialogPage: {
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
}
       
export const addPost = () => {
    const post: PostType = {
        id: new Date().getDate() ,
        message: state.profilePage.newPost,
        likeCount: 0
    }
    state.profilePage.posts.push(post);
    state.profilePage.newPost='';
    rerenderEntireTree(state)
}

export const newPostOnChange = (symbol: string) => {
    debugger
    state.profilePage.newPost = symbol
    rerenderEntireTree(state)
}














export default state