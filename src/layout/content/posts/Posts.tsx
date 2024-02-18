import React, { ChangeEvent } from "react";
import { ActionType, PostType } from "../../../redax/state";
import { Post } from "./post/Post";
import s from "./Posts.module.css";
import { actionCreaterAddPost, actionCreaterChengeNewPost } from "../../../redax/profilePageReducer";


type PostsType = {
    dataPosts: PostType[]
    newPostText: string
    dispatch:( action: ActionType) => void
}

export const Posts : React.FC<PostsType> = (props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const symbol = e.currentTarget.value
        props.dispatch(actionCreaterChengeNewPost(symbol));
    }

    const onClickHandler = () => {
       props.dispatch(actionCreaterAddPost())
    }

    return (  
            <div className={s.posts}>
                <div> 
                <textarea  value={props.newPostText} onChange={onChangeHandler}/>
                <button onClick={onClickHandler}>+</button>
                </div>
                <div className={s.posts_container}>
                { props.dataPosts.map((item) => {
                    return (
                        <Post key={item.id} message={item.message} id={item.id} likeCount={item.likeCount}/>
                    )
                })
                }
                </div>
               

                
            </div>
       
        
        
    )
}