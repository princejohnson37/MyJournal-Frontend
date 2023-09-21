/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";

function AuthTextInput({ field, form, ...props }) {
  return (
    <TextField
      {...props}
      {...field}
    />
  );
}

export default AuthTextInput;
