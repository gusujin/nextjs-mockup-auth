import axios from "axios";

if (typeof window !== "undefined") {
  axios.interceptors.request.use(
    function (config) {
      const blackList = ["/api/my/"];
      if (blackList.every((black) => !config?.url?.includes(black)))
        return config;

      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        return window.location.replace("/login");
        // return Promise.reject("access_token not found.");
      }

      config.headers.authorization = `Bearer ${accessToken}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
}
