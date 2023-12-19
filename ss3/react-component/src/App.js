import React, {Component} from 'react';
import './App.css';
import './components/StudentInfoComponent';
import StudentInfoComponent from "./components/StudentInfoComponent";
import ToDoApp from "./components/ToDoApp";

class App extends Component {

    render() {
        return (
            <div className="App">
                <StudentInfoComponent/>
                <ToDoApp/>
            </div>
        );
    }
}

export default App;