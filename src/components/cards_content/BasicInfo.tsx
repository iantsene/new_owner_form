import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputBase,
  RadioGroup,
  Radio
} from "@mui/material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
import { useState } from "react";
import CustomTextField from "../reuseable-components/CustomTextField";



type UserFormProps = FormDataTypes & {
  updateFields: (fields: Partial<FormDataTypes>) => void

}

export default function BasicInfo({
  checkInTime,
  checkOutTime,
  luggageCheckIn,
  selfCheckIn,
  luggageDropTime,
  rentalLicense,
  extraLicenseRequired,
  extraLicenceGMAG,
  extraEcoHouse,
  extraPartiesNotAllowed,
  extraPartiesAllowed,
  propertyAddress,
  postCode,
  gpsLatitude,
  gpsLongitude,
  viewBeachView,
  viewOcean,
  viewSea,
  viewBayView,
  waterView,
  viewMarinaView,
  viewPoolView,
  viewHarborView,
  viewSunset,
  viewPanoramic,
  viewSunrise,
  viewCountryside,
  viewCityView,
  viewGardenView,
  viewMountainView,
  viewResortView,
  viewValleyView,
  viewVineyardView,
  wheelchairFriendly,
  childrenAllowed,
  petsAllowed,
  smokingAllowed,



  updateFields, data, setData, handleFieldChange }: UserFormProps) {

  const handleCheckboxChange = (fieldName: string) => (e) => {
    handleFieldChange(fieldName, e.target.checked);
  };

  const handleRadioGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFieldChange('lodgingType', e.target.value);
  };



  const mainCategories = [
    {
      title: 'Property type',
      description: 'What type of lodging are you currently offering?',
      content: (<>
        <div className="property-type-cat main-category">
            <RadioGroup
              className="radio-group"
              row
              aria-labelledby="lodge-label"
              name="lodging-types"
              value={data.lodgingType}
              onChange={handleRadioGroupChange}>
              <ul className="multi-options-grid">
                <li className="list-items"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange('villa')} />} value="villa" label={<div className="label-content"><VillaIcon /><span className="checkbox-tags">Villa</span></div>} /></li>
                <li className="list-items"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange('apartment')} />} value="apartment" label={<div className="label-content"><ApartmentIcon /><span className="checkbox-tags">Apartment</span></div>} /></li>
                <li className="list-items"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange('maisonette')} />} value="maisonette" label={<div className="label-content"><img src="/Icons/maisonette.png" /><span className="checkbox-tags">Maisonette</span></div>} /></li>
                <li className="list-items"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange('room')} />} value="room" label={<div className="label-content"><img src="/Icons/icons8-room-24.png" /><span className="checkbox-tags">Room</span></div>} /></li>
                <li className="list-items"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange('studio')} />} value="studio" label={<div className="label-content"><img src="/Icons/studio.png" /><span className="checkbox-tags">Studio</span></div>} /></li>
                <li className="list-items"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange('cottage')} />} value="cottage" label={<div className="label-content"><CottageIcon /><span className="checkbox-tags">Cottage</span></div>} /></li>
                <li className="list-items"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange('bangalow')} />} value="bangalow" label={<div className="label-content"><img src="/Icons/icons8-bungalow-24.png" /><span className="checkbox-tags">Bangalow</span></div>} /></li>
                <li className="list-items"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange('house')} />} value="house" label={<div className="label-content"><HouseIcon /><span className="checkbox-tags">House</span></div>} /></li>
              </ul>
            </RadioGroup>
        </div>
      </>
      ),
    },
    {
      title: 'Accessibility options',
      description: 'What are your accessibility options?',
      content: (<>
        <div className="accessibility-cat main-category">
          <ul className="duo-options-grid">
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={wheelchairFriendly} onChange={handleCheckboxChange('wheelchairFriendly')} />} label={<div className="label-content"><AccessibleIcon /><span className="checkbox-tags">Wheelchair friendly</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={childrenAllowed} onChange={handleCheckboxChange('childrenAllowed')} />} label={<div className="label-content"><FamilyRestroomIcon /><span className="checkbox-tags">Children Allowed</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={petsAllowed} onChange={handleCheckboxChange('petsAllowed')} />} label={<div className="label-content"><PetsIcon /><span className="checkbox-tags">Pets allowed</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={smokingAllowed} onChange={handleCheckboxChange('smokingAllowed')} />} label={<div className="label-content"><SmokingRoomsIcon /><span className="checkbox-tags">Smoking allowed</span></div>} /></li>
          </ul>
        </div>
      </>
      ),
    },
    {
      title: 'Property Views',
      description: 'Please select your property views',
      content: (<>
        <div className="main-category views-category">

          <ul className="multi-options-grid media-query-custom-breakpoint">
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={viewBeachView} onChange={handleCheckboxChange('viewBeachView')} />} label={<div className="label-content"><BeachAccessIcon /><span className="checkbox-tags">Beach view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={viewOcean} onChange={handleCheckboxChange('viewOcean')} />} label={<div className="label-content"><WavesIcon /><span className="checkbox-tags">Ocean view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={viewSea} onChange={handleCheckboxChange('viewSea')} />} label={<div className="label-content"><img src="/Icons/icons8-water-element-24.png" /><span className="checkbox-tags">Sea view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={viewBayView} onChange={handleCheckboxChange('viewBayView')} />} label={<div className="label-content"><img src="/Icons/icons8-bay-24.png" /><span className="checkbox-tags">Bay view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={waterView} onChange={handleCheckboxChange('waterView')} />} label={<div className="label-content"><WaterIcon /><span className="checkbox-tags">Water view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={viewMarinaView} onChange={handleCheckboxChange('viewMarinaView')} />} label={<div className="label-content"><SailingIcon /><span className="checkbox-tags">Marina view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={viewPanoramic} onChange={handleCheckboxChange('viewPanoramic')} />} label={<div className="label-content"><PanoramaHorizontalIcon /><span className="checkbox-tags">Panoramic view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={viewHarborView} onChange={handleCheckboxChange('viewHarborView')} />} label={<div className="label-content"><img src="Icons/icons8-harbor-24.png" /><span className="checkbox-tags">Harbor view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={viewVineyardView} onChange={handleCheckboxChange('viewVineyardView')} />} label={<div className="label-content"><img src="Icons/grapes_6024141.png" /><span className="checkbox-tags">Vineyard view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={viewSunset} onChange={handleCheckboxChange('viewSunset')} />} label={<div className="label-content"><img src="Icons/icons8-sunset-24.png" /><span className="checkbox-tags">Sunset view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={viewSunrise} onChange={handleCheckboxChange('viewSunrise')} />} label={<div className="label-content"><img src="Icons/icons8-sunrise-24.png" /><span className="checkbox-tags">Sunrise view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={viewCityView} onChange={handleCheckboxChange('viewCityView')} />} label={<div className="label-content"><LocationCityIcon /><span className="checkbox-tags">City view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={viewCountryside} onChange={handleCheckboxChange('viewCountryside')} />} label={<div className="label-content"><img src="Icons/icons8-countryside-24.png" /><span className="checkbox-tags">Countryside view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={viewGardenView} onChange={handleCheckboxChange('viewGardenView')} />} label={<div className="label-content"><img src="Icons/icons8-garden-24.png" /><span className="checkbox-tags">Garden view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={viewMountainView} onChange={handleCheckboxChange('viewMountainView')} />} label={<div className="label-content"><LandscapeIcon /><span className="checkbox-tags">Mountain view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={viewResortView} onChange={handleCheckboxChange('viewResortView')} />} label={<div className="label-content"><img src="Icons/icons8-resort-24.png" /><span className="checkbox-tags">Resort view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={viewValleyView} onChange={handleCheckboxChange('viewValleyView')} />} label={<div className="label-content"><img src="Icons/icons8-valley-24.png" /><span className="checkbox-tags">Valley view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={viewPoolView} onChange={handleCheckboxChange('viewPoolView')} />} label={<div className="label-content"><PoolIcon /><span className="checkbox-tags">Pool view</span></div>} /></li>
          </ul>

        </div>
      </>
      ),
    },
    {
      title: 'Property location',
      description: 'Where is it located?',
      content: (<>
        <div className="property-address-category main-category">

          <ul className="duo-options-grid mobile-tablet-list-class">
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Property address:</span><CustomTextField label="Property address" type="text" value={propertyAddress} icon={<img className="textfiel-icon" src="/Icons/icon-placeholder.png" alt="icon" />} onChange={e => updateFields({ propertyAddress: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Post code:</span><CustomTextField label="Post code" type="text" value={postCode} icon={<img className="textfiel-icon" src="/Icons/icon-placeholder.png" alt="icon" />} onChange={e => updateFields({ postCode: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>GPS latitude:</span><CustomTextField label="GPS latitude" type="text" value={gpsLatitude} icon={<img className="textfiel-icon" src="/Icons/icon-placeholder.png" alt="icon" />} onChange={e => updateFields({ gpsLatitude: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>GPS longitude:</span><CustomTextField label="GPS longitude" type="text" value={gpsLongitude} icon={<img className="textfiel-icon" src="/Icons/icon-placeholder.png" alt="icon" />} onChange={e => updateFields({ gpsLongitude: e })}  ></CustomTextField></div></li>
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
    <FormWrapper title="Basic info">
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

        <div className="general-info-categories">
          <div className="media-query-custom-grid">
          <div className="check-in-cat main-category">
            <h3>Check-in options</h3>
            <ul className="media-query-custom-breakpoint">
              <li className="list-items"><img src="/Icons/icon-placeholder.png" /><div className="label"><span>Check-in Time:</span><InputBase type="time" value={checkInTime} onChange={e => updateFields({ checkInTime: e.target.value })} /></div></li>
              <li className="list-items"><FormControlLabel label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Self Check-in</span></div>} control={<Checkbox size="small" checked={selfCheckIn} onChange={handleCheckboxChange('selfCheckIn')} />} labelPlacement="start" /></li>
              <li className="list-items"><img src="/Icons/icon-placeholder.png" /><div className="label"><span>Check-out Time:</span><InputBase type="time" value={checkOutTime} onChange={e => updateFields({ checkOutTime: e.target.value })} /></div></li>
              <li className="list-items"><FormControlLabel label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Luggage Check-in</span></div>} control={<Checkbox size="small" checked={luggageCheckIn} onChange={handleCheckboxChange('luggageCheckIn')} />} labelPlacement="start" /></li>
              <li className="list-items"><img src="/Icons/icon-placeholder.png" /><div className="label"><span>Luggage drop-off time:</span><InputBase type="time" value={luggageDropTime} onChange={e => updateFields({ luggageDropTime: e.target.value })} id="lgdrop" /></div></li>
            </ul>
          </div>

          <div className="licenses-cat main-category">
            <h3>Licenses</h3>
            <ul className="media-query-custom-breakpoint">
              <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={rentalLicense} onChange={handleCheckboxChange('rentalLicense')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Rental license</span></div>} /></li>
              <li className="list-items wrap-below"><FormControlLabel control={<Checkbox size="small" checked={extraLicenceGMAG} onChange={handleCheckboxChange('extraLicenceGMAG')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Extra License type GreeceMAG</span></div>} /></li>
              <li className="list-items wrap-below"><FormControlLabel control={<Checkbox size="small" checked={extraLicenseRequired} onChange={handleCheckboxChange('extraLicenseRequired')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Extra License required</span></div>} /></li>
            </ul>
          </div>

          <div className="extra-parties-cat main-category">
            <h3>Extra Parties & Eco</h3>
            <ul className="media-query-custom-breakpoint">
              <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={extraEcoHouse} onChange={handleCheckboxChange('extraEcoHouse')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Extra Eco house</span></div>} /></li>
              <li className="list-items wrap-below"><FormControlLabel control={<Checkbox size="small" checked={extraPartiesNotAllowed} onChange={handleCheckboxChange('extraPartiesNotAllowed')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Extra Parties not allowed</span></div>} /></li>
              <li className="list-items wrap-below"><FormControlLabel control={<Checkbox size="small" checked={extraPartiesAllowed} onChange={handleCheckboxChange('extraPartiesAllowed')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Extra Parties allowed</span></div>} /></li>
            </ul>

          </div>
          </div>
        </div>

       
      </FormGroup>
    </FormWrapper>
  );
}



