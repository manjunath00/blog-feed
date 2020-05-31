import axios from "axios";
import Cookies from "js-cookie";

export const buzzfeed = axios.create({
  baseURL: "/",
  headers: { Authorization: `Bearer ${Cookies.get("token")}` },
});
