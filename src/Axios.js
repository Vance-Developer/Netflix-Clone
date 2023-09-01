import axios from 'axios' //library to make a request (promise based library) tmdb provide us a API though which we can request our data. to use an api we have to use secret key.

const Axios = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default Axios;