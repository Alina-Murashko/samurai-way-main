import React from "react";
import s from "./Header.module.css";

export const Header : React.FC = () => {
    return (
        <header className={s.header}>
            <img src="https://assets.turbologo.ru/blog/ru/2021/11/25065006/cat-logo-10.png"/>
        </header>
    )
}