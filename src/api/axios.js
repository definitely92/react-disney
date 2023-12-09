import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "55053de85d5490ef8a9a222fc976470a",
    language: "ko-KR",
  },
});

export default instance;
