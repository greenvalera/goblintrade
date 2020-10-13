import React, {Fragment} from "react";
import SignUp from "../components/RegisterPage";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../../redux/actions";

export default function RegisterPage() {
  const validationErrors = useSelector(state => state.auth.validationErrors);
  const submitting = useSelector(state => state.auth.submitting);
  console.log(validationErrors);
  const dispatch = useDispatch();
  const onSubmit = (user) => {
    dispatch(register(user));
  };
  return (
    <Fragment>
      <SignUp
        submitting={submitting}
        onSubmit={onSubmit}
        validationErrors={validationErrors}
      />
    </Fragment>
  );
}