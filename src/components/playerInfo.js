import React, { Component } from 'react';
import './playerInfo.css';

export default class PlayerInfo extends Component {
    render() {
        return(
            <div className="col-lg-9 col-md-10 col-sm-12">
                <h2 className="playername textyellow">NEET MANGAT</h2>
                <hr className="horizontalbreak"/>                        
                <p className="playerbio textblue">
                    Web Developer 
                    <br /> 
                    Player 1
                </p>    
            </div>
        )
    }
}