import React, { ReactNode } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import CustomTextField from "./CustomTextField";

interface CheckboxWithCustomTextFieldProps {
  label: string;
  checked: boolean;
  textboxLabel?: string;
  description: string;
  icon?: ReactNode;
  onCheckboxChange: (checked: boolean) => void;
  onDescriptionChange: (description: string) => void;
}

function CheckboxWithCustomTextField({
  label,
  checked,
  textboxLabel,
  description,
  icon,
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
                  label={label}
                  value={description}
                  type="text"
                  onChange={onDescriptionChange}
                />
              ) : (
                <>
                  {icon ? icon : <img src="/Icons/icon-placeholder.png" />}
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
