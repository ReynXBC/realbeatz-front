import Post from "./Post";
import {useState} from "react";

export default function PostList({postList}) {

    const [postInput, setPostInput] = useState();
    console.log(postList);

    const handlePost = (event) => {
        event.preventDefault();
        console.log(event.target);
        // use fetch to call api
    };


    function handlePostInputChange(event) {
        let value = event.target.value;
        console.log(value);
        setPostInput(value);
    }
    return(
        <div className="PostDiv">
            <div className="postEntryDiv">
                <form id="postEntryForm" onSubmit={handlePost}>
                    <input
                        type="text" id="postCommentInput"
                        name="postCommentInput" onChange={handlePostInputChange}
                        value={postInput}/>
                    <button className="btn">Post</button>
                </form>
            </div>
            <div className="postListDiv">
                {
                    postList.map(postDetails => {
                        return (
                            <Post postDetails={postDetails}/>
                        )
                    })
                }
            </div>
        </div>
    )
}