import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  FormGroup,
  Checkbox,
  TextField,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormWrapper from '../form_components/FormWrapper';
import { FormDataTypes } from '@/app/types/all-form-types';

export default function MainDescription({
  updateFields,
  data,
  handleFieldChange,
}: FormDataTypes) {


  const handleCheckboxChange = (fieldName: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleFieldChange(fieldName, e.target.checked);
  };

  const mainCategories = [
    {
      title: 'Lodging type',
      description: 'Description for Lodging type category',
      content: (<>
        <h3>Lodging type</h3>
        <ul className="multi-options-grid">
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.awayFromItAll} onChange={handleCheckboxChange('awayFromItAll')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Away from it all</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.family} onChange={handleCheckboxChange('family')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Family</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.romantic} onChange={handleCheckboxChange('romantic')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Romantic</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.historical} onChange={handleCheckboxChange('historical')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Historical</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.traditionalProperty} onChange={handleCheckboxChange('traditionalProperty')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Traditional property</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.secluded} onChange={handleCheckboxChange('secluded')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Secluded</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.brandNew} onChange={handleCheckboxChange('brandNew')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Brand new</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.detached} onChange={handleCheckboxChange('detached')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Detached</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.semiDetached} onChange={handleCheckboxChange('semiDetached')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Semi-detached</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.singleLevelHome} onChange={handleCheckboxChange('singleLevelHome')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Single level home</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.privateResidence} onChange={handleCheckboxChange('privateResidence')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Bed and breakfast</span></div>} /></li>
        </ul>
        </>
      ),
    },
    {
      title: 'Nearby services and properties',
      description: 'Description for Nearby services and properties category',
      content: (<>
        <h3>Nearby services and properties</h3>
        <ul className="multi-options-grid">
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.kitchenGround} onChange={handleCheckboxChange('kitchenGround')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Kitchen on the ground</span></div>} /></li>
      <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.diner} onChange={handleCheckboxChange('diner')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Diner</span></div>} />
      {data.diner && (<TextField value={data.dinerDescription} onChange={e => updateFields({ dinerDescription: e.target.value })} label="diner distance" /> )}</li>
      <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.livingRoom} onChange={handleCheckboxChange('livingRoom')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Living room</span></div>} />
        {data.livingRoom && (<TextField value={data.livingRoomDescription} onChange={e => updateFields({ livingRoomDescription: e.target.value })} label='living room description' /> )}</li>

      <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.serviceSupermarket} onChange={handleCheckboxChange('serviceSupermarket')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Service supermarket</span></div>} /></li>
      <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.serviceSupermarketDelivery} onChange={handleCheckboxChange('serviceSupermarketDelivery')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Service supermarket delivery</span></div>} /></li>
      <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.serviceBoatTaxiService} onChange={handleCheckboxChange('serviceBoatTaxiService')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Service boat taxi service</span></div>} /></li>
      <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.serviceLunch} onChange={handleCheckboxChange('serviceLunch')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Service lunch</span></div>} /></li>
      <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.serviceOwnerNearby} onChange={handleCheckboxChange('serviceOwnerNearby')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Service owner nearby</span></div>} /></li>
      <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.serviceMealDeliveryService} onChange={handleCheckboxChange('serviceMealDeliveryService')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Service meal delivery service</span></div>} /></li>
      <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.childrenYes} onChange={handleCheckboxChange('childrenYes')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Children Yes</span></div>} /></li>
      <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.garden} onChange={handleCheckboxChange('garden')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Garden</span></div>} /></li>
        </ul>
        </>
      ),
    },
    {
      title: 'Living space and lodging information',
      description: 'Description for Living space and lodging information category',
      content: (<>
      <h3>Living space and lodging information</h3>
        <ul className="duo-options-grid">
        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Area of the house in m2:</span><TextField size="small" type="number" label="Area of the house in m2" variant="standard" value={data.areaOfTheHouseInM2} onChange={e => updateFields({areaOfTheHouseInM2 : e.target.value})} /></label></li>
        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Surrounding area in m2:</span><TextField size="small" type="number" label="Surrounding area in m2" variant="standard" value={data.surroundingAreaInM2} onChange={e => updateFields({surroundingAreaInM2 : e.target.value})} /></label></li>
        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Number of floors to the ground:</span><TextField size="small" type="number" label="Number of floors to the ground" variant="standard" value={data.numOfFloorsToGround} onChange={e => updateFields({numOfFloorsToGround : e.target.value})} /></label></li>
        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Year of built:</span><TextField size="small" type="number" label="Year of built" variant="standard" value={data.yearOfBuilt} onChange={e => updateFields({yearOfBuilt : e.target.value})} /></label></li>
        </ul>
        </>
      ),
    },
    {
      title: 'Physical distancing',
      description: 'Description for Physical distancing category',
      content: (<>
      <h3>Physical distancing</h3>
        <div className="category-styling">
          <ul>
             <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.physicalDistancing} onChange={handleCheckboxChange('physicalDistancing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Physical distancing</span></div>} /></li>
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
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                {category.title}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
              {category.description}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{category.content}</AccordionDetails>
          </Accordion>
        ))}
      </FormGroup>
    </FormWrapper>
  );
}

















