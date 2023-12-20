import React from 'react';

class ToDoAppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            item: event.target.value
        })
    }

    handleAddItem = () => {
        const {list, item} = this.state;
        if (item.trim() !== '') {
            const updatedList = [...list, item]
            this.setState({
                list: updatedList,
                item: ''
            });
        } else {
            alert("Please enter the task !")
        }
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <input type="text" value={this.state.item} onChange={this.handleChange}/>
                <button onClick={this.handleAddItem}>Add</button>
                <ul>
                    {this.state.list.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default ToDoAppComponent;