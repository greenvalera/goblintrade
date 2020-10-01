import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Alert from "../components/alert";
import {hideAlert} from "../../../redux/actions";


export default function AlertContainer() {
    const dispatch = useDispatch();
    const alert = useSelector(state => state.app.alert);
    const onClose = () => {
        dispatch(hideAlert());
    };
    return (
        <Alert
            severity={alert.type || "error"}
            open={alert.open}
            message={alert.message}
            onClose={onClose}
        />
    )
}