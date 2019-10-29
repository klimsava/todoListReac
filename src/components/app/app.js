import React from 'react';
import SearchPanel from '../Search-Panel';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';

const App = () => {
    const todoData = [
        {
            label: 'Drink Coffee',
            important: false
        },
        {
            label: 'Build React App',
            important: true
        },
        {
            label: 'Have a lunch',
            important: false
        }
    ];
    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData} />
        </div>
    );
};

export default App;