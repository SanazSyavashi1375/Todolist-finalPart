import AddButton from "../../UI/addButton"
import { useDispatch } from "react-redux";
import { errorAction } from "../../../store/error";
import { todoAction } from "../../../store/todo's";
import { todoInformationAction } from "../../../store/getTodoInfo";
const ButtonAdd = ({ title, dueDate, description }) => {
    const dispatch = useDispatch();
    const clickHandler = (event) => {
        event.preventDefault();
        if (title.trim() === '' || dueDate.trim() === '' || description.trim() === '') {
            dispatch(errorAction.showError())
        } else {
            dispatch(todoAction.addTodo({ title, dueDate, description }))
            dispatch(todoInformationAction.reset());

        }
    }
    return ( < > < AddButton onClick = { clickHandler }
        /> <
        />
    )
}
export default ButtonAdd;