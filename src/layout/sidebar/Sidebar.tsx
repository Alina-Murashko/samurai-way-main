import React from "react";
import s from './Sidebar.module.css'

type SideBarItems = {
    name: string;
    href: string;
}

type SideBarPropsType = {
    dataSidebar : SideBarItems[]
}



export const Sidebar : React.FC<SideBarPropsType> = (props: SideBarPropsType) => {

    const mapData = props.dataSidebar.map((d,id) => {
        return (
            <li key={id}><a href={''}>{d.name}</a></li>
        )
    })


    return (
            <nav className={s.sidebar}>
                <ul>{mapData}</ul>
            </nav>
    )
}