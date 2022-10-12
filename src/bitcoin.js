import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState(0);
  const [unit, setUnit] = useState(1);
  const [convert, setConvert] = useState(false);

  const onChange = (event) => {
    setCoin(event.target.value);
  }

  const usdtPrice = (event) => {
    setUnit(event.target.value);
  }

  const coinConvert = () => {
    // setUnit(1);
    setConvert((current) => !current);
  }

  // res를 json으로 변환하고 그 json을 가지고 만들어준다.
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(res => res.json())
    .then(json => {
      console.log(json)
      setCoins(json);
      setLoading(false);
    })
  }, [])
  return (
    <div>
      <h1>Coni Test ({coins.length})</h1>
      {loading ? (
        <em>Loading</em>
      ) : (
        <>
          <select onChange={onChange}>
            {coins.map((coin, index) => (
              <option value={index} key={coin.id}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
              </option>
            ))}
          </select>
          <hr />

          <input type="number" placeholder="USDT" value={convert ? coins[coin].quotes.USD.price * unit : unit} onChange={usdtPrice} disabled={convert} /> USDT <br /><br />

          <input type="number" placeholder={coins[coin].name} value={convert ? unit : (unit / coins[coin].quotes.USD.price).toFixed(6)} onChange={usdtPrice} disabled={!convert} /> {coins[coin].name}

          <button onClick={coinConvert}>Convert</button>
        </>
      )}

    </div>
  );
}


export default App;
