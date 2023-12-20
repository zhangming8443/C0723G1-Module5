import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import ES6Component from "./components/ss1/ES6Component";
import SignInComponent from "./components/ss2/SignInComponent";
import StudentListComponent from "./components/ss2/StudentListComponent";
import StudentInfoComponent from "./components/ss3/StudentInfoComponent";
import ToDoAppComponent from "./components/ss3/ToDoAppComponent";
import Counter1 from './components/ss4/Counter1Component.js'
import Counter2 from './components/ss4/Counter2Component.js'
import React, {useState} from "react";

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
                <div>
                    <SignInComponent/>
                </div>
            )

            break;

        case 'StudentList':
            componentToRender = (
                <div>
                    <StudentListComponent/>
                </div>
            )

            break;

        case 'StudentInfo':
            componentToRender = (
                <div>
                    <StudentInfoComponent/>
                </div>
            )

            break;

        case 'TodoApp':
            componentToRender = (
                <div>
                    <ToDoAppComponent/>
                </div>
            )

            break;

        case 'Counter':
            componentToRender = (
                <div>
                    <Counter1/>
                    <Counter2/>
                </div>
            )

            break;
        default:
            componentToRender = null;
    }
    return (
        <div>
            <button style={{marginRight: '10px'}} className="btn btn-success" onClick={handleES6Click}>Exercise 1: ES6
            </button>

            <button style={{marginRight: '10px'}} className="btn btn-success" onClick={handleSignInClick}>Exercise 2.1:
                Sign In
            </button>

            <button style={{marginRight: '10px'}} className="btn btn-success" onClick={handleStudentListClick}>Exercise
                2.2:
                Student List
            </button>

            <button style={{marginRight: '10px'}} className="btn btn-success" onClick={handleStudentInfoClick}>Exercise
                3.1:
                Student Information
            </button>

            <button style={{marginRight: '10px'}} className="btn btn-success" onClick={handleTodoAppClick}>Exercise 3.2:
                Todo App
            </button>

            <button style={{marginRight: '10px'}} className="btn btn-success" onClick={handleCounterClick}>Exercise 4:
                Counter Component
            </button>

            {componentToRender}
        </div>
    );
}

export default App;
