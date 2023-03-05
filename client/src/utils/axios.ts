import axios from "axios";

// use this axios ass normal axios.post, axios.get, etc
const instance = axios.create({
    baseURL: "https://api.example.com",
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
    },
});

export default instance;