import React, {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import Login from "../components/LoginPage";
import {auth} from "../redux/actions";

export default function LoginPage() {
  const submitting = useSelector(state => state.auth.submitting);
  const dispatch = useDispatch();

  const onSubmit = (user) => {
    dispatch(auth(user));
  };

  return (
    <Fragment>
      <Login
        onSubmit={onSubmit}
        submitting={submitting}
      />
    </Fragment>
  );
};