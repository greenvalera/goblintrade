import React from "react";
import PropTypes from 'prop-types';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from "@material-ui/core/Snackbar";

export default function Alert({severity, open, message, onClose}) {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        onClose()
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{
                vertical: "top",
                horizontal: "center"
            }}
        >
            <MuiAlert onClose={handleClose} severity={severity || "error"}>
                { message }
            </MuiAlert>
        </Snackbar>
    );
}

const severityTypes = ["error", "warning", "info", "success"];

Alert.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  severity: PropTypes.oneOf(severityTypes),
};