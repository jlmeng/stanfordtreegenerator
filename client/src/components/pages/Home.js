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
        document.title = "trees!!!";
    }

    render() {
        return (
            <div className="u-flex u-textCenter">
                <div className="u-flex u-textCenter u-flex-alignCenter u-flex-justifyCenter">
                    <div className = "Home-title">which <span style={{fontWeight: "bold", color: "#8c1515"}}>sTaNfoRD</span> tree are you?</div>
                    <img className = "Home-logo u-inlineBlock" src={"images/stanfordtree.PNG"}></img> 
                </div>     
                <Generator></Generator>   
            </div>
            );
    }   



}

export default Home;