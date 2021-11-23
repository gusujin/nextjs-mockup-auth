const getAccessToken = (tokenString) => {
  try {
    return tokenString.split(" ")[1];
  } catch (e) {
    return null;
  }
};
export default (req, res) => {
  const { authorization } = req.headers;
  const accessToken = getAccessToken(authorization);
  if (accessToken === "kuqu6IeFiizie9eipha8coo7Aey0oosh") {
    res.status(200).json({
      profile: {
        id: 1,
        username: "john",
        name: "John",
      },
    });
  } else {
    res.status(401).json({
      message: "unauthorized",
    });
  }
};
