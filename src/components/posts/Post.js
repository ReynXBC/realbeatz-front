import {useState} from "react";
import {GET_PROFILE_PIC_URL} from "../../services/user-service";

export default function Post({postDetails}) {
  const [commentInput, setCommentInput] = useState();
  console.log(postDetails);
  let profilePicture = GET_PROFILE_PIC_URL + "/" + postDetails.posterProfilePictureFullName

  const handlePostComment = (event) => {
    event.preventDefault();
    console.log(event.target);
    // use fetch to call api
  };


  function handleCommentInputChange(event) {
    let value = event.target.value;
    console.log(value);
    setCommentInput(value);
  }

  return (
    <div className={"postContainer"}>
      <div className={"postHeaderDiv"}>
        <div className={"postProfileDiv"}>
          <img
            src={profilePicture}/>
          <span>{postDetails.posterUsername}</span>
        </div>
        <div className={"postTimeStampDiv"}>
          <span>{postDetails.postTime}</span>
        </div>
      </div>
      <div className={"postContentDiv"}>
        <p><span>{postDetails.content}</span></p>
      </div>
      <div className={'postFooterDiv'}>
        <div className={'postLikeDiv'}>
          <button className={"btn"}>Like</button>
        </div>
        <div className={"postCommentInputDiv"}>
          <form id="postCommentForm" onSubmit={handlePostComment}>
            <textarea
              type="text" id="postCommentInput"
              name="postCommentInput" onChange={handleCommentInputChange}
              value={commentInput}/>
            <button className="btn">Comment</button>
          </form>
        </div>
      </div>
      <div className={"postCommentDiv"}>
        {
          postDetails.comments.map(comment => {
            return <p>{comment.poster}: {comment.content}</p>
          })
        }
      </div>
    </div>
  )
}