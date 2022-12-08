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

export {compileUserDetails};