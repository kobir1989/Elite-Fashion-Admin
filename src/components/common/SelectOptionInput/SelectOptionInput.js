import React from 'react';
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
   return (
      <FormControl
         fullWidth
         required
         error={value === "" && error}>
         <InputLabel>{label}</InputLabel>
         <Select
            value={value}
            label="Age"
            {...otherProps}
         >
            {options.map((option) => (
               <MenuItem sx={{ textTransform: "capitalize" }} value={option?._id} key={option?._id}>
                  {option?.name}
               </MenuItem>
            ))}
         </Select>
         <FormHelperText>{value === "" && errorMessage}</FormHelperText>
      </FormControl>
   )
};

export default SelectOptions;