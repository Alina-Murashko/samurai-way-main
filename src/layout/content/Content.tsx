import React from "react";
import { Posts } from "./posts/Posts";
import { Profile } from "./profile/Profile";
import s from './Content.module.css'

export const Content : React.FC = () => {
    return (
        <section className={s.content}>
            <Posts/>
            <Profile/>
        </section>
    )
}