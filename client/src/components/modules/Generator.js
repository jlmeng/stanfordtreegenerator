import React, { Component } from "react";
import Canvas from "../modules/Canvas.js";
import { exportComponentAsPNG } from 'react-component-export-image';
import Confetti from 'react-confetti';

import "./Generator.css";
import "./Button.css";
import "../../utilities.css";

class Generator extends Component {
    constructor(props){
        super(props);
        this.state={
            treeNum: 0,
            treeNames: ["images/tree1.png", "images/tree2.png", "images/tree3.png", "images/tree4.png", "images/tree5.png", "images/tree6.png", "images/tree7.png", "images/tree8.png", "images/tree9.png", "images/tree10.png", "images/tree11.png", "images/tree12.png"],
            eyesNum: 0,
            eyesNames: ["images/eyes1.png", "images/eyes2.png", "images/eyes3.png", "images/eyes4.png", "images/eyes5.png", "images/eyes6.png", "images/eyes7.png", "images/eyes8.png", "images/eyes9.png", "images/eyes10.png", "images/eyes11.png", "images/eyes12.png", "images/eyes13.png", "images/eyes14.png", "images/eyes15.png", "images/eyes16.png", "images/eyes17.png", "images/eyes18.png"],
            mouthNum: 0,
            mouthNames: ["images/mouth1.png", "images/mouth2.png", "images/mouth3.png", "images/mouth4.png", "images/mouth5.png", ],
            lastTime: Date.now(),
            currentTime: Date.now(),
            cycling: false,
            counter: 0,
            speed: 100,
            done: false,
            eyesLocked: false,
            treeLocked: false,
            mouthLocked: false
        }
        this.componentRef = React.createRef();
    }

    async componentDidUpdate() {
        if (this.state.cycling === true) {
            if (this.state.counter < 15) {
                
                console.log(this.state.cycling);
                console.log(this.state.speed);
                const timer = setTimeout(() => {
                this.rngOnce();
                console.log(this.state.counter)
            }, this.state.speed);
            return () => clearTimeout(timer);
            }
        
            else {
                this.setState({cycling: false, counter: 0, speed: 100, done: true});
            }
            
 
        } 
    }

    startCycle = () => {
        this.setState({cycling: true});
    }

    rngOnce = () => {

        const min = 0;
        const maxEyes = this.state.eyesNames.length;
        const maxTree = this.state.treeNames.length;
        const maxMouth = this.state.mouthNames.length;

        let randEyes = this.state.eyesNum;
        let randTree = this.state.treeNum;
        let randMouth = this.state.mouthNum;
        
        while (this.state.eyesLocked === false && randEyes === this.state.eyesNum) {
            randEyes = min + Math.floor(Math.random() * (maxEyes - min));
        }

        while (this.state.treeLocked === false && randTree === this.state.treeNum) {
            randTree = min + Math.floor(Math.random() * (maxTree - min));
        }
                
        while (this.state.mouthLocked === false && randMouth === this.state.mouthNum) {
            randMouth = min + Math.floor(Math.random() * (maxMouth - min));
        }
        this.setState({done: false, treeNum: randTree, eyesNum: randEyes, mouthNum: randMouth, counter: this.state.counter+1, speed: (this.state.speed + (.7*(this.state.counter)**1.8))});
    }

    onClickEyes = () => {
        this.setState({eyesLocked: !this.state.eyesLocked});
    }
    onClickTree  = () =>  {
        this.setState({treeLocked: !this.state.treeLocked});
    }
    onClickMouth  = () => {
        this.setState({mouthLocked: !this.state.mouthLocked});
    }

    render() {
        
        return this.state.done === false ? (
            <div className="u-flex u-flex-alignCenter u-flex-justifyCenter">
                <div>
                    <button className="Button-text Button-generate" onClick={this.startCycle}>Generate</button>
                    <button className="Button-text Button-save" onClick={() => exportComponentAsPNG(this.componentRef, {fileName: "tree.png"})}>Save</button> 
                </div>
                 
                <Canvas ref={this.componentRef} treeNum={this.state.treeNum} treeNames={this.state.treeNames} eyesNum={this.state.eyesNum} eyesNames={this.state.eyesNames} mouthNum={this.state.mouthNum} mouthNames={this.state.mouthNames}></Canvas> 
            
                <img src={"images/lock.svg"} className="Button-lock"></img>
                <div>
                    {/* lock buttons */}
                    <button className={this.state.eyesLocked=== true ? "Button-lockEyes Button-lockEyesActive" : "Button-lockEyes"} onClick={this.onClickEyes}></button>
                    <button className={this.state.treeLocked=== true ? "Button-lockTree Button-lockTreeActive" : "Button-lockTree"} onClick={this.onClickTree}></button>
                    <button className={this.state.mouthLocked=== true ? "Button-lockMouth Button-lockMouthActive" : "Button-lockMouth"} onClick={this.onClickMouth}></button>
                </div>
            
            </div>
          ) : 
            <div className="u-flex u-flex-alignCenter u-flex-justifyCenter">
                <div>
                    <button className="Button-text Button-generate" onClick={this.startCycle}>Generate</button>
                    <button className="Button-text Button-save" onClick={() => exportComponentAsPNG(this.componentRef, {fileName: "tree.png"})}>Save</button> 
                </div>
                
                <Canvas ref={this.componentRef} treeNum={this.state.treeNum} treeNames={this.state.treeNames} eyesNum={this.state.eyesNum} eyesNames={this.state.eyesNames} mouthNum={this.state.mouthNum} mouthNames={this.state.mouthNames}></Canvas> 

                <Confetti recycle={false}></Confetti>

                <img src={"images/lock.svg"} className="Button-lock"></img>
                <div>
                    {/* lock buttons */}
                    <button className={this.state.eyesLocked=== true ? "Button-lockEyes Button-lockEyesActive" : "Button-lockEyes"} onClick={this.onClickEyes}></button>
                    <button className={this.state.treeLocked=== true ? "Button-lockTree Button-lockTreeActive" : "Button-lockTree"} onClick={this.onClickTree}></button>
                    <button className={this.state.mouthLocked=== true ? "Button-lockMouth Button-lockMouthActive" : "Button-lockMouth"} onClick={this.onClickMouth}></button>
                </div>
            </div>;
    }   



}

export default Generator;