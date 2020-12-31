import React, {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import SignUp from "../components/RegisterPage";
import {register, setAuthErrors} from "../redux/actions";

export default function RegisterPage() {
  const validationErrors = useSelector(state => state.auth.validationErrors);
  const submitting = useSelector(state => state.auth.submitting);
  const dispatch = useDispatch();

  const onSubmit = (user) => {
    dispatch(register(user));
  };

  const onChange = () => {
    dispatch(setAuthErrors({
      email: "",
    }));
  };

  return (
    <Fragment>
      <SignUp
        submitting={submitting}
        onSubmit={onSubmit}
        onChange={onChange}
        validationErrors={validationErrors}
      />
    </Fragment>
  );
}