import React, {Component} from 'react';
import {ReactDOM } from 'react';
import "./styleDrum.css"
import backgroundDrum from './backgroundDrum.jpg'

class DrumMachine extends Component{
    constructor(props){
        super(props);
        this.state = {
            val: ''
        };
        this.handleHeat1 = this.handleHeat1.bind(this);
    }
    handleHeat1(){
        const q = document.getElementById('heater1');
        q.play();
        document.getElementById('display').textContent = "Heat 1";
    }
    handleHeat2(){
        const w = document.getElementById('heater2');
        w.play();
        document.getElementById('display').textContent = "Heat 2";
    }
    handleHeat3(){
        const e = document.getElementById('heater3');
        e.play();
        document.getElementById('display').textContent = "Heat 3";
    }
    handleHeat4(){
        const a = document.getElementById('heater4');
        a.play();
        document.getElementById('display').textContent = "Heat 4";
    }
    handleClap(){
        const s = document.getElementById('clap');
        s.play();
        document.getElementById('display').textContent = "Clap";
    }
    handleOpen(){
        const d = document.getElementById('open-HH');
        d.play();
        document.getElementById('display').textContent = "Open HH";
    }
    handleKickNH(){
        const z = document.getElementById('kick-n-Hat');
        z.play();
        document.getElementById('display').textContent = "Kick n Hat";
    }
    handleKick(){
        const x = document.getElementById('kick');
        x.play();
        document.getElementById('display').textContent = "Kick";
    }
    handleClosedH(){
        const c = document.getElementById('closed-HH');
        c.play();
        document.getElementById('display').textContent = "closed HH";
    }

    render(){
        window.addEventListener('keydown', (event)=>{
            switch(event.keyCode){
                case 81:
                    this.handleHeat1();
                    break;
                case 87:
                    this.handleHeat2();
                    break;
                case 69:
                    this.handleHeat3();
                    break;
                case 65:
                    this.handleHeat4();
                    break;
                case 83:
                    this.handleClap();
                    break;
                case 68:
                    this.handleOpen();
                    break;
                case 90:
                    this.handleKickNH();
                    break;
                case 88:
                    this.handleKick();
                    break;
                case 67:
                    this.handleClosedH();
                    break;
            }
        });
        


        return (
            <div id='big-con'>
            <img src={backgroundDrum} id='image' />
            <div id="container">
            <div id="drum-machine">

                <div id="display">Display Drum Name</div>


                <div className="drum-pad" onClick={this.handleHeat1} id="Heater1">Q
                    <audio id="heater1">
                        <source src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' type='' />
                    </audio>
                </div>
                <div className="drum-pad" onClick={this.handleHeat2} id="Heater2">W
                    <audio id="heater2">
                        <source src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' type='' />
                    </audio>
                </div>
                <div className="drum-pad" onClick={this.handleHeat3} id="Heater3">E
                    <audio id="heater3">
                        <source src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' type='' />
                    </audio>
                </div>
                <div className="drum-pad" onClick={this.handleHeat4} id="Heater4">A
                    <audio id="heater4">
                        <source src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' type='' />
                    </audio>
                </div>
                <div className="drum-pad" onClick={this.handleClap} id="Clap">S
                    <audio id="clap">
                        <source src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' type='' />
                    </audio>
                </div>
                <div className="drum-pad" onClick={this.handleOpen} id="Open-HH">D
                    <audio id="open-HH">
                        <source src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' type='' />
                    </audio>
                </div>
                <div className="drum-pad" onClick={this.handleKickNH} id="Kick-n-Hat">Z
                    <audio id="kick-n-Hat">
                        <source src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' type='' />
                    </audio>
                </div>
                <div className="drum-pad" onClick={this.handleKick} id="Kick">X
                    <audio id="kick">
                        <source src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' type='' />
                    </audio>
                </div>
                <div className="drum-pad" onClick={this.handleClosedH} id="Closed-HH">C
                    <audio id="closed-HH">
                        <source src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' type='' />
                    </audio>
                </div>
            </div>
            </div>
            </div>
        );
    }
}
export default DrumMachine