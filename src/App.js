import Fun_student from "./mycomponents/Fun_student";
import Fun_studentprops from "./mycomponents/Fun_studentprops";
import Student from "./mycomponents/Student";
import Students from "./mycomponents/Students";
// for jsx
import e1 from "./mycomponents/JSX_ex";
import Class_State from "./mycomponents/Class_State";
import Constructor_State from "./mycomponents/Constructor_State";
// for button events
import Class_Button_Event from "./mycomponents/Class_Button_Event";
import Function_Button_Event from "./mycomponents/Function_Button_Event";
// for passing arguments 
import Class_Pass_Arg_Button from "./mycomponents/Class_Pass_Arg_Button";
import MyStudents from "./phases_of_components/Mounted/MyStudents";
import Update_Students from "./phases_of_components/Updating/Update_Students";
// for life-cycle-of-REACT

function App() {
  return (
    <>
        <h1>Class Based Component </h1>
        <Student />
        <Students name="afreen"/>
        <p>--------------------------------</p>
        <h1>Function Based Component </h1>
        <Fun_student/>
        <Fun_studentprops name='imran'/>
        <p>--------------------------------</p>
        <h1>JSX Example</h1>
        <p>{e1}</p>
        <p>--------------------------------</p>
        <p>--------------------------------</p>
        <h1>STATE Example Directly Inside Class</h1>
        <Class_State roll={123}/>
        <p>--------------------------------</p>
        <h1>STATE Example Inside the constructor</h1>
        <Constructor_State roll={123}/>
        <p>--------------------------------</p>
        <h1>Button Clicked Event Using Class</h1>
        <Class_Button_Event age={30}/>
        <p>--------------------------------</p>
        <h1>Button Clicked Event Using Function</h1>
        <Function_Button_Event age={29}/>
        <p>--------------------------------</p>
        <h1>Button Clicked Using Passing Arguments To Function</h1>
        <h1>Button Clicked Using bind() function</h1>
        <Class_Pass_Arg_Button/>
        <p>--------------------------------</p>
        <h1>call LifeCycle of React-Mounted</h1>
        <MyStudents />
        <p>--------------------------------</p>
        
        <p>--------------------------------</p>
        <h1>call LifeCycle of React-Updating</h1>
        <Update_Students roll={101} />
        <p>--------------------------------</p>
    </>
  );
}
export default App;
