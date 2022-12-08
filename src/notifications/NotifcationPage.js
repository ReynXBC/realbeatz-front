import NotificationCard from "./NotificationCard";
import {useEffect} from "react";
import {fetchAllFriendRequestsReceived} from "../services/user-service";

export default function NotificationPage({requests}) {

  return (
    <div className={"friendPageDiv"}>
      {
        requests.map(request => {
          console.log(request);
          return (
            <NotificationCard request={request}/>
          )
        })
      }
    </div>
  );
}
