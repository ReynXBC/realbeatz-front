import Post from "./Post";

export default function PostList({postList}) {
    return(
        postList.map(postDetails => {
            return (
                <Post postDetails={postDetails}/>
            )
        })
    )
}