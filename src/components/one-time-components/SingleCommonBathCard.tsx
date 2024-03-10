import React, { Dispatch, SetStateAction } from "react";
import DropdownSelect from "../reuseable-components/DropdownSelect";
import { Button, Card } from "@mui/material";
import { CommonBathType, CommonBath, Level, CommonBaths } from "@/app/types/all-form-types";

interface Props {
  commonBath: CommonBaths;
  onUpdate: (updatedCommonBath: CommonBaths) => void;
  levelOptions: { value: string; label: string; }[]
  usedLevels: { commonbathsUsedLevels: { value: string; label: string }[]; commonbedsUsedLevels: { value: string; label: string }[]; };
  setUsedLevels: Dispatch<SetStateAction<{commonbathsUsedLevels: { value: string; label: string }[]; commonbedsUsedLevels: { value: string; label: string }[];}>>;
  
}

function SingleCommonBathCard({ commonBath, levelOptions, usedLevels, setUsedLevels, onUpdate }: Props) {
  return (
    <>

<Card className="common-bathroom-type" sx={{ display: "flex", m: 1, p: 1 }}>
  <div className="common-bath-level">
          <div className="card-title">
            <h5>Level</h5>
          </div>
          <DropdownSelect
            state={commonBath.level}
            fieldName="commonBath.level"
            usedLevels={usedLevels}
            setUsedLevels={setUsedLevels}
            usedLevelsProperty='commonbaths'
            extraEffects={(level: Level) => onUpdate({ ...commonBath, level })}
            disableOptions={usedLevels.commonbathsUsedLevels}
            options={levelOptions}
          />

          
</div>
          <div className="bedroom-type">
            <Card className="bedroom-type" sx={{ display: "flex", m: 1, p: 1 }}>
              <div className="card-title">
                <h5>Type</h5>
              </div>
              <div className="common-baths-dropdown">
                {commonBath.commonBathTypes.map((bathTypes, index) => (
                  <div className="common-baths-column" key={index}>
                    <DropdownSelect
                      fieldName="bathTypes.type"
                      state={bathTypes.type}
                      extraEffects={(commonBathType: CommonBathType) =>
                        onUpdate({
                          ...commonBath,
                          commonBathTypes: commonBath.commonBathTypes.map(
                            (item, i) =>
                              i === index
                                ? { ...item, type: commonBathType }
                                : item
                          ),
                        })
                      }
                      options={[
                        { value: "family shower", label: "Family shower" },
                        { value: "family bathroom", label: "Family bathroom" },
                        { value: "family wc", label: "Family WC" },
                      ]}
                    />

                    <DropdownSelect
                      fieldName="bathTypes.subtype"
                      state={bathTypes.subtype}
                      extraEffects={(commonBathSubtype: CommonBath) =>
                        onUpdate({
                          ...commonBath,
                          commonBathTypes: commonBath.commonBathTypes.map(
                            (item, i) =>
                              i === index
                                ? { ...item, subtype: commonBathSubtype }
                                : item
                          ),
                        })
                      }
                      options={[
                        { value: "toilet", label: "Toilet" },
                        { value: "bath with shower", label: "Bath with shower" },
                        { value: "bath", label: "Bath" },
                        { value: "shower", label: "Shower" },
                        { value: "bath with jets", label: "Bath with jets" },
                        { value: "bidet", label: "Bidet" },
                        { value: "outdoor shower", label: "Outdoor shower" },
                      ]}
                    />
                  </div>
                ))}
              </div>
              <div className="card-buttons">
                <Button
                  className="button-remove"
                  onClick={() =>
                    onUpdate({
                      ...commonBath,
                      commonBathTypes:
                        commonBath.commonBathTypes.length > 0
                          ? commonBath.commonBathTypes.slice(0, -1)
                          : [{ type: "", subtype: "" }],
                    })
                  }
                >
                  -
                </Button>
                {commonBath.commonBathTypes.length <= 5 ? (
                  <Button
                    className="button-add"
                    onClick={() =>
                      onUpdate({
                        ...commonBath,
                        commonBathTypes: [
                          ...commonBath.commonBathTypes,
                          { type: "", subtype: "" },
                        ],
                      })
                    }
                  >
                    +
                  </Button>
                ) : null}
              </div>
            </Card>
          </div>
        </Card>
        </>
  );
}

export default SingleCommonBathCard;