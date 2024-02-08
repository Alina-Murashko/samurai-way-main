import React from "react";
import s from './Sidebar.module.css'
import { LinkCastom, SideBarItems } from "../../component/LinkCastom";

type SideBarPropsType = {
    dataSidebar : SideBarItems[]
}

export const Sidebar : React.FC<SideBarPropsType> = (props: SideBarPropsType) => {

    const mapData = props.dataSidebar.map((data,id) => {
        return (
           <li className={s.sidebar_item}key={id}><LinkCastom activeClassName={s.activeClassName} data={data}/></li>
        )
    })


    return (
            <nav className={s.sidebar}>
                <ul>{mapData}</ul>
            </nav>
    )
}