import React, { useState } from 'react';
import { FormGroup } from "@mui/material";
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
import CustomCheckbox from '../reuseable-components/CustomCheckbox';

type UserFormProps = FormDataTypes & {
  setValue: (fields: Partial<FormDataTypes>) => void

}

export default function Location() {

  const { value, setValue, handleFieldChange } = useFormData();

  const handleCheckboxChange = (fieldName: string) => (e: any) => {
    handleFieldChange('location', fieldName, e.target.checked);
  };

  const handleCheckboxToTextboxChange = (fieldName: string) => (e: any) => {
    handleFieldChange('location', fieldName, e);
  };



  const mainCategories = [
    {
      title: 'Location property theme',
      description: 'Does a nearby feature or POI define your property in an interesting way?',
      content: (<>
        <div className="property-theme-category main-category">

          <ul className="multi-options-grid">
          <CustomCheckbox label="Resort" value={value.location.resort} onChange={handleCheckboxChange('resort')} />
          <CustomCheckbox label="River" value={value.location.river} onChange={handleCheckboxChange('river')} />
          <CustomCheckbox label="Rural" value={value.location.rural} onChange={handleCheckboxChange('rural')} />
          <CustomCheckbox label="Ski in" value={value.location.skiIn} onChange={handleCheckboxChange('skiIn')} />
          <CustomCheckbox label="Ski out" value={value.location.skiOut} onChange={handleCheckboxChange('skiOut')} />
          <CustomCheckbox label="Town" value={value.location.town} onChange={handleCheckboxChange('town')} />
          <CustomCheckbox label="Village" value={value.location.village} onChange={handleCheckboxChange('village')} />
          <CustomCheckbox label="Waterfront" value={value.location.waterfront} onChange={handleCheckboxChange('waterfront')} />
          <CustomCheckbox label="on The Beach" value={value.location.onTheBeach} onChange={handleCheckboxChange('onTheBeach')} />
          <CustomCheckbox label="train" value={value.location.train} onChange={handleCheckboxChange('train')} />
          <CustomCheckbox label="taverna" value={value.location.taverna} onChange={handleCheckboxChange('taverna')} />
          <CustomCheckbox label="countryside" value={value.location.countryside} onChange={handleCheckboxChange('countryside')} />
          <CustomCheckbox label="beachFront" value={value.location.beachFront} onChange={handleCheckboxChange('beachFront')} />
          <CustomCheckbox label="highway" value={value.location.highway} onChange={handleCheckboxChange('highway')} />
          <CustomCheckbox label="walk To The Beach" value={value.location.walkToTheBeach} onChange={handleCheckboxChange('walkToTheBeach')} />
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
          <CustomCheckbox label="Beach view" icon={<BeachAccessIcon />} value={value.location.beachView} onChange={handleCheckboxChange('beachView')} />
          <CustomCheckbox label="Ocean view" icon={<WavesIcon />} value={value.location.oceanView} onChange={handleCheckboxChange('oceanView')} />
          <CustomCheckbox label="Sea view" icon={<img src="/Icons/icons8-water-element-24.png" />} value={value.location.seaView} onChange={handleCheckboxChange('seaView')} />
          <CustomCheckbox label="Bay view" icon={<img src="/Icons/icons8-bay-24.png" />} value={value.location.bayView} onChange={handleCheckboxChange('bayView')} />
          <CustomCheckbox label="Water view" icon={<WaterIcon />} value={value.location.waterView} onChange={handleCheckboxChange('waterView')} />
          <CustomCheckbox label="Marina view" icon={<SailingIcon />} value={value.location.marinaView} onChange={handleCheckboxChange('marinaView')} />
          <CustomCheckbox label="Panoramic view" icon={<PanoramaHorizontalIcon />} value={value.location.panoramicView} onChange={handleCheckboxChange('panoramicView')} />
          <CustomCheckbox label="Harbor view" icon={<img src="Icons/icons8-harbor-24.png" />} value={value.location.harborView} onChange={handleCheckboxChange('harborView')} />
          <CustomCheckbox label="Vineyard view" icon={<img src="Icons/grapes_6024141.png" />} value={value.location.vineyardView} onChange={handleCheckboxChange('vineyardView')} />
          <CustomCheckbox label="Sunset view" icon={<img src="Icons/icons8-sunset-24.png" />} value={value.location.sunsetView} onChange={handleCheckboxChange('sunsetView')} />
          <CustomCheckbox label="Sunrise view" icon={<img src="Icons/icons8-sunrise-24.png" />} value={value.location.sunriseView} onChange={handleCheckboxChange('sunriseView')} />
          <CustomCheckbox label="City view" icon={<LocationCityIcon />} value={value.location.cityView} onChange={handleCheckboxChange('cityView')} />
          <CustomCheckbox label="Countryside view" icon={<img src="Icons/icons8-countryside-24.png" />} value={value.location.countrysideView} onChange={handleCheckboxChange('countrysideView')} />
          <CustomCheckbox label="Garden view" icon={<img src="Icons/icons8-garden-24.png" />} value={value.location.gardenView} onChange={handleCheckboxChange('gardenView')} />
          <CustomCheckbox label="Mountain view" icon={<LandscapeIcon />} value={value.location.mountainView} onChange={handleCheckboxChange('mountainView')} />
          <CustomCheckbox label="Resort view" icon={<img src="Icons/icons8-resort-24.png" />} value={value.location.resortView} onChange={handleCheckboxChange('resortView')} />
          <CustomCheckbox label="Valley view" icon={<img src="Icons/icons8-valley-24.png" />} value={value.location.valleyView} onChange={handleCheckboxChange('valleyView')} />
          <CustomCheckbox label="Pool view" icon={<PoolIcon />} value={value.location.poolView} onChange={handleCheckboxChange('poolView')} />
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
          <CustomCheckbox label="Kitchen on the ground" value={value.location.kitchenGround} onChange={handleCheckboxChange('kitchenGround')} />
          <CheckboxWithCustomTextField label="Diner" textboxLabel='Diner distance:' checked={value.location.diner} onCheckboxChange={handleCheckboxToTextboxChange('diner')} description={value.location.dinerDescription} onDescriptionChange={(e) => setValue({location: {...value.location, dinerDescription: e}})} />
          <CustomCheckbox label="Service supermarket" value={value.location.serviceSupermarket} onChange={handleCheckboxChange('serviceSupermarket')} />
          <CustomCheckbox label="Service supermarket delivery" value={value.location.serviceSupermarketDelivery} onChange={handleCheckboxChange('serviceSupermarketDelivery')} />
          <CustomCheckbox label="Service lunch" value={value.location.serviceLunch} onChange={handleCheckboxChange('serviceLunch')} />
          <CustomCheckbox label="Service owner nearby" value={value.location.serviceOwnerNearby} onChange={handleCheckboxChange('serviceOwnerNearby')} />
          <CustomCheckbox label="Children Yes" value={value.location.childrenYes} onChange={handleCheckboxChange('childrenYes')} />
          <CustomCheckbox label="Service boat taxi service" value={value.location.serviceBoatTaxiService} onChange={handleCheckboxChange('serviceBoatTaxiService')} />
          <CustomCheckbox label="Service meal delivery service" value={value.location.serviceMealDeliveryService} onChange={handleCheckboxChange('serviceMealDeliveryService')} />     
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
          <CustomTextField label="closest beach" type="text" value={value.location.closestBeach} onChange={(e) => setValue({location: {...value.location, closestBeach: e}})}  />
          <CustomTextField label="Distance to shops" type="text" value={value.location.distanceToShops} onChange={(e) => setValue({location: {...value.location, distanceToShops: e}})}  />
          <CustomTextField label="Distance to the Beach" type="text" value={value.location.distanceToTheBeach} onChange={(e) => setValue({location: {...value.location, distanceToTheBeach: e}})}  />
          <CustomTextField label="Distance to airport" type="text" value={value.location.distanceToAirport} onChange={(e) => setValue({location: {...value.location, distanceToAirport: e}})}  />
          <CustomTextField label="Distance to city center" type="text" value={value.location.distanceToCityCenter} onChange={(e) => setValue({location: {...value.location, distanceToCityCenter: e}})}  />
          <CustomTextField label="Distance to kiosk" type="text" value={value.location.distanceToKiosk} onChange={(e) => setValue({location: {...value.location, distanceToKiosk: e}})}  />
          <CustomTextField label="Distance to bar" type="text" value={value.location.distanceToBar} onChange={(e) => setValue({location: {...value.location, distanceToBar: e}})}  />
          <CustomTextField label="Distance to ferry" type="text" value={value.location.distanceToFerry} onChange={(e) => setValue({location: {...value.location, distanceToFerry: e}})}  />
          <CustomTextField label="Distance to golf" type="text" value={value.location.distanceToGolf} onChange={(e) => setValue({location: {...value.location, distanceToGolf: e}})}  />
          <CustomTextField label="Nearest village" type="text" value={value.location.nearestVillage} onChange={(e) => setValue({location: {...value.location, nearestVillage: e}})}  />
          <CustomTextField label="Nearest point of interest" type="text" value={value.location.nearestPointOfInterest} onChange={(e) => setValue({location: {...value.location, nearestPointOfInterest: e}})}  />
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
          <CustomTextField label="Nearest restaurant" type="text" value={value.location.nearestRestaurant} onChange={(e) => setValue({location: {...value.location, nearestRestaurant: e}})}  />
          <CustomTextField label="Nearest supermarket" type="text" value={value.location.nearestSupermarket} onChange={(e) => setValue({location: {...value.location, nearestSupermarket: e}})}  />
          <CustomTextField label="Nearest mini-market" type="text" value={value.location.nearestMiniMarket} onChange={(e) => setValue({location: {...value.location, nearestMiniMarket: e}})}  />
          <CustomTextField label="Nearest atm" type="text" value={value.location.nearestAtm} onChange={(e) => setValue({location: {...value.location, nearestAtm: e}})}  />
          <CustomTextField label="Nearest bank" type="text" value={value.location.nearestBank} onChange={(e) => setValue({location: {...value.location, nearestBank: e}})}  />
          <CustomTextField label="Nearest waterPark" type="text" value={value.location.nearestWaterPark} onChange={(e) => setValue({location: {...value.location, nearestWaterPark: e}})}  />
          <CustomTextField label="Nearest marina" type="text" value={value.location.nearestMarina} onChange={(e) => setValue({location: {...value.location, nearestMarina: e}})}  />
          <CustomTextField label="Nearest dive center" type="text" value={value.location.nearestDiveCenter} onChange={(e) => setValue({location: {...value.location, nearestDiveCenter: e}})}  />
          <CustomTextField label="Nearest hospital" type="text" value={value.location.nearestHospital} onChange={(e) => setValue({location: {...value.location, nearestHospital: e}})}  />
          <CustomTextField label="Nearest police station" type="text" value={value.location.nearestPoliceStation} onChange={(e) => setValue({location: {...value.location, nearestPoliceStation: e}})}  />
          <CustomTextField label="Nearest petrol station" type="text" value={value.location.nearestPetrolStation} onChange={(e) => setValue({location: {...value.location, nearestPetrolStation: e}})}  />
          <CustomTextField label="Nearest bus station" type="text" value={value.location.nearestBusStation} onChange={(e) => setValue({location: {...value.location, nearestBusStation: e}})}  />
          <CustomTextField label="Nearest tennis court" type="text" value={value.location.nearestTennisCourt} onChange={(e) => setValue({location: {...value.location, nearestTennisCourt: e}})}  />
          <CustomTextField label="Nearest pharmacy" type="text" value={value.location.nearestPharmacy} onChange={(e) => setValue({location: {...value.location, nearestPharmacy: e}})}  />
          <CustomTextField label="Nearest hairdressers" type="text" value={value.location.nearestHairdressers} onChange={(e) => setValue({location: {...value.location, nearestHairdressers: e}})}  />
          <CustomTextField label="Nearest medical center" type="text" value={value.location.nearestMedicalCenter} onChange={(e) => setValue({location: {...value.location, nearestMedicalCenter: e}})}  />
          <CustomTextField label="Nearest launderette" type="text" value={value.location.nearestLaunderette} onChange={(e) => setValue({location: {...value.location, nearestLaunderette: e}})}  />
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

          <CustomTextField label="Bay" type="text" value={value.location.bay} onChange={(e) => setValue({location: {...value.location, bay: e}})}  />
          <CustomTextField label="coin laundry" type="text" value={value.location.coinLaundry} onChange={(e) => setValue({location: {...value.location, coinLaundry: e}})}  />
          <CustomTextField label="Duty free" type="text" value={value.location.dutyFree} onChange={(e) => setValue({location: {...value.location, dutyFree: e}})}  />
          <CustomTextField label="Health beauty spa" type="text" value={value.location.healthBeautyspa} onChange={(e) => setValue({location: {...value.location, healthBeautyspa: e}})}  />
          <CustomTextField label="Marina" type="text" value={value.location.marina} onChange={(e) => setValue({location: {...value.location, marina: e}})}  />
          <CustomTextField label="Museums" type="text" value={value.location.museums} onChange={(e) => setValue({location: {...value.location, museums: e}})}  />
          <CustomTextField label="Theme parks" type="text" value={value.location.themeParks} onChange={(e) => setValue({location: {...value.location, themeParks: e}})}  />
          <CustomTextField label="Water parks" type="text" value={value.location.waterParks} onChange={(e) => setValue({location: {...value.location, waterParks: e}})}  />
          <CustomTextField label="Winery tours" type="text" value={value.location.wineryTours} onChange={(e) => setValue({location: {...value.location, wineryTours: e}})}  />
          <CustomTextField label="Zoo" type="text" value={value.location.zoo} onChange={(e) => setValue({location: {...value.location, zoo: e}})}  />
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
          <CustomTextField label="Antiquing" type="text" value={value.location.antiquing} onChange={(e) => setValue({location: {...value.location, antiquing: e}})}  />
          <CustomTextField label="Bird watching" type="text" value={value.location.birdWatching} onChange={(e) => setValue({location: {...value.location, birdWatching: e}})}  />
          <CustomTextField label="Eco tourism" type="text" value={value.location.ecoTourism} onChange={(e) => setValue({location: {...value.location, ecoTourism: e}})}  />
          <CustomTextField label="Gambling" type="text" value={value.location.gambling} onChange={(e) => setValue({location: {...value.location, gambling: e}})}  />
          <CustomTextField label="Horseback riding" type="text" value={value.location.horsebackRiding} onChange={(e) => setValue({location: {...value.location, horsebackRiding: e}})}  />
          <CustomTextField label="Outlet shopping" type="text" value={value.location.outletShopping} onChange={(e) => setValue({location: {...value.location, outletShopping: e}})}  />
          <CustomTextField label="Paddle boating" type="text" value={value.location.paddleBoating} onChange={(e) => setValue({location: {...value.location, paddleBoating: e}})}  />
          <CustomTextField label="Sledding" type="text" value={value.location.sledding} onChange={(e) => setValue({location: {...value.location, sledding: e}})}  />
          <CustomTextField label="Boating" type="text" value={value.location.boating} onChange={(e) => setValue({location: {...value.location, boating: e}})}  />
          <CustomTextField label="Shopping" type="text" value={value.location.hopping} onChange={(e) => setValue({location: {...value.location, hopping: e}})}  />
          <CustomTextField label="Wild life viewing" type="text" value={value.location.wildLifeViewing} onChange={(e) => setValue({location: {...value.location, wildLifeViewing: e}})}  />
          <CustomTextField label="Watersports" type="text" value={value.location.waterSports} onChange={(e) => setValue({location: {...value.location, waterSports: e}})}  />
          <CustomTextField label="Fitness center" type="text" value={value.location.fitnessCenter} onChange={(e) => setValue({location: {...value.location, fitnessCenter: e}})}  />
          <CustomTextField label="Hospital" type="text" value={value.location.hospital} onChange={(e) => setValue({location: {...value.location, hospital: e}})}  />
          <CustomTextField label="Laundromat" type="text" value={value.location.laundromat} onChange={(e) => setValue({location: {...value.location, laundromat: e}})}  />
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
          <CustomTextField label="Property address" type="text" value={value.basicInfo.propertyAddress} onChange={(e) => setValue({basicInfo: {...value.basicInfo, propertyAddress: e}})}  />
          <CustomTextField label="Post code" type="text" value={value.basicInfo.postCode} onChange={(e) => setValue({basicInfo: {...value.basicInfo, postCode: e}})}  />
          <CustomTextField label="GPS latitude" type="text" value={value.basicInfo.gpsLatitude} onChange={(e) => setValue({basicInfo: {...value.basicInfo, gpsLatitude: e}})}  />
          <CustomTextField label="GPS longitude" type="text" value={value.basicInfo.gpsLongitude} onChange={(e) => setValue({basicInfo: {...value.basicInfo, gpsLongitude: e}})}  />
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


