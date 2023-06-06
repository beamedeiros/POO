import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:32831",
  headers: {
    "Content-type": "application/json"
  }
});