import React, { ChangeEvent, useRef } from "react";
import { PostType } from "../../../redax/state";
import { Post } from "./post/Post";
import s from "./Posts.module.css";


type PostsType = {
    dataPosts: PostType[]
    addPost: () => void
    newPostOnChange: (symbol: string) => void
    newPostText: string
}

export const Posts : React.FC<PostsType> = (props) => {

    const newPostCreateRef = React.createRef<HTMLTextAreaElement>();
    
    const onChangeHandler = () => {
        debugger
        const symbol = newPostCreateRef.current?.value;
        if(symbol) {
            props.newPostOnChange(symbol)
        }
        
    }

    const onClickHandler = () => {
        props.addPost() 
    }

    return (  
            <div className={s.posts}>
                <div> 
                <textarea ref={newPostCreateRef} value={props.newPostText} onChange={onChangeHandler}/>
                <button onClick={onClickHandler}>'+ </button>
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