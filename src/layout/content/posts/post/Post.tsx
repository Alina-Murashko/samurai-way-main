
import { PostType } from "../../../../redax/state";
import s from "./Post.module.css";



export const Post : React.FC<PostType> = (props) => {
    return (
        <article className={s.post}>
            <div>{props.message} </div>
            <div>{props.likeCount}</div>
        </article>
    )
}