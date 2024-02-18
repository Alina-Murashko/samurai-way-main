import React from "react";
import { Posts } from "./posts/Posts";
import { Profile } from "./profile/Profile";
import s from './Content.module.css'
import { ActionType, PostType, ProfilePageType } from "../../redax/state";


type ContentType = {
    dataPosts: ProfilePageType
    dispatch: (acion:ActionType) => void
}

export const Content : React.FC<ContentType> = (props) => {
    return (
        <section className={s.content}>
            <Posts dispatch={props.dispatch} dataPosts={props.dataPosts.posts} newPostText={props.dataPosts.newPost} />
            <Profile/>
        </section>
    )
}