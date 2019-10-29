import React, { Component } from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

export default class TodoList extends Component {
    render() {
        const { todos } = this.props;
        const elements = todos.map((item, index) => {
            return (
                <li key={index} className="list-group-item">
                    <TodoListItem
                        {...item}
                    />
                </li>
            );
        });

        return (
            <ul className="list-group todo-list">
                {elements}
            </ul>
        );
    };
}
