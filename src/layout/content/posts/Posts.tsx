import { Post, PostPropsType } from "./post/Post";
import s from "./Posts.module.css";


const dataPost: Array<PostPropsType> = [
    {
        id: 1,
        text: "Hello",
    },
    {
        id: 2,
        text: "My name Ray!",
    },
    {
        id: 3,
        text: "Good day!",
    },
]

export const Posts : React.FC = () => {
    return (
        <div className={s.posts}>
            { dataPost.map((item,index) => {
                return (
                    <Post key={item.id} text={item.text} id={item.id}/>
                )
            })
            }
        </div>
    )
}