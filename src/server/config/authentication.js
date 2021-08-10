import { HttpRequestHub } from '../HttpRequestHub';

const BASE_URL = '/api/auth';
export const loginUser = (obj) => {
    const config = {
        method: 'POST',
        url: `/api/auth/signin`,
        data: { ...obj }
    }
    return HttpRequestHub(config);
}

export const resetPassword = (obj) => {
    const config = {
        method: 'POST',
        url: `${BASE_URL}/editPassword`,
        data: {...obj }
    }
    return HttpRequestHub(config);
}


export const sign_up=(obj)=>{
    const config = {
        method: 'POST',
        url: `${BASE_URL}/signup`,
        data: { ...obj }
    }
    return HttpRequestHub(config);

}

export const getMe=()=>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/userInfo`,

    }
    return HttpRequestHub(config);

}