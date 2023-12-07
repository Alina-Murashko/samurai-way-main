import React from "react";
import s from './Sidebar.module.css'


type SideBarPropsType = {
    title : string
}

const DataSideBar = ["Profile", "News", "Message", "Music"]

export const Sidebar : React.FC<SideBarPropsType> = (props: SideBarPropsType) => {
    return (
            <nav className={s.sidebar}>
                <ul>
                    <li>{props.title}</li>
                </ul>
            </nav>
    )
}