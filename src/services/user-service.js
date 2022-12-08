import {API_URL} from "../config/api-config";
import {logDOM} from "@testing-library/react";

const GET_USER_URL = API_URL + "/user";
const GET_ALL_FRIENDS_URL = API_URL + "/user/friends";

const GET_ALL_USERS_URL = API_URL + "/user/all";

const ADD_NEW_FRIEND_URL = API_URL + "/user/friends/request";
const GET_ALL_FRIEND_REQUESTS_URL = API_URL + "/user/friends/request/all";
const GET_ALL_RELATED_POST_URL = API_URL + "/post/get-all-related";
const CREATE_NEW_POST_URL = API_URL + "/post/create";

const CONFIRM_FRIEND_REQUEST_URL = API_URL + "/user/friends/request/confirm";
const REFUSE_FRIEND_REQUEST_URL = API_URL + "/user/friends/request/refuse";
const GET_PROFILE_PIC_URL = API_URL + "/user/profile-pictures";


let accessToken = null;
let refreshToken = null;
let authHeader;

function loadTokensFromStorage() {
  accessToken = localStorage.getItem("accessToken");
  refreshToken = localStorage.getItem("refreshToken");
  authHeader = {
    "Authorization": accessToken
  }

}

async function fetchUserDetails(username) {
  loadTokensFromStorage();
  console.log("fetching user details for : " + username);
  let url = new URL(GET_USER_URL + "/" + username);
  url.search = new URLSearchParams({isUsername: true}).toString();

  return await fetch(url, {
    headers: authHeader
  }).then(response => response.json());

}

async function fetchAllFriends() {
  return await fetch(GET_ALL_FRIENDS_URL, {
    headers: authHeader
  }).then(response => response.json());
}

async function fetchAllUsers() {
  return fetch(GET_ALL_USERS_URL, {
    headers: authHeader
  }).then(response => response.json());
}

async function addNewFriend(friendId, message="") {
  console.log("Sending friend request...");
  return await fetch(ADD_NEW_FRIEND_URL, {
    method: "post",
    headers: {
      "Authorization": authHeader["Authorization"],
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      newFriendId: friendId,
      message: message
    })
  });
}

async function fetchAllFriendRequestsReceived() {
  console.log("Fetching all friend requests received...");
  return fetch(GET_ALL_FRIEND_REQUESTS_URL, {
    headers: authHeader
  }).then(response => response.json());
}

async function fetchAllRelatedPosts() {
  console.log("Fetching all posts needed to display...")
  return await fetch(GET_ALL_RELATED_POST_URL, {
    headers: authHeader
  }).then(response => response.json());
}

async function createNewPost(content) {
  console.log("Creating new post...")
  return await fetch(CREATE_NEW_POST_URL, {
    method: "post",
    headers: {
      "Authorization": authHeader["Authorization"],
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: content,
      songTitle: "",
      artists: ""
    })
  }).then(response => response.json());
}

async function confirmFriendRequest(requesterId) {
  console.log("Confirming friend request...")
  return await fetch(CONFIRM_FRIEND_REQUEST_URL, {
    method: "post",
    headers: {
      "Authorization": authHeader["Authorization"],
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      requesterId: requesterId
    })
  });
}

export {fetchUserDetails, fetchAllFriends,
  fetchAllUsers, addNewFriend, fetchAllFriendRequestsReceived,
  fetchAllRelatedPosts,createNewPost, confirmFriendRequest,
  GET_PROFILE_PIC_URL};
