import React, {useEffect} from "react";
import SideNavbar from "./side-nav/SideNavbar";
import FriendList from "./friendlist/FriendsList";
import {Outlet} from "react-router-dom";
import {useAuthenticationCheck} from "../security/security";

const Dashboard = ({isAuthenticated, theme}) => {
  useAuthenticationCheck(isAuthenticated);

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