import axios from 'axios';
import {DEV_URL} from './url';

export const GetExchangeRate =  (fromSend,toSend) => {
    return axios.get(`${DEV_URL}`,{
        params : {
            'fromSend' : fromSend,
            'toSend' : toSend
        },
        timeout : 10000,
    }).then(res => {        
        return res.data;
    })
    .catch(err => {       
        return err;
    })
}

export const PostReceptionMoney = (fromSend,toSend,receptionMoney) => {
    return axios.post(`${DEV_URL}`,{
        fromSend : fromSend,
        toSend : toSend,
        receptionMoney : receptionMoney
    },null).then(res => {
        return res.data;
    }) 
    .catch(err => {
        return err;
    })
}
