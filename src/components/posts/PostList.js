import Post from "./Post";

export default function postList({postList}) {
    return(
        postList.map(postDetails => {
            return (
                <Post postDetails={postDetails}/>
            )
        })
    )
}