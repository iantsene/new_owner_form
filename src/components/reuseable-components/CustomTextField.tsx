import React, { ChangeEvent, useState } from 'react';
import TextField from '@mui/material/TextField';

interface CustomTextFieldProps {
    label: string;
    value: string;
    type: string;
    onChange: (newValue: string) => void;
  }

  const maxCharacterCount = 120;

function CustomTextField({ label, value, type, onChange }: CustomTextFieldProps) {

  const [isFocused, setIsFocused] = useState(false);

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


  const placeholderText = isFocused  ? `${label} (${value.toString().length}/${maxCharacterCount})`  : label;

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


{/* <CustomTextField label="" value={} onChange={}></CustomTextField> */}