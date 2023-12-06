import React from "react";
import { Posts } from "./posts/Posts";
import { Profile } from "./profile/Profile";

export const Content : React.FC = () => {
    return (
        <section>
            <Posts/>
            <Profile/>
        </section>
    )
}