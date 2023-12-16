import React from "react";
import { useDispatch } from "react-redux";
import watchImg from "../Images/watch.svg";
import {IoEllipsisHorizontalCircle} from 'react-icons/io5'
import {BsChevronDown, BsArrowDown} from 'react-icons/bs'
import {AiFillStar, AiFillHeart, AiOutlineClose} from 'react-icons/ai'
import {TfiMenuAlt} from 'react-icons/tfi'
import "./WatchList.scss";

export default function WatchList() {
  const dispatch = useDispatch()
  const watchlist = JSON.parse(localStorage.getItem('movie'))
  console.log(watchlist, 'bu localstoreagedan keldi');

  function Remove(item) {
    dispatch({type: 'del_watch', payload: item})
    console.log('ishladi');
  }

  return (
    <div>
      <div
        className="watch_header"
        style={{ backgroundImage: `url(${watchImg})` }}
      >
        <div className="w_avatar">F</div>
        <div className="w_profile">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              gap: "5px",
              marginLeft: "-25px",
            }}
          >
            <h2 className="foydalanuvchi">Foydalanuvchi</h2>
            <p className="member">Member since April 2023</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="progres_movie">
                30 <span className="foizz">%</span>
                </div>
              <div className="bulim_nomi">
                <p>Average</p>
                <p>Movie Score</p>
              </div>
            </div>
            <div className="hr"></div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="progres_tv">
              
                  70 <span className="foizz">%</span>
                
              </div>
              <div className="bulim_nomi">
                <p>Average</p>
                <p>TV Score</p>
              </div>
              {/* <Progress/> */}
            </div>
          </div>
        </div>
      </div>
      <div className="watch_navbar">
        <ul>
          <li>
            <select class="form-select" style={{width: '120px'}}>
              <option selected>Overview</option>
              <option value="1">Main</option>
              <option value="2">Favorites</option>
              <option value="3">Recommendations</option>
            </select>
          </li>
          <li>Discussion</li>
          <li>Lists</li>
          <li>
            <select class="form-select" aria-label="Default select example">
              <option selected>Overview</option>
              <option value="1">Movies</option>
              <option value="2">TV Shows</option>
            </select>
          </li>
          <li>
            <select class="form-select" aria-label="Default select example">
              <option selected>Watchlist</option>
              <option value="1">Movies</option>
              <option value="2">TV shows</option>
            </select>
          </li>
        </ul>
      </div>
      <hr style={{margin: '0px'}} />
    <div className="container-fluid">
    <div className="watch_row">
        <div className="row_left">
          <h2>My Watchlist</h2>
         <p className="icon_watchlist_row"> <IoEllipsisHorizontalCircle/></p>
         <p>Movies <span>3</span></p>
         <p>TV <span>0</span></p>
        </div>
        <div className="row_right">
          <p>Filter by:</p>
          <p className="dateAdded">Date Added  <BsChevronDown/></p>
          <p>Order  <BsArrowDown/></p>
        </div>
      </div>
      {watchlist &&
        watchlist.map((item, index) => {
          return (
            <div className="Watch_list_card" key={index}>
              <img className="card_img" src={
                     ( item.poster_path)
                        ? `${
                            process.env.REACT_APP_BASE_IMG_URL +
                            item.poster_path
                          }`
                        : "data:image/jpeg;base64,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"
                    } alt="photo" />
              <div>
                <div className="card_name">
                  <div className="process">60 <span>%</span></div>
                  <div className="card_title_head">
                    <p className="title">{item.title}</p>
                    <p className="data">{item.release_date}</p>
                  </div>
                </div>
                <p className="overview" style={{textAlign:"left"}}>{item.overview}</p>
                <div className="card_icons">
                  <p><span><AiFillStar/> </span> Your rating</p>
                  <p><span className="Like"><AiFillHeart/> </span> Favorite</p>
                  <p><span><TfiMenuAlt/> </span> Add to list</p>
                  <p style={{cursor:'pointer'}} onClick={() => Remove(item)}><span><AiOutlineClose/> </span> Remove</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
    </div>
  );
}
