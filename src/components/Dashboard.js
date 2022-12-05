import { useState} from "react";
import Post from "./Post";

const Dashboard = () => {

    const [postDetails, setPostDetails] = useState([
        {
            username: "foobar",
            content: "This is not a great website!!!!",
            numOfLikes: 10,
            timeStamp: "3:40 10/11/2022",
            comments: [
                {
                    poster: "sunkit",
                    content: "Yes, I agree"
                }
            ]
        }
    ]);

    function fetchPosts() {
        // fetch()
    }

        return (
            <div>
                <Post postDetails={postDetails}/>
            </div>
        //    Comment poster component

        //    Post list
        //      - post
        //      - post
        );
};
export default Dashboard;