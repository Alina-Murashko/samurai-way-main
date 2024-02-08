
type PostType = {
    id: number
    message: string
    likeCount: number
}


type ProfilePageType = {
    posts: Array<PostType>
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

type DialogPage = {
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
            {id: 1, message: "It\s my first post?",likeCount: 11},
            {id: 1, message: "BlaBla",likeCount: 5},
            {id: 1, message: "Dada",likeCount: 11},
        ]
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
       export default state