import { toggleCheckbox } from "../actions";

const updateToggle = (id) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/books/${id}`, {
            method: "PATCH",
            body: JSON.stringify({

                feaured: false,
            }),
            headers: {
                "content-type": "application/json;charset=UTF-8"
            }
        });
        const todo = await response.json();

        dispatch(toggleCheckbox(todo.id));
    };
}

export default updateToggle;