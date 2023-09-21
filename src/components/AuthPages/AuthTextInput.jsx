import { IconButton, InputAdornment, TextField } from "@mui/material";
function AuthTextInput({ inputType, placeholder, icon }) {
  return <TextField type={inputType} placeholder={placeholder}></TextField>;
}

export default AuthTextInput;
