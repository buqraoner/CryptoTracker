import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import "./MarketData.css";
import Market from './Market';

function MarketData() {
    const [marketData, setMarketData] = useState([]);

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/exchanges#")
            .then(res => {
                setMarketData(res.data);
            })
            .catch(err => console.log("error"));
    }, [])



    return (
        <div>
            <Navbar />
            <h1 className='MarketList'>CRYPTO MARKET LIST</h1>
            {marketData.map(item => {
                 return <Market
                    name={item.name}
                    image={item.image}
                    trust={item.trust_score_rank}
                    kurulusyili={item.year_established}
                    DailyVolume={item.trade_volume_24h_btc}
                    Site={item.url}
                />;

            })}
        </div>

    )
}

export default MarketData