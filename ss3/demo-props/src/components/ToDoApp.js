import React from 'react';

class ToDoApp extends React.Component {
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
        if ()
    }
}