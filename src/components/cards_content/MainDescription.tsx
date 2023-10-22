import { Checkbox, FormControl, FormLabel, FormControlLabel, FormGroup, InputBase, Radio, RadioGroup, TextField, Paper } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MainDescription({

 
 

  updateFields, data, handleFieldChange }: FormDataTypes) {

  const handleCheckboxChange = (fieldName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFieldChange(fieldName, e.target.checked);
  };

  const handleValueChange = (fieldName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFieldChange(fieldName, e.target.value);
  };

  const handleRadioGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFieldChange('lodgingType', e.target.value);
  };



  return (
    <FormWrapper title="Main Description">
      <div className="category-description"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut error! 
        Aperiam ducimus inventore nisi cupiditate facilis consectetur ea officia quaerat, quam neque quo reiciendis nobis iste cum quis perspiciatis.</span></div>
      <FormGroup>
      
      
      
      

      
    
      
      
       
          <div className="main-category">
          
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
          </div>
         

          <div className="main-category">
         
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
            </div>
          

          <div className="main-category">
          
            <h3>Living space and lodging information</h3>
            <ul className="duo-options-grid">
        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Area of the house in m2:</span><TextField size="small" type="number" label="Area of the house in m2" variant="standard" value={data.areaOfTheHouseInM2} onChange={e => updateFields({areaOfTheHouseInM2 : e.target.value})} /></label></li>
        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Surrounding area in m2:</span><TextField size="small" type="number" label="Surrounding area in m2" variant="standard" value={data.surroundingAreaInM2} onChange={e => updateFields({surroundingAreaInM2 : e.target.value})} /></label></li>
        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Number of floors to the ground:</span><TextField size="small" type="number" label="Number of floors to the ground" variant="standard" value={data.numOfFloorsToGround} onChange={e => updateFields({numOfFloorsToGround : e.target.value})} /></label></li>
        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Year of built:</span><TextField size="small" type="number" label="Year of built" variant="standard" value={data.yearOfBuilt} onChange={e => updateFields({yearOfBuilt : e.target.value})} /></label></li>
            </ul>
          </div>

          

          <div className="main-category">
         <h3>Physical distancing</h3>
                
        <div className="category-styling">
       <ul>
      <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.physicalDistancing} onChange={handleCheckboxChange('physicalDistancing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Physical distancing</span></div>} /></li>
        </ul>
        </div>
        </div>


        
      </FormGroup>
    </FormWrapper>
       
  )
}
