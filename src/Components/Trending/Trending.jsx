import React, { useState, useEffect } from "react";
import "./Trending.scss";
import axios from "axios";
import fon from "../Images/fon.svg";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { RiMenuAddLine } from "react-icons/ri";
import { useDispatch } from "react-redux";

export default function Trending() {
  const [Week, setWeek] = useState(false);
  const [Today, setToday] = useState(true);
  const [trendingMas, setTrendingMas] = useState([]);
  const [trendingMasW, setTrendingMasW] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function dataT() {
      await axios
        .get(
          `${process.env.REACT_APP_BASE_URL_ALL}trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
        )
        .then((ress) => {
          // console.log(ress.data.results);
          ress.data.results.map((item, index) => {
            item.status = true;
          });
          setTrendingMas(ress.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    async function dataW() {
      await axios
        .get(
          `${process.env.REACT_APP_BASE_URL_ALL}trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`
        )
        .then((ress) => {
          // console.log(ress.data.results, 'trin');
          ress.data.results.map((item, index) => {
            item.status = true;
          });
          setTrendingMasW(ress.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    dataT();
    dataW();
  }, []);
  function today() {
    setWeek(false);
    setToday(true);
  }

  function week() {
    setToday(false);
    setWeek(true);
  }

  function dot_list(i) {
    let yangi_mas = [...trendingMas];
    yangi_mas[i].status = false;
    setTrendingMas(yangi_mas);
  }

  function watchList(item, index) {
    let yangi_mas = [...trendingMas];
    yangi_mas[index].status = true;
    dispatch({ type: "add_watch", payload: item });
    setTrendingMas(yangi_mas);
  }

  function dot_listW(i) {
    let yangi_mas = [...trendingMasW];
    yangi_mas[i].status = false;
    setTrendingMasW(yangi_mas);
  }

  function watchListW(item, index) {
    let yangi_mas = [...trendingMasW];
    yangi_mas[index].status = true;
    dispatch({ type: "add_watch", payload: item });
    setTrendingMasW(yangi_mas);
  }

  return (
    <div className="training_big">
      <div className="container" style={{ position: "relative" }}>
        <div className="trending">
          <p className="trending_p"> Trending</p>
          <div className="change">
            <span onClick={today} className={Today ? "today_hover" : "today"}>
              <p>Today</p>
            </span>
            <span onClick={week} className={Week ? "week_hover" : "week"}>
              <p>This Week</p>
            </span>
          </div>
        </div>
      </div>
      <div className="fonImg" style={{ backgroundImage: `url(${fon})` }}>
        <div className="cardlar">
          {Today ? (
            trendingMas.map((item, index) => {
              return (
                <div style={{ position: "relative" }}>
                  <div
                    className="box"
                    style={
                      item.status
                        ? { filter: "blur(0px)" }
                        : { filter: "blur(10px)" }
                    }
                  >
                    <img
                      className="box_img"
                      src={`${
                        process.env.REACT_APP_BASE_IMG_URL + item.poster_path
                      }`}
                      alt="photo"
                    />
                    <div className="foiz">
                      <div className="border">
                        <span>{Math.round(item.vote_average * 10)}</span>
                        <span className="foizi">%</span>
                      </div>
                    </div>
                    <h5 className="box_name">{item.original_title}</h5>
                    <p className="box_data">{item.release_date}</p>
                  </div>

                  <div className="icon_circle" onClick={() => dot_list(index)}>
                    <p className="dot"></p>
                    <p className="dot"></p>
                    <p className="dot"></p>
                  </div>
                  {!item.status && (
                    <ul className="list_ul">
                      <li onClick={() => watchList(item, index)}>
                        <span>
                          <BsFillBookmarkFill />
                        </span>{" "}
                        Watchlist
                      </li>
                      <li>
                        <span>
                          <AiOutlineHeart />
                        </span>{" "}
                        Favorite
                      </li>
                      <li>
                        <span>
                          <AiFillStar />
                        </span>{" "}
                        Your rating
                      </li>
                      <li>
                        <span>
                          <RiMenuAddLine />
                        </span>{" "}
                        Add to list
                      </li>
                    </ul>
                  )}
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
        <div className="cardlar">
          {Week ? (
            trendingMasW.map((item, index) => {
              return (
                <div style={{ position: "relative" }}>
                  <div
                    className="box"
                    style={
                      item.status
                        ? { filter: "blur(0px)" }
                        : { filter: "blur(10px)" }
                    }
                  >
                    <img
                      className="box_img"
                      src={`${
                        process.env.REACT_APP_BASE_IMG_URL + item.poster_path
                      }`}
                      alt="photo"
                    />
                    <div className="foiz">
                      <div className="border">
                        <span>{Math.round(item.vote_average * 10)}</span>
                        <span className="foizi">%</span>
                      </div>
                    </div>
                    <h5 className="box_name">{item.original_title}</h5>
                    <p className="box_data">{item.release_date}</p>
                  </div>
                  <div className="icon_circle" onClick={() => dot_listW(index)}>
                    <p className="dot"></p>
                    <p className="dot"></p>
                    <p className="dot"></p>
                  </div>

                  {!item.status && (
                    <ul className="list_ul">
                      <li onClick={() => watchListW(item, index)}>
                        <span>
                          <BsFillBookmarkFill />
                        </span>{" "}
                        Watchlist
                      </li>
                      <li>
                        <span>
                          <AiOutlineHeart />
                        </span>{" "}
                        Favorite
                      </li>
                      <li>
                        <span>
                          <AiFillStar />
                        </span>{" "}
                        Your rating
                      </li>
                      <li>
                        <span>
                          <RiMenuAddLine />
                        </span>{" "}
                        Add to list
                      </li>
                    </ul>
                  )}
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
