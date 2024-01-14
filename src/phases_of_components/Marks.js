const { Component } = require("react");

class Marks extends Component{
    constructor(){
        super()
        console.log('Marks - constructor call')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Marks - getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('Marks - componentDidMount')
    }
    render(){
        return (
            console.log('Marks - rendered')
        )
    }
}
export default Marks