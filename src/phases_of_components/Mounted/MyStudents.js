import Marks from "./Marks";

const { Component } = require("react");

class MyStudents extends Component{
    constructor(props){
        super(props)
        console.log('MyStudents - constructor call')
    }
    static getDerivedStateFromProps(props,state){
        console.log('MyStudents - getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('MyStudents - componentDidMount')
    }
    render(){
        console.log('MyStudents - rendered')
        return (
            <Marks />
        )
    }
}
export default MyStudents