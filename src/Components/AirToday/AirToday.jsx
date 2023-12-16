import React, {useEffect, useState} from 'react'
import { BiChevronRight } from "react-icons/bi";
import {AiOutlineHeart, AiFillStar} from 'react-icons/ai'
import {BsFillBookmarkFill} from 'react-icons/bs'
import {RiMenuAddLine} from 'react-icons/ri'
import {useDispatch} from 'react-redux'
import axios from "axios";
import Footer from '../Footer/Footer'
// watch bitta chizyapti
export default function AirToday() {
    const [airToday, setAirData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
      async function popularData() {
        await axios
          .get(
            `${process.env.REACT_APP_BASE_URL_ALL}tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
          )
          .then((ress) => {
            // console.log(ress, "bu ress");
            setAirData(ress.data.results);
            ress.data.results.map((item, index) => {
              item.status = true
            })
          })
          .catch((err) => {
            console.log(err);
          });
      }
      popularData();
    }, []);
  
    function watchList(item, index) {
      let current = [...airToday]
      current[index].status = true
      dispatch({type: 'add_watch', payload: item})
      setAirData(current)
    }
  
    function dotPopular(index) {
      let current = [...airToday]
      current[index].status = false
      setAirData(current)
    }
  
  return (
    <div className="container-fluid popular_container">
      <div className="row">
        <div className="col-3 col_3_width">
          <div className="left_box">
            <h3 className="left_box_name">Popular Movies</h3>
            <div className="sort">
              <div className="sort_title">
                <p>Sort</p>
                <p>
                  <BiChevronRight />
                </p>
              </div>
              <hr style={{ margin: 0, opacity: "0.1" }} />
              <div className="sort_result">
                <p>Sort Results By</p>
                <p className="sort_popularity">Popularity Descending</p>
              </div>
            </div>
            <div className="fiter">
              <p>Filters</p>
              <p>
                <BiChevronRight />
              </p>
            </div>
            <div className="Where">
              <p>Where To Watch</p>
              <p>
                <BiChevronRight />
              </p>
            </div>
            <div className="search_btn">
              <p>Search</p>
            </div>
          </div>
        </div>
        <div className="col-9 col_9_pop">
          <div className="row_popular">
            {(airToday) &&
              airToday.map((item, index) => {
                return (
                  <div key={index} className="col_popular">
                    <div className="card popular_card">
                      <img
                        className="popular_Img"
                        src={`${
                          process.env.REACT_APP_BASE_IMG_URL + item.poster_path
                        }`}
                        alt="poster_path"
                      />
                      <div className="foiz_pop">
                        <div className="border_pop">
                          <span>{Math.round(item.vote_average * 10)}</span>
                          <span className="foizi_pop">%</span>
                        </div>
                      </div>
                      <h5 className="popular_card_name">{item.name}</h5>
                      <p className="popular_card_date">{item.first_air_date}</p>
                      <div className="icon_circle icon_circle_popular" onClick={() => dotPopular(index)}>
                    <p className="dot"></p>
                    <p className="dot"></p>
                    <p className="dot"></p>
                  </div>
                  {
                    (!item.status) && 
                    <ul className='list_ul'>
                    <li onClick={() => watchList(item, index)} ><span><BsFillBookmarkFill/></span> Watchlist</li>
                    <li><span><AiOutlineHeart/></span> Favorite</li>
                    <li><span><AiFillStar/></span> Your rating</li>
                    <li><span><RiMenuAddLine/></span> Add to list</li>
                  </ul>
                  }
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  )
}
