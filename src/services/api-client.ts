import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f1a3b26dc6fd4586a1d05799b0ac4d5b",
  },
});
