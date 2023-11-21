import React from "react";
import './style.css'

function Header (){
    return(
        <header>
            <a href="#"><img className="button-img"  src="./img/google-bard-icon.svg" alt="logo" /></a>
            <a className="button" href="#">clickme</a>
            <a className="button" href="#">clickme</a>
            <a className="button" href="#">clickme</a>
            <a className="button" href="#">clickme</a>
            <input type="text" placeholder="title-text" />
        </header>
);
}
export default Header;