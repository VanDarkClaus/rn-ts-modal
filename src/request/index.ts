import axios from './axiosConfig'

export const axiosModal = () =>{
    return axios.request({
        url:'/ss',
        method: 'get'
    })
}