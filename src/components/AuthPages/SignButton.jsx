import React from "react";
import { Button } from "@mui/material";

function SignButton({label, ...props}) {
  return <Button {...props}>{label}</Button>;
}

export default SignButton;
