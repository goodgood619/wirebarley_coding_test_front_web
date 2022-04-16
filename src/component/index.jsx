const ExchangeInfo = ({exchangeMoney, exchangeDefinition}) => {

    return (
        <>
                <h1>환율 계산</h1>
<div>
    <p>
        <strong> 송금 국가 : 미국(USD) </strong></p>
    <p>
        <strong>수취 국가 : <select name="job">
                                <option value="">환율선택</option>
                                <option value="Krw">한국(KRW)</option>
                                <option value="Jpy">일본(JPY)</option>
                                <option value="Php">필리핀(PHP)</option>
                            </select>
        </strong>
    </p>
    <p>
        <b>환율</b> : <b>{exchangeMoney} {exchangeDefinition}</b>
    </p>
    <form>
        <label>
          송금액:
             <input type="text" value="" />
        </label>
  	    <br/>
            <input type="submit" value="Submit" />
    </form>
    <p>
        수취 금액은 얼마입니다
    </p>
</div>                       
    </> 
    );
};

export default ExchangeInfo;