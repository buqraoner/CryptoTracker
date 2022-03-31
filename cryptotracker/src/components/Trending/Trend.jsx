import React from 'react'
import "./Trend.css";

const Trend = ({ name, price_btc, image, symbol }) => {

    return (
        <>
            <div className='coin-container'>
                <div className='row'>
                    <div className='coin'>
                        <img src={image} alt="coin-resim" />
                        <h1>{name}</h1>
                        <p className='symbol'>{symbol}</p>
                    </div>
                    <div className='coin-data'>
                    <p className='coin-price'></p>
                    <p className='coin-volume bugo' ></p>
                    <br/>
                    
                    
                    </div>
                    <div className='price_btc'>{price_btc}</div>
                </div>
            </div>
        </>

    )
}

export default Trend