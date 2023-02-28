import { deletebook } from "../actions";

const deletbookId = (id) => {
    return async (dispatch) => {
        await fetch(`http://localhost:9000/books/${id}`, {
            method: "DELETE",
        });
        dispatch(deletebook(id));
    };
}



export default deletbookId;

