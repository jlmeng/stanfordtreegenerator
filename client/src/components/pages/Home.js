import React, { Component } from "react";

import "./Home.css";
import "../../utilities.css";
import Generator from "../modules/Generator.js";

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    componentDidMount() {
        document.title = "Home";
    }

    render() {
        return (
            <div className="u-flex">
                <div className = "Home-title">Stanford Tree Generator</div>
                <img className = "Home-logo" src={"images/stanfordtree.PNG"}></img>     
                <Generator></Generator>   
            </div>
            );
    }   



}

export default Home;