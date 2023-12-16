import React, { useEffect, useState } from "react";
import "./Popular.scss";
import axios from "axios";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { BsCurrencyBitcoin, BsFillBookmarkFill } from "react-icons/bs";
import { RiMenuAddLine } from "react-icons/ri";
import { useDispatch } from "react-redux";

export default function Popular() {
  const [onTV, setOnTV] = useState(true);
  const [inTheaters, setInTheaters] = useState(false);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function PopularData() {
      await axios
        .get(
          `${process.env.REACT_APP_BASE_URL_ALL}tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
        )
        .then((ress) => {
          ress.data.results.map((item, index) => {
            item.status = true;
          });
          setData(ress.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    async function popular_InTheaters() {
      await axios
        .get(
          `${process.env.REACT_APP_BASE_URL_ALL}tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
        )
        .then((ress) => {
          ress.data.results.map((item, index) => {
            item.status = true;
          });
          setData2(ress.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    PopularData();
    popular_InTheaters();
  }, []);

  function popular_dot(i) {
    let current = [...data];
    current[i].status = false;
    setData(current);
  }

  function popular_watch(item, index) {
    let current = [...data];
    current[index].status = true;
    dispatch({ type: "add_watch", payload: item });
    setData(current);
  }


  function popular_dot2(i) {
    let current = [...data2];
    current[i].status = false;
    setData2(current);
  }

  function popular_watch2(item, index) {
    let current = [...data2];
    current[index].status = true;
    dispatch({ type: "add_watch", payload: item });
    setData2(current);
  }

  function inTheaters_data() {
    setInTheaters(true);
    setOnTV(false);
  }

  function onTV_data() {
    setOnTV(true);
    setInTheaters(false);
  }

  return (
    <div className="container-fluid popular_container  g-0">
      <div className="popular_sarlavha pt-3">
        <h2>What's Popular</h2>
        <div className="popularData_btn">
          <span className={onTV ? "onTV_hover" : "onTV"} onClick={onTV_data}>
            <p>On TV</p>
          </span>
          <span
            className={inTheaters ? "inTheaters_hover" : "inTheaters"}
            onClick={inTheaters_data}
          >
            <p>In Theaters</p>
          </span>
        </div>
      </div>
      <div className="box_row g-0">
        {onTV ? (
          data.map((item, index) => {
            return (
              <div className="box_popular g-0">
                <img
                  className="popular_img"
                  src={`${
                    process.env.REACT_APP_BASE_IMG_URL + item.poster_path
                  }`}
                  alt="photo"
                />
                <div className="foiz_p">
                  <div className="border_p">
                    <span>{Math.round(item.vote_average * 10)}</span>
                    <span className="foizi_p">%</span>
                  </div>
                </div>
                <h5 className="popular_card_name">{item.name}</h5>
                <p className="popular_card_date">{item.first_air_date}</p>
                <div
                  className="icon_circle_p"
                  onClick={() => popular_dot(index)}
                >
                  <p className="dot"></p>
                  <p className="dot"></p>
                  <p className="dot"></p>
                </div>

                {!item.status && (
                  <ul className="list_ul_p">
                    <li onClick={() => popular_watch(item,index)}>
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
      <div className="box_row g-0">
        {inTheaters ? (
          data2.map((item, index) => {
            return (
              <div className="box_popular g-0">
                <img
                  className="popular_img"
                  src={`${
                    process.env.REACT_APP_BASE_IMG_URL + item.poster_path
                  }`}
                  alt="photo"
                />
                <div className="foiz_p">
                  <div className="border_p">
                    <span>{Math.round(item.vote_average * 10)}</span>
                    <span className="foizi_p">%</span>
                  </div>
                </div>
                <h5 className="popular_card_name">{item.name}</h5>
                <p className="popular_card_date">{item.first_air_date}</p>
                <div
                  className="icon_circle_p"
                  onClick={() => popular_dot2(index)}
                >
                  <p className="dot"></p>
                  <p className="dot"></p>
                  <p className="dot"></p>
                </div>

                {!item.status && (
                  <ul className="list_ul_p">
                    <li onClick={() => popular_watch2(item, index)}>
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
  );
}
