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


export default function MainDescription({
  awayFromItAll,
  family,
  romantic,
  historical,
  traditionalProperty,
  secluded,
  brandNew,
  detached,
  semiDetached,
  singleLevelHome,
  privateResidence,
  kitchenGround,
  diner,
  dinerDescription,
  livingRoom,
  livingRoomDescription,
  serviceSupermarket,
  serviceSupermarketDelivery,
  serviceLunch,
  serviceOwnerNearby,
  childrenYes,
  garden,
  serviceBoatTaxiService,
  serviceMealDeliveryService,
  areaOfTheHouseInM2,
  surroundingAreaInM2,
  numOfFloorsToGround,
  yearOfBuilt,
  physicalDistancing,

  updateFields,
  data,
  setData,
  handleFieldChange,
}: FormDataTypes) {


  const handleCheckboxChange = (fieldName: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleFieldChange(fieldName, e.target.checked);
  };

  const maxCharacterCount = 120;

  const handleTextChange = (e) => {
    const newText = e.target.value;
    // Check if the new text exceeds the character limit
    if (newText.length <= maxCharacterCount) {
      updateFields({ areaOfTheHouseInM2: newText });
    }
  };
  const placeholderText = `Area of the house in m2 (${data.areaOfTheHouseInM2.length}/${maxCharacterCount})`;

  const mainCategories = [
    {
      title: 'Lodging type',
      description: 'Describe the mood of your property',
      content: (<>
        <div className="lodging-type-category main-category">

          <ul className="multi-options-grid">
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={awayFromItAll} onChange={handleCheckboxChange('awayFromItAll')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Away from it all</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={family} onChange={handleCheckboxChange('family')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Family</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={romantic} onChange={handleCheckboxChange('romantic')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Romantic</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={historical} onChange={handleCheckboxChange('historical')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Historical</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={traditionalProperty} onChange={handleCheckboxChange('traditionalProperty')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Traditional property</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={secluded} onChange={handleCheckboxChange('secluded')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Secluded</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={singleLevelHome} onChange={handleCheckboxChange('singleLevelHome')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Single level home</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={detached} onChange={handleCheckboxChange('detached')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Detached</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={semiDetached} onChange={handleCheckboxChange('semiDetached')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Semi-detached</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={brandNew} onChange={handleCheckboxChange('brandNew')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Brand new</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={privateResidence} onChange={handleCheckboxChange('privateResidence')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Bed and breakfast</span></div>} /></li>
          </ul>
        </div>
      </>
      ),
    },
    {
      title: 'Nearby services',
      description: 'Provide guests with helpful information',
      content: (<>
        <div className="nearby-services-category main-category">
          <ul className="multi-options-grid">
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={kitchenGround} onChange={handleCheckboxChange('kitchenGround')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Kitchen on the ground</span></div>} /></li>
            <li className="list-item"><CheckboxWithCustomTextField label="Diner" icon={<img src="/Icons/icon-placeholder.png" />} textboxLabel='Diner distance:' checked={diner} onCheckboxChange={(checked) => updateFields({ diner: checked })} description={dinerDescription} onClearDescription={() => { updateFields({ dinerDescription: "" })}} onDescriptionChange={(description) => updateFields({ dinerDescription: description })} /></li>
            <li className="list-item"><CheckboxWithCustomTextField label="Living room" icon={<img src="/Icons/icon-placeholder.png" />} textboxLabel='living room details:' checked={livingRoom} onCheckboxChange={(checked) => updateFields({ livingRoom: checked })} description={livingRoomDescription} onClearDescription={() => { updateFields({ livingRoomDescription: "" })}} onDescriptionChange={(description) => updateFields({ livingRoomDescription: description })} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={serviceSupermarket} onChange={handleCheckboxChange('serviceSupermarket')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Service supermarket</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={serviceSupermarketDelivery} onChange={handleCheckboxChange('serviceSupermarketDelivery')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Service supermarket delivery</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={serviceLunch} onChange={handleCheckboxChange('serviceLunch')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Service lunch</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={serviceOwnerNearby} onChange={handleCheckboxChange('serviceOwnerNearby')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Service owner nearby</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={childrenYes} onChange={handleCheckboxChange('childrenYes')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Children Yes</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={garden} onChange={handleCheckboxChange('garden')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Garden</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={serviceBoatTaxiService} onChange={handleCheckboxChange('serviceBoatTaxiService')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Service boat taxi service</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={serviceMealDeliveryService} onChange={handleCheckboxChange('serviceMealDeliveryService')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Service meal delivery service</span></div>} /></li>
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
          <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Area of the house in m2:</span><CustomTextField label="Area of the house in m2" type="text" value={areaOfTheHouseInM2} icon={<img className="textfiel-icon" src="/Icons/icon-placeholder.png" alt="icon" />} onChange={e => updateFields({ areaOfTheHouseInM2: e })}  ></CustomTextField></div></li>
          <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Surrounding area in m2:</span><CustomTextField label="Surrounding area in m2" type="text" value={surroundingAreaInM2} icon={<img className="textfiel-icon" src="/Icons/icon-placeholder.png" alt="icon" />} onChange={e => updateFields({ surroundingAreaInM2: e })}  ></CustomTextField></div></li>
          <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Number of floors to the ground:</span><CustomTextField label="Number of floors to the ground" type="text" value={numOfFloorsToGround} icon={<img className="textfiel-icon" src="/Icons/icon-placeholder.png" alt="icon" />} onChange={e => updateFields({ numOfFloorsToGround: e })}  ></CustomTextField></div></li>
          <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Year of built:</span><CustomTextField label="Year of built" type="text" value={yearOfBuilt} icon={<img className="textfiel-icon" src="/Icons/icon-placeholder.png" alt="icon" />} onChange={e => updateFields({ yearOfBuilt: e })}  ></CustomTextField></div></li>
          </ul>
        </div>
      </>
      ),
    },
    {
      title: 'Physical distancing',
      description: 'Description for Physical distancing category',
      content: (<>
        <div className="main-category">

          <div className="category-styling">
            <ul>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={physicalDistancing} onChange={handleCheckboxChange('physicalDistancing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Physical distancing</span></div>} /></li>
            </ul>
          </div>
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



        <div className="textarea-category">
          <h3>Brief Description</h3>
          <AutosizeTextarea
            data={data}
            setData={setData}

          />

        </div>
      </FormGroup>
    </FormWrapper>
  );
}
