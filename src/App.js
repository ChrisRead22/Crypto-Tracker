import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';




function App() {
  const[coins, setCoins] = useState([])

useEffect(() => {
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  .then(response => {
    setCoins(response.data)
  }).catch(error => alert('ERROR'))
}, []);

  return (
    <div className="App">
      <div className="coin-search">
        
      </div>
    </div>
  );
}

export default App;
