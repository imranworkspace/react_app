import { Component } from "react"


class Constructor_State extends Component{
    constructor(props){
        super(props) 
        this.state={
            name:'zunaisha',
            roll:this.props.roll
        }
    }
    
    render(){
        return (
            <h1>Hello, your name {this.state.name} and roll {this.state.roll}</h1>
        )
    }
}

export default Constructor_State