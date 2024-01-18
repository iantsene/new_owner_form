import { FormControl, MenuItem, Select } from "@mui/material";
import { staticGenerationAsyncStorage } from "next/dist/client/components/static-generation-async-storage.external";
import { useState } from "react";

interface Option {
  value: string | number;
  label: string;
}

interface Props {
  state: any;
  fieldName?: string;
  label?: string;
  id?: string;
  options: Option[];
  handleFieldChange: (fieldName: string, value: any) => void;
}

function DropdownSelect({ state, fieldName, label, id, options, handleFieldChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <span>{label}</span>
        <Select
          labelId={fieldName}
          id={id}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onOpen={() => setIsOpen(true)}
          value={state}
          label={label}
          onChange={(event) => handleFieldChange(fieldName || "", event.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
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
