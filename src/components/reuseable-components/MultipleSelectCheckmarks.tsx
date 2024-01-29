// import React from 'react';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';


// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };


// interface MultipleSelectCheckmarksProps {
//     state: boolean | boolean[];
//     fieldName: string;
//     elemLabel: string;
//     label: string;
//     options: { value: boolean ; label: string }[];
//     handleFieldChange: (fieldName: string, value: boolean | boolean[]) => void;
//   }
  
//   const MultipleSelectCheckmarks: React.FC<MultipleSelectCheckmarksProps> = ({
//     state,
//     fieldName,
//     elemLabel,
//     label,
//     options,
//     handleFieldChange,
//   }) => {
//     const handleChange = (event: SelectChangeEvent<typeof state>) => {
//       const {
//         target: { value },
//       } = event;
  
//       const newState: (boolean | string)[] = Array.isArray(value) ? value : [value];
//       handleFieldChange(fieldName, newState);
//     };
  
//     return (
//       <FormControl sx={{ m: 1, minWidth: 120 }}>
//         <span>{elemLabel}</span>
//         <Select
//           labelId={fieldName}
//           multiple
//           value={Array.isArray(state) ? state : [state]}
//           onChange={handleChange}
//           input={<OutlinedInput label={label} />}
//           renderValue={(selected) => selected.join(', ')}
//           MenuProps={MenuProps}
//         >
//           {options.map((option, index) => (
//             <MenuItem key={index} value={option.value}>
//               <Checkbox checked={state === option.value || (Array.isArray(state) && state.includes(option.value))} />
//               {option.label}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     );
//   };

// export default MultipleSelectCheckmarks;





// import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
// import { useState } from "react";
// import { SelectChangeEvent } from "@mui/material/Select";

// interface Option {
//   value: boolean;
//   label: string;
// }

// interface Props {
//   state: Option[];
//   fieldName?: string;
//   label?: string;
//   id?: string;
//   noneOption?: string;
//   options: Option[];
//   handleFieldChange: (fieldName: string, value: Option[]) => void;
// }

// function MultipleSelectCheckmarks({
//   state,
//   fieldName,
//   label,
//   id,
//   options,
//   noneOption,
//   handleFieldChange,
// }: Props) {

//   const [isOpen, setIsOpen] = useState(false);

//   const handleChange = (event: SelectChangeEvent<string[]>) => {
//     const selectedValues = options
//       .filter((option) => event.target.value.includes(option.label))
//       .map((option) => ({
//         value: option.value,
//         label: option.label,
//       }));
//     handleFieldChange(fieldName || "", selectedValues);
//   };

//   return (
//     <>
//       <FormControl sx={{ m: 1, minWidth: 120 }}>
//         <InputLabel>{label}</InputLabel>
//         <Select
//           labelId={fieldName}
//           open={isOpen}
//           onClose={() => setIsOpen(false)}
//           onOpen={() => setIsOpen(true)}
//           value={(Array.isArray(state) ? state : []).map((option) => option.label)}
//           label={label}
//           onChange={handleChange}
//           multiple
//         >
//           <MenuItem value="">
//             <em>{noneOption ? noneOption : "none"}</em>
//           </MenuItem>
//           {options.map((option, index) => (
//             <MenuItem key={index} value={option.label}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </>
//   );
// }

// export default MultipleSelectCheckmarks;




import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

interface Option {
  value: boolean;
  label: string;
}

interface Props {
  state: string[];
  fieldName?: string;
  label?: string;
  id?: string;
  options: Option[];
  handleFieldChange: (fieldName: string, value: Option[]) => void;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MultipleSelectCheckmarks: React.FC<Props> = ({
  state,
  fieldName,
  label,
  id,
  options,
  handleFieldChange,
}: Props) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(state);

  const handleChange = (event: SelectChangeEvent<typeof selectedOptions>) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions(value as string[]);
    handleFieldChange(fieldName || '', value as string[]);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id={`multiple-checkbox-label-${id}`}>{label}</InputLabel>
        <Select
          labelId={`multiple-checkbox-label-${id}`}
          id={`multiple-checkbox-${id}`}
          multiple
          value={selectedOptions}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => (selected as string[]).join(', ')}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
              },
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Checkbox checked={selectedOptions.indexOf(option.value) > -1} />
              <ListItemText primary={option.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultipleSelectCheckmarks;