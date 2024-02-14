import React from "react";
import { Posts } from "./posts/Posts";
import { Profile } from "./profile/Profile";
import s from './Content.module.css'
import { PostType, ProfilePageType } from "../../redax/state";


type ContentType = {
    dataPosts: ProfilePageType
    addPost: () => void
    changeNewPost: (symb: string) => void
}

export const Content : React.FC<ContentType> = (props) => {
    return (
        <section className={s.content}>
            <Posts dataPosts={props.dataPosts.posts} newPostText={props.dataPosts.newPost} addPost={props.addPost} changeNewPost={props.changeNewPost}/>
            <Profile/>
        </section>
    )
}