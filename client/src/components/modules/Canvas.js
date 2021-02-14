import React, { Component } from "react";

import "./Canvas.css";
import "../../utilities.css";

class Canvas extends Component {
    constructor(props){
        /*
        props include tree number, eyes number, mouth number
        */
        super(props);
        this.state={
        }
    }

    componentDidMount() {
        this.props.eyesNames.forEach((picture) => {
            const img = new Image();
            img.src = picture.fileName;
        });

        this.props.treeNames.forEach((picture) => {
            const img = new Image();
            img.src = picture.fileName;
        });

        this.props.mouthNames.forEach((picture) => {
            const img = new Image();
            img.src = picture.fileName;
        });
    }

    render() {
        return (
            <div className="Canvas-container">
                <img className="Canvas-tree" src={this.props.treeNames[this.props.treeNum]}></img>
                <img className="Canvas-eyes" src={this.props.eyesNames[this.props.eyesNum]}></img>
                <img className="Canvas-mouth" src={this.props.mouthNames[this.props.mouthNum]}></img>
            </div>
            );
    }   
}

export default Canvas;