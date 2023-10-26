import axios from "axios";
import {API_SALES} from './env'

export const api = axios.create({
    baseURL: API_SALES,
    timeout: 1000
})