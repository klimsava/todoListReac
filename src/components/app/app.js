import React, {Component} from 'react';
import SearchPanel from '../Search-Panel';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            {
                label: 'Drink Coffee',
                important: false,
                id: 0
            },
            {
                label: 'Build React App',
                important: true,
                id: 1
            },
            {
                label: 'Have a lunch',
                important: false,
                id: 2
            }
        ]
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const ind = todoData.findIndex((el) => el.id === id);

            //Создаем новый массив с перезаписанными значениями
            const newArray = [
                ...todoData.splice(0, ind),
                ...todoData.splice(ind + 1)
            ];
            console.log(newArray);

            return {
                todoData: newArray,
            };
        });
    };

    addItem = (text) => {
        //Генерация новых id
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        }

        //Добовляем новый элемент в массив
        this.setState(({ todoData }) => {
            const newArr =[
                ...todoData,
                newItem
            ];
            return (
                {
                    todoData: newArr
                }
            );
        });
    };
    
    render() {
        const { todoData } = this.state;
        return (
            <div className="todo-app" >
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={todoData}
                    onDeleted={this.deleteItem} />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    };
}
