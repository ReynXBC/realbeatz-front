import { useState} from "react";
import postList from "./PostList";

const Dashboard = () => {

    const [postList, setPostList] = useState([
        {
            username: "foobar",
            content: "This is not a great website!!!!",
            numOfLikes: 10,
            timeStamp: "3:40 10/11/2022",
            comments: [
                {
                    poster: "sunkit",
                    content: "Yes, I agree"
                },
                {
                    poster: "roger",
                    content: "I think it's pretty cool"
                },
                {
                    poster: "cole",
                    content: "I know its terrible because I made it"
                }
            ]
        },
        {
            username: "heehoo",
            content: "This is not a great website!!!!",
            numOfLikes: 10,
            timeStamp: "5:40 10/11/2022",
            comments: [
                {
                    poster: "sunkit",
                    content: "Yes, I agree"
                },
                {
                    poster: "roger",
                    content: "I think it's pretty cool"
                },
                {
                    poster: "cole",
                    content: "I know its terrible because I made it"
                }
            ]
        }
    ]);

    function fetchPosts() {
        // fetch()
    }

        return (
            <div>
                <postList postList={postList}/>
            </div>
        );
};
export default Dashboard;