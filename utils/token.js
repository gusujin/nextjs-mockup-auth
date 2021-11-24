export const getAccessTokenFromHeader = (headers) => {
  try {
    const { authorization: tokenString } = headers;
    return tokenString.split(" ")[1];
  } catch (e) {
    return null;
  }
};
