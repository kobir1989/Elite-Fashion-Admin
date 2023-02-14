import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import { Context } from "../../../store/Context";

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
   const { state } = useContext(Context);
   const { darkMood } = state;
   return (
      <TextField
         color={color || "primary"}
         error={error || false}
         sx={{
            "& .MuiFormLabel-root": {
               color: darkMood ? "#e5e5e5" : "#727272"
            },
            "& .MuiInputBase-input": {
               color: darkMood ? "#FFF" : "#3b3841"
            },
            "& .MuiOutlinedInput-root": {
               "& fieldset": {
                  borderColor: darkMood ? "#205295" : "#e5e5e5",
               },
               "&:hover fieldset": {
                  borderColor: darkMood ? "#3f7fb8" : "#9fa7b6e5",
               },
               "&.Mui-focused fieldset": {
                  borderColor: darkMood ? "#78bbf7" : "#9fa7b6",
               },
            },
            fontSize: "0.8rem",
            borderRadius: "4px",
         }
         }
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