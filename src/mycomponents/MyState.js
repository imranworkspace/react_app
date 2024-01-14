import { Component } from "react"


class MyState extends Component{
    state={
        name:'imran',
        roll:this.props.roll
    }
    render(){
        return (
            <h1>Hello, your name {this.state.name} and roll {this.state.roll}</h1>
        )
    }
}

export default MyState