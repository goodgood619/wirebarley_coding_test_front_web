import React, { useState } from 'react';
import ExchangeInfo from '../../component/index';
import { GetExchangeRate,PostReceptionMoney } from '../../agent/index';
import {MakeExchangeFormValue} from '../../util/index';

const ExchangeRatePage = () => {
    const [exchangeValue,SetExchangeValue] = useState(null);
    const [receptionMoney,SetReceptionMoney] = useState(null);
    
    const handleExchangeRate = async (fromSend,toSend) => {
        if (toSend === "") {
            SetExchangeValue(null);
            alert('환율을 선택해주세요');
        }
        else {
            try {
                const response = await GetExchangeRate(fromSend,toSend);
                const data = response.data;
                const message = response.message;

                    if (data == null) {
                        alert(message);
                    }
                    else {
                        SetExchangeValue(MakeExchangeFormValue(data));
                        SetReceptionMoney(null);
                    }
            }
            catch(err) {
                console.log(err);
            }
        }
    }

    const handleReceptionMoney = async (fromSend,toSend,receptionMoney) => {
            try {
                const response = await PostReceptionMoney(fromSend,toSend,receptionMoney);
                const data = response.data;
                const message = response.message;


                    if (data == null) {
                        alert(message);
                        SetReceptionMoney(null);
                    }
                    else {
                        SetReceptionMoney(MakeExchangeFormValue(data));
                    }
            }
            catch(err) {
                console.log(err);
            }
    }

    return <>
        <ExchangeInfo getExchangeRate = {handleExchangeRate} exchangeValue = {exchangeValue} 
        postReceptionMoney = {handleReceptionMoney} receivedReceptionMoney = {receptionMoney}/>
    </>
};


export default ExchangeRatePage;