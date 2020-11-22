import axios from 'axios'

const KEY = "AIzaSyDD5PUAP1yqdIRgrKSDrnpAX3vwrLIB-to";
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});