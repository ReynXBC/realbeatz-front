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

    return (
        <div className="postDiv">
            <div className="postEntryContainer">
                <div className="postEntryDiv">
                    <label>Post Here!: </label>
                    <form id="postEntryForm" onSubmit={handlePost}>
                        <textarea
                            type="text" id="postCommentInput"
                            name="postCommentInput" onChange={handlePostInputChange}
                            value={postInput}/>
                        <button className="btn">Post</button>
                    </form>
                </div>
            </div>
            <div className="postListDiv">
                {
                    postList.map(postDetails => {
                        return (
                            <Post key={postDetails.id} postDetails={postDetails}/>
                        )
                    })
                }
            </div>
        </div>
    )
}