import axios from 'axios';

import { userAccessTokenName } from "./constants";
import {getCookie} from "../utils/useCookies";

export const token = getCookie(userAccessTokenName);

export let host = "http://195.158.24.249";
export let port = '2020';


export let headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': token ?`Bearer ${token}`:''
};

export let axiosInstance = axios.create({
    baseURL: `${host}:${port}`,
    headers,
    timeout: 300000,
});
