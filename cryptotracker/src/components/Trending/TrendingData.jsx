import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import Trend from './Trend';
import "./Trend.css";



function Trending() {
    const [trendCoin, setTrendCoin] = useState([]);


    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/search/trending")
            .then(res => {
                setTrendCoin(res.data.coins);
                //console.log(res.data.coins[0].item.name);
                //console.log(res.data.coins[0].item.price_btc);
            })
            .catch(err => console.log("error"));


    }, [])




    return (
        <>
            <Navbar />
            <div>
                <h1 className='Baslik'>TOP TREND COINS</h1>
                <div className='coin-container'>
                    <div className='row'>
                        <p className='coin-P'>Coin</p>
                        
                    </div>
                    
                </div>
                
                <div className='trending-coin'>
                    {trendCoin.map(coin => {
                        return <Trend
                            key={coin.coin_id}
                            name={coin.item.name}
                            price_btc={coin.item.price_btc}
                            symbol={coin.item.symbol}
                            image={coin.item.small}
                        />;
                    })}
                </div>
            </div>





        </>
    )
}

export default Trending