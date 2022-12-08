import React, {useEffect, useState} from "react";
import SideNavbar from "./side-nav/SideNavbar";
import FriendList from "./friendlist/FriendsList";
import {Outlet} from "react-router-dom";
import {useAuthenticationCheck} from "../security/security";
import {fetchAllFriends, fetchUserDetails} from "../services/user-service";
import {storeUser} from "../utils/user-utils";

const Dashboard = ({isAuthenticated, theme, username}) => {

  const [friends, setFriends] = useState([]);


  useAuthenticationCheck(isAuthenticated);

  useEffect(() => {
    fetchUserDetails(username)
      .then(user => {
        console.log("Successfully fetched user")
        console.log(user)
        storeUser(user);
      })
      .catch(error => console.log(error));
    getAllFriends();
  }, [])

  function fetchPosts() {
    // fetch()
  }

  function getAllFriends() {
    fetchAllFriends().then(list => {
      console.log("List of friends:")
      console.log(list);
      setFriends(list);
    })
  }

  return (
    <div id={"container"}>
      <div id={'out'} className={theme.className}>
        <div id={'left'}>
          <SideNavbar/>
        </div>
        <div id={'mid'}>
          <Outlet/>
        </div>
        <div id={'right'}>
          <FriendList friends={friends}/>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;