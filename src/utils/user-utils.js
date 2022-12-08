function storeUser(user) {
  console.log("Storing user")
  console.log(user)
  localStorage.setItem("user", JSON.stringify(user));
}


function fetchUserFromStorage() {
  return JSON.parse(localStorage.getItem("user"));
}

function compileUserDetails(user) {
  return {
    id: user.id,
    username: user.username,
    firstName: user.profile.firstName,
    lastName: user.profile.lastName,
    bio: user.profile.bio,
    dob: user.profile.dob,
    age: user.profile.age,
    registrationDate: user.registrationDate
  }
}

export {compileUserDetails, fetchUserFromStorage, storeUser};