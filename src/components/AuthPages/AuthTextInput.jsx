import { TextField } from "@mui/material";

import React from 'react'

function AuthTextInput({inputType,placeholder}) {
  return (
    <TextField type={inputType} placeholder={placeholder}>

    </TextField>
  )
}

export default AuthTextInput