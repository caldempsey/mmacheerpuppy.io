import React, {Component} from "react";
import './background.css';

export default class Background extends Component {
    color = "red"
   
    render = () =>  
    <div className={"stretch"} style={{ backgroundColor: this.props.color }}>
      { this.props.children }
    </div>
}