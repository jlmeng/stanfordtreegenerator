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
                <div className="u-flex u-textCenter">
                    <div className="u-flex u-textCenter u-flex-alignCenter u-flex-justifyCenter">
                        <div className = "Home-title">which <span style={{fontWeight: "bold", color: "#8c1515"}}>sTaNfoRD</span> tree are you?</div>
                        <img className = "Home-logo u-inlineBlock" src={"images/stanfordtree.PNG"}></img> 
                    </div>     
                    <Generator 
                        treeNames={["images/tree1.svg", "images/tree2.svg", "images/tree3.svg", "images/tree4.svg", "images/tree5.svg", "images/tree6.svg", "images/tree7.svg", "images/tree8.svg", "images/tree9.svg", "images/tree10.svg", "images/tree11.svg", "images/tree12.svg", "images/tree13.svg", "images/tree14.svg", "images/tree15.svg", "images/tree16.svg"]} 
                        eyesNames={["images/eyes1.svg", "images/eyes2.svg", "images/eyes3.svg", "images/eyes4.svg", "images/eyes5.svg", "images/eyes6.svg", "images/eyes7.svg", "images/eyes8.svg", "images/eyes9.svg", "images/eyes10.svg", "images/eyes11.svg", "images/eyes12.svg", "images/eyes13.svg", "images/eyes14.svg", "images/eyes15.svg", "images/eyes16.svg", "images/eyes17.svg", "images/eyes18.svg", "images/eyes19.svg", "images/eyes20.svg"]}
                        mouthNames={["images/mouth1.svg", "images/mouth2.svg", "images/mouth3.svg", "images/mouth4.svg", "images/mouth5.svg", "images/mouth6.svg", "images/mouth7.svg", "images/mouth8.svg", "images/mouth9.svg", "images/mouth10.svg", "images/mouth11.svg", "images/mouth12.svg", "images/mouth13.svg", "images/mouth14.svg", "images/mouth15.svg", "images/mouth16.svg", "images/mouth17.svg", ]}
                    ></Generator>   
                </div>

            </div>
            
            );
    }   



}

export default Home;