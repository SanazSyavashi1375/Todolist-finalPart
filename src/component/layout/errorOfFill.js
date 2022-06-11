import ErrorModule from "../UI/errorModule";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { errorAction } from "../../store/error";
const ErrorOfFill = () => {
        const dispatch = useDispatch();
        const hideErrorHandler = () => {
            dispatch(errorAction.hideError());
        };
        const errorIsShown = useSelector((state) => state.error.errorIsShown)
        return ( < > {
                errorIsShown && < ErrorModule onClose = { hideErrorHandler }
                error = 'Please Fill All The Required Fields!' / >
            } < />)
        }
        export default ErrorOfFill;