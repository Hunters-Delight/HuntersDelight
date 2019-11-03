import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Logo from './logo.png';
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () =>
    <header>
        <div className="container-fluid">
           <div className="row">
               <div className="col-sm-4 navContainer">
                   <div className="row">
                       <div className="col-sm-3 logo">
                            <img className="logoImg" src={Logo} alt=""/>
                       </div>
                       <div className="col-sm-8 logo">
                            <h2>Hunters Delight</h2>
                       </div>
                   </div>

               </div>
               <div className="col-sm-2 navContainer spacer">

               </div>
               <div className="col-sm-5 navContainer">
                   <div className="row">
                       <div className="col-sm-3">
                           <h5>Home</h5>
                       </div>
                       <div className="col-sm-3">
                           <h5>Login</h5>
                       </div>
                       <div className="col-sm-3">
                           <h5>Sign-Up</h5>
                       </div>
                       <div className="col-sm-3">
                           <h5>Contact</h5>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    </header>;


export default Header;