import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Components/Search/Search";
import Header from "./Components/Header/Header";
import { Provider } from "react-redux";
import {store} from "./Components/Store/Store";
import WatchList from "./Components/Watchlist/WatchList";
import N_popular from "./Components/N_popular/N_popular";
import NowPlaying from "./Components/NowPlaying/NowPlaying";
import Upkoming from "./Components/Upkoming/Upkoming";
import TopRated from "./Components/TopRated/TopRated";
import TV_popular from "./Components/TV_popular/TV_popular";
import AirToday from "./Components/AirToday/AirToday";
import OnTV from "./Components/OnTv/OnTV";
import TvTopRated from "./Components/TvTopRated/TvTopRated";
import People from "./Components/People/People";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <Provider store={store}>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Header/>} />
          <Route path="/search/:nom" element={<Search />} />
          <Route path="watchlist" element={<WatchList/>}/>
          <Route path='n_popular' element={<N_popular/>}/>
          <Route path="nowPlaying" element={<NowPlaying/>}/>
          <Route path="upkoming" element={<Upkoming/>}/>
          <Route path="topRated" element={<TopRated/>}/>
          <Route path="tv_popular" element={<TV_popular/>}/>
          <Route path="airToday" element={<AirToday/>}/>
          <Route path="ontv" element={<OnTV/>}/>
          <Route path="tvtop" element={<TvTopRated/>}/>
          <Route path="people" element={<People/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
   </Provider>
  </React.StrictMode>
);
