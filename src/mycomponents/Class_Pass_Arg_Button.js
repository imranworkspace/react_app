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
                {/* call by event  */}
                <button onClick={e=>{
                    this.handleClick(this.state.email,e);
                }}>Pass Arg by Button</button>  <br></br> <br></br>
                
                {/* call by bind() function */}
                <button onClick={this.handleClick.bind(this,this.state.email)}>Pass Arg by Bind function</button>

            </div>
        )
    }
}

export default Class_Pass_Arg_Button