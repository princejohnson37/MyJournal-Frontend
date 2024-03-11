/* eslint-disable react/prop-types */
import { InputAdornment, TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import classes from './AuthTextInput.module.scss';

function AuthTextInput({ field, form, ...props }) {
  return (
    <TextField
      className={classes["text-box-style"]}
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
