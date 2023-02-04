import axios from "axios";
export const apiBaseURL =
  process.env.NODE_ENV === "production"
    ? "http://kvsum.studenti.sum.ba"
    : "http://localhost:3000";

const instance = axios.create({
  baseURL: apiBaseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
