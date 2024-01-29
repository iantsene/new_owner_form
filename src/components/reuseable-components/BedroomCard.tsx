import React from "react";
import DropdownSelect from "./DropdownSelect";
import { Button, Card, Typography } from "@mui/material";
import { Bedroom, BedroomType, Bed, EnSuiteType, Heating, Level } from "@/app/types/all-form-types";
import MultipleSelectCheckmarks from "./MultipleSelectCheckmarks";
import EnSuiteCard from "./EnSuiteCard";


interface Props {
  index: number;
  bedroom: Bedroom;
  onUpdate: (updatedBedroom: Bedroom) => void;
}

const BedroomCard = ({ index, bedroom, onUpdate }: Props) => {
  return ( <>
        <div className="bedroom-title">
          <h4>Bedroom {index + 1}</h4>
        </div>

    <Card sx={{ display: "flex", m: 1, p: 1 }}>
      <div className="bedroom-type">
        <Card className="bedroom-type" sx={{ display: "flex", m: 1, p: 1 }}>
          <h5>Type</h5>
          <DropdownSelect
            state={bedroom.bedroomType}
            handleFieldChange={(_: any, bedroomType: BedroomType) =>
              onUpdate({ ...bedroom, bedroomType })
            }
            options={[
              { value: "single", label: "Single" },
              { value: "double", label: "Double" },
              { value: "triple", label: "Triple" },
              { value: "twin", label: "Twin" },
            ]}
          />
          <h5>Level</h5>
          <DropdownSelect
            state={bedroom.level}
            handleFieldChange={(_: any, level: Level) =>
              onUpdate({ ...bedroom, level })
            }
            options={[
              { value: "ground", label: "Ground" },
              { value: "first", label: "First" },
              { value: "second", label: "Second" },
              { value: "third", label: "Third" },
              { value: "attic", label: "Attic" },
              { value: "annex", label: "Annex" },
            ]}
          />
        </Card>
      

      <Card className="bed-types" sx={{ display: "flex", m: 1, p: 1 }}>
        <div className="beds-title">
          <h5>Beds</h5>
        </div>
        <div className="beds-dropdown">
          {bedroom.beds.map((bed, index) => (
             <div className="beds-column" key={index}>
            <DropdownSelect
              label={`Bed ${index + 1}`}
              labelId={`Bed ${index + 1}`}
              state={bed}
              key={index}
              id={`bed${index + 1}-id`}
              handleFieldChange={(_: any, newBedType: Bed) =>
                onUpdate({
                  ...bedroom,
                  beds: bedroom.beds.with(index, newBedType),
                })
              }
              options={[
                { value: "single", label: "Single" },
                { value: "double", label: "Double" },
                { value: "king", label: "King" },
                { value: "queen", label: "Queen" },
                { value: "baby crib", label: "Baby crib" },
                { value: "sofabed", label: "Sofa-bed" },
                { value: "murphy", label: "Murphy" },
                { value: "bunk", label: "Bunk" },
                { value: "child", label: "Child-bed" },
              ]}
            />
            </div>
          ))}
        </div>
        <div className="card-buttons">
          <Button
            className="button-remove"
            onClick={() =>
              onUpdate({ ...bedroom, beds: bedroom.beds.slice(0, -1) })
            }
          >
            -
          </Button>
          {bedroom.beds.length <= 9 ? (
            <Button
              className="button-add"
              onClick={() =>
                onUpdate({ ...bedroom, beds: [...bedroom.beds, "single"] })
              }
            >
              +
            </Button>
          ) : null}
        </div>
      </Card>




      <EnSuiteCard bedroom={bedroom} onUpdate={onUpdate} />

      {/* <Card className="bedroom-heating" sx={{ display: 'flex', m: 1, p: 1 }}>

          <MultipleSelectCheckmarks
          handleFieldChange={(_: any, heatingOptions: Heating) => onUpdate({ ...bedroom, heating: bedroom.heating.with(index, heatingOptions) })}
          state={bedroom.heating}
          fieldName='Bedroom heating'
          elemLabel='Bedroom heating'
          label='Bedroom heating'
          options= {
            [
              { value: false, label: 'Air condition' },
              { value: false, label: 'Ceiling fan' },
            ]
          }>
            
          </MultipleSelectCheckmarks>


       </Card> */}



    </div>
    </Card>
    </>);
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
