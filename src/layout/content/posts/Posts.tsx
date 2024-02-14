import React, { ChangeEvent, useRef } from "react";
import { PostType } from "../../../redax/state";
import { Post } from "./post/Post";
import s from "./Posts.module.css";


type PostsType = {
    dataPosts: PostType[]
    addPost: () => void
    changeNewPost: (symb: string) => void
    newPostText: string
}

export const Posts : React.FC<PostsType> = (props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        const symbol = e.currentTarget.value
        if(symbol) {
            props.changeNewPost(symbol)
        }
        
    }

    const onClickHandler = () => {
        props.addPost() 
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