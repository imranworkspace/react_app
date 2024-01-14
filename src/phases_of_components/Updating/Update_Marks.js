const { Component } = require("react");

class Update_Marks extends Component{
    constructor(props){
        super(props)
        this.state={
            mroll:this.props.roll
        }
        console.log('Update_Marks - constructor call')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Update_Marks - getDerivedStateFromProps')
        if (props.roll !== state.mroll){
            console.log(props.roll)
            console.log('hey')
        }
        else{
            console.log(state.mroll)
        }
        return null
    }
    componentDidMount(){
        console.log('Update_Marks - componentDidMount')
        
    }
    render(){
        return (
            console.log('Update_Marks - rendered')
        )
    }
}
export default Update_Marks