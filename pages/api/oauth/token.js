export default (req, res) => {
  const { username, password, grant_type } = req.body;

  if (grant_type === "password") {
    if (username === "john" && password === "secret") {
      res.status(200).json({
        access_token: "kuqu6IeFiizie9eipha8coo7Aey0oosh",
        refresh_token: "ok0Ri9uuro1OY4fo5Hov1vie2loh2iek",
      });
    } else {
      res.status(401).json({
        message: "invalid grant",
      });
    }
  } else {
    res.status(400).json({ message: "invalid access" });
  }
};
