/**
 * Created by Andrei on 10-Jan-17.
 */
import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodosActions";
import TodoStore from "../stores/TodoStore";

export default class Featured extends React.Component {


    constructor() {
        super();
        this.state = {
            todos: TodoStore.getAll()
        };
    }

    componentWillMount() {
        TodoStore.on("change", () => {
            this.setState({
                todos: TodoStore.getAll()
            });
        });
    }

    reloadTodos() {
        TodoActions.reloadTodos();
    }

    render() {
        const {todos} = this.state;

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />
        });

        return (
            <div>
                <div class="row">
                    <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
                    <input />
                    <h1>Todos</h1>
                    <ul>{TodoComponents}</ul>
                </div>

            </div>
        );
    }
}
