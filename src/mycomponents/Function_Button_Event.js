import { render } from "@testing-library/react"



const Function_Button_Event=(props)=>{
    const handleClick=()=>{
        console.log('button clicked by function');
        console.log('your age is '+props.age)
    }

    const visit_Google=()=>{

    }
    return(
        <div>
            <button onClick={handleClick}>Function Click</button> <br></br>
            <a href="https://www.google.com/" onClick={visit_Google}>Go To Google </a>
        </div>
    )
    
}

export default Function_Button_Event