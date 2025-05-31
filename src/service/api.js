import axios from "axios";

const api = axios.create({
    baseURL: "https://watchanim.litodev.site/",
})

export default api;
