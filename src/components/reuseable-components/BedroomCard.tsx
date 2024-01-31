import React from "react";
import DropdownSelect from "./DropdownSelect";
import { Button, Card } from "@mui/material";
import { Bedroom, BedroomType, Bed, EnSuiteType, Heating, Level } from "@/app/types/all-form-types";
import HeatingSelect from "./HeatingSelect";
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
          {bedroom.beds.length <= 5 ? (
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
      <HeatingSelect bedroom={bedroom} onUpdate={onUpdate} />
    



    </div>
    </Card>
    </>);
};

export default BedroomCard;