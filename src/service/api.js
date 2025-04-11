import axios from "axios";

const api = axios.create({
    baseURL: "https://filmewatch-1.onrender.com/",
})

export default api;