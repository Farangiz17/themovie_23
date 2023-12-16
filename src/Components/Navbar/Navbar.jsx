import React, { useState } from "react";
import "./Navbar.scss";
import { BsFillBellFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { ImSearch, ImUser } from "react-icons/im";
import logoMobile from "../Images/logo.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [name, setName] = useState(true);
  const [avatar, setAvatar] = useState(true);
  function hamburg() {
    setName(!name);
  }

  function Avatar() {
    setAvatar(!avatar);
  }

  function yopish() {
    setAvatar(!avatar);
  }
  return (
    <div>
      <div className="navbar">
        <div className="container-xxl">
          <div className="row g-0 nav_row">
            <div className="col-6 nav_left">
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className="logo">
                  <h2>TMDB</h2>
                  <div className="logo_belgi"></div>
                </div>
              </Link>
              <ul className="nav_ul">
                <li className="movies">
                  Movies
                  <div className="Movies_hover">
                    <ul>
                      <li>
                        <Link to="/n_popular">Popular</Link>
                      </li>
                      <li>
                        <Link to="/nowPlaying">Now Playing</Link>
                      </li>
                      <li>
                        <Link to="/upkoming">Upkoming</Link>
                      </li>
                      <li>
                        <Link to="/topRated">Top Rated</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="Shows">
                  TV Shows
                  <div className="Shows_hover">
                    <ul>
                      <li>
                        <Link to="tv_popular">Popular</Link>
                      </li>
                      <li>
                        <Link to="airToday">Air Today</Link>
                      </li>
                      <li>
                        <Link to="ontv">On TV</Link>
                      </li>
                      <li>
                        <Link to="tvtop">Top Rated</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="people">
                  People
                  <div className="people_hover">
                    <ul>
                      <li>
                        <Link to="people">Popular People</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="more">
                  More
                  <div className="more_hover">
                    <ul>
                      <li>Discussions</li>
                      <li>Leaderboard</li>
                      <li>Support</li>
                      <li>API</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-6 nav_right">
              <span className="plus">
                <AiOutlinePlus />
              </span>
              <span className="til">EN</span>
              <span className="bell">
                <BsFillBellFill />
              </span>
              <span className="avatar" onClick={Avatar}>
                <p className="p">P</p>
                <div className="hover">Profile and Settings</div>
              </span>

              <div className={avatar ? "d-none" : "profile"}>
                <p>Foydalanuvchi</p>
                <p>View profile</p>
                <hr style={{ margin: "8px" }} />
                <ul style={{ margin: 0, padding: 0 }}>
                  <li
                    className="watchlist"
                    style={{ listStyle: "none", margin: 0 }}
                    onClick={yopish}
                  >
                    <Link to="watchlist">Watch List</Link>
                  </li>
                </ul>
              </div>
              <span className="search">
                <ImSearch />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="nav_mobile">
        <div className="row g-0">
          <div className="col-4">
            <div onClick={hamburg} className={name ? "menu" : "menu_hover"}>
              <p className="p"></p>
              <p className="p"></p>
              <p className="p"></p>
            </div>
          </div>

          <div className="col-4">
            <img className="logo_mobile" src={logoMobile} alt="logophoto" />
          </div>
          <div className="col-4 d-flex justify-content-end pe-4">
            <div className="mobile_nav_icon">
              <ImUser />
              <span className="mobile_search">
                <ImSearch />
              </span>
            </div>
          </div>
        </div>

        <div className={name ? "d-none" : "open_menu"}>
          <ul className="menu_bold">
            <li>
              Movies
              {/* <p>Popular</p>
   <p>Top Rated</p>
   <p>Upcoming</p> */}
            </li>
            <li>TV Shovs</li>
            <li>People</li>
          </ul>
          <div className="menu_p">
            <p>
              <a href="#">Contribution Bible</a>
            </p>
            <p>
              <a href="#">Apps</a>
            </p>
            <p>
              <a href="#">Discussion</a>
            </p>
            <p>
              <a href="#">Leaderboard</a>
            </p>
            <p>
              <a href="#">API</a>
            </p>
            <p>
              <a href="#">Support</a>
            </p>
            <p>
              <a href="#">About</a>
            </p>
          </div>
          <p className="login">Login</p>
        </div>
      </div>
    </div>
  );
}
