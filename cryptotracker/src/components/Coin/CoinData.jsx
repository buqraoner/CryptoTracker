import axios from 'axios';
import { useEffect, useState } from 'react';
import './CoinData.css';
import Coin from './Coin';
import Navbar from '../Navbar/Navbar';

function CoinData() {

    const [coins, SetCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
            )
            .then(res => {
                SetCoins(res.data);



            })
            .catch(err => console.log("error"));
    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
    }

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <Navbar />
            <div className="coin-app">
                <div className="coin-search">
                    <h1 className="coin-text">
                        TOP COIN LIST
                    </h1>
                    <form>
                        <input type="text" placeholder="Search"
                            className='coin-input' onChange={handleChange} />
                    </form>
                </div>
                {filteredCoins.map(coin => {
                    return <Coin
                        key={coin.id}
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        marketcap={coin.market_cap}
                        price={coin.current_price}
                        priceChange={coin.price_change_percentage_24h}
                        volume={coin.market_cap}
                    />;
                })}
            </div>
        </>
    )
}

export default CoinData;