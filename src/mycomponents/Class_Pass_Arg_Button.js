import { Component } from "react";

class Class_Pass_Arg_Button extends Component{
    state={
        email:'imranlatur24@gmail.com'
    }
    
    handleClick=(email,e)=>{
        console.log('button clicked');
        console.log('email found ',email);
        console.log('events ',e);
    
    }

    render(){    
        return (
            <div>
                {/* <button onClick={this.handleClick}>Pass Arg by Button</button> */}
                <button onClick={e=>{
                    this.handleClick(this.state.email,e);
                }}>Pass Arg by Button</button>
            </div>
        )
    }
}

export default Class_Pass_Arg_Button