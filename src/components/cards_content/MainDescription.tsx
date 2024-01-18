import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormGroup,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AutosizeTextarea from '../reuseable-components/AutosizeTextarea';
import FormWrapper from '../form_components/FormWrapper';
import CustomTextField from '../reuseable-components/CustomTextField';
import { useFormData } from '@/app/contexts/form';
import CustomCheckbox from '../reuseable-components/CustomCheckbox';


export default function MainDescription() {

  const {value, setValue, handleFieldChange }  = useFormData();

  const handleCheckboxChange = (fieldName: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleFieldChange(fieldName, e.target.checked);
  };

  const maxCharacterCount = 120;

  // const handleTextChange = (e) => {
  //   const newText = e.target.value;
  //   // Check if the new text exceeds the character limit
  //   if (newText.length <= maxCharacterCount) {
  //     setValue({ areaOfTheHouseInM2: newText });
  //   }
  // };
  const placeholderText = `Area of the house in m2 (${value.areaOfTheHouseInM2.length}/${maxCharacterCount})`;

  const mainCategories = [
    {
      title: 'Lodging type',
      description: 'Describe the mood of your property',
      content: (<>
        <div className="lodging-type-category main-category">

          <ul className="multi-options-grid">
          <CustomCheckbox label="Away from it all" value={value.awayFromItAll} onChange={handleCheckboxChange('awayFromItAll')} />
          <CustomCheckbox label="Family" value={value.family} onChange={handleCheckboxChange('family')} /> 
          <CustomCheckbox label="Romantic" value={value.romantic} onChange={handleCheckboxChange('romantic')} /> 
          <CustomCheckbox label="Historical" value={value.historical} onChange={handleCheckboxChange('historical')} /> 
          <CustomCheckbox label="Traditional property" value={value.traditionalProperty} onChange={handleCheckboxChange('traditionalProperty')} /> 
          <CustomCheckbox label="Secluded" value={value.secluded} onChange={handleCheckboxChange('secluded')} /> 
          <CustomCheckbox label="Single level home" value={value.singleLevelHome} onChange={handleCheckboxChange('singleLevelHome')} /> 
          <CustomCheckbox label="Detached" value={value.detached} onChange={handleCheckboxChange('detached')} /> 
          <CustomCheckbox label="Semi-detached" value={value.semiDetached} onChange={handleCheckboxChange('semiDetached')} /> 
          <CustomCheckbox label="Brand new" value={value.brandNew} onChange={handleCheckboxChange('brandNew')} /> 
          <CustomCheckbox label="Bed and breakfast" value={value.privateResidence} onChange={handleCheckboxChange('privateResidence')} /> 
          </ul>
        </div>
      </>
      ),
    },
    {
      title: 'Living space information',
      description: 'How big is it? How old is it? Does it have a lot of stairs?',
      content: (<>
        <div className="living-space-cat main-category">

          <ul className="duo-options-grid">
          <CustomTextField label="Area of the house in m2" type="text" value={value.areaOfTheHouseInM2} onChange={e => setValue({ areaOfTheHouseInM2: e })}  />
          <CustomTextField label="Surrounding area in m2" type="text" value={value.surroundingAreaInM2} onChange={e => setValue({ surroundingAreaInM2: e })}  />
          <CustomTextField label="Number of floors to the ground" type="text" value={value.numOfFloorsToGround} onChange={e => setValue({ numOfFloorsToGround: e })}  />
          <CustomTextField label="Year of built" type="text" value={value.yearOfBuilt} onChange={e => setValue({ yearOfBuilt: e })}  />
          </ul>
        </div>
      </>
      ),
    },
  ];

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <FormWrapper title="Main Description">
      <div className="category-description">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut
          error! Aperiam ducimus inventore nisi cupiditate facilis consectetur ea
          officia quaerat, quam neque quo reiciendis nobis iste cum quis
          perspiciatis.
        </span>
      </div>
      <FormGroup>
        {mainCategories.map((category, index) => (
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
             <Typography sx={{ width: '40%', fontWeight: 'bold', flexShrink: 0 }}>
                {category.title}
              </Typography>
              <Typography sx={{ marginLeft: '20px', color: 'text.secondary' }}>
                {category.description}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{category.content}</AccordionDetails>
          </Accordion>
        ))}

<div className="extra-parties-cat main-category">
            <h3>Extra Parties & Eco</h3>
            <ul className="media-query-custom-breakpoint">
          <CustomCheckbox label="Extra Eco house" value={value.extraEcoHouse} onChange={handleCheckboxChange('extraEcoHouse')} /> 
          <CustomCheckbox label="Extra Parties not allowed" value={value.extraPartiesNotAllowed} onChange={handleCheckboxChange('extraPartiesNotAllowed')} /> 
          <CustomCheckbox label="Extra Parties allowed" value={value.extraPartiesAllowed} onChange={handleCheckboxChange('extraPartiesAllowed')} /> 
            </ul>

          </div>


        <div className="textarea-category">
          <h3>Brief Description</h3>
          <AutosizeTextarea
            data={value}
            setData={setValue}

          />

        </div>
      </FormGroup>
    </FormWrapper>
  );
}
