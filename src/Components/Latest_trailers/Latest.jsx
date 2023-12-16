import React, { useState, useEffect } from "react";
import axios from "axios";
import './Latest.scss'

export default function Latest() {
  const [api, setApi] = useState();
  // await axios.get(`${process.env.REACT_APP_BASE_URL_ALL}tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
  // bu popular
  // https://api.themoviedb.org/3/tv/{tv_id}/videos?api_key=<<api_key>>&language=en-US
  useEffect(() => {
    async function latest_data() {
      await axios
        .get(
          `${process.env.REACT_APP_BASE_URL_ALL}tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
        )
        .then((ress) => {
          // console.log(ress.data.results, "bu latest");
          setApi(ress.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    latest_data();
  }, []);

  return (
    <div className="trailers_big">
     <div className="container-fluid px-4">
     <div className="trailers_btn_group">
        <h2>Latest Trailers</h2>
        <div className="button_tr">
          <span className="span_on_hover">On TV</span>
          <span className="span_in">In Theaters</span>
        </div>
      </div>
     <div className="trailers_cards">
     {(api) &&
        api.map((item, index) => {
           return(
            <div key={index} className="cards">
            <img className="img_tr" src={`${process.env.REACT_APP_BASE_IMG_URL + item.poster_path}`} alt="photo"/>
            <div className="play"></div>
          <p className="py-3" style={{fontSize: '18px'}}>{item.name}</p>
          {/* <p>{item.overview}</p> */}
          </div>
           )
        })
    }
     </div>
     </div>
    </div>
  );
}
