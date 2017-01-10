/**
 * Created by Andrei on 10-Jan-17.
 */
import React from "react";

import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore";

export default class Featured extends React.Component {


    constructor() {
        super();
        this.state = {
            todos: TodoStore.getAll()
        };
    }

    render() {
        const {todos} = this.state;

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />
        });

        return (
            <div>
                <div class="row">
                    <h1>Todos</h1>
                    <ul>{TodoComponents}</ul>
                </div>

            </div>
        );
    }
}
