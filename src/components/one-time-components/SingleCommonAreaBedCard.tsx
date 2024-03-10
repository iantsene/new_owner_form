import React, { Dispatch, SetStateAction } from "react";
import DropdownSelect from "../reuseable-components/DropdownSelect";
import { Button, Card } from "@mui/material";
import { CommonAreaBed, CommonAreaBeds, Level } from "@/app/types/all-form-types";

interface Props {
  commonAreaBed: CommonAreaBeds;
  onUpdate: (updatedAreaBed: CommonAreaBeds) => void;
  usedLevels: { commonbathsUsedLevels: { value: string; label: string }[]; commonbedsUsedLevels: { value: string; label: string }[]; };
  setUsedLevels: Dispatch<SetStateAction<{commonbathsUsedLevels: { value: string; label: string }[]; commonbedsUsedLevels: { value: string; label: string }[];}>>;
  levelOptions: { value: string; label: string; }[]
}


function SingleCommonAreaBedCard({ levelOptions, commonAreaBed, usedLevels, setUsedLevels, onUpdate }: Props) {



  return (
    <>
    <Card sx={{ display: "flex", m: 1, p: 1 }}>
          <div className="common-area-bed-type">
            <Card className="bedroom-type" sx={{ display: "flex", m: 1, p: 1 }}>
              <div className="card-title">
                <h5>Level</h5>
              </div>
              <DropdownSelect
                state={commonAreaBed.level}
                fieldName="commonAreaBed.level"
                disableOptions={usedLevels.commonbedsUsedLevels}
                usedLevels={usedLevels}
                setUsedLevels={setUsedLevels}
                usedLevelsProperty='commonbeds'
                extraEffects={(level: Level) => onUpdate({ ...commonAreaBed, level })}
                options={levelOptions}
              />
            </Card>

            <Card className="bed-types" sx={{ display: "flex", m: 1, p: 1 }}>
              <div className="card-title">
                <h5>Beds</h5>
              </div>
              <div className="beds-dropdown">
                {commonAreaBed.commonBeds.map(
                  (commonBed: string, index: number) => (
                    <div className="beds-column" key={index}>
                      <DropdownSelect
                        label={`Bed ${index + 1}`}
                        labelId={`Bed ${index + 1}`}
                        state={commonBed}
                        fieldName="commonAreaBed.commonBeds"
                        key={index}
                        id={`bed${index + 1}-id`}
                        extraEffects={(commonBedType: CommonAreaBed) =>
                          onUpdate({
                            ...commonAreaBed,
                            commonBeds: commonAreaBed.commonBeds.with(
                              index,
                              commonBedType
                            ),
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
                          { value: "travel-cot", label: "Travel cot" },
                        ]}
                      />
                    </div>
                  )
                )}
              </div>

              <div className="card-buttons">
                <Button
                  className="button-remove"
                  onClick={() => {
                    onUpdate({
                      ...commonAreaBed,
                      commonBeds: commonAreaBed.commonBeds.slice(0, -1),
                    });
                  }}
                >
                  -
                </Button>
                {commonAreaBed.commonBeds.length <= 6 ? (
                  <Button
                    className="button-add"
                    onClick={() => {
                      onUpdate({
                        ...commonAreaBed,
                        commonBeds: [...commonAreaBed.commonBeds, ""],
                      });
                    }}
                  >
                    +
                  </Button>
                ) : null}
              </div>
            </Card>
          </div>
        </Card>
      
    </>
  )
};


export default SingleCommonAreaBedCard;