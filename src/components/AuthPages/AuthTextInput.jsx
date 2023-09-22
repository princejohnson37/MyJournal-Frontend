/* eslint-disable react/prop-types */
import { InputAdornment, TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "./AuthTextInput.scss";

function AuthTextInput({ field, form, ...props }) {
  return (
    <TextField
      className="text-box-style"
      {...props}
      {...field}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <MailOutlineIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default AuthTextInput;
