import Fun_student from "./mycomponents/Fun_student";
import Fun_studentprops from "./mycomponents/Fun_studentprops";
import Student from "./mycomponents/Student";
import Students from "./mycomponents/Students";

// for jsx
import e1 from "./mycomponents/JSX_ex";
import Class_State from "./mycomponents/Class_State";
import Constructor_State from "./mycomponents/Constructor_State";

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
    </>
  );
}

export default App;
