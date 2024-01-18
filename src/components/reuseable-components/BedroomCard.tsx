import React from 'react';
import DropdownSelect from './DropdownSelect'; 
import { Button, Card, Typography } from '@mui/material';
import { BedroomType } from '@/app/types/all-form-types';


type Bed = 'double' | 'single' | 'king' | 'queen' |  'baby crib' | 'sofa bed' | 'murphy' | 'bunk bed' | 'child bed'

interface Bedroom {
  type: 'single' | 'double' | 'triple' | 'twin'
  beds: Bed[];
  heating: boolean;
}

interface Props {
  index: number;
  bedroom: Bedroom;
  onUpdate: (updatedBedroom: Bedroom) => void;
}


const BedroomCard = ({ index, bedroom, onUpdate }: Props) => {
 

  bedroom.beds
  return (
    <Card sx={{ display: 'flex', m: 1, p: 1 }}>
      <Typography>Bedroom {index + 1}</Typography>
      <DropdownSelect
        state={bedroom.type}
        handleFieldChange={(_: any, type: BedroomType) => onUpdate({ ...bedroom, type })}
        options={[
          { value: 'single', label: 'Single' },
          { value: 'double', label: 'Double' },
          { value: 'triple', label: 'Triple' },
          { value: 'twin', label: 'Twin' },
        ]}
      /> 

        <div>
      {bedroom.beds.map((bed, index) => (
        <DropdownSelect
          key={index} 
          state={bed}
          handleFieldChange={(_: any, newBedType: Bed) => onUpdate({ ...bedroom, beds: bedroom.beds.with(index, newBedType) })}
          options={[
            { value: 'single', label: "Single" },
            { value: 'double', label: "Double" },
            { value: 'king', label: "King" },
            { value: 'queen', label: "Queen" },
            { value: 'baby crib', label: "Baby crib" },
            { value: 'sofa bed', label: "Sofa bed" },
            { value: 'murphy', label: "Murphy" },
            { value: 'bunk bed', label: "Bunk bed" },
            { value: 'child bed', label: "Child bed" },
          ]}
        />
      ))}
      </div>

      <Button onClick={() => onUpdate({ ...bedroom, beds: [...bedroom.beds, 'single']})}>
        Add bed
      </Button>
      <Button onClick={() => onUpdate({ ...bedroom, beds: bedroom.beds.slice(0, -1) })}>
        Remove bed
      </Button>
    </Card>
  );
};

export default BedroomCard;




































// import React from 'react';
// import DropdownSelect from './DropdownSelect'; 
// import MultipleSelectCheckmarks from './MultipleSelectCheckmarks';

// interface MultipleDropdownElementProps {
//   bedroomNumber: number
//   typeOptions: { value: string; label: string }[];
//   levelOptions: { value: string; label: string }[];
//   bedsOptions1: { value: string; label: string }[];
//   bedsOptions2: { value: string; label: string }[];
//   bedsOptions3: { value: string; label: string }[];
//   heatingCoolingOptions: { value: string; label: string }[];
//   handleFieldChange: (fieldName: string, value: any) => void;
// }

// function BedroomCard({
//   bedroomNumber,
//   typeOptions,
//   levelOptions,
//   bedsOptions1,
//   bedsOptions2,
//   bedsOptions3,
//   heatingCoolingOptions,
//   handleFieldChange,
// }: MultipleDropdownElementProps): React.ReactNode {
//   const bedroomDropdowns = [];

//   for (let i = 1; i <= bedroomNumber; i++) {
//     bedroomDropdowns.push(
//       <div key={i}>
//         <h2>Bedroom {i}</h2>
//         <DropdownSelect
//           state=""
//           fieldName={`bedroom ${i}`} // Field name for bedroom type
//           elemLabel="Type"
//           id={`bedroom-${i}`}
//           label={`bedroom-${i}`}
//           options={typeOptions}
//           handleFieldChange={handleFieldChange}
//           openState={false}
//           toggleOpenClose={}
//         />
//         <DropdownSelect
//           state=""
//           fieldName={`bedroomLevel${i}`} // Field name for bedroom level
//           elemLabel="Level"
//           id={`level-${i}`}
//           label="Level"
//           options={levelOptions}
//           handleFieldChange={handleFieldChange}
//           openState={false}
//           toggleOpenClose={}
//         />
//         <DropdownSelect
//           state=""
//           fieldName={`bedroomBeds${i}`} // Field name for bedroom beds
//           elemLabel="Beds"
//           id={`beds-${i}`}
//           label="Beds"
//           options={bedsOptions1}
//           handleFieldChange={handleFieldChange}
//           openState={false}
//           toggleOpenClose={}
//         />
//          <DropdownSelect
//           state=""
//           fieldName={`bedroomBeds${i}`} // Field name for bedroom beds
//           elemLabel="Beds"
//           id={`beds-${i}`}
//           label="Beds"
//           options={bedsOptions2}
//           handleFieldChange={handleFieldChange}
//           openState={false}
//           toggleOpenClose={}
//         />
//          <DropdownSelect
//           state=""
//           fieldName={`bedroomBeds${i}`} // Field name for bedroom beds
//           elemLabel="Beds"
//           id={`beds-${i}`}
//           label="Beds"
//           options={bedsOptions3}
//           handleFieldChange={handleFieldChange}
//           openState={false}
//           toggleOpenClose={}
//         />
//         <MultipleSelectCheckmarks
//           state=""
//           fieldName={`bedroomHeatingCooling${i}`} // Field name for bedroom heating/cooling
//           elemLabel="Heating / Cooling"
//           id={`heatingCooling-${i}`}
//           label="Heating / Cooling"
//           options={heatingCoolingOptions}
//           handleFieldChange={handleFieldChange}
//           openState={false}
//           toggleOpenClose={}
//         />
//       </div>
//     );
//   }

//   return <div>{bedroomDropdowns}</div>;
// };

// export default BedroomCard;
