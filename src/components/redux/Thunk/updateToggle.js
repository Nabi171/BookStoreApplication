import { toggleCheckbox } from "../actions";

const updateToggle = (id, feaured) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/books/${id}`, {
            method: "PATCH",
            body: JSON.stringify({

                feaured: !feaured,
            }),
            headers: {
                "content-type": "application/json;charset=UTF-8"
            }
        });
        const book = await response.json();

        dispatch(toggleCheckbox(book.id));
    };
}

export default updateToggle;