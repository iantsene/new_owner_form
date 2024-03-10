import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Card } from '@mui/material';
import { Bedroom } from '@/app/types/all-form-types';

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



const heatingOptions = [
 'Air Condition',
 'Ceiling Fan'
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function HeatingSelect({
  bedroom,
  onUpdate,
}: {
  bedroom: Bedroom;
  onUpdate: (updatedRoom: Bedroom) => void;
}) {
  const theme = useTheme();
  

  const handleChange = (event: any) => {
    const { target: { value } } = event;

    const newHeating = Array.isArray(value) ? value : [value];

    onUpdate({ ...bedroom, heating: newHeating });
  };

  return (
        <Card className="heating-types" sx={{ display: "flex", m: 1, p: 1 }}>
       <div className="card-title">
        <h5>Heating</h5>
      </div>
    <FormControl sx={{ m: 1, width: 150 }}>
        <InputLabel id="heating-chip-label">Heating</InputLabel>
        <Select
          labelId="heating-chip-label"
          id="demo-multiple-chip"
          multiple
          value={bedroom.heating}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Heating" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {heatingOptions.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, heatingOptions, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </Card>
  );
}

