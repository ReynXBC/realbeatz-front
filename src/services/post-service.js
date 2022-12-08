function getPosts() {
  return [
    {
      postId: 1000,
      username: "foobar",
      content: "This is not a great website!!!!",
      numOfLikes: 10,
      timeStamp: "3:40 10/11/2022",
      comments: [
        {
          poster: "sunkit",
          content: "Yes, I agree"
        },
        {
          poster: "roger",
          content: "I think it's pretty cool"
        },
        {
          poster: "cole",
          content: "I know its terrible because I made it"
        }
      ]
    },
    {
      postId: 1001,
      username: "heehoo",
      content: "Dr. Talbott is an easy A",
      numOfLikes: 10,
      timeStamp: "5:40 12/5/2022",
      comments: [
        {
          poster: "sunkit",
          content: "Yes, I agree"
        },
        {
          poster: "cole",
          content: "It's actually crazy"
        }
      ]
    }
  ]
}


export {getPosts};