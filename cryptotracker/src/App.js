import './App.css';
import CoinData from "./components/Coin/CoinData";
import * as React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import TrendingData from "./components/Trending/TrendingData";
import MarketData from "./components/Market/MarketData";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CoinData />} />
          <Route path="/Trending" element={<TrendingData />} />
          <Route path="/Market" element={<MarketData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
