import React, { ChangeEvent, useState, ReactNode } from 'react';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';


interface CustomTextFieldProps {
  label: string;
  value: string;
  type: string;
  descText?: string;
  icon?: ReactNode;
  onChange: (newValue: string) => void
}

const maxCharacterCount = 120;

function CustomTextField({ label, value, type, onChange, icon, descText }: CustomTextFieldProps) {

 

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
      <li className="list-item-container">
      <div className="label">
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
      </div></li>
    );
    
  }
  

  return (
    <li className="list-item-container">
    {icon ? icon : <img className="icon" src="/Icons/icon-placeholder.png" alt="icon" />}
    <div className="label">
      <span>{label}:</span>
      {descText ? <span className="short-description">{descText}</span>: null}
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
    
     </div></li>
  );
}

export default CustomTextField;



