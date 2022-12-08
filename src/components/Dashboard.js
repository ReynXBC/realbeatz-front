import React, {useEffect} from "react";
import SideNavbar from "./side-nav/SideNavbar";
import FriendList from "./friendlist/FriendsList";
import {Outlet} from "react-router-dom";
import {useAuthenticationCheck} from "../security/security";
import {fetchUserDetails} from "../services/user-service";

const Dashboard = ({isAuthenticated, theme, username, setUser}) => {
  useAuthenticationCheck(isAuthenticated);

  useEffect(() => {
    fetchUserDetails(username)
      .then(user => {
        console.log(user)
        setUser(user);
      })
      .catch(error => console.log(error));
  }, [])

  function fetchPosts() {
    // fetch()
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
          <FriendList/>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;