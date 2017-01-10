/**
 * Created by Andrei.Coman on 1/10/2017.
 */
import {EventEmitter} from "events";

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

    getAll() {
        return this.todos;
    }
}

const todoStore = new TodoStore;

export default todoStore;