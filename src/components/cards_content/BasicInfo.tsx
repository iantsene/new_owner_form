import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField, FormLabel, FormControl, RadioGroup, Radio } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";
import AccessibleIcon from '@mui/icons-material/Accessible';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import PetsIcon from '@mui/icons-material/Pets';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WavesIcon from '@mui/icons-material/Waves';
import WaterIcon from '@mui/icons-material/Water';
import SailingIcon from '@mui/icons-material/Sailing';
import PoolIcon from '@mui/icons-material/Pool';
import PanoramaHorizontalIcon from '@mui/icons-material/PanoramaHorizontal';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LandscapeIcon from '@mui/icons-material/Landscape';
import VillaIcon from '@mui/icons-material/Villa';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CottageIcon from '@mui/icons-material/Cottage';
import HouseIcon from '@mui/icons-material/House';


type UserFormProps = FormDataTypes & {
  updateFields: (fields: Partial<FormDataTypes>) => void

}

export default function BasicInfo({




  propertyAddress,
  postCode,
  gpsLatitude,
  gpsLongitude,

  updateFields, data, handleFieldChange }: UserFormProps) {

  const handleCheckboxChange = (fieldName: string) => (e) => {
    handleFieldChange(fieldName, e.target.checked);
  };

  const handleRadioGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFieldChange('lodgingType', e.target.value);
  };

  const handleValueChange = (fieldName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFieldChange(fieldName, e.target.value);
  };



  


  return (
    <FormWrapper title="Basic info">
      <div className="category-description"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut error! 
        Aperiam ducimus inventore nisi cupiditate facilis consectetur ea officia quaerat, quam neque quo reiciendis nobis iste cum quis perspiciatis.</span></div>
      <FormGroup>
      <div className="main-category">
            <h3>Lodging type</h3>
            <span>What type of lodging are you currently offering?</span>
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
                  <li><VillaIcon /><FormControlLabel control={<Radio size="small" onChange={handleValueChange("villa")} />} value="villa" label="Villa" /></li>
                  <li><ApartmentIcon /><FormControlLabel control={<Radio size="small" onChange={handleValueChange("apartment")} />} value="apartment" label="Apartment" /></li>
                  <li><img src="/Icons/maisonette.png" /> <FormControlLabel control={<Radio size="small" onChange={handleValueChange("maisonette")} />} value="maisonette" label="Maisonette" /></li>
                  <li><img src="/Icons/icons8-room-24.png" /><FormControlLabel control={<Radio size="small" onChange={handleValueChange("room")} />} value="room" label="Room" /></li>
                  <li><img src="/Icons/studio.png" /><FormControlLabel control={<Radio size="small" onChange={handleValueChange("studio")} />} value="studio" label="Studio" /></li>
                  <li><CottageIcon /><FormControlLabel control={<Radio size="small" onChange={handleValueChange("cottage")} />} value="cottage" label="Cottage" /></li>
                  <li><img src="/Icons/icons8-bungalow-24.png" /><FormControlLabel control={<Radio size="small" onChange={handleValueChange("bangalow")} />} value="bangalow" label="Bangalow" /></li>
                  <li><HouseIcon /><FormControlLabel control={<Radio size="small" onChange={handleValueChange("house")} />} value="house" label="House" /></li>
                </ul>
                
              </RadioGroup>
            </FormControl>
          </div>

          <div className="main-category">
        <h3>What are your accessibility options?</h3>
          <ul>
            <li><AccessibleIcon /><FormControlLabel control={<Checkbox size="small" checked={data.wheelchairFriendly} onChange={handleCheckboxChange('wheelchairFriendly')} />} label="Wheelchair friendly" /></li>
            <li><FamilyRestroomIcon /><FormControlLabel control={<Checkbox size="small" checked={data.childrenAllowed} onChange={handleCheckboxChange('childrenAllowed')} />} label="Children Allowed" /></li>
            <li><PetsIcon /><FormControlLabel control={<Checkbox size="small" checked={data.petsAllowed} onChange={handleCheckboxChange('petsAllowed')} />}  label="Pets allowed" /></li>
            <li><SmokingRoomsIcon /><FormControlLabel control={<Checkbox size="small" checked={data.smokingAllowed} onChange={handleCheckboxChange('smokingAllowed')} />} label="Smoking allowed" /></li>
          </ul>
        </div>


        



        <div className="main-category">
        <h3>does it have any view?</h3>
        <ul className="multi-options-grid">
          <li><BeachAccessIcon /><FormControlLabel control={<Checkbox size="small" checked={data.viewBeachView} onChange={handleCheckboxChange('viewBeachView')} />} label="Beach view" /></li>
          <li><WavesIcon /><FormControlLabel control={<Checkbox size="small" checked={data.viewOcean} onChange={handleCheckboxChange('viewOcean')} />} label="Ocean view" /></li>
          <li><img src="/Icons/icons8-water-element-24.png" /><FormControlLabel control={<Checkbox size="small" checked={data.viewSea} onChange={handleCheckboxChange('viewSea')} />} label="Sea view" /></li>
          <li><img src="/Icons/icons8-bay-24.png" /> <FormControlLabel control={<Checkbox size="small" checked={data.viewBayView} onChange={handleCheckboxChange('viewBayView')} />} label="Bay view" /></li>
          <li><WaterIcon /><FormControlLabel control={<Checkbox size="small" checked={data.waterView} onChange={handleCheckboxChange('waterView')} />} label="Water view" /></li>
          <li><SailingIcon /><FormControlLabel control={<Checkbox size="small" checked={data.viewMarinaView} onChange={handleCheckboxChange('viewMarinaView')} />} label="Marina view" /></li>
          <li><PoolIcon /><FormControlLabel control={<Checkbox size="small" checked={data.viewPoolView} onChange={handleCheckboxChange('viewPoolView')} />} label="Pool view" /></li>
          <li><img src="Icons/icons8-harbor-24.png" /> <FormControlLabel control={<Checkbox size="small" checked={data.viewHarborView} onChange={handleCheckboxChange('viewHarborView')} />} label="Harbor view" /></li>
          <li><img src="Icons/icons8-sunset-24.png" /><FormControlLabel control={<Checkbox size="small" checked={data.viewSunset} onChange={handleCheckboxChange('viewSunset')} />} label="Sunset view" /></li>
          <li><PanoramaHorizontalIcon /><FormControlLabel control={<Checkbox size="small" checked={data.viewPanoramic} onChange={handleCheckboxChange('viewPanoramic')} />} label="Panoramic view" /></li>
          <li><img src="Icons/icons8-sunrise-24.png" /><FormControlLabel control={<Checkbox size="small" checked={data.viewSunrise} onChange={handleCheckboxChange('viewSunrise')} />} label="Sunrise view" /></li>
          <li><img src="Icons/icons8-countryside-24.png" /><FormControlLabel control={<Checkbox size="small" checked={data.viewCountryside} onChange={handleCheckboxChange('viewCountryside')} />} label="Countryside view" /></li>
          <li><LocationCityIcon /><FormControlLabel control={<Checkbox size="small" checked={data.viewCityView} onChange={handleCheckboxChange('viewCityView')} />} label="City view" /></li>
          <li><img src="Icons/icons8-garden-24.png" /><FormControlLabel control={<Checkbox size="small" checked={data.viewGardenView} onChange={handleCheckboxChange('viewGardenView')} />} label="Garden view" /></li>
          <li><LandscapeIcon /><FormControlLabel control={<Checkbox size="small" checked={data.viewMountainView} onChange={handleCheckboxChange('viewMountainView')} />} label="Mountain view" /></li>
          <li><img src="Icons/icons8-resort-24.png" /><FormControlLabel control={<Checkbox size="small" checked={data.viewResortView} onChange={handleCheckboxChange('viewResortView')} />} label="Resort view" /></li>
          <li><img src="Icons/icons8-valley-24.png" /><FormControlLabel control={<Checkbox size="small" checked={data.viewValleyView} onChange={handleCheckboxChange('viewValleyView')} />} label="Valley view" /></li>
          <li><img src="Icons/grapes_6024141.png" /><FormControlLabel control={<Checkbox size="small" checked={data.viewVineyardView} onChange={handleCheckboxChange('viewVineyardView')} />} label="Vineyard view" /></li>
        </ul>
        
        </div>

      

     <div className="main-category"> 
     <h3>Property location</h3>
     <ul className="multi-options-grid">
    <li><img src="Icons/icons8-address-24.png" /><TextField size="small" label="Property address" variant="standard" value={propertyAddress} onChange={e => updateFields({propertyAddress : e.target.value})} /></li>
    <li><img src="Icons/icons8-postal-24.png" /><TextField size="small" label="Post code" variant="standard" value={postCode} onChange={e => updateFields({postCode : e.target.value})} /></li>
    <li><img src="Icons/icons8-latitude-24.png" /><TextField size="small" label="GPS latitude" variant="standard" value={gpsLatitude} onChange={e => updateFields({gpsLatitude : e.target.value})} /></li>
    <li><img src="Icons/icons8-longitude-24.png" /><TextField size="small" label="GPS longitude" variant="standard" value={gpsLongitude} onChange={e => updateFields({gpsLongitude : e.target.value})} /></li>
    </ul>
      </div>


      </FormGroup>
    </FormWrapper>
  )

      }
