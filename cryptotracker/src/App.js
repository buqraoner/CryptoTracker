import './App.css';
import CoinData from "./components/Coin/CoinData";
import * as React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import TrendingData from "./components/Trending/TrendingData";
import MarketData from "./components/Market/MarketData";
import { useMediaQuery } from 'react-responsive';



function App() {
  /*
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)"
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 1224px)"
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 786px)"
  });
  const isPortrait = useMediaQuery({
    query: "(orientation: portrait)"
  });
  const isRetina = useMediaQuery({
    query: "(max-resolution: 300dpi)"
  });
  */
  return (
    <div className="App">
      <div>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CoinData />} />
            <Route path="/Trending" element={<TrendingData />} />
            <Route path="/Market" element={<MarketData />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
