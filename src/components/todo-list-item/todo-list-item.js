import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
    render() {
        const { label, important} = this.props;
        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold': 'normal'
        }
        return (
            <div className="todo-list-item">
                <span style={style}>{label}</span>

                <div className="buttons">
                    <button type="button" className="btn btn-outline-success btn-sm">
                        <i className="fa fa-exclamation" />
                    </button>

                    <button type="button" className="btn btn-outline-danger btn-sm">
                        <i className="fa fa-trash-o" />
                    </button>
                </div>
            </div>
        );
    };
}
