import React from "react";
import { useDispatch } from "react-redux";
import Button from "../Button";
import { authRepo } from "../../repo";
import { logout } from "../../store/auth.slice";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authRepo.signOut().then(() => {
      dispatch(logout());
    });
  };

  return <Button onClick={logoutHandler}>Logout</Button>;
};

export default LogoutBtn;
