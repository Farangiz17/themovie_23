import React from 'react'
import './Footer.scss'
import footer_logo from '../Images/logo_footer.svg'

export default function Footer() {
  return (
   <div className='footer'>
    <div className="container">
        <div className="row f_row">
            <div className="col-4 f_col">
                <img className='f_logo' style={{width:'130px'}} src={`${footer_logo}`} alt="logo" />
                <p className='f_foyd'>Foydalanuvchi</p>
            </div>
            <div className="col-2 f_col">
                <ul>
                    <li>THE BASICS</li>
                    <li>About TMDB</li>
                    <li>Contact Us</li>
                    <li>Support Forums</li>
                    <li>API</li>
                    <li>System Status</li>
                </ul>
            </div>
            <div className="col-2 f_col">
                <ul>
                    <li>GET INVOLVED</li>
                    <li>Contribution Bible</li>
                    <li>Add New Movie</li>
                    <li>Add New TV Show</li>
                </ul>
            </div>
            <div className="col-2 f_col">
                <ul>
                    <li>COMMUNITY</li>
                    <li>Guidelines</li>
                    <li>Discussions</li>
                    <li>Leaderboard</li>
                    <li>Twitter</li>
                </ul>
            </div>
            <div className="col-2 f_col">
                <ul>
                    <li>LEGAL</li>
                    <li>Terms of Use</li>
                    <li>API Terms of Use</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
    </div>
   </div>
  )
}
