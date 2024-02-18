import { ActionType, PostType, ProfilePageType } from "./state"

export type actionCreaterAddPostType = ReturnType<typeof actionCreaterAddPost>
export type actionCreaterChengeNewPost = ReturnType<typeof actionCreaterChengeNewPost>

export const profilePageReducer = (state: ProfilePageType, action: ActionType): ProfilePageType => {
    switch(action.type) {
        case 'CHANGE_NEW_POST' :
            state.newPost = action.payload.symbol 
            return state
        
        case 'ADD_POST' : 
        const post: PostType = {
            id:'ggghjkk' ,
            message: state.newPost,
            likeCount: 0,
        }
        state.posts.push(post);
        state.newPost = '';
            return state
        default: return state
    }
}

export const actionCreaterAddPost = () => {
    return {
        type : 'ADD_POST',
        payload: {

        }
    } as const
}

export const actionCreaterChengeNewPost = (symbol: string) => {
    return {
        type : 'CHANGE_NEW_POST',
        payload: {
            symbol,
        }
    }as const
}