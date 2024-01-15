import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, InputBase } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomTextField from '../reuseable-components/CustomTextField';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WavesIcon from '@mui/icons-material/Waves';
import WaterIcon from '@mui/icons-material/Water';
import SailingIcon from '@mui/icons-material/Sailing';
import PoolIcon from '@mui/icons-material/Pool';
import PanoramaHorizontalIcon from '@mui/icons-material/PanoramaHorizontal';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LandscapeIcon from '@mui/icons-material/Landscape';
import CheckboxWithCustomTextField from '../reuseable-components/CheckboxWithCustomTextField';
import { useFormData } from '@/app/contexts/form';

type UserFormProps = FormDataTypes & {
  setValue: (fields: Partial<FormDataTypes>) => void

}

export default function Location() {

  const { value, setValue, handleFieldChange } = useFormData();

  const handleCheckboxChange = (fieldName: string) => (e: any) => {
    handleFieldChange(fieldName, e.target.checked);
  };





  const mainCategories = [
    {
      title: 'Location property theme',
      description: 'Does a nearby feature or POI define your property in an interesting way?',
      content: (<>
        <div className="property-theme-category main-category">

          <ul className="multi-options-grid">
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.resort} onChange={handleCheckboxChange('resort')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Resort</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.river} onChange={handleCheckboxChange('river')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">River</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.rural} onChange={handleCheckboxChange('rural')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Rural</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.skiIn} onChange={handleCheckboxChange('skiIn')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Ski in</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.skiOut} onChange={handleCheckboxChange('skiOut')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Ski out</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.town} onChange={handleCheckboxChange('town')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Town</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.village} onChange={handleCheckboxChange('village')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Village</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.waterfront} onChange={handleCheckboxChange('waterfront')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Waterfront</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.onTheBeach} onChange={handleCheckboxChange('onTheBeach')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">on The Beach</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.train} onChange={handleCheckboxChange('train')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">train</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.taverna} onChange={handleCheckboxChange('taverna')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">taverna</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.countryside} onChange={handleCheckboxChange('countryside')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">countryside</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.beachFront} onChange={handleCheckboxChange('beachFront')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">beachFront</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.highway} onChange={handleCheckboxChange('highway')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">highway</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.walkToTheBeach} onChange={handleCheckboxChange('walkToTheBeach')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">walk To The Beach</span></div>} /></li>
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
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.viewBeachView} onChange={handleCheckboxChange('viewBeachView')} />} label={<div className="label-content"><BeachAccessIcon /><span className="checkbox-tags">Beach view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.viewOcean} onChange={handleCheckboxChange('viewOcean')} />} label={<div className="label-content"><WavesIcon /><span className="checkbox-tags">Ocean view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.viewSea} onChange={handleCheckboxChange('viewSea')} />} label={<div className="label-content"><img src="/Icons/icons8-water-element-24.png" /><span className="checkbox-tags">Sea view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.viewBayView} onChange={handleCheckboxChange('viewBayView')} />} label={<div className="label-content"><img src="/Icons/icons8-bay-24.png" /><span className="checkbox-tags">Bay view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.waterView} onChange={handleCheckboxChange('waterView')} />} label={<div className="label-content"><WaterIcon /><span className="checkbox-tags">Water view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.viewMarinaView} onChange={handleCheckboxChange('viewMarinaView')} />} label={<div className="label-content"><SailingIcon /><span className="checkbox-tags">Marina view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.viewPanoramic} onChange={handleCheckboxChange('viewPanoramic')} />} label={<div className="label-content"><PanoramaHorizontalIcon /><span className="checkbox-tags">Panoramic view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.viewHarborView} onChange={handleCheckboxChange('viewHarborView')} />} label={<div className="label-content"><img src="Icons/icons8-harbor-24.png" /><span className="checkbox-tags">Harbor view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.viewVineyardView} onChange={handleCheckboxChange('viewVineyardView')} />} label={<div className="label-content"><img src="Icons/grapes_6024141.png" /><span className="checkbox-tags">Vineyard view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.viewSunset} onChange={handleCheckboxChange('viewSunset')} />} label={<div className="label-content"><img src="Icons/icons8-sunset-24.png" /><span className="checkbox-tags">Sunset view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.viewSunrise} onChange={handleCheckboxChange('viewSunrise')} />} label={<div className="label-content"><img src="Icons/icons8-sunrise-24.png" /><span className="checkbox-tags">Sunrise view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.viewCityView} onChange={handleCheckboxChange('viewCityView')} />} label={<div className="label-content"><LocationCityIcon /><span className="checkbox-tags">City view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.viewCountryside} onChange={handleCheckboxChange('viewCountryside')} />} label={<div className="label-content"><img src="Icons/icons8-countryside-24.png" /><span className="checkbox-tags">Countryside view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.viewGardenView} onChange={handleCheckboxChange('viewGardenView')} />} label={<div className="label-content"><img src="Icons/icons8-garden-24.png" /><span className="checkbox-tags">Garden view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.viewMountainView} onChange={handleCheckboxChange('viewMountainView')} />} label={<div className="label-content"><LandscapeIcon /><span className="checkbox-tags">Mountain view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.viewResortView} onChange={handleCheckboxChange('viewResortView')} />} label={<div className="label-content"><img src="Icons/icons8-resort-24.png" /><span className="checkbox-tags">Resort view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.viewValleyView} onChange={handleCheckboxChange('viewValleyView')} />} label={<div className="label-content"><img src="Icons/icons8-valley-24.png" /><span className="checkbox-tags">Valley view</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.viewPoolView} onChange={handleCheckboxChange('viewPoolView')} />} label={<div className="label-content"><PoolIcon /><span className="checkbox-tags">Pool view</span></div>} /></li>
          </ul>

        </div>
      </>
      ),
    },
    {
      title: 'Nearby services',
      description: 'Provide guests with helpful information',
      content: (<>
        <div className="nearby-services-category main-category">
          <ul className="multi-options-grid">
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.kitchenGround} onChange={handleCheckboxChange('kitchenGround')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Kitchen on the ground</span></div>} /></li>
            <li className="list-item"><CheckboxWithCustomTextField label="Diner" icon={<img src="/Icons/icon-placeholder.png" />} textboxLabel='Diner distance:' checked={value.diner} onCheckboxChange={(checked) => setValue({ diner: checked })} description={value.dinerDescription} onClearDescription={() => { setValue({ dinerDescription: "" })}} onDescriptionChange={(description) => setValue({ dinerDescription: description })} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.serviceSupermarket} onChange={handleCheckboxChange('serviceSupermarket')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Service supermarket</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.serviceSupermarketDelivery} onChange={handleCheckboxChange('serviceSupermarketDelivery')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Service supermarket delivery</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.serviceLunch} onChange={handleCheckboxChange('serviceLunch')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Service lunch</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.serviceOwnerNearby} onChange={handleCheckboxChange('serviceOwnerNearby')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Service owner nearby</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.childrenYes} onChange={handleCheckboxChange('childrenYes')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Children Yes</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.serviceBoatTaxiService} onChange={handleCheckboxChange('serviceBoatTaxiService')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Service boat taxi service</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.serviceMealDeliveryService} onChange={handleCheckboxChange('serviceMealDeliveryService')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Service meal delivery service</span></div>} /></li>
          </ul>
        </div>
      </>
      ),
    },
    {
      title: 'Distance to points of interest',
      description: 'Provide guests with helpful information on the nearest POIs',
      content: (<>
        <div className="distance-to-pois-category main-category">

          <ul className="duo-options-grid">
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>closest beach:</span><CustomTextField label="closest beach" type="text" value={value.closestBeach} onChange={e => setValue({ closestBeach: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Distance to shops:</span><CustomTextField label="Distance to shops" type="text" value={value.distanceToShops} onChange={e => setValue({ distanceToShops: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Distance to the Beach:</span><CustomTextField label="Distance to the Beach" type="text" value={value.distanceToTheBeach} onChange={e => setValue({ distanceToTheBeach: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Distance to airport:</span><CustomTextField label="Distance to airport" type="text" value={value.distanceToAirport} onChange={e => setValue({ distanceToAirport: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Distance to city center:</span><CustomTextField label="Distance to city center" type="text" value={value.distanceToCityCenter} onChange={e => setValue({ distanceToCityCenter: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Distance to kiosk:</span><CustomTextField label="Distance to kiosk" type="text" value={value.distanceToKiosk} onChange={e => setValue({ distanceToKiosk: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Distance to bar:</span><CustomTextField label="Distance to bar" type="text" value={value.distanceToBar} onChange={e => setValue({ distanceToBar: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Distance to ferry:</span><CustomTextField label="Distance to ferry" type="text" value={value.distanceToFerry} onChange={e => setValue({ distanceToFerry: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Distance to golf:</span><CustomTextField label="Distance to golf" type="text" value={value.distanceToGolf} onChange={e => setValue({ distanceToGolf: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest village:</span><CustomTextField label="Nearest village" type="text" value={value.nearestVillage} onChange={e => setValue({ nearestVillage: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest point of interest:</span><CustomTextField label="Nearest point of interest" type="text" value={value.nearestPointOfInterest} onChange={e => setValue({ nearestPointOfInterest: e })}  ></CustomTextField></div></li>
          </ul>
        </div>
      </>
      ),
    },
    {
      title: 'Distance to nearest services',
      description: 'Where is the nearest petrol station? How about police station?',
      content: (<>
        <div className="distance-to-services-category main-category">

          <ul className="duo-options-grid">
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest restaurant:</span><CustomTextField label="Nearest restaurant" type="text" value={value.nearestRestaurant} onChange={e => setValue({ nearestRestaurant: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest supermarket:</span><CustomTextField label="Nearest supermarket" type="text" value={value.nearestSupermarket} onChange={e => setValue({ nearestSupermarket: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest mini-market:</span><CustomTextField label="Nearest mini-market" type="text" value={value.nearestMiniMarket} onChange={e => setValue({ nearestMiniMarket: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest atm:</span><CustomTextField label="Nearest atm" type="text" value={value.nearestAtm} onChange={e => setValue({ nearestAtm: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest bank:</span><CustomTextField label="Nearest bank" type="text" value={value.nearestBank} onChange={e => setValue({ nearestBank: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest waterPark:</span><CustomTextField label="Nearest waterPark" type="text" value={value.nearestWaterPark} onChange={e => setValue({ nearestWaterPark: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest marina:</span><CustomTextField label="Nearest marina" type="text" value={value.nearestMarina} onChange={e => setValue({ nearestMarina: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest dive center:</span><CustomTextField label="Nearest dive center" type="text" value={value.nearestDiveCenter} onChange={e => setValue({ nearestDiveCenter: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest hospital:</span><CustomTextField label="Nearest hospital" type="text" value={value.nearestHospital} onChange={e => setValue({ nearestHospital: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest police station:</span><CustomTextField label="Nearest police station" type="text" value={value.nearestPoliceStation} onChange={e => setValue({ nearestPoliceStation: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest petrol station:</span><CustomTextField label="Nearest petrol station" type="text" value={value.nearestPetrolStation} onChange={e => setValue({ nearestPetrolStation: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest bus station:</span><CustomTextField label="Nearest bus station" type="text" value={value.nearestBusStation} onChange={e => setValue({ nearestBusStation: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest tennis court:</span><CustomTextField label="Nearest tennis court" type="text" value={value.nearestTennisCourt} onChange={e => setValue({ nearestTennisCourt: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest pharmacy:</span><CustomTextField label="Nearest pharmacy" type="text" value={value.nearestPharmacy} onChange={e => setValue({ nearestPharmacy: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest hairdressers:</span><CustomTextField label="Nearest hairdressers" type="text" value={value.nearestHairdressers} onChange={e => setValue({ nearestHairdressers: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest medical center:</span><CustomTextField label="Nearest medical center" type="text" value={value.nearestMedicalCenter} onChange={e => setValue({ nearestMedicalCenter: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest launderette:</span><CustomTextField label="Nearest launderette" type="text" value={value.nearestLaunderette} onChange={e => setValue({ nearestLaunderette: e })}  ></CustomTextField></div></li>
          </ul>
        </div>
      </>
      ),
    },
    {
      title: 'Attractions',
      description: 'What are some nearby attractions?',
      content: (<>
        <div className="nearby-attractions-category main-category">
          <ul className="duo-options-grid">
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Attraction Bay:</span><CustomTextField label="Attraction Bay" type="text" value={value.attractionBay} onChange={e => setValue({ attractionBay: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Attraction coin laundry:</span><CustomTextField label="Attraction coin laundry" type="text" value={value.attractionAttractionscoinLaundry} onChange={e => setValue({ attractionAttractionscoinLaundry: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Attraction Duty free:</span><CustomTextField label="Attraction Duty free" type="text" value={value.attractionDutyFree} onChange={e => setValue({ attractionDutyFree: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Attraction Health beauty spa:</span><CustomTextField label="Health beauty spa" type="text" value={value.attractionHealthBeautyspa} onChange={e => setValue({ attractionHealthBeautyspa: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Attraction Marina:</span><CustomTextField label="Attraction Marina" type="text" value={value.attractionMarina} onChange={e => setValue({ attractionMarina: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Attraction Museums:</span><CustomTextField label="Attraction Museums" type="text" value={value.attractionMuseums} onChange={e => setValue({ attractionMuseums: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Attraction Theme parks:</span><CustomTextField label="Attraction Theme parks" type="text" value={value.attractionThemeParks} onChange={e => setValue({ attractionThemeParks: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Attraction Water parks:</span><CustomTextField label="Attraction Water parks" type="text" value={value.attractionWaterParks} onChange={e => setValue({ attractionWaterParks: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Attraction Winery tours:</span><CustomTextField label="Attraction Winery tours" type="text" value={value.attractionWineryTours} onChange={e => setValue({ attractionWineryTours: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Attraction Zoo:</span><CustomTextField label="Attraction Zoo" type="text" value={value.attractionZoo} onChange={e => setValue({ attractionZoo: e })}  ></CustomTextField></div></li>
          </ul>
        </div>
      </>
      ),
    },
    {
      title: 'Leisure',
      description: 'What options do you offer towards leisure?',
      content: (<>
        <div className="nearby-leisures-category main-category">
          <ul className="duo-options-grid">
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Antiquing:</span><CustomTextField label="Leisure Antiquing" type="text" value={value.leisureAntiquing} onChange={e => setValue({ leisureAntiquing: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Bird watching:</span><CustomTextField label="Leisure Bird watching" type="text" value={value.leisureBirdWatching} onChange={e => setValue({ leisureBirdWatching: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Eco tourism:</span><CustomTextField label="Leisure Eco tourism" type="text" value={value.leisureEcoTourism} onChange={e => setValue({ leisureEcoTourism: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Gambling:</span><CustomTextField label="Leisure Gambling" type="text" value={value.leisureGambling} onChange={e => setValue({ leisureGambling: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Horseback riding:</span><CustomTextField label="Leisure Horseback riding" type="text" value={value.leisureHorsebackRiding} onChange={e => setValue({ leisureHorsebackRiding: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Outlet shopping:</span><CustomTextField label="Leisure Outlet shopping" type="text" value={value.leisureOutletShopping} onChange={e => setValue({ leisureOutletShopping: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Paddle boating:</span><CustomTextField label="Leisure Paddle boating" type="text" value={value.leisurePaddleBoating} onChange={e => setValue({ leisurePaddleBoating: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Sledding:</span><CustomTextField label="Leisure Sledding" type="text" value={value.leisureSledding} onChange={e => setValue({ leisureSledding: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Boating:</span><CustomTextField label="Leisure Boating" type="text" value={value.leisureBoating} onChange={e => setValue({ leisureBoating: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Shopping:</span><CustomTextField label="Leisure Shopping" type="text" value={value.leisureShopping} onChange={e => setValue({ leisureShopping: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Wild lifeviewing:</span><CustomTextField label="Leisure Wild lifeviewing" type="text" value={value.leisureWildLifeViewing} onChange={e => setValue({ leisureWildLifeViewing: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Water sports:</span><CustomTextField label="Leisure Water sports" type="text" value={value.leisureWaterSports} onChange={e => setValue({ leisureWaterSports: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Fitness center:</span><CustomTextField label="Leisure Fitness center" type="text" value={value.leisureFitnessCenter} onChange={e => setValue({ leisureFitnessCenter: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Hospital:</span><CustomTextField label="Leisure Hospital" type="text" value={value.leisureHospital} onChange={e => setValue({ leisureHospital: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Laundromat:</span><CustomTextField label="Leisure Laundromat" type="text" value={value.leisureLaundromat} onChange={e => setValue({ leisureLaundromat: e })}  ></CustomTextField></div></li>
          </ul>
        </div>
      </>
      ),
    },
    {
      title: 'Property address',
      description: 'Please take a final look on whether you filled your property address correctly or not.',
      content: (<>
        <div className="property-address-category main-category">

          <ul className="duo-options-grid">
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Property address:</span><CustomTextField label="Property address" type="text" value={value.propertyAddress} onChange={e => setValue({ propertyAddress: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Post code:</span><CustomTextField label="Post code" type="text" value={value.postCode} onChange={e => setValue({ postCode: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>GPS latitude:</span><CustomTextField label="GPS latitude" type="text" value={value.gpsLatitude} onChange={e => setValue({ gpsLatitude: e })}  ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>GPS longitude:</span><CustomTextField label="GPS longitude" type="text" value={value.gpsLongitude} onChange={e => setValue({ gpsLongitude: e })}  ></CustomTextField></div></li>
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
    <FormWrapper title="Location">
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
      </FormGroup>
    </FormWrapper>
  );
}


