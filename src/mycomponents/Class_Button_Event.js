import { Component } from "react";

class Class_Button_Event extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'vicky',
            age:this.props.age
        }
    }
   
    render(){
        const handleClick=()=>{
            console.log('button clicked by class');
            // setState for update on class level
            this.setState({name:'imran'})
        }

        return (
            <div>
                <h1>your name is<i> {this.state.name} </i> and your age is <i>{this.state.age}</i></h1>
                <button onClick={handleClick} >Class Click</button>
            </div>
        )
    }
}

export default Class_Button_Event