import React, { Component } from "react";
import Canvas from "../modules/Canvas.js";
import { exportComponentAsPNG } from 'react-component-export-image';

import "./Generator.css";
import "./Button.css";
import "../../utilities.css";

class Generator extends Component {
    constructor(props){
        super(props);
        this.state={
            treeNum: 0,
            treeNames: ["images/tree1.png", "images/tree2.png", "images/tree3.png"],
            eyesNum: 0,
            eyesNames: ["images/eyes1.png", "images/eyes2.png", "images/eyes3.png"],
            mouthNum: 0,
            mouthNames: ["images/mouth1.png", "images/mouth2.png", "images/mouth3.png"]
        }
    }

    componentDidMount() {
       
    }

    rngNumbers = () => {
        const min = 0;
        const maxTree = this.state.treeNames.length;
        let randTree = this.state.treeNum;
        while (randTree === this.state.treeNum) {
            randTree = min + Math.floor(Math.random() * (maxTree - min));
        }
        const maxEyes = this.state.eyesNames.length;
        let randEyes = this.state.eyesNum;
        while (randEyes === this.state.eyesNum) {
            randEyes = min + Math.floor(Math.random() * (maxEyes - min));
        }
        const maxMouth = this.state.mouthNames.length;
        let randMouth = this.state.mouthNum;
        while (randMouth === this.state.mouthNum) {
            randMouth = min + Math.floor(Math.random() * (maxMouth - min));
        }
        this.setState({treeNum: randTree, eyesNum: randEyes, mouthNum: randMouth});
    }
ß
    render() {
        
        return (
            <div>
                <button className="Button-text Button-generate" onClick={this.rngNumbers}>Generate</button> 
                <Canvas treeNum={this.state.treeNum} treeNames={this.state.treeNames} eyesNum={this.state.eyesNum} eyesNames={this.state.eyesNames} mouthNum={this.state.mouthNum} mouthNames={this.state.mouthNames}></Canvas> 
                <button className="Button-text Button-save" onClick={this.rngNumbers}>Save</button> 
            </div>
            );
    }   



}

export default Generator;