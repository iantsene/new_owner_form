import { Card, Button } from "@mui/material";
import DropdownSelect from "../reuseable-components/DropdownSelect";
import { EnSuite, EnSuiteType, Bedroom } from "@/app/types/all-form-types";




function EnSuiteCard({
  bedroom,
  onUpdate,
}: {
  bedroom: Bedroom;
  onUpdate: (updatedRoom: Bedroom) => void;
}) {
 



  
  return (
    <Card className="en-suite-types" sx={{ display: "flex", m: 1, p: 1 }}>
      <div className="card-title">
        <h5>EnSuite Baths/Showers</h5>
      </div>
      <div className="en-suite-dropdown">
        {bedroom.enSuiteTypes.map((enSuite, index) => (
          <div className="en-suite-column" key={index}>
            <DropdownSelect
              label={`Type`}
              labelId={`Type ${index + 1}`}
              state={enSuite.type}
              fieldName='enSuite.type'
              key={index}
              id={`Type${index + 1}-type-id`}
              extraEffects={(newEnsuiteType: EnSuiteType) =>
                onUpdate({ ...bedroom, enSuiteTypes: bedroom.enSuiteTypes.map((item, i) =>
                  i === index ? { ...item, type: newEnsuiteType } : item
                ),
              })
            }
              options={[
                { value: "shower", label: "Shower" },
                { value: "bathroom", label: "Bathroom" },
                { value: "wc", label: "Water closet" },
              ]}
            />

            <DropdownSelect
              label={`En-suite ${index + 1}`}
              labelId={`En-suite ${index + 1}`}
              state={enSuite.subtype}
              fieldName='enSuite.subtype'
              key={index}
              id={`En-suite${index + 1}-type-id`}
              extraEffects={(newEnSuite: EnSuite) =>
                onUpdate({
                  ...bedroom,
                  enSuiteTypes: bedroom.enSuiteTypes.map((item, i) =>
                  i === index ? { ...item, subtype: newEnSuite } : item
                ),
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
