import { Component } from "react";
import PropTypes from 'prop-types';

class Typechecking extends Component{
    render(){
        return (
            <>
            <h1>Your Name : {this.props.name} </h1> 
            <h1>Your Age : {this.props.age}</h1> 
        </>
        )
        
    }
}

Typechecking.pt = {
    name:PropTypes.string.isRequired,
    roll:PropTypes.number.isRequired
    // age:pt.age
}

Typechecking.defaultProps = {
    name:'Geekyshows',
    age:20
}

export default Typechecking