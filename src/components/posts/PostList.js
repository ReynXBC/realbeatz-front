import Post from "./Post";
import {useState} from "react";

export default function PostList({postList, handlePost}) {

  const [postInput, setPostInput] = useState();
  console.log(postList);


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
                id="postCommentInput"
                name="postContent" onChange={handlePostInputChange}
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