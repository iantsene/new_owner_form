import { FormGroup } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomTextField from "../reuseable-components/CustomTextField";
import { useFormData } from "@/app/contexts/form";
import CustomCheckbox from "../reuseable-components/CustomCheckbox";

export default function Amenities() {
  const { value, setValue, handleFieldChange } = useFormData();

  const handleCheckboxChange = (fieldName: string) => (e: any) => {
    handleFieldChange(fieldName, e.target.checked);
  };

  const mainCategories = [
    {
      title: "General Amenities",
      description: "What are the general amenities your property offers?",
      content: (
        <>
          <div className="general-amenities-category main-category">
            <ul className="multi-options-grid">
              <CustomCheckbox
                label="Car hire recommended"
                value={value.carHireRecommended}
                onChange={handleCheckboxChange("carHireRecommended")}
              />
              <CustomCheckbox
                label="Car hire not essential"
                value={value.carHireNotEssential}
                onChange={handleCheckboxChange("carHireNotEssential")}
              />
              <CustomCheckbox
                label="Hot water provided"
                value={value.hotWaterProvided}
                onChange={handleCheckboxChange("hotWaterProvided")}
              />
              <CustomCheckbox
                label="Essentials"
                value={value.essentials}
                onChange={handleCheckboxChange("essentials")}
              />
              <CustomCheckbox
                label="Room-darkening shades"
                value={value.roomDarkeningShades}
                onChange={handleCheckboxChange("roomDarkeningShades")}
              />
              <CustomCheckbox
                label="Hangers"
                value={value.hangers}
                onChange={handleCheckboxChange("hangers")}
              />
              <CustomCheckbox
                label="Beach sun loungers provided"
                value={value.beachSunLoungersProvided}
                onChange={handleCheckboxChange("beachSunLoungersProvided")}
              />
              <CustomCheckbox
                label="Beach towels provided"
                value={value.beachTowelsProvided}
                onChange={handleCheckboxChange("beachTowelsProvided")}
              />
              <CustomCheckbox
                label="Shower gel"
                value={value.showerGel}
                onChange={handleCheckboxChange("showerGel")}
              />
              <CustomCheckbox
                label="Extras paddle board"
                value={value.extrasPaddleBoard}
                onChange={handleCheckboxChange("extrasPaddleBoard")}
              />
              <CustomCheckbox
                label="Extras beach chair"
                value={value.extrasBeachChair}
                onChange={handleCheckboxChange("extrasBeachChair")}
              />
              <CustomCheckbox
                label="Shampoo provided"
                value={value.shampooProvided}
                onChange={handleCheckboxChange("shampooProvided")}
              />
              <CustomCheckbox
                label="Extra pillows and blankets"
                value={value.extraPillowsAndBlankets}
                onChange={handleCheckboxChange("extraPillowsAndBlankets")}
              />
              <CustomCheckbox
                label="Beach towels cool bags and boxes"
                value={value.beachTowelsCoolBagsAndBoxes}
                onChange={handleCheckboxChange("beachTowelsCoolBagsAndBoxes")}
              />
            </ul>
          </div>
        </>
      ),
    },
    {
      title: "Keys locations",
      description: "Where can I find my keys/extra keys?",
      content: (
        <>
          <div className="keys-cat main-category">
            <ul className="duo-options-grid">
              <CustomTextField
                label="Key location"
                type="text"
                value={value.keyLocation}
                onChange={(e) => setValue({ keyLocation: e })}
              />
              <CustomTextField
                label="Extra key location"
                type="text"
                value={value.extraKeyLocation}
                onChange={(e) => setValue({ extraKeyLocation: e })}
              />
            </ul>
          </div>
        </>
      ),
    },
    {
      title: "Linen service",
      description: "How and how often do you change sheets?",
      content: (
        <>
          <div className="linen-service-cat main-category">
            <ul className="duo-options-grid">
              <CustomCheckbox
                label="Bed linen"
                value={value.bedLinen}
                onChange={handleCheckboxChange("bedLinen")}
              />
              <CustomCheckbox
                label="Linen X1 a week"
                value={value.linenOnceAWeek}
                onChange={handleCheckboxChange("linenOnceAWeek")}
              />
              <CustomCheckbox
                label="Linen X2 a week"
                value={value.linenTwiceAWeek}
                onChange={handleCheckboxChange("linenTwiceAWeek")}
              />
            </ul>
            <div className="clean-method-cat">
              <ul className="media-query-custom-grid">
                <CustomTextField
                  label="Linen cleaning method"
                  type="text"
                  value={value.linenCleaningMethod}
                  onChange={(e) => setValue({ linenCleaningMethod: e })}
                />
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Maid service",
      description: "How often do you clean the rooms?",
      content: (
        <>
          <div className="maid-service-cat main-category">
            <ul className="duo-options-grid">
              <CustomCheckbox
                label="Maid every day"
                value={value.maidEveryDay}
                onChange={handleCheckboxChange("maidEveryDay")}
              />
              <CustomCheckbox
                label="Maid X1 a week"
                value={value.maidOnceAWeek}
                onChange={handleCheckboxChange("maidOnceAWeek")}
              />
              <CustomCheckbox
                label="Maid X2 a week"
                value={value.maidTwiceAWeek}
                onChange={handleCheckboxChange("maidTwiceAWeek")}
              />
              <CustomCheckbox
                label="Maid X3 a week"
                value={value.maidThriceAWeek}
                onChange={handleCheckboxChange("maidThriceAWeek")}
              />
              <CustomCheckbox
                label="Maid breakfast included"
                value={value.maidBreakfastIncluded}
                onChange={handleCheckboxChange("maidBreakfastIncluded")}
              />
            </ul>
          </div>
        </>
      ),
    },
    {
      title: "Safe cleaning",
      description: "How do you handle the cleaning of my room safe?",
      content: (
        <>
          <div className="safe-cleaning-cat main-category">
            <ul className="duo-options-grid">
              <CustomTextField
                label="Enhached cleaning"
                type="text"
                value={value.safeEnhachedCleaning}
                onChange={(e) => setValue({ safeEnhachedCleaning: e })}
              />
              <CustomTextField
                label="Disinfection"
                type="text"
                value={value.safeCleaningDisinfection}
                onChange={(e) => setValue({ safeCleaningDisinfection: e })}
              />
              <CustomTextField
                label="Self check in check out"
                type="text"
                value={value.safeSelfCheckInCheckOut}
                onChange={(e) => setValue({ safeSelfCheckInCheckOut: e })}
              />
              <CustomTextField
                label="Common surface disinfecting"
                type="text"
                value={value.safeCommonSurfaceDisinfecting}
                onChange={(e) => setValue({ safeCommonSurfaceDisinfecting: e })}
              />
            </ul>
          </div>
        </>
      ),
    },
    {
      title: "Sanitation",
      description: "What are your sanitary standards?",
      content: (
        <>
          <div className="sanitation-cat main-category">
            <ul className="duo-options-grid">
              <CustomTextField
                label="Safe sanitary association"
                type="text"
                value={value.safeSanitaryAssociation}
                onChange={(e) => setValue({ safeSanitaryAssociation: e })}
              />
              <CustomTextField
                label="Sanitary standard"
                type="text"
                value={value.sanitaryStandard}
                onChange={(e) => setValue({ sanitaryStandard: e })}
              />
            </ul>
          </div>
        </>
      ),
    },
    {
      title: "Towels service",
      description: "How about towels? How often do you change?",
      content: (
        <>
          <div className="towels-service-cat main-category">
            <ul className="duo-options-grid">
              <CustomCheckbox
                label="Towels"
                value={value.towels}
                onChange={handleCheckboxChange("towels")}
              />
              <CustomCheckbox
                label="Towels X1 a week"
                value={value.towelsOnceAWeek}
                onChange={handleCheckboxChange("towelsOnceAWeek")}
              />
              <CustomCheckbox
                label="Towels X2 a week"
                value={value.towelsTwiceAWeek}
                onChange={handleCheckboxChange("towelsTwiceAWeek")}
              />
              <CustomCheckbox
                label="Towels X3 a week"
                value={value.towelsThriceAWeek}
                onChange={handleCheckboxChange("towelsThriceAWeek")}
              />
            </ul>
          </div>
        </>
      ),
    },
  ];

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <FormWrapper title="Amenities">
      <div className="category-description">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut
          error! Aperiam ducimus inventore nisi cupiditate facilis consectetur
          ea officia quaerat, quam neque quo reiciendis nobis iste cum quis
          perspiciatis.
        </span>
      </div>
      <FormGroup>
        {mainCategories.map((category, index) => (
          <div className="accordions">
            <Accordion
              className="custom-accordion"
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
              >
                <Typography
                  sx={{ width: "40%", fontWeight: "bold", flexShrink: 0 }}
                >
                  {category.title}
                </Typography>
                <Typography
                  sx={{ marginLeft: "20px", color: "text.secondary" }}
                >
                  {category.description}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>{category.content}</AccordionDetails>
            </Accordion>
          </div>
        ))}
      </FormGroup>
    </FormWrapper>
  );
}
