import { useState} from "react";


const Dashboard = () => {

    const [postDetails, setPostDetails] = useState([
        {
            username: "foobar",
            content: "This is not a great website!!!!",
            numOfLikes: 10,
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
                <p>Welcome to your Dashboard</p>
            </div>
        //    Comment poster component

        //    Post list
        //      - post
        //      - post
        );
};
export default Dashboard;