import Input from "../../UI/input"
import Section from "../../UI/section"
import TextArea from "../../UI/textArea";
import { useDispatch } from "react-redux";
import { todoInformationAction } from "../../../store/getTodoInfo"
const InputParts = (props) => {

    const dispatch = useDispatch();
    const getTitleHandler = (event) => {
        dispatch(todoInformationAction.setTitle(event.target.value));
    }
    const getDueDateHandler = (event) => {
        dispatch(todoInformationAction.setDueDate(event.target.value));
    }
    const getDescriptionHandler = (event) => {
        dispatch(todoInformationAction.setDescription(event.target.value));
    }
    return ( <
        >
        < Section >
        <
        Input label = "Title"
        input = {
            { type: "text", id: "title", value: props.title, onChange: getTitleHandler }
        }
        /> <Input label = "Due Date"
        input = {
            { type: "date", id: "dueDate", value: props.dueDate, onChange: getDueDateHandler }
        }
        /> </Section > < TextArea label = "Description"
        textarea = {
            { id: 'description', value: props.description, onChange: getDescriptionHandler }
        }
        /> </ > )
}
export default InputParts;