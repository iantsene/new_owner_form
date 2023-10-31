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








<h3>Devices</h3>


<h3>Cooking means</h3>


<h3>Dining areas and utensils</h3>











const mainCategories = [
  {
    title: 'Kitchen devices',
    description: 'What common household devices are you offering towards cooking?',
    content: (<>
    <div className="cooking-devices-cat main-category">
     <ul>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={microwave} onChange={handleCheckboxChange('microwave')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Microwave</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={toaster} onChange={handleCheckboxChange('toaster')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Toaster</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={smallFridge} onChange={handleCheckboxChange('smallFridge')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Small fridge</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={sandwichToaster} onChange={handleCheckboxChange('sandwichToaster')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Sandwich toaster</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={filterCoffeeMachine} onChange={handleCheckboxChange('filterCoffeeMachine')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Filter coffee machine</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={blenderOrMulti} onChange={handleCheckboxChange('blenderOrMulti')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Blender / multi</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={breadMaker} onChange={handleCheckboxChange('breadMaker')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Bread maker</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={espressoCoffeeMachine} onChange={handleCheckboxChange('espressoCoffeeMachine')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Espresso coffee machine</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={mixer} onChange={handleCheckboxChange('mixer')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Mixer</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={fryer} onChange={handleCheckboxChange('fryer')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Fryer</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={kettle} onChange={handleCheckboxChange('kettle')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Kettle</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={waterDispenser} onChange={handleCheckboxChange('waterDispenser')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Water dispenser</span></div>} /></li>
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
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={kitchen} onChange={handleCheckboxChange('kitchen')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Kitchen</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={kitchenette} onChange={handleCheckboxChange('kitchenette')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Kitchenette</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={cookerWithSmallOven} onChange={handleCheckboxChange('cookerWithSmallOven')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Cooker with small oven</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={stove} onChange={handleCheckboxChange('stove')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Stove</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={separateStove} onChange={handleCheckboxChange('separateStove')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Separate stove</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={extraSmallBbqOven} onChange={handleCheckboxChange('extraSmallBbqOven')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Extra small bbq oven</span></div>} /></li>
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
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={dinningArea} onChange={handleCheckboxChange('dinningArea')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Dinning area</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={diningTable} onChange={handleCheckboxChange('diningTable')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Dining table</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={dinningRoomOrSpace} onChange={handleCheckboxChange('dinningRoomOrSpace')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Dinning room or space</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={wineGlasses} onChange={handleCheckboxChange('wineGlasses')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Wine glasses</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={cookingBasics} onChange={handleCheckboxChange('cookingBasics')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Cooking basics</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={dishesAndSilverware} onChange={handleCheckboxChange('dishesAndSilverware')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Dishes and silverware</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={cookwareAndKitchenUtensils} onChange={handleCheckboxChange('cookwareAndKitchenUtensils')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Cookware and kitchen utensils</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={highChair} onChange={handleCheckboxChange('highChair')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">High chair</span></div>} /></li>
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