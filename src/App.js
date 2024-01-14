import Fun_student from "./mycomponents/Fun_student";
import Fun_studentprops from "./mycomponents/Fun_studentprops";
import Student from "./mycomponents/Student";
import Students from "./mycomponents/Students";

// for jsx
import e1 from "./mycomponents/JSX_ex";
import MyState from "./mycomponents/MyState";

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
        <h1>STATE Example</h1>
        <MyState roll={123}/>
        <p>--------------------------------</p>
    </>
  );
}

export default App;
