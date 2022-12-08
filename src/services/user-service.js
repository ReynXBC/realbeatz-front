import {API_URL} from "../config/api-config";

const GET_USER_URL = API_URL + "/user"
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


export {fetchUserDetails, GET_PROFILE_PIC_URL};