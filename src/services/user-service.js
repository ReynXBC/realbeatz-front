import {API_URL} from "../config/api-config";

const GET_USER_URL = API_URL + "/user"


let accessToken = null;
let refreshToken = null;

function loadTokensFromStorage() {
  accessToken = localStorage.getItem("accessToken");
  refreshToken = localStorage.getItem("refreshToken");
}

async function fetchUserDetails(username) {
  loadTokensFromStorage();

  let url = new URL(GET_USER_URL + "/" + "admin");
  url.search = new URLSearchParams({isUsername: true}).toString();

  return await fetch(url, {
    headers: {
      "Authorization": accessToken
    }
  }).then(response => response.json());

}

export {fetchUserDetails};