import React from 'react';
import { v4 } from 'uuid';
import { InputLabel, MenuItem, FormControl, Select, FormHelperText } from '@mui/material';

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
   return (
      <FormControl
         fullWidth
         required
         error={value === "" && error}>
         <InputLabel >{label}</InputLabel>
         <Select
            value={options.find(opt => opt._id === value) ? value : ""}
            label={label}
            {...otherProps}>

            {options.map((option) => (
               <MenuItem sx={{ textTransform: "capitalize" }} value={option?._id ? option?._id : option} key={option?._id || v4()}>
                  {option?.name}
               </MenuItem>
            ))}
         </Select>
         <FormHelperText>{value === "" && errorMessage}</FormHelperText>
      </FormControl>
   )
};

export default SelectOptions;