import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    if (tokenString != null) {
      var userToken = JSON.parse(tokenString);
      return userToken.email;
    } else return null;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.email);
  };

  return {
    setToken: saveToken,
    token,
  };
}
