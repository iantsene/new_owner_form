import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AutosizeTextarea from '../reuseable-components/AutosizeTextarea';
import FormWrapper from '../form_components/FormWrapper';
import { FormDataTypes } from '@/app/types/all-form-types';
import CustomTextField from '../reuseable-components/CustomTextField';
import CheckboxWithCustomTextField from '../reuseable-components/CheckboxWithCustomTextField';
import { useFormData } from '@/app/contexts/form';


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
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.awayFromItAll} onChange={handleCheckboxChange('awayFromItAll')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Away from it all</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.family} onChange={handleCheckboxChange('family')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Family</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.romantic} onChange={handleCheckboxChange('romantic')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Romantic</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.historical} onChange={handleCheckboxChange('historical')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Historical</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.traditionalProperty} onChange={handleCheckboxChange('traditionalProperty')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Traditional property</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.secluded} onChange={handleCheckboxChange('secluded')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Secluded</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.singleLevelHome} onChange={handleCheckboxChange('singleLevelHome')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Single level home</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.detached} onChange={handleCheckboxChange('detached')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Detached</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.semiDetached} onChange={handleCheckboxChange('semiDetached')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Semi-detached</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.brandNew} onChange={handleCheckboxChange('brandNew')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Brand new</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.privateResidence} onChange={handleCheckboxChange('privateResidence')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Bed and breakfast</span></div>} /></li>
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
          <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Area of the house in m2:</span><CustomTextField label="Area of the house in m2" type="text" value={value.areaOfTheHouseInM2} icon={<img className="textfiel-icon" src="/Icons/icon-placeholder.png" alt="icon" />} onChange={e => setValue({ areaOfTheHouseInM2: e })}  ></CustomTextField></div></li>
          <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Surrounding area in m2:</span><CustomTextField label="Surrounding area in m2" type="text" value={value.surroundingAreaInM2} icon={<img className="textfiel-icon" src="/Icons/icon-placeholder.png" alt="icon" />} onChange={e => setValue({ surroundingAreaInM2: e })}  ></CustomTextField></div></li>
          <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Number of floors to the ground:</span><CustomTextField label="Number of floors to the ground" type="text" value={value.numOfFloorsToGround} icon={<img className="textfiel-icon" src="/Icons/icon-placeholder.png" alt="icon" />} onChange={e => setValue({ numOfFloorsToGround: e })}  ></CustomTextField></div></li>
          <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Year of built:</span><CustomTextField label="Year of built" type="text" value={value.yearOfBuilt} icon={<img className="textfiel-icon" src="/Icons/icon-placeholder.png" alt="icon" />} onChange={e => setValue({ yearOfBuilt: e })}  ></CustomTextField></div></li>
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
              <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.extraEcoHouse} onChange={handleCheckboxChange('extraEcoHouse')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Extra Eco house</span></div>} /></li>
              <li className="list-items wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.extraPartiesNotAllowed} onChange={handleCheckboxChange('extraPartiesNotAllowed')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Extra Parties not allowed</span></div>} /></li>
              <li className="list-items wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.extraPartiesAllowed} onChange={handleCheckboxChange('extraPartiesAllowed')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Extra Parties allowed</span></div>} /></li>
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
