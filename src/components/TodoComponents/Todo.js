import React, { Component } from 'react';

export default class Todo extends Component {
    render() {
        const { id, title, completed } = this.props.todo;
        return (
            <div>
                <p>
                    <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id ) } checked={ completed ? 'checked': '' }/>{' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={{ float: 'right' }}>
                    </button>
                </p>
            </div>
        )
    }
}