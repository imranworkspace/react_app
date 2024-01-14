import Update_Marks from "./Update_Marks";

const { Component } = require("react");

class Update_Students extends Component{
    constructor(props){
        super(props)
        this.state={
            roll:this.props.roll
        }
        console.log('Update_Students - constructor call')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Update_Students - getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('Update_Students - componentDidMount')
    }
    handleClick=()=>{
        console.log('button clicked');
        this.setState({roll:102})
    }
    render(){
        console.log('Update_Students - rendered')
        return (
            <div>
                <h1>{this.state.roll}</h1>
                <Update_Marks roll />
                <button onClick={this.handleClick}>Updating</button>
            </div>
        )
    }
}
export default Update_Students