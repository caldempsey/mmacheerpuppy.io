import React, {Component} from "react";
import './background.css';

export default class Background extends Component {
    constructor(props){  
        super(props); 
        this.state = {
            COLOR_MAP: {
                "red": "#900C3F",
                "purple": "#6c3483 ",
            },
            color: "red"
        }   
 
    }

    // Sets the background to the value of the color in COLOR_MAP, else uses existing value.
    setBackground = (str) => this.setState({...this.state, color: this.COLOR_MAP.has(str) ? this.COLOR_MAP.get(str) : this.COLOR_MAP.get(this.color)})
 
    // Render the background with the color at state.
    render = () =>  
    <div className={"stretch"} style={{ backgroundColor: this.state.color }}>
    { this.props.children }
    </div>
}