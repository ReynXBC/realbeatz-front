import {API_URL} from "../config/api-config";

const GET_USER_URL = API_URL + "/user";
const GET_ALL_FRIENDS_URL = API_URL + "/user/friends";

const GET_ALL_USERS_URL = API_URL + "/user/all";

const ADD_NEW_FRIEND_URL = API_URL + "/user/friends/request"
const GET_PROFILE_PIC_URL = API_URL + "/user/profile-pictures"


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
  return await fetch(GET_ALL_USERS_URL, {
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


export {fetchUserDetails, fetchAllFriends, fetchAllUsers, addNewFriend,GET_PROFILE_PIC_URL};
