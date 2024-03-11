import React from "react";
import { Button } from "@mui/material";
import classes from './SignButton.module.scss'

function SignButton({label, ...props}) {
  const {variant} = props;
  return <Button className={classes["primary-btn"]} variant={ variant ? variant : "contained"} {...props}>{label}</Button>;
}

export default SignButton;
