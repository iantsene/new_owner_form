import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import CustomTextField from './CustomTextField';

interface CheckboxWithCustomTextFieldProps {
  label: string;
  checked: boolean;
  textboxLabel: string;
  description: string;
  onCheckboxChange: (checked: boolean) => void;
  onDescriptionChange: (description: string) => void;
}

function CheckboxWithCustomTextField({
  label,
  checked,
  textboxLabel,
  description,
  onCheckboxChange,
  onDescriptionChange,
}: CheckboxWithCustomTextFieldProps) {
  const handleCheckboxChange = () => {
    onCheckboxChange(!checked);
  };

  return (
    <li className="list-item">
      <div className="checkbox-container">
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              checked={checked}
              onChange={handleCheckboxChange}
            />
          }
          label={
            <div className="label-content">
              {checked ? (
                <CustomTextField
                  label={textboxLabel}
                  value={description}
                  type="text"
                  onChange={onDescriptionChange}
                />
              ) : (
                <>
                  <img src="/Icons/icon-placeholder.png" />
                  <span className="checkbox-tags">{label}</span>
                </>
  )}
            </div>
          }
        />
      </div>
    </li>
  );
}

export default CheckboxWithCustomTextField;
