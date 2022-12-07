import React, {useState} from "react";
import PostList from "./posts/PostList";
import SideNavbar from "./side-nav/SideNavbar";
import FriendList from "./friendlist/FriendsList";
import {Outlet} from "react-router-dom";

const Dashboard = ({theme}) => {



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
          {/*<div>*/}
          {/*  <PostList postList={postList}/>*/}
          {/*</div>*/}
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