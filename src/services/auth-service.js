import {API_URL} from "./api-config";

const REGISTER_URL = API_URL + "/auth/register";
const LOGIN_URL = API_URL + "/auth/login"

async function login(username, password) {
  let loginRequestJSON = JSON.stringify({
    username: username,
    password: password
  });

  console.log("Logging in with username: " + username + " ...")
  return await fetch(LOGIN_URL, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: loginRequestJSON
  }).then(response => response.json())
    .then(response => {
      console.log("Login successful!")
      console.log(response)
      let tokens = extractAccessAndRefreshTokens(response);
      console.log("Tokens: " + tokens);
      return tokens;
    })
    .catch(error => console.log(error));
}

async function registerNewUser({
                                 username,
                                 password,
                                 firstName,
                                 lastName,
                                 dob,
                                 bio
                               }, profilePicture) {

  // check profilePicture is a file and check for size
  // check that all fields in request are not null except bio

  let userProfileJSON = JSON.stringify({
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName,
    dob: dob,
    bio: bio
  });

  let requestBody = new FormData();
  requestBody.append("userProfile", new Blob([userProfileJSON], {
    type: "application/json"
  }));
  requestBody.append("profilePicture", profilePicture);

  return await fetch(REGISTER_URL, {
    method: "post",
    body: requestBody
  })
    .then(response => response.json());
}

function extractAccessAndRefreshTokens(data) {
  let results = {
    accessToken: null,
    refreshToken: null
  }

  results.accessToken = data.accessToken;
  results.refreshToken = data.refreshToken;

  return results;
}

export {login, registerNewUser};