import React, {Component} from 'react';
import Background from '../background/Background';


export default class BackgroundHandler extends Component {

    constructor(props){
        super(props)
        this.state = {
            background: "blue"
        }
    }
 
    setBackground = color => this.setState({ background: color });

    handleEnter = () => {
        this.setBackground("green")
    }
    handleLeave = () => {
        this.setBackground("red")
    }

    render = () =>  
    <Background color={this.state.background}> 
        <button onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} ></button>
    </Background>
 }
