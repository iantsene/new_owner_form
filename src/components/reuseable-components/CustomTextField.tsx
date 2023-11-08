import React, { ChangeEvent, useState, ReactNode } from 'react';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

interface CustomTextFieldProps {
  label: string;
  value: string;
  type: string;
  icon?: ReactNode;
  onChange: (newValue: string) => void
}

const maxCharacterCount = 120;

function CustomTextField({ label, value, type, onChange, icon }: CustomTextFieldProps) {

  const [isFocused, setIsFocused] = useState(false);
  const isMobile = useMediaQuery('(max-width:480px)');

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    if (newText.length <= maxCharacterCount) {
      onChange(newText);
    }
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };


  const placeholderTextMobile = isFocused && `Character limit: (${value.toString().length}/${maxCharacterCount})`;
  const placeholderText = isFocused ? `Character limit: (${value.toString().length}/${maxCharacterCount})` : label;

  // Render the TextField without a label if it's mobile, and with a label otherwise
  if (isMobile) {
   
    return (
      <TextField
        fullWidth
        className="custom-textfield"
        size="small"
        type={type}
        label={placeholderTextMobile}
        variant="filled"
        value={value}
        onChange={handleTextChange}
        onFocus={onFocus}
        onBlur={onBlur}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {label}
            </InputAdornment>),
            
        }}
      />
    );
    
  }

  return (
    <TextField
     
      className="custom-textfield"
      size="small"
      type={type}
      label={placeholderText}
      variant="filled"
      value={value}
      onChange={handleTextChange}
      onFocus={onFocus}
      onBlur={onBlur}
      
    />
  );
}

export default CustomTextField;


