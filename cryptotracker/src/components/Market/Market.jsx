import React from 'react'
import "./MarketData.css";

export const Market = ({ name, image, trust, kurulusyili, DailyVolume, Site }) => {
    return (
        <div className='container'>
            <div className='coin-container'>
                <div className='row'>
                    <div className='coin'>
                        <img src={image} alt="coin-resim" />
                        <h1>{name}</h1>
                        <p>{trust}</p>
                    </div>

                    <p>{kurulusyili}</p>
                    <div className='coin-data'>
                        <p className='coin-price'></p>
                        <p className='coin-volume bugo '><p className='daily-volume-text'>
                            Daily Volume</p>
                            {DailyVolume}
                            <br />
                            <p className='BTC'>BTC</p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Market
