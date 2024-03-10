import { FormControl, MenuItem, Select, InputLabel, OutlinedInput, } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

interface Option {
  value: string | number;
  label: string;
}

interface Props<DropdownType> {
  state: any;
  fieldName: string;
  label?: string;
  labelId?: string;
  id?: string;
  required?: boolean;
  noneOption?: string;
  disableOptions?: { value: string; }[];
  options: Option[];
  handleFieldChange?: (tab: string, fieldName: string, value: any) => void;
  extraEffects?: (value: DropdownType ) => void;
  usedLevels?: { commonbathsUsedLevels: { value: string; label: string }[]; commonbedsUsedLevels: { value: string; label: string }[]; };
  setUsedLevels?: Dispatch<SetStateAction<{ commonbathsUsedLevels: { value: string; label: string }[]; commonbedsUsedLevels: { value: string; label: string }[] }>>;
  usedLevelsProperty?: string;
}

function DropdownSelect<DropdownType>({ state, label, labelId, id, options, fieldName, noneOption, disableOptions, usedLevels, setUsedLevels, usedLevelsProperty, required, handleFieldChange, extraEffects }: Props<DropdownType>) {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, property] = fieldName.split('.');

  const createBedroomDetail = (newValue: DropdownType) => {
    return newValue;
  };

  
  function levelHookChange(newValue: any) {
    setUsedLevels && setUsedLevels((prevUsedLevels) => {
      const propertyName = `${usedLevelsProperty}UsedLevels`;

      const existsIndex = prevUsedLevels[propertyName]?.findIndex((level) => level === state);
      const exists = existsIndex !== -1;
  
  
      if (exists) {
        const updatedLevels = [...prevUsedLevels[propertyName]];
        updatedLevels[existsIndex] = newValue;
  
        return {
          ...prevUsedLevels,
          [propertyName]: updatedLevels,
        };
      } else {
        return {
          ...prevUsedLevels,
          [propertyName]: [...prevUsedLevels[propertyName], newValue],
        };
      }
    });
  }
  
  
  
  
  

  const handleSelectChange = (event: any) => {
    const newValue = event.target.value as DropdownType;
    const newBedroomType = createBedroomDetail(newValue);
    usedLevels && levelHookChange(newValue);
    handleFieldChange ? handleFieldChange(tab, property, newValue) : extraEffects?.(newBedroomType)
    
   
  };


  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 100 }}>
      <InputLabel id={labelId}>{label}</InputLabel>
        <Select
          labelId={labelId}
          id={id}
          open={isOpen}
          required={required}
          onClose={() => setIsOpen(false)}
          onOpen={() => setIsOpen(true)}
          value={state}
          onChange={handleSelectChange}
          input={<OutlinedInput label={label} />}
        >
          <MenuItem value="" disabled>
            <em>{noneOption ? noneOption : "Select Field"}</em>
          </MenuItem>
          {options.map((option: any, index: number) => (
            <MenuItem key={id? id : index} value={option.value} disabled={disableOptions?.includes(option.value)}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default DropdownSelect;
