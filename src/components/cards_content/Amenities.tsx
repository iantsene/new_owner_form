import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";
import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomTextField from "../reuseable-components/CustomTextField";



type UserFormProps = FormDataTypes & {
  updateFields: (fields: Partial<FormDataTypes>) => void

}

export default function Amenities({

  beachSunLoungersProvided,
  beachTowelsCoolBagsAndBoxes,
  beachTowelsProvided,
  essentials,
  hangers,
  extraPillowsAndBlankets,
  roomDarkeningShades,
  showerGel,
  extrasBeachChair,
  extrasPaddleBoard,
  hotWaterProvided,
  maidEveryDay,
  maidOnceAWeek,
  maidTwiceAWeek,
  maidThriceAWeek,
  maidBreakfastIncluded,
  bedLinen,
  linenOnceAWeek,
  linenTwiceAWeek,
  towels,
  towelsOnceAWeek,
  towelsTwiceAWeek,
  towelsThriceAWeek,
  shampooProvided,
  carHireRecommended,
  carHireNotEssential,
  keyLocation,
  extraKeyLocation,
  linenCleaningMethod,
  safeEnhachedCleaning,
  safeCleaningDisinfection,
  safeSelfCheckInCheckOut,
  safeCommonSurfaceDisinfecting,
  safeSanitaryAssociation,
  sanitaryStandard,




  updateFields, data, handleFieldChange }: UserFormProps) {

  const handleCheckboxChange = (fieldName: string) => (e) => {
    handleFieldChange(fieldName, e.target.checked);
  };








  const mainCategories = [
    {
      title: 'General Amenities',
      description: 'What are the general amenities your property offers?',
      content: (<>
        <div className="general-amenities-category main-category">

          <ul className="multi-options-grid">
            <li className="list-items"><FormControlLabel labelPlacement="end" control={<Checkbox size="small" checked={carHireRecommended} onChange={handleCheckboxChange('carHireRecommended')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Car hire recommended</span></div>} /></li>
            <li className="list-items"><FormControlLabel labelPlacement="end" control={<Checkbox size="small" checked={carHireNotEssential} onChange={handleCheckboxChange('carHireNotEssential')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Car hire not essential</span></div>} /></li>
            <li className="list-items"><FormControlLabel labelPlacement="end" control={<Checkbox size="small" checked={hotWaterProvided} onChange={handleCheckboxChange('hotWaterProvided')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Hot water provided</span></div>} /></li>
            <li className="list-items"><FormControlLabel labelPlacement="end" control={<Checkbox size="small" checked={essentials} onChange={handleCheckboxChange('essentials')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Essentials</span></div>} /></li>
            <li className="list-items"><FormControlLabel labelPlacement="end" control={<Checkbox size="small" checked={roomDarkeningShades} onChange={handleCheckboxChange('roomDarkeningShades')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Room-darkening shades</span></div>} /></li>
            <li className="list-items"><FormControlLabel labelPlacement="end" control={<Checkbox size="small" checked={hangers} onChange={handleCheckboxChange('hangers')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Hangers</span></div>} /></li>
            <li className="list-items"><FormControlLabel labelPlacement="end" control={<Checkbox size="small" checked={beachSunLoungersProvided} onChange={handleCheckboxChange('beachSunLoungersProvided')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Beach sun loungers provided</span></div>} /></li>
            <li className="list-items"><FormControlLabel labelPlacement="end" control={<Checkbox size="small" checked={beachTowelsProvided} onChange={handleCheckboxChange('beachTowelsProvided')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Beach towels provided</span></div>} /></li>
            <li className="list-items"><FormControlLabel labelPlacement="end" control={<Checkbox size="small" checked={showerGel} onChange={handleCheckboxChange('showerGel')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Shower gel</span></div>} /></li>
            <li className="list-items"><FormControlLabel labelPlacement="end" control={<Checkbox size="small" checked={extrasPaddleBoard} onChange={handleCheckboxChange('extrasPaddleBoard')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Extras paddle board</span></div>} /></li>
            <li className="list-items"><FormControlLabel labelPlacement="end" control={<Checkbox size="small" checked={extrasBeachChair} onChange={handleCheckboxChange('extrasBeachChair')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Extras beach chair</span></div>} /></li>
            <li className="list-items"><FormControlLabel labelPlacement="end" control={<Checkbox size="small" checked={shampooProvided} onChange={handleCheckboxChange('shampooProvided')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Shampoo provided</span></div>} /></li>
            <li className="list-items"><FormControlLabel labelPlacement="end" control={<Checkbox size="small" checked={extraPillowsAndBlankets} onChange={handleCheckboxChange('extraPillowsAndBlankets')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Extra pillows and blankets</span></div>} /></li>
            <li className="list-items"><FormControlLabel labelPlacement="end" control={<Checkbox size="small" checked={beachTowelsCoolBagsAndBoxes} onChange={handleCheckboxChange('beachTowelsCoolBagsAndBoxes')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Beach towels cool bags and boxes</span></div>} /></li>
          </ul>
        </div>
      </>
      ),
    },
    {
      title: 'Keys locations',
      description: 'Where can I find my keys/extra keys?',
      content: (<>
        <div className="keys-cat main-category">
          <ul className="duo-options-grid">
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Key location:</span><CustomTextField label="Key location" type="text" value={keyLocation} onChange={e => updateFields({ keyLocation: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Extra key location:</span><CustomTextField label="Extra key location" type="text" value={extraKeyLocation} onChange={e => updateFields({ extraKeyLocation: e })}  ></CustomTextField></div></li>
          </ul>
        </div>
      </>
      ),
    },
    {
      title: 'Linen service',
      description: 'How and how often do you change sheets?',
      content: (<>
        <div className="linen-service-cat main-category">

          <ul className="duo-options-grid">
            <li className="list-items"><FormControlLabel labelPlacement="start" control={<Checkbox size="small" checked={bedLinen} onChange={handleCheckboxChange('bedLinen')} />} label={<div className="label-content linen-icons-spacing"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Bed linen</span></div>} /></li>
            <li className="list-items"><FormControlLabel labelPlacement="start" control={<Checkbox size="small" checked={linenOnceAWeek} onChange={handleCheckboxChange('linenOnceAWeek')} />} label={<div className="label-content linen-icons-spacing"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Linen X1 a week</span></div>} /></li>
            <li className="list-items"><FormControlLabel labelPlacement="start" control={<Checkbox size="small" checked={linenTwiceAWeek} onChange={handleCheckboxChange('linenTwiceAWeek')} />} label={<div className="label-content linen-icons-spacing"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Linen X2 a week</span></div>} /></li>
          </ul>
          <div className="clean-method-cat">
            <ul className="media-query-custom-grid">
              <li className="list-item-container linen-text"><img src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span >Linen cleaning method:</span><CustomTextField label="Linen cleaning method" type="text" value={linenCleaningMethod} onChange={e => updateFields({ linenCleaningMethod: e })}  ></CustomTextField></div></li>
            </ul>
          </div>
        </div>

      </>
      ),
    },
    {
      title: 'Maid service',
      description: 'How often do you clean the rooms?',
      content: (<>
        <div className="maid-service-cat main-category">

          <ul className="duo-options-grid">
            <li className="list-items"><FormControlLabel labelPlacement="end" control={<Checkbox size="small" checked={maidEveryDay} onChange={handleCheckboxChange('maidEveryDay')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Maid every day</span></div>} /></li>
            <li className="list-items"><FormControlLabel labelPlacement="end" control={<Checkbox size="small" checked={maidOnceAWeek} onChange={handleCheckboxChange('maidOnceAWeek')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Maid X1 a week</span></div>} /></li>
            <li className="list-items"><FormControlLabel labelPlacement="end" control={<Checkbox size="small" checked={maidTwiceAWeek} onChange={handleCheckboxChange('maidTwiceAWeek')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Maid X2 a week</span></div>} /></li>
            <li className="list-items"><FormControlLabel labelPlacement="end" control={<Checkbox size="small" checked={maidThriceAWeek} onChange={handleCheckboxChange('maidThriceAWeek')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Maid X3 a week</span></div>} /></li>
            <li className="list-items"><FormControlLabel labelPlacement="end" control={<Checkbox size="small" checked={maidBreakfastIncluded} onChange={handleCheckboxChange('maidBreakfastIncluded')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Maid breakfast included</span></div>} /></li>
          </ul>
        </div>
      </>
      ),
    },
    {
      title: 'Safe cleaning',
      description: 'How do you handle the cleaning of my room safe?',
      content: (<>
        <div className="safe-cleaning-cat main-category">

          <ul className="duo-options-grid">
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Enhached cleaning:</span><CustomTextField label="Enhached cleaning" type="text" value={safeEnhachedCleaning} onChange={e => updateFields({ safeEnhachedCleaning: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Disinfection:</span><CustomTextField label="Disinfection" type="text" value={safeCleaningDisinfection} onChange={e => updateFields({ safeCleaningDisinfection: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Self check in check out:</span><CustomTextField label="Self check in check out" type="text" value={safeSelfCheckInCheckOut} onChange={e => updateFields({ safeSelfCheckInCheckOut: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Common surface disinfecting:</span><CustomTextField label="surfaces disinfecting" type="text" value={safeCommonSurfaceDisinfecting} onChange={e => updateFields({ safeCommonSurfaceDisinfecting: e })}  ></CustomTextField></div></li>
          </ul>
        </div>
      </>
      ),
    },
    {
      title: 'Sanitation',
      description: 'What are your sanitary standards?',
      content: (<>
        <div className="sanitation-cat main-category">
          <ul className="duo-options-grid">
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Safe sanitary association:</span><CustomTextField label="sanitary association" type="text" value={safeSanitaryAssociation} onChange={e => updateFields({ safeSanitaryAssociation: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Sanitary standard:</span><CustomTextField label="Sanitary standard" type="text" value={sanitaryStandard} onChange={e => updateFields({ sanitaryStandard: e })}  ></CustomTextField></div></li>
          </ul>
        </div>
      </>
      ),
    },
    {
      title: 'Towels service',
      description: 'How about towels? How often do you change?',
      content: (<>
        <div className="towels-service-cat main-category">
          <ul className="duo-options-grid">

            <li className="list-items"><FormControlLabel labelPlacement="end" control={<Checkbox size="small" checked={towels} onChange={handleCheckboxChange('towels')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Towels</span></div>} /></li>
            <li className="list-items"><FormControlLabel labelPlacement="end" control={<Checkbox size="small" checked={towelsOnceAWeek} onChange={handleCheckboxChange('towelsOnceAWeek')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Towels X1 a week</span></div>} /></li>
            <li className="list-items"><FormControlLabel labelPlacement="end" control={<Checkbox size="small" checked={towelsTwiceAWeek} onChange={handleCheckboxChange('towelsTwiceAWeek')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Towels X2 a week</span></div>} /></li>
            <li className="list-items"><FormControlLabel labelPlacement="end" control={<Checkbox size="small" checked={towelsThriceAWeek} onChange={handleCheckboxChange('towelsThriceAWeek')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Towels X3 a week</span></div>} /></li>
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
    <FormWrapper title="Amenities">
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
                <Typography sx={{ width: '40%', fontWeight: 'bold', flexShrink: 0 }}>
                  {category.title}
                </Typography>
                <Typography sx={{ marginLeft: '20px', color: 'text.secondary' }}>
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






