import React, { Component } from "react";
import Canvas from "../modules/Canvas.js";
import { exportComponentAsSVG, exportComponentAsJPEG } from 'react-component-export-image';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

import "./Generator.css";
import "./Button.css";
import "../../utilities.css";

class Generator extends Component {
    constructor(props){
        super(props);
        this.state={
            treeNum: 0,
            eyesNum: 0,
            mouthNum: 0,
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
                const timer = setTimeout(() => {
                this.rngOnce();
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
        const maxEyes = this.props.eyesNames.length;
        const maxTree = this.props.treeNames.length;
        const maxMouth = this.props.mouthNames.length;

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
                    <button className="Button-text Button-save" onClick={() => exportComponentAsJPEG(this.componentRef, {fileName: "tree.jpeg"})}>Save</button> 
                </div>
                 
                <Canvas ref={this.componentRef} treeNum={this.state.treeNum} treeNames={this.props.treeNames} eyesNum={this.state.eyesNum} eyesNames={this.props.eyesNames} mouthNum={this.state.mouthNum} mouthNames={this.props.mouthNames}></Canvas> 
            
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
                    <button className="Button-text Button-save" onClick={() => exportComponentAsJPEG(this.componentRef, {fileName: "tree_".concat(this.state.eyesNum).concat("_").concat(this.state.treeNum).concat("_").concat(this.state.mouthNum).concat(".jpeg") })}>Save</button> 
                </div>
                
                <Canvas ref={this.componentRef} treeNum={this.state.treeNum} treeNames={this.props.treeNames} eyesNum={this.state.eyesNum} eyesNames={this.props.eyesNames} mouthNum={this.state.mouthNum} mouthNames={this.props.mouthNames} done={this.state.done}></Canvas> 

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