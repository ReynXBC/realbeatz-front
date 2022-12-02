import Post from "./Post";

function TestPage() {
    let postDetails = {
        username: "random Dude with crazy face",
        profilePictureData: "random bytes",
        content: "This is a great website and I love RealBeatz!!!!!!!"
    }

    return(
        <>
            <Post postDetails={postDetails}/>
        </>
    )
}

export default TestPage;