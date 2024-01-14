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
            console.log('your name is '+this.state.name+' and age is '+this.state.age)
        }

        return (
            <div>
                <button onClick={handleClick} >Class Click</button>
            </div>
        )
    }
}

export default Class_Button_Event