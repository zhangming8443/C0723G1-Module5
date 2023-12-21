import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from "react";


import ES6Component from "./components/ss1/ES6Component";
import SignInComponent from "./components/ss2/SignInComponent";
import StudentListComponent from "./components/ss2/StudentListComponent";
import StudentInfoComponent from "./components/ss3/StudentInfoComponent";
import ToDoAppComponent from "./components/ss3/ToDoAppComponent";
import Counter1 from './components/ss4/Counter1Component.js'
import Counter2 from './components/ss4/Counter2Component.js'
import SignUpForm from "./components/ss5/practice/SignUpForm";
import ValidateSignUp from "./components/ss5/practice/ValidateSignUp";
import ValidateFormLogin from "./components/ss5/practice/ValidateFormLogin";

function App() {
    const [activeComponent, setActiveComponent] = useState(null);
    const handleCounterClick = () => {
        setActiveComponent('Counter')
    }

    const handleES6Click = () => {
        setActiveComponent('ES6')
    }

    const handleSignInClick = () => {
        setActiveComponent('SignIn')
    }

    const handleStudentListClick = () => {
        setActiveComponent('StudentList')
    }

    const handleStudentInfoClick = () => {
        setActiveComponent('StudentInfo')
    }

    const handleTodoAppClick = () => {
        setActiveComponent('TodoApp')
    }

    const practice5SignUp = () => {
        setActiveComponent('Practice5SignUp')
    }

    const practice52SignUp = () => {
        setActiveComponent('Practice52SignUp')
    }

    const practice53SignUp = () => {
        setActiveComponent('Practice53SignUp')
    }


    let componentToRender;

    switch (activeComponent) {
        case 'ES6':
            componentToRender = (
                <div>
                    <ES6Component/>
                </div>
            )

            break;

        case 'SignIn':
            componentToRender = (
                <div className="container justify-content-center d-flex">
                    <SignInComponent/>
                </div>
            )

            break;

        case 'StudentList':
            componentToRender = (
                <div className="container justify-content-center d-flex">
                    <StudentListComponent/>
                </div>
            )

            break;

        case 'StudentInfo':
            componentToRender = (
                <div className="container justify-content-center d-flex">
                    <StudentInfoComponent/>
                </div>
            )

            break;

        case 'TodoApp':
            componentToRender = (
                <div className="container justify-content-center d-flex">
                    <ToDoAppComponent/>
                </div>
            )

            break;

        case 'Counter':
            componentToRender = (
                <div className="container justify-content-center d-flex">
                    <Counter1/>
                    <Counter2/>
                </div>
            )

            break;

        case 'Practice5SignUp':
            componentToRender = (
                <div className="container justify-content-center d-flex">
                    <SignUpForm/>
                </div>
            )

            break;

        case 'Practice52SignUp':
            componentToRender = (
                <div className="container justify-content-center d-flex">
                    <ValidateSignUp/>
                </div>
            )
        case 'Practice53SignUp':
            componentToRender = (
                <div className="container justify-content-center d-flex">
                    <ValidateFormLogin/>
                </div>
            )

            break;
        default:
            componentToRender = null;
    }
    return (
        <div>
            <h1 align="center">EXERCISE LIST</h1>
            <table className="table table-hover">
                <tr>
                    <td>
                        <button className="btn btn-success"
                                onClick={handleES6Click}>Exercise 1: ES6
                        </button>
                    </td>

                    <td>
                        <button className="btn btn-success"
                                onClick={handleSignInClick}>Exercise 2.1:
                            Sign In
                        </button>
                    </td>
                    <td>
                        <button className="btn btn-success"
                                onClick={handleStudentListClick}>Exercise
                            2.2:
                            Student List
                        </button>
                    </td>
                    <td>
                        <button className="btn btn-success"
                                onClick={handleStudentInfoClick}>Exercise
                            3.1:
                            Student Information
                        </button>
                    </td>
                    <td>
                        <button className="btn btn-success"
                                onClick={handleTodoAppClick}>Exercise 3.2:
                            Todo App
                        </button>
                    </td>

                    <td>
                        <button className="btn btn-success"
                                onClick={handleCounterClick}>Exercise 4:
                            Counter Component
                        </button>
                    </td>
                </tr>

                <tr>
                    <td>
                        <button className="btn btn-success"
                                onClick={practice5SignUp}>Practice
                            5.1
                            Sign Up
                        </button>
                    </td>
                    <td>
                        <button className="btn btn-success"
                                onClick={practice52SignUp}>Practice
                            5.2
                            Validate Sign Up
                        </button>
                    </td>
                    <td>
                        <button className="btn btn-success"
                                onClick={practice53SignUp}>Practice
                            5.3
                            Validate Login
                        </button>
                    </td>
                </tr>
            </table>


            <br/>


            <br/>


            {componentToRender}
        </div>
    );
}

export default App;
