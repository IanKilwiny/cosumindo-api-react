import axios from "axios";

//recebe um objeto
export const API = axios.create({
    baseURL:"https://fakestoreapi.com/"
})