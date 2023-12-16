import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import Trending from "../Trending/Trending";
import Latest from "../Latest_trailers/Latest";
import Popular from "../Popular/Popular";
import Leaderboard from "../Leaderboard/Leaderboard";

export default function Header() {
  const [index, setindex] = useState(Math.round(Math.random() * 20));
  const [arr, setArr] = useState([]);
  const [val, setVal] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    async function getData() {
      await axios
        .get(
          `${process.env.REACT_APP_BASE_URL}/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
        )
        .then((ress) => {
          // console.log(ress.data.results);
          setArr(ress.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getData();
  }, []);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && val != "") {
      Search();
    }
  });
  function Search() {
    navigate(`/search/${val}`);
  }

  return (
    <div max-width={1200}>
      {arr[index] && (
        <div
          width="100%"
          style={{
            backgroundImage: `url(${
              process.env.REACT_APP_BASE_IMG_URL + arr[index].backdrop_path
            })`,
            backgroundSize: "100%",
            objectFit: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            height: "300px",
            display: "block",
            backgroundSize: 'cover'
          }}
        >
          <div className="container">
            <div className="sarlavha">
              <h1>Welcome.</h1>
              <h3>
                Millions of movies, TV shows and people to discover. Explore
                now.
              </h3>
            </div>
            <div className="search_resp" style={{ position: "relative" }}>
              <input
                className="input_search"
                type="text"
                placeholder="Search for a movie, tv show, person......"
                onInput={(val) => setVal(val.target.value)}
              />
              <button className="button_search" onClick={Search}>
                Search
              </button>
            </div>
          </div>
        </div>
      )}
      <Trending />
      {/* <Latest /> */}
      {/* <Popular /> */}
      {/* <Leaderboard /> */}
    </div>
  );
}
