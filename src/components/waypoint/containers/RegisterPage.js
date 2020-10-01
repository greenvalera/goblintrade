import React, {Fragment} from "react";
import SignUp from "../components/RegisterPage";
import {useDispatch} from "react-redux";
import {register} from "../../../redux/actions";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const onSubmit = (user) => {
    dispatch(register(user));
  };
  return (
    <Fragment>
      <SignUp onSubmit={onSubmit} />
    </Fragment>
  );
}