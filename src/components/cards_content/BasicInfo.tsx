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
            <h3>What type of lodging are you currently offering?</h3>
            
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


      <li className="list-item"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange('villa')} />} value="villa" label={<div className="label-content"><VillaIcon /><span className="checkbox-tags">Villa</span></div>} /></li>
      <li className="list-item"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange('apartment')} />} value="apartment" label={<div className="label-content"><ApartmentIcon /><span className="checkbox-tags">Apartment</span></div>} /></li>
      <li className="list-item"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange('maisonette')} />} value="maisonette" label={<div className="label-content"><img src="/Icons/maisonette.png" /><span className="checkbox-tags">Maisonette</span></div>} /></li>
      <li className="list-item"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange('room')} />} value="room" label={<div className="label-content"><img src="/Icons/icons8-room-24.png" /><span className="checkbox-tags">Room</span></div>} /></li>
      <li className="list-item"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange('studio')} />} value="studio" label={<div className="label-content"><img src="/Icons/studio.png" /><span className="checkbox-tags">Studio</span></div>} /></li>
      <li className="list-item"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange('cottage')} />} value="cottage" label={<div className="label-content"><CottageIcon /><span className="checkbox-tags">Cottage</span></div>} /></li>
      <li className="list-item"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange('bangalow')} />} value="bangalow" label={<div className="label-content"><img src="/Icons/icons8-bungalow-24.png" /><span className="checkbox-tags">Bangalow</span></div>} /></li>
      <li className="list-item"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange('house')} />} value="house" label={<div className="label-content"><HouseIcon /><span className="checkbox-tags">House</span></div>} /></li>
                </ul>
              </RadioGroup>
            </FormControl>
          </div>

          <div className="main-category">
        <h3>What are your accessibility options?</h3>
          <ul>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.wheelchairFriendly} onChange={handleCheckboxChange('wheelchairFriendly')} />} label={<div className="label-content"><AccessibleIcon /><span className="checkbox-tags">Wheelchair friendly</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.childrenAllowed} onChange={handleCheckboxChange('childrenAllowed')} />} label={<div className="label-content"><FamilyRestroomIcon /><span className="checkbox-tags">Children Allowed</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.petsAllowed} onChange={handleCheckboxChange('petsAllowed')} />} label={<div className="label-content"><PetsIcon /><span className="checkbox-tags">Pets allowed</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.smokingAllowed} onChange={handleCheckboxChange('smokingAllowed')} />} label={<div className="label-content"><SmokingRoomsIcon /><span className="checkbox-tags">Smoking allowed</span></div>} /></li>
          </ul>
        </div>

        



     



        <div className="main-category">
        <h3>does it have any view?</h3>
        <ul className="multi-options-grid">
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.viewBeachView} onChange={handleCheckboxChange('viewBeachView')} />} label={<div className="label-content"><BeachAccessIcon /><span className="checkbox-tags">Beach view</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.viewOcean} onChange={handleCheckboxChange('viewOcean')} />} label={<div className="label-content"><WavesIcon /><span className="checkbox-tags">Ocean view</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.viewSea} onChange={handleCheckboxChange('viewSea')} />} label={<div className="label-content"><img src="/Icons/icons8-water-element-24.png" /><span className="checkbox-tags">Sea view</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.viewBayView} onChange={handleCheckboxChange('viewBayView')} />} label={<div className="label-content"><img src="/Icons/icons8-bay-24.png" /><span className="checkbox-tags">Bay view</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.waterView} onChange={handleCheckboxChange('waterView')} />} label={<div className="label-content"><WaterIcon /><span className="checkbox-tags">Water view</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.viewMarinaView} onChange={handleCheckboxChange('viewMarinaView')} />} label={<div className="label-content"><SailingIcon /><span className="checkbox-tags">Marina view</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.viewPoolView} onChange={handleCheckboxChange('viewPoolView')} />} label={<div className="label-content"><PoolIcon /><span className="checkbox-tags">Pool view</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.viewHarborView} onChange={handleCheckboxChange('viewHarborView')} />} label={<div className="label-content"><img src="Icons/icons8-harbor-24.png" /><span className="checkbox-tags">Harbor view</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.viewSunset} onChange={handleCheckboxChange('viewSunset')} />} label={<div className="label-content"><img src="Icons/icons8-sunset-24.png" /><span className="checkbox-tags">Sunset view</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.viewPanoramic} onChange={handleCheckboxChange('viewPanoramic')} />} label={<div className="label-content"><PanoramaHorizontalIcon /><span className="checkbox-tags">Panoramic view</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.viewSunrise} onChange={handleCheckboxChange('viewSunrise')} />} label={<div className="label-content"><img src="Icons/icons8-sunrise-24.png" /><span className="checkbox-tags">Sunrise view</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.viewCountryside} onChange={handleCheckboxChange('viewCountryside')} />} label={<div className="label-content"><img src="Icons/icons8-countryside-24.png" /><span className="checkbox-tags">Countryside view</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.viewCityView} onChange={handleCheckboxChange('viewCityView')} />} label={<div className="label-content"><LocationCityIcon /><span className="checkbox-tags">City view</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.viewGardenView} onChange={handleCheckboxChange('viewGardenView')} />} label={<div className="label-content"><img src="Icons/icons8-garden-24.png" /><span className="checkbox-tags">Garden view</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.viewMountainView} onChange={handleCheckboxChange('viewMountainView')} />} label={<div className="label-content"><LandscapeIcon /><span className="checkbox-tags">Mountain view</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.viewResortView} onChange={handleCheckboxChange('viewResortView')} />} label={<div className="label-content"><img src="Icons/icons8-resort-24.png" /><span className="checkbox-tags">Resort view</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.viewValleyView} onChange={handleCheckboxChange('viewValleyView')} />} label={<div className="label-content"><img src="Icons/icons8-valley-24.png" /><span className="checkbox-tags">Valley view</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.viewVineyardView} onChange={handleCheckboxChange('viewVineyardView')} />} label={<div className="label-content"><img src="Icons/grapes_6024141.png" /><span className="checkbox-tags">Vineyard view</span></div>} /></li>
        </ul>
        
        </div>

      

     <div className="main-category"> 
     <h3>Property location</h3>
     <ul className="duo-options-grid">

     <li><img src="Icons/icons8-address-24.png" alt="icon" /><label className="label"><span>Property address:</span><TextField size="small" type="number" label="Property address" variant="standard" value={propertyAddress} onChange={e => updateFields({propertyAddress : e.target.value})} /></label></li>
     <li><img src="Icons/icons8-postal-24.png" alt="icon" /><label className="label"><span>Post code:</span><TextField size="small" type="number" label="Post code" variant="standard" value={postCode} onChange={e => updateFields({postCode : e.target.value})} /></label></li>
     <li><img src="Icons/icons8-latitude-24.png" alt="icon" /><label className="label"><span>GPS latitude:</span><TextField size="small" type="number" label="GPS latitude" variant="standard" value={gpsLatitude} onChange={e => updateFields({gpsLatitude : e.target.value})} /></label></li>
     <li><img src="Icons/icons8-longitude-24.png" alt="icon" /><label className="label"><span>GPS longitude:</span><TextField size="small" type="number" label="GPS longitude" variant="standard" value={gpsLongitude} onChange={e => updateFields({gpsLongitude : e.target.value})} /></label></li>


    </ul>
      </div>


      </FormGroup>
    </FormWrapper>
  )

      }
