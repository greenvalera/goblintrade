import Button from "@material-ui/core/Button";
import React from "react";
import {useDispatch} from "react-redux";
import {showAlert} from "../redux/actions";

export default function TestButton() {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(showAlert('Test case'))
    };

    return (
        <Button onClick={onClick}>
            Open success snackbar
        </Button>
    );
};

