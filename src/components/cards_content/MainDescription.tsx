import { Checkbox, FormControl, FormLabel, FormControlLabel, FormGroup, InputBase, Radio, RadioGroup, TextField } from "@mui/material";
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
          <div className="main-lodging-category">
            <h3>Lodging Category</h3>
            <FormControl>
              <FormLabel id="lodge-label"></FormLabel>
              <RadioGroup
                row
                aria-labelledby="lodge-label"
                name="lodging-types"
                value={data.lodgingType}
                onChange={handleRadioGroupChange}
              >
                <FormControlLabel control={<Radio size="small" onChange={handleValueChange("villa")} />} value="villa" label="Villa" />
                <FormControlLabel control={<Radio size="small" onChange={handleValueChange("apartment")} />} value="apartment" label="Apartment" />
                <FormControlLabel control={<Radio size="small" onChange={handleValueChange("maissonette")} />} value="maissonette" label="Maissonette" />
                <FormControlLabel control={<Radio size="small" onChange={handleValueChange("room")} />} value="room" label="Room" />
                <FormControlLabel control={<Radio size="small" onChange={handleValueChange("studio")} />} value="studio" label="Studio" />
                <FormControlLabel control={<Radio size="small" onChange={handleValueChange("cottage")} />} value="cottage" label="Cottage" />
                <FormControlLabel control={<Radio size="small" onChange={handleValueChange("bangalow")} />} value="bangalow" label="Bangalow" />
                <FormControlLabel control={<Radio size="small" onChange={handleValueChange("house")} />} value="house" label="House" />
              </RadioGroup>
            </FormControl>
          </div>
        <div className="extra-categories">

          <div className="category-styling">
            <h3>Lodging type</h3>
            <FormControlLabel control={<Checkbox size="small" checked={data.awayFromItAll} onChange={handleCheckboxChange('awayFromItAll')} />} label="Away from it all" />
            <FormControlLabel control={<Checkbox size="small" checked={data.family} onChange={handleCheckboxChange('family')} />} label="Family" />
            <FormControlLabel control={<Checkbox size="small" checked={data.romantic} onChange={handleCheckboxChange('romantic')} />} label="Romantic" />
            <FormControlLabel control={<Checkbox size="small" checked={data.historical} onChange={handleCheckboxChange('historical')} />} label="Historical" />
            <FormControlLabel control={<Checkbox size="small" checked={data.traditionalProperty} onChange={handleCheckboxChange('traditionalProperty')} />} label="Traditional property" />
            <FormControlLabel control={<Checkbox size="small" checked={data.secluded} onChange={handleCheckboxChange('secluded')} />} label="Secluded" />
            <FormControlLabel control={<Checkbox size="small" checked={data.brandNew} onChange={handleCheckboxChange('brandNew')} />} label="Brand new" />
            <FormControlLabel control={<Checkbox size="small" checked={data.detached} onChange={handleCheckboxChange('detached')} />} label="Detached" />
            <FormControlLabel control={<Checkbox size="small" checked={data.semiDetached} onChange={handleCheckboxChange('semiDetached')} />} label="Semi-detached" />
            <FormControlLabel control={<Checkbox size="small" checked={data.singleLevelHome} onChange={handleCheckboxChange('singleLevelHome')} />} label="Single level home" />
            <FormControlLabel control={<Checkbox size="small" checked={data.privateResidence} onChange={handleCheckboxChange('privateResidence')} />} label="Bed and breakfast" />


          </div>
          <div className="category-styling">
            <h3>Nearby services and properties</h3>
            <FormControlLabel control={<Checkbox size="small" checked={data.kitchenGround} onChange={handleCheckboxChange('kitchenGround')} />} label="Kitchen on the ground" />
            <FormControlLabel control={<Checkbox size="small" checked={data.dinerGround} onChange={handleCheckboxChange('dinerGround')} />} label="Diner on the ground" />
            <FormControlLabel control={<Checkbox size="small" checked={data.livingRoomOnePerLevel} onChange={handleCheckboxChange('livingRoomOnePerLevel')} />} label="Living room (One per level)" />
            <FormControlLabel control={<Checkbox size="small" checked={data.serviceSupermarket} onChange={handleCheckboxChange('serviceSupermarket')} />} label="Service supermarket" />
            <FormControlLabel control={<Checkbox size="small" checked={data.serviceSupermarketDelivery} onChange={handleCheckboxChange('serviceSupermarketDelivery')} />} label="Service supermarket delivery" />
            <FormControlLabel control={<Checkbox size="small" checked={data.serviceBoatTaxiService} onChange={handleCheckboxChange('serviceBoatTaxiService')} />} label="Service boat taxi service" />
            <FormControlLabel control={<Checkbox size="small" checked={data.serviceLunch} onChange={handleCheckboxChange('serviceLunch')} />} label="Service lunch" />
            <FormControlLabel control={<Checkbox size="small" checked={data.serviceOwnerNearby} onChange={handleCheckboxChange('serviceOwnerNearby')} />} label="Service owner nearby" />
            <FormControlLabel control={<Checkbox size="small" checked={data.serviceMealDeliveryService} onChange={handleCheckboxChange('serviceMealDeliveryService')} />} label="Service meal delivery service" />
            <FormControlLabel control={<Checkbox size="small" checked={data.childrenYes} onChange={handleCheckboxChange('childrenYes')} />} label="Children Yes" />
            <FormControlLabel control={<Checkbox size="small" checked={data.garden} onChange={handleCheckboxChange('garden')} />} label="Garden" />
          </div>
          <div className="category-styling">
            <h3>Living space and lodging information</h3>
            <TextField id="outlined-basic" size="small" label="Area of the house in m2" variant="outlined" value={areaOfTheHouseInM2} onChange={e => updateFields({ areaOfTheHouseInM2: e.target.value })} />
            <TextField id="outlined-basic" size="small" label="Surrounding area in m2" variant="outlined" value={surroundingAreaInM2} onChange={e => updateFields({ surroundingAreaInM2: e.target.value })} />
            <TextField id="outlined-basic" size="small" label="Number of floors to the ground" variant="outlined" value={numOfFloorsToGround} onChange={e => updateFields({ numOfFloorsToGround: e.target.value })} />
            <TextField id="outlined-basic" size="small" label="Years of built" variant="outlined" value={yearOfBuilt} onChange={e => updateFields({ yearOfBuilt: e.target.value })} />
          </div>





        </div>
      </FormGroup>
    </FormWrapper>
  )
}
