import React, {Component} from 'react';
import { Component, ReactDOM } from 'react';

class DrumMachine extends Component{
    constructor(props){
        super(props);
        this.state = {
            val: ''
        }
    }



    render(){
        
        return (
            <div id="drum-machine">
                <div id="display"></div>


                <div className="drum-pad" id="Heater1">Q</div>
                <div className="drum-pad" id="Heater2">W</div>
                <div className="drum-pad" id="Heater3">E</div>
                <div className="drum-pad" id="Heater4">A</div>
                <div className="drum-pad" id="Clap">S</div>
                <div className="drum-pad" id="Open-HH">D</div>
                <div className="drum-pad" id="Kick-n-Hat">Z</div>
                <div className="drum-pad" id="Kick">X</div>
                <div className="drum-pad" id="Closed-HH">C</div>
            </div>
        );
    }
}