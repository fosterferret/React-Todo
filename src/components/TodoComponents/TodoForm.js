import React, { Component } from 'react';

export class TodoForm extends Component {
    state = {
        title: ''
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addTask({id: Date.now(), title: this.state.title, isCompleted: false});
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState({ title: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    name="title"
                    type="text" 
                    placeholder="Add a task!" 
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="submit"
                    value="Submit"
                    className="add-button"
                />
            </form>
        )
    }
}