import React from 'react';
import TextField from '@mui/material/TextField';

const Input = ({
   full,
   error,
   type,
   label,
   color,
   name,
   value,
   errorMessage,
   size,
   required,
   ...otherProps
}) => {

   return (
      <TextField
         color={color || "primary"}
         error={error || false}
         sx={{
            fontSize: "0.8rem",
            "& .MuiOutlinedInput-root.Mui-focused": {
               "& > fieldset": {
                  borderColor: "#E3F6FF"
               }
            }
         }}
         type={type || "text"}
         label={label || "Required"}
         fullWidth={full || false}
         size={size || "normal"}
         name={name || "name"}
         value={value || ""}
         required={required || false}
         helperText={errorMessage || ""}
         {...otherProps}
      />
   )
}

export default Input;