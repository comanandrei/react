/**
 * Created by Andrei.Coman on 1/10/2017.
 */
import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {

    constructor() {
        super();
        this.todos = [
            {
                id: 111231123,
                text: "Go Shopping",
                complete: false
            },
            {
                id: 565231123,
                text: "Pay Bills",
                complete: false
            }
        ];
    }

    createTodo(text) {
        const id = Date.now();
        this.todos.push({
            id,
            text,
            complete: false
        });

        this.emit("change");
    }


    getAll() {
        return this.todos;
    }

    handleAnctions(action) {
        switch (action.type) {
            case "CREATE_TODO": {
                this.createTodo(action.text);
            }
            case "RECEIVE_TODOS": {
                this.todos = action.todos;
                this.emit("change");
            }

        }
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleAnctions.bind(todoStore));
window.dispatcher = dispatcher;
export default todoStore;