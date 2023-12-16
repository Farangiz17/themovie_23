import React from "react";
import "./Leaderboard.scss";
import boon from '../Images/boon.jpg'
import mbcooki from '../Images/mbcooki.jpg'
import heli from '../Images/3af6511cf44a709e6ae5b612903c846c.jpeg'
import raze from '../Images/raze.jpg'
import Sheigutn from '../Images/Sheigutn.jpg'


export default function Leaderboard() {
  return (
    <div className="leaderboard">
      <div className="leaderboard_title">
        <h2>Leaderboard</h2>
        <div className="group_">
          <p>
            {" "}
            <span className="yashil"></span> All Time Edits
          </p>
          <p>
            {" "}
            <span className="qizil"></span> Edits This Week
          </p>
        </div>
      </div>
      <div className="row py-2">
        <div className="col-6">

          <div className="box_1">
            <div className="avatar_l">R</div>
            <div className="box_statistika">
              <h5>RuiZafon</h5>
              <p className="box_number">
                <span className="yashil_span"></span> 467,840
              </p>
              <p className="box_number">
                <span className="qizil_span"></span> 20,730
              </p>
            </div>
          </div>

          <div className="box_2">
            <div className="avatar_l">
                <img src={boon} alt="avatar" />
            </div>
            <div className="box_statistika">
              <h5 style={{fontWeight: '700', fontFamily: 'cursive'}}>Boon</h5>
              <p className="box_number">
                <span className="yashil_span"></span> 65,655
              </p>
              <p className="box_number">
                <span className="qizil_span"></span> 7,752
              </p>
            </div>
          </div>
          <div className="box_3">
            <div className="avatar_l">
                S
            </div>
            <div className="box_statistika">
              <h5>SamuelPoli</h5>
              <p className="box_number">
                <span className="yashil_span"></span> 72,062
              </p>
              <p className="box_number">
                <span className="qizil_span"></span>5,112
              </p>
            </div>
          </div>

          <div className="box_4">
            <div className="avatar_l">
              <img style={{borderRadius: '50%'}} src={mbcooki} alt="avatar" />
            </div>
            <div className="box_statistika">
              <h5>mbcooke13</h5>
              <p className="box_number">
                <span className="yashil_span"></span> 74, 683
              </p>
              <p className="box_number">
                <span className="qizil_span"></span> 4,586
              </p>
            </div>
          </div>

          <div className="box_5">
            <div className="avatar_l">
              R
            </div>
            <div className="box_statistika">
              <h5>rajadewa</h5>
              <p className="box_number">
                <span className="yashil_span"></span> 18,588
              </p>
              <p className="box_number">
                <span className="qizil_span"></span> 3,732
              </p>
            </div>
          </div>

        </div>
        <div className="col-6">

        <div className="box_6">
            <div className="avatar_l">
                <img style={{borderRadius: '50%'}} src={heli} alt="" />
            </div>
            <div className="box_statistika">
              <h5>heli5m</h5>
              <p className="box_number">
                <span className="yashil_span"></span> 467,840
              </p>
              <p className="box_number">
                <span className="qizil_span"></span> 20,730
              </p>
            </div>
          </div>

        <div className="box_7">
            <div className="avatar_l">
                <img style={{borderRadius: '50%'}} src={raze} alt="" />
            </div>
            <div className="box_statistika">
              <h5>raze464</h5>
              <p className="box_number">
                <span className="yashil_span"></span> 467,840
              </p>
              <p className="box_number">
                <span className="qizil_span"></span> 20,730
              </p>
            </div>
          </div>

        <div className="box_8">
            <div className="avatar_l">
               R
            </div>
            <div className="box_statistika">
              <h5>Роман</h5>
              <p className="box_number">
                <span className="yashil_span"></span> 15,748
              </p>
              <p className="box_number">
                <span className="qizil_span"></span> 4,637
              </p>
            </div>
          </div>
        <div className="box_9">
            <div className="avatar_l">
               Q
            </div>
            <div className="box_statistika">
              <h5>qualitylover</h5>
              <p className="box_number">
                <span className="yashil_span"></span> 370,819
              </p>
              <p className="box_number">
                <span className="qizil_span"></span> 3,897
              </p>
            </div>
          </div>
        <div className="box_10">
            <div className="avatar_l">
             <img  style={{borderRadius: '50%'}} src={Sheigutn} alt="Sheigutn" />
            </div>
            <div className="box_statistika">
              <h5>Sheigutn</h5>
              <p className="box_number">
                <span className="yashil_span"></span> 487,124
              </p>
              <p className="box_number">
                <span className="qizil_span"></span>3,559
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
