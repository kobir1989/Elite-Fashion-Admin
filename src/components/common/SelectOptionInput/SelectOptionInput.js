import React, { useContext } from 'react';
import { v4 } from 'uuid';
import { InputLabel, MenuItem, FormControl, Select, FormHelperText } from '@mui/material';
import { Context } from "../../../store/Context";

const SelectOptions = (
   {
      value,
      label,
      error = false,
      errorMessage,
      options = [],
      ...otherProps
   }) => {
   console.log(value, "VALUE")
   const { state } = useContext(Context);
   const { darkMood } = state;
   return (
      <FormControl
         fullWidth
         required
         sx={{
            "& .MuiFormLabel-root": {
               color: darkMood ? "#e5e5e5" : "#727272"
            },
            "& .MuiSvgIcon-root ": {
               color: darkMood ? "#e5e5e5" : "#727272"
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
         }}
         error={value === "" && error}>
         <InputLabel sx={
            {
               color: darkMood ? "#e5e5e5" : "#727272"
            }
         }>
            {label}
         </InputLabel>
         <Select
            value={options.find(opt => opt._id === value) ? value : ""}
            label={label}
            sx={{
               color: darkMood ? "#FFF" : "#212529",
            }}
            {...otherProps}>

            {options.map((option) => (
               <MenuItem
                  sx={
                     {
                        textTransform: "capitalize",
                     }
                  }
                  value={option?._id ? option?._id : option}
                  key={option?._id || v4()}>
                  {option?.name}
               </MenuItem>
            ))}
         </Select>
         <FormHelperText>{value === "" && errorMessage}</FormHelperText>
      </FormControl>
   )
};

export default SelectOptions;