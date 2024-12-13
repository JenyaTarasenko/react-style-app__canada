import React from 'react';
import './style.css';



const ButtonOrange = ({ text, onClick, textClassName })=>{

    return(

        <div className="home-button">

            <button className={`home-btn ${ textClassName|| ''}`} onClick={onClick}> {text}</button>
                   
        </div>

    );
}

export default ButtonOrange;