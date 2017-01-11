/**
 * Created by Andrei.Coman on 1/11/2017.
 */
import dispatcher from "../dispatcher";

export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id
    });
}

export function reloadTodos() {
    // axios("un-url").then((data) => {
    //     console.log("got the data!", data);
    // });

    dispatcher.dispatch({type: "FETCH_TODOS"});
    setTimeout(function() {
        dispatcher.dispatch(
            {
                type: "RECEIVE_TODOS",
                todos:  [
                    {
                        id: 111231123,
                        text: "New Task",
                        complete: false
                    },
                    {
                        id: 565231123,
                        text: " Updated Pay Bills",
                        complete: false
                    }
                ]
            }
        )
    }, 1000);
}