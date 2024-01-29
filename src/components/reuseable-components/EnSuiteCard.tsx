import { Card, Button } from "@mui/material";
import DropdownSelect from "./DropdownSelect";
import {
  EnSuite,
  EnSuiteType,
  Bedroom,
} from "@/app/types/all-form-types";

function EnSuiteCard({
  bedroom,
  onUpdate,
}: {
  bedroom: Bedroom;
  onUpdate: (updatedRoom: Bedroom) => void;
}) {
 
  return (
    <Card className="en-suite-types" sx={{ display: "flex", m: 1, p: 1 }}>
      <div className="en-suite-title">
        <h5>EnSuite</h5>
      </div>
      <div className="en-suite-dropdown">
        {bedroom.enSuiteTypes.map((enSuite, index) => (
          <div className="en-suite-column" key={index}>
            <DropdownSelect
            label={`Type ${index + 1}`}
            labelId={`Type ${index + 1}`}
              state={enSuite.type}
              key={index}
              id={`Type${index + 1}-type-id`}
              handleFieldChange={(_: any, newEnsuiteType: EnSuiteType) =>
                onUpdate({ ...bedroom, enSuiteTypes: [{type: newEnsuiteType, subtype: bedroom.enSuiteTypes[0]?.subtype || ''}] })
              }
              options={[
                { value: "shower", label: "Shower" },
                { value: "bathroom", label: "Bathroom" },
                { value: "wc", label: "WC" },
              ]}
            />
            
            <DropdownSelect
              label={`En-suite ${index + 1}`}
              labelId={`En-suite ${index + 1}`}
              state={enSuite.subtype}
              key={index}
              id={`En-suite${index + 1}-type-id`}
              handleFieldChange={(_: any, newEnSuite: EnSuite) =>
                onUpdate({
                  ...bedroom,
                  enSuiteTypes: [{type: bedroom.enSuiteTypes[0]?.type || '', subtype: newEnSuite}],
                })
              }
              options={[
                { value: "toilet", label: "Toilet" },
                { value: "bath with shower", label: "Bath with shower" },
                { value: "bath with jets", label: "Bath with jets" },
                { value: "bidet", label: "Bidet" },
              ]}
            />
          </div>
        ))}

        <div className="card-buttons">
          <Button
            className="button-remove"
            onClick={() =>
              onUpdate({
                ...bedroom,
                enSuiteTypes: bedroom.enSuiteTypes.length > 0 ? bedroom.enSuiteTypes.slice(0, -1) : [{ type: '', subtype: '' },],
              })
            }
          >
            -
          </Button>
          {bedroom.enSuiteTypes.length <= 2 ? (
            <Button
              className="button-add"
              onClick={() =>
                onUpdate({
                  ...bedroom,
                  enSuiteTypes: [...bedroom.enSuiteTypes, { type: "", subtype: "" }],
                })
              }
            >
              +
            </Button>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

export default EnSuiteCard;
