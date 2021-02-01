import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  const [currency,setCurrency] = useState("GBP_USD")
  const [value, setValue] = useState(1)
  const [currencyRes,setCurrencyRes] = useState("GBP_USD")
  const [error,setError] = useState("")
  const check = () => {
    // POST request using axios inside useEffect React hook
    const body = {
      "Currencies":currency,
      "ValueFrom": Number(value),
  };
    axios.post('https://lkdjr556a5.execute-api.eu-west-1.amazonaws.com/dev/hello', body)
        .then(response => setCurrencyRes(response.data.ValueTo))
  };

  const setCurrencyValue = (e) => {
    if (isNaN(e.target.value)) {
      setError("value must be numeric!")
    } else {
      setError("")
      setValue(e.target.value)
    }
  }

  return (
    <div className="App">

    <div>
      GBP_USD
      <input
        id="GBP_USD"
        value="GBP_USD"
        type="radio"
        name="currency"
        onChange={e => setCurrency(e.target.value)}
      />
      GBP_AUD
      <input
        id="GBP_AUD"
        value="GBP_AUD"
        type="radio"
        name="currency"
        onChange={e => setCurrency(e.target.value)}
      />
      GBP_EUR
      <input
        id="GBP_EUR"
        value="GBP_EUR"
        type="radio"
        name="currency"
        onChange={e => setCurrency(e.target.value)}
      />
    </div>
        <label basic>£</label>
        <input value={value} onChange={e => setCurrencyValue(e)}/>
      <p>
        {error != "" &&
          <span style={{color:"red"}}> {error} </span>}
      </p>

      <button onClick={() => check()}>check</button>
      <p>{currencyRes ? currencyRes : ""}</p>
    </div>
  );
}

export default App;
