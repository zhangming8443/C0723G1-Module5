import React, {Component} from 'react';
import './App.css';
import './components/StudentInfoComponent';
import StudentInfoComponent from "./components/StudentInfoComponent";

class App extends Component {

    render() {
        return (
            <div className="App">
                <StudentInfoComponent/>
            </div>
        );
    }
}

export default App;