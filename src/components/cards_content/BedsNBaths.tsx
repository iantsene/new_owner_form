import { FormGroup } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import React, { Dispatch, SetStateAction } from "react";
import BedroomCard from "../one-time-components/BedroomCard";
import { useFormData } from "@/app/contexts/form";
import CommonAreaBedsCard from "../one-time-components/CommonAreaBedsCard";
import CommonBathsCard from "../one-time-components/CommonBathroomsCard";

interface Props {
  usedLevels: {
    commonbathsUsedLevels: { value: string; label: string }[];
    commonbedsUsedLevels: { value: string; label: string }[];
  };
  setUsedLevels: Dispatch<SetStateAction<{
    commonbathsUsedLevels: { value: string; label: string }[];
    commonbedsUsedLevels: { value: string; label: string }[];
  }>>;
}

export default function BedsNBaths({usedLevels, setUsedLevels}: Props) {
  const { value, setValue } = useFormData();
 
  return (
    <FormWrapper title="Bedrooms & Bathrooms">
      <div className="category-description">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut
          error! Aperiam ducimus inventore nisi cupiditate facilis consectetur
          ea officia quaerat, quam neque quo reiciendis nobis iste cum quis
          perspiciatis.
        </span>
      </div>
      <FormGroup>

        <div className="main-category">
          <h3>Bedrooms</h3>
        </div>
        {value.bedsNbaths.bedrooms.map((bedroom, index) => (
          <BedroomCard
            key={index}
            index={index}
            bedroom={bedroom}
            onUpdate={(newBedroom) =>
              setValue({
                bedsNbaths: {
                  ...value.bedsNbaths,
                  bedrooms: value.bedsNbaths.bedrooms.with(index, newBedroom),
                },
              })
            }
          />
        ))}

        <div className="main-category">
          <div className="media-query-custom-breakpoint">
            {value.basicInfo.commonAreaBedsNumber !== 0 && (
              <div className="common-area-beds-cat main-category">
                <h3>Common area beds</h3>
                  <CommonAreaBedsCard usedLevels={usedLevels} setUsedLevels={setUsedLevels} />
   
              </div>
            )}

            <div className="main-category">
            {value.basicInfo.commonAreaBedsNumber !== 0 && (
              <div className="common-area-baths-cat main-category">
              <h3>Common bathrooms</h3>
                <CommonBathsCard usedLevels={usedLevels} setUsedLevels={setUsedLevels} />
                </div>
                )}
            </div>
          
          </div>
        </div>
      </FormGroup>
    </FormWrapper>
  );
}
