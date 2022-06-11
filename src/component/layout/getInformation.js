import Box from "../UI/box"
import ButtonAdd from "./innerLayout/addButton";
import InputParts from "./innerLayout/inputPart";
import { useSelector } from "react-redux";


const GetInformation = () => {
    const title = useSelector((state) => state.todoInfo.title);
    const dueDate = useSelector((state) => state.todoInfo.dueDate);
    const description = useSelector((state) => state.todoInfo.description);




    return ( < >
        <
        Box >
        <
        InputParts title = { title }
        dueDate = { dueDate }
        description = { description }
        /> <
        ButtonAdd title = { title }
        dueDate = { dueDate }
        description = { description }
        /> </
        Box > < />
    )
}
export default GetInformation;