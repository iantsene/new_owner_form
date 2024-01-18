import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


interface MultipleSelectCheckmarksProps {
    state: number | number[];
    fieldName: string;
    elemLabel: string;
    id: string;
    label: string;
    toggleOpenClose: any;
    options: { value: number; label: string }[];
    handleFieldChange: (fieldName: string, value: number | number[]) => void;
  }
  
  const MultipleSelectCheckmarks: React.FC<MultipleSelectCheckmarksProps> = ({
    state,
    fieldName,
    elemLabel,
    id,
    label,
    options,
    toggleOpenClose,
    handleFieldChange,
  }) => {
    const handleChange = (event: SelectChangeEvent<typeof state>) => {
      const {
        target: { value },
      } = event;
  
      // Ensure state is always an array
      const newState = Array.isArray(value) ? value : [value];
      handleFieldChange(fieldName, newState);
    };
  
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <span>{elemLabel}</span>
        <Select
          labelId={fieldName}
          id={id}
          multiple
          value={Array.isArray(state) ? state : [state]}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              <Checkbox checked={state === option.value || (Array.isArray(state) && state.includes(option.value))} />
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

export default MultipleSelectCheckmarks;