const mainCategories = [
  {
    title: 'Kitchen devices',
    description: 'What common household devices are you offering towards cooking?',
    content: (<>
    <div className="cooking-devices-cat main-category">
     <ul>
     <h3>Winter and mountain sports</h3>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={mountainClimbing} onChange={handleCheckboxChange('mountainClimbing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Mountain climbing</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={mountainBiking} onChange={handleCheckboxChange('mountainBiking')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Mountain biking</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={crossCountrySkiing} onChange={handleCheckboxChange('crossCountrySkiing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Cross country skiing</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={mountaineering} onChange={handleCheckboxChange('mountaineering')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Mountaineering</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={rockClimbing} onChange={handleCheckboxChange('rockClimbing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Rock climbing</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={skiing} onChange={handleCheckboxChange('skiing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Skiing</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={skiLiftPrivileges} onChange={handleCheckboxChange('skiLiftPrivileges')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Ski list privileges</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={skiLiftPrivilegesOptional} onChange={handleCheckboxChange('skiLiftPrivilegesOptional')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Ski lift privileges optional</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={snowboarding} onChange={handleCheckboxChange('snowboarding')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Snowboarding</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={snowmobiling} onChange={handleCheckboxChange('snowmobiling')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Snowmobiling</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={iceSkating} onChange={handleCheckboxChange('iceSkating')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Ice skating</span></div>} /></li>
    </ul>
</div>
      </>
    ),
  },
  {
    title: 'Cooking devices',
    description: 'Which are your main cooking devices offered to guests?',
    content: (<>
      <div className="cooking-means-cat main-category">
      <ul>
      <h3>Outdoor Sports</h3>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={cycling} onChange={handleCheckboxChange('cycling')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Cycling</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={hunting} onChange={handleCheckboxChange('hunting')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Hunting</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={hiking} onChange={handleCheckboxChange('hiking')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Hiking</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={golf} onChange={handleCheckboxChange('golf')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Golf</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={golfOptional} onChange={handleCheckboxChange('golfOptional')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Golf optional</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={equestrianEvents} onChange={handleCheckboxChange('equestrianEvents')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Equestrian events</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={hotAirBallooning} onChange={handleCheckboxChange('hotAirBallooning')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Hot air ballooning</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={paragliding} onChange={handleCheckboxChange('paragliding')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Paragliding</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={rollerBlading} onChange={handleCheckboxChange('rollerBlading')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Roller blading</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={spelunking} onChange={handleCheckboxChange('spelunking')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Spelunking</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={tennis} onChange={handleCheckboxChange('tennis')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Tennis</span></div>} /></li>
      </ul>
      </div>
      </>
    ),
  },
  {
    title: 'Dining areas and utensils',
    description: 'Are you offering the cooking basics? Where can your guests eat their meals?',
    content: (<>
    <div className="dining-area-utensils-cat main-category">
    <ul>
    <h3>Marine Sports</h3>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={fishing} onChange={handleCheckboxChange('fishing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Fishing</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={deepseaFishing} onChange={handleCheckboxChange('deepseaFishing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Deepsea fishing</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={fishingBay} onChange={handleCheckboxChange('fishingBay')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Fishing bay</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={fishingFly} onChange={handleCheckboxChange('fishingFly')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Fishing fly</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={fishingFreshwater} onChange={handleCheckboxChange('fishingFreshwater')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Fishing freshwater</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={fishingSurf} onChange={handleCheckboxChange('fishingSurf')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Fishing surf</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={jetSkiing} onChange={handleCheckboxChange('jetSkiing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Jet skiing</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={kayaking} onChange={handleCheckboxChange('kayaking')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Kayaking</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={rafting} onChange={handleCheckboxChange('rafting')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Rafting</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={parasailing} onChange={handleCheckboxChange('parasailing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Parasailing</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={pierFishing} onChange={handleCheckboxChange('pierFishing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Pier fishing</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={sailing} onChange={handleCheckboxChange('sailing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Sailing</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={skiingWater} onChange={handleCheckboxChange('skiingWater')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Water skiing</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={snorkeling} onChange={handleCheckboxChange('snorkeling')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Snorkeling</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={surfing} onChange={handleCheckboxChange('surfing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Surfing</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={swimming} onChange={handleCheckboxChange('swimming')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Swimming</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={whitewaterRafting} onChange={handleCheckboxChange('whitewaterRafting')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">White water rafting</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={windSurfing} onChange={handleCheckboxChange('windSurfing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Wind surfing</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={sportsSnorkelingDiving} onChange={handleCheckboxChange('sportsSnorkelingDiving')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Sports snorkeling diving</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={sportsTubingWater} onChange={handleCheckboxChange('sportsTubingWater')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Sports tubing water</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={powerBoatRental} onChange={handleCheckboxChange('powerBoatRental')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Power boat rental</span></div>} /></li>
    </ul>
    </div>
      </>
    ),
  },
  {
    title: 'Cooking devices',
    description: 'Which are your main cooking devices offered to guests?',
    content: (<>
      <div className="cooking-means-cat main-category">
      <ul>
      <h3>Miscellaneous Sports</h3>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={area} onChange={handleCheckboxChange('area')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Area</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={basketballCourt} onChange={handleCheckboxChange('basketballCourt')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">basketball court</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={sports} onChange={handleCheckboxChange('sports')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Sports</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={racquetball} onChange={handleCheckboxChange('racquetball')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Racquetball</span></div>} /></li>
<li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Scuba or snorkeling:</span><CustomTextField label="Scuba or snorkeling" value={scubaOrSnorkeling} onChange={e => updateFields({ scubaOrSnorkeling: e })} type="text"   ></CustomTextField></div></li>    
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
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {category.title}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
            {category.description}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>{category.content}</AccordionDetails>
        </Accordion>
      ))}
    </FormGroup>
  </FormWrapper>
);































