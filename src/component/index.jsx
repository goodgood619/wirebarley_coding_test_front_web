import React,{ useState } from "react";
import {MakeUpperCase} from '../util/index';

const ExchangeInfo = ({getExchangeRate, exchangeValue,postReceptionMoney,receivedReceptionMoney}) => {
    const handleSelect = (e) => {
        getExchangeRate('usd',e.target.value);
        if (e.target.value === "") {
            setToSend(null);
        }
        else {
            setToSend(e.target.value);
        }
    }

    const handleReceptionMoney = (e) => {
        setReceptionMoney(e.target.value);
    }

    const submitReceptionMoney = (e) => {
        e.preventDefault();
        postReceptionMoney('usd',toSend,receptionMoney);
    }

    const [toSend, setToSend] = useState("");
    const [receptionMoney,setReceptionMoney] = useState('');

    return (
        <>
<h1 className="Box">환율 계산</h1>
<div className="Box">
    <p>
        <strong> 송금 국가 : 미국(USD) </strong></p>
    <p>
        <strong>수취 국가 : <select name="job" onChange={handleSelect} value={toSend}>
                                    <option value="">환율 선택</option>
                                    <option value="Krw">한국(KRW)</option>
                                    <option value="Jpy">일본(JPY)</option>
                                    <option value="Php">필리핀(PHP)</option>
                            </select>
        </strong>
    </p>
    <p>
        <b>환율</b> : <b>{exchangeValue}</b> {exchangeValue && <b>{MakeUpperCase(toSend)}/{MakeUpperCase('usd')}</b>}
    </p>
    <form>
        <label>
          <b>송금액 : </b>
             <input type="value" value={receptionMoney} onChange={handleReceptionMoney}/> <b>USD</b>
        </label>
  	    <br/>
            <input type="submit" value="Submit" onClick={submitReceptionMoney}/>
    </form>
    <p>
        수취 금액은 <b>{receivedReceptionMoney}</b> {receivedReceptionMoney && <b>{MakeUpperCase(toSend)}</b>}입니다.
    </p>
</div>                       
    </> 
    );
};

export default ExchangeInfo;