import { FormControl, MenuItem, Select, InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";

interface Option {
  value: string | number;
  label: string;
}

interface Props {
  state: any;
  fieldName?: string;
  label?: string;
  labelId?: string;
  id?: string;
  noneOption?: string;
  options: Option[];
  handleFieldChange: (fieldName: string, value: any) => void;
}

function DropdownSelect({ state, fieldName, label, labelId, id, options, noneOption, handleFieldChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 100 }}>
      <InputLabel id={labelId}>{label}</InputLabel>
        <Select
          labelId={labelId}
          id={id}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onOpen={() => setIsOpen(true)}
          value={state ? state : label}
          onChange={(event) => handleFieldChange(fieldName || "", event.target.value)}
          input={<OutlinedInput label={label} />}
        >
          <MenuItem value="">
            <em>{noneOption ? noneOption : "none"}</em>
          </MenuItem>
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default DropdownSelect;
