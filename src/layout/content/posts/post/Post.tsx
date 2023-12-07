import s from "./Post.module.css";

export type PostPropsType = {
    id: number
    text: string
}

export const Post : React.FC<PostPropsType> = (props:PostPropsType) => {
    return (
        <article className={s.post}>
            {props.text}
        </article>
    )
}