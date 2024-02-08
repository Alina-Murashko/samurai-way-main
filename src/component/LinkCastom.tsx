import { NavLink } from "react-router-dom"

export type SideBarItems = {
    name: string;
    to: string;
}
type LinkCastomType = {
    activeClassName: string
    data: SideBarItems
}


export const LinkCastom = (props: LinkCastomType) => {
    return (<NavLink activeClassName={props.activeClassName} to={props.data.to}>{props.data.name}</NavLink>

    )
}