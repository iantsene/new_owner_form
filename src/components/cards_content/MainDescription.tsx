import { Checkbox, FormControl, FormLabel, FormControlLabel, FormGroup, InputBase, Radio, RadioGroup, TextField, Paper } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";



export default function MainDescription({

  awayFromItAll,
  livingRoomOnePerLevel,
  family,
  romantic,
  historical,
  traditionalProperty,
  secluded,
  brandNew,
  detached,
  semiDetached,
  privateResidence,
  kitchenGround,
  dinerGround,
  numOfFloorsToGround,
  areaOfTheHouseInM2,
  surroundingAreaInM2,
  yearOfBuilt,
  serviceSupermarket,
  singleLevelHome,
  serviceBoatTaxiService,
  serviceLunch,
  serviceOwnerNearby,
  serviceMealDeliveryService,
  childrenYes,
  garden,
  lodgingType,

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
      
      <FormGroup>
          <div className="main-category">
            <h3>Lodging Category</h3>
            <FormControl>
              <FormLabel id="lodge-label"></FormLabel>
              <RadioGroup
                className="radio-group"
                row
                aria-labelledby="lodge-label"
                name="lodging-types"
                value={data.lodgingType}
                onChange={handleRadioGroupChange}
              >
                <ul className="lodge-category">
                  <li><FormControlLabel control={<Radio size="small" onChange={handleValueChange("villa")} />} value="villa" label="Villa" /></li>
                  <li><FormControlLabel control={<Radio size="small" onChange={handleValueChange("apartment")} />} value="apartment" label="Apartment" /></li>
                  <li><FormControlLabel control={<Radio size="small" onChange={handleValueChange("maissonette")} />} value="maissonette" label="Maissonette" /></li>
                  <li><FormControlLabel control={<Radio size="small" onChange={handleValueChange("room")} />} value="room" label="Room" /></li>
                  <li><FormControlLabel control={<Radio size="small" onChange={handleValueChange("studio")} />} value="studio" label="Studio" /></li>
                  <li><FormControlLabel control={<Radio size="small" onChange={handleValueChange("cottage")} />} value="cottage" label="Cottage" /></li>
                  <li><FormControlLabel control={<Radio size="small" onChange={handleValueChange("bangalow")} />} value="bangalow" label="Bangalow" /></li>
                  <li><FormControlLabel control={<Radio size="small" onChange={handleValueChange("house")} />} value="house" label="House" /></li>
                </ul>
                
              </RadioGroup>
            </FormControl>
          </div>
       
          <div className="main-category">
          
            <h3>Lodging type</h3>
            <ul className="multi-options-grid">
              <li><FormControlLabel control={<Checkbox size="small" checked={data.awayFromItAll} onChange={handleCheckboxChange('awayFromItAll')} />} label="Away from it all" /></li>
              <li><FormControlLabel control={<Checkbox size="small" checked={data.family} onChange={handleCheckboxChange('family')} />} label="Family" /></li>
              <li><FormControlLabel control={<Checkbox size="small" checked={data.romantic} onChange={handleCheckboxChange('romantic')} />} label="Romantic" /></li>
              <li><FormControlLabel control={<Checkbox size="small" checked={data.historical} onChange={handleCheckboxChange('historical')} />} label="Historical" /></li>
              <li><FormControlLabel control={<Checkbox size="small" checked={data.traditionalProperty} onChange={handleCheckboxChange('traditionalProperty')} />} label="Traditional property" /></li>
              <li><FormControlLabel control={<Checkbox size="small" checked={data.secluded} onChange={handleCheckboxChange('secluded')} />} label="Secluded" /></li>
              <li><FormControlLabel control={<Checkbox size="small" checked={data.brandNew} onChange={handleCheckboxChange('brandNew')} />} label="Brand new" /></li>
              <li><FormControlLabel control={<Checkbox size="small" checked={data.detached} onChange={handleCheckboxChange('detached')} />} label="Detached" /></li>
              <li><FormControlLabel control={<Checkbox size="small" checked={data.semiDetached} onChange={handleCheckboxChange('semiDetached')} />} label="Semi-detached" /></li>
              <li><FormControlLabel control={<Checkbox size="small" checked={data.singleLevelHome} onChange={handleCheckboxChange('singleLevelHome')} />} label="Single level home" /></li>
              <li><FormControlLabel control={<Checkbox size="small" checked={data.privateResidence} onChange={handleCheckboxChange('privateResidence')} />} label="Bed and breakfast" /></li>
            </ul>
          </div>
         

          <div className="main-category">
         
            <h3>Nearby services and properties</h3>
            <ul className="multi-options-grid">
              <li><FormControlLabel control={<Checkbox size="small" checked={data.kitchenGround} onChange={handleCheckboxChange('kitchenGround')} />} label="Kitchen on the ground" /></li>
              <li><FormControlLabel control={<Checkbox size="small" checked={data.dinerGround} onChange={handleCheckboxChange('dinerGround')} />} label="Diner on the ground" /></li>
              <li><FormControlLabel control={<Checkbox size="small" checked={data.livingRoomOnePerLevel} onChange={handleCheckboxChange('livingRoomOnePerLevel')} />} label="Living room (One per level)" /></li>
              <li><FormControlLabel control={<Checkbox size="small" checked={data.serviceSupermarket} onChange={handleCheckboxChange('serviceSupermarket')} />} label="Service supermarket" /></li>
              <li><FormControlLabel control={<Checkbox size="small" checked={data.serviceSupermarketDelivery} onChange={handleCheckboxChange('serviceSupermarketDelivery')} />} label="Service supermarket delivery" /></li>
              <li><FormControlLabel control={<Checkbox size="small" checked={data.serviceBoatTaxiService} onChange={handleCheckboxChange('serviceBoatTaxiService')} />} label="Service boat taxi service" /></li>
              <li><FormControlLabel control={<Checkbox size="small" checked={data.serviceLunch} onChange={handleCheckboxChange('serviceLunch')} />} label="Service lunch" /></li>
              <li><FormControlLabel control={<Checkbox size="small" checked={data.serviceOwnerNearby} onChange={handleCheckboxChange('serviceOwnerNearby')} />} label="Service owner nearby" /></li>
              <li><FormControlLabel control={<Checkbox size="small" checked={data.serviceMealDeliveryService} onChange={handleCheckboxChange('serviceMealDeliveryService')} />} label="Service meal delivery service" /></li>
              <li><FormControlLabel control={<Checkbox size="small" checked={data.childrenYes} onChange={handleCheckboxChange('childrenYes')} />} label="Children Yes" /></li>
              <li><FormControlLabel control={<Checkbox size="small" checked={data.garden} onChange={handleCheckboxChange('garden')} />} label="Garden" /></li>
            </ul>
            </div>
          

          <div className="main-category">
          
            <h3>Living space and lodging information</h3>
            <ul>
              <li><TextField id="outlined-basic" size="small" label="Area of the house in m2" variant="standard" value={areaOfTheHouseInM2} onChange={e => updateFields({ areaOfTheHouseInM2: e.target.value })} /></li>
              <li><TextField id="outlined-basic" size="small" label="Surrounding area in m2" variant="standard" value={surroundingAreaInM2} onChange={e => updateFields({ surroundingAreaInM2: e.target.value })} /></li>
              <li><TextField id="outlined-basic" size="small" label="Number of floors to the ground" variant="standard" value={numOfFloorsToGround} onChange={e => updateFields({ numOfFloorsToGround: e.target.value })} /></li>
              <li><TextField id="outlined-basic" size="small" label="Years of built" variant="standard" value={yearOfBuilt} onChange={e => updateFields({ yearOfBuilt: e.target.value })} /></li>
            </ul>
            
            
            
            
          </div>


         


        
      </FormGroup>
    </FormWrapper>
       
  )
}
