import { Checkbox, FormControl, FormLabel, FormControlLabel, FormGroup, InputBase, Radio, RadioGroup, TextField, Paper } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";
import INITIAL_DATA from "@/app/variables/variables";
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
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.awayFromItAll} onChange={handleCheckboxChange('awayFromItAll')} />} label="Away from it all" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.family} onChange={handleCheckboxChange('family')} />} label="Family" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.romantic} onChange={handleCheckboxChange('romantic')} />} label="Romantic" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.historical} onChange={handleCheckboxChange('historical')} />} label="Historical" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.traditionalProperty} onChange={handleCheckboxChange('traditionalProperty')} />} label="Traditional property" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.secluded} onChange={handleCheckboxChange('secluded')} />} label="Secluded" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.brandNew} onChange={handleCheckboxChange('brandNew')} />} label="Brand new" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.detached} onChange={handleCheckboxChange('detached')} />} label="Detached" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.semiDetached} onChange={handleCheckboxChange('semiDetached')} />} label="Semi-detached" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.singleLevelHome} onChange={handleCheckboxChange('singleLevelHome')} />} label="Single level home" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.privateResidence} onChange={handleCheckboxChange('privateResidence')} />} label="Bed and breakfast" /></li>
            </ul>
          </div>
         

          <div className="main-category">
         
            <h3>Nearby services and properties</h3>
            <ul className="multi-options-grid">
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.kitchenGround} onChange={handleCheckboxChange('kitchenGround')} />} label="Kitchen on the ground" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.diner} onChange={handleCheckboxChange('diner')}/>} label="diner"/>
        {data.diner && (<TextField value={data.dinerDescription} onChange={e => updateFields({ dinerDescription: e.target.value })} label="diner distance" /> )}</li>


              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.livingRoom} onChange={handleCheckboxChange('livingRoom')}/>} label="living room"/>
        {data.livingRoom && (<TextField value={data.livingRoomDescription} onChange={e => updateFields({ livingRoomDescription: e.target.value })} label="living room details" /> )}</li>




              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.serviceSupermarket} onChange={handleCheckboxChange('serviceSupermarket')} />} label="Service supermarket" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.serviceSupermarketDelivery} onChange={handleCheckboxChange('serviceSupermarketDelivery')} />} label="Service supermarket delivery" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.serviceBoatTaxiService} onChange={handleCheckboxChange('serviceBoatTaxiService')} />} label="Service boat taxi service" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.serviceLunch} onChange={handleCheckboxChange('serviceLunch')} />} label="Service lunch" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.serviceOwnerNearby} onChange={handleCheckboxChange('serviceOwnerNearby')} />} label="Service owner nearby" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.serviceMealDeliveryService} onChange={handleCheckboxChange('serviceMealDeliveryService')} />} label="Service meal delivery service" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.childrenYes} onChange={handleCheckboxChange('childrenYes')} />} label="Children Yes" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.garden} onChange={handleCheckboxChange('garden')} />} label="Garden" /></li>
            </ul>
            </div>
          

          <div className="main-category">
          
            <h3>Living space and lodging information</h3>
            <ul>
              <li><img src="/Icons/icon-placeholder.png" /><TextField id="outlined-basic" size="small" type="number" label="Area of the house in m2" variant="standard" value={data.areaOfTheHouseInM2} onChange={e => updateFields({ areaOfTheHouseInM2: e.target.value })} /></li>
              <li><img src="/Icons/icon-placeholder.png" /><TextField id="outlined-basic" size="small" type="number" label="Surrounding area in m2" variant="standard" value={data.surroundingAreaInM2} onChange={e => updateFields({ surroundingAreaInM2: e.target.value })} /></li>
              <li><img src="/Icons/icon-placeholder.png" /><TextField id="outlined-basic" size="small" type="number" label="Number of floors to the ground" variant="standard" value={data.numOfFloorsToGround} onChange={e => updateFields({ numOfFloorsToGround: e.target.value })} /></li>
              <li><img src="/Icons/icon-placeholder.png" /><TextField id="outlined-basic" size="small" type="number" label="Year of built" variant="standard" value={data.yearOfBuilt} onChange={e => updateFields({ yearOfBuilt: e.target.value })} /></li>
            </ul>
          </div>


      

          <div className="main-category">
         <h3>Physical distancing</h3>
                
        <div className="category-styling">
       <ul>
        <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.physicalDistancing} onChange={handleCheckboxChange('physicalDistancing')} />} label="Physical distancing" /></li>
        </ul>
        </div>
        </div>


        
      </FormGroup>
    </FormWrapper>
       
  )
}
