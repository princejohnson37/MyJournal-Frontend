/* eslint-disable react/prop-types */
import { InputAdornment, TextField } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "./AuthTextInput.scss";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./AuthTextInput.scss";

function AuthTextInput({ field, form, ...props }) {
  const IconTextField = (type) => {
    let iconComponent;

    switch (type) {
      case "email":
        iconComponent = <MailOutlineIcon />;
        break;
      case "password":
        iconComponent = <LockOutlinedIcon />;
        break;
      default:
        iconComponent = null;
        break;
    }
    return iconComponent;
  };
  return (
    <TextField
      className="text-box-style"
      {...props}
      {...field}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {IconTextField(props.type)}
          </InputAdornment>
        ),
      }}
    />
  );
}

export default AuthTextInput;
