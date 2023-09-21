import React from "react";
import { Button } from "@mui/material";
import "./SignButton.scss";

function SignButton({label, ...props}) {
  return <Button {...props}>{label}</Button>;
function SignButton({ label, type }) {
  return (
    <Button variant="contained" className="primary-btn">
      {label}
    </Button>
  );
}

export default SignButton;
