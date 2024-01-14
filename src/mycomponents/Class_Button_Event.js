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

        // access state and props, update data using function or arrow fun
        const Update_State_Click=()=>{
            this.setState(function(state,props){
                console.log('before update')
                console.log('state ',state)
                console.log('props ',props)
                console.log('----------------')
                console.log('after update')
                console.log('state ',state)
                console.log('props ',props)
                this.setState({name:'afeen',age:27})

            })
        }
        

        return (
            <div>
                <h1>your name is<i> {this.state.name} </i> and your age is <i>{this.state.age}</i></h1>
                <button onClick={handleClick} >Class Click</button> <br></br>
                <button onClick={Update_State_Click} >Update by function Click</button>

            </div>
        )
    }
}

export default Class_Button_Event