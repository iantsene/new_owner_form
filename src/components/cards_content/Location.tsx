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
    handleFieldChange(fieldName, e.target.checked);
  };





  const mainCategories = [
    {
      title: 'Location property theme',
      description: 'Does a nearby feature or POI define your property in an interesting way?',
      content: (<>
        <div className="property-theme-category main-category">

          <ul className="multi-options-grid">
          <CustomCheckbox label="Resort" value={value.resort} onChange={handleCheckboxChange('resort')} />
          <CustomCheckbox label="River" value={value.river} onChange={handleCheckboxChange('river')} />
          <CustomCheckbox label="Rural" value={value.rural} onChange={handleCheckboxChange('rural')} />
          <CustomCheckbox label="Ski in" value={value.skiIn} onChange={handleCheckboxChange('skiIn')} />
          <CustomCheckbox label="Ski out" value={value.skiOut} onChange={handleCheckboxChange('skiOut')} />
          <CustomCheckbox label="Town" value={value.town} onChange={handleCheckboxChange('town')} />
          <CustomCheckbox label="Village" value={value.village} onChange={handleCheckboxChange('village')} />
          <CustomCheckbox label="Waterfront" value={value.waterfront} onChange={handleCheckboxChange('waterfront')} />
          <CustomCheckbox label="on The Beach" value={value.onTheBeach} onChange={handleCheckboxChange('onTheBeach')} />
          <CustomCheckbox label="train" value={value.train} onChange={handleCheckboxChange('train')} />
          <CustomCheckbox label="taverna" value={value.taverna} onChange={handleCheckboxChange('taverna')} />
          <CustomCheckbox label="countryside" value={value.countryside} onChange={handleCheckboxChange('countryside')} />
          <CustomCheckbox label="beachFront" value={value.beachFront} onChange={handleCheckboxChange('beachFront')} />
          <CustomCheckbox label="highway" value={value.highway} onChange={handleCheckboxChange('highway')} />
          <CustomCheckbox label="walk To The Beach" value={value.walkToTheBeach} onChange={handleCheckboxChange('walkToTheBeach')} />
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
          <CustomCheckbox label="Beach view" icon={<BeachAccessIcon />} value={value.viewBeachView} onChange={handleCheckboxChange('viewBeachView')} />
          <CustomCheckbox label="Ocean view" icon={<WavesIcon />} value={value.viewOcean} onChange={handleCheckboxChange('viewOcean')} />
          <CustomCheckbox label="Sea view" icon={<img src="/Icons/icons8-water-element-24.png" />} value={value.viewSea} onChange={handleCheckboxChange('viewSea')} />
          <CustomCheckbox label="Bay view" icon={<img src="/Icons/icons8-bay-24.png" />} value={value.viewBayView} onChange={handleCheckboxChange('viewBayView')} />
          <CustomCheckbox label="Water view" icon={<WaterIcon />} value={value.waterView} onChange={handleCheckboxChange('waterView')} />
          <CustomCheckbox label="Marina view" icon={<SailingIcon />} value={value.viewMarinaView} onChange={handleCheckboxChange('viewMarinaView')} />
          <CustomCheckbox label="Panoramic view" icon={<PanoramaHorizontalIcon />} value={value.viewPanoramic} onChange={handleCheckboxChange('viewPanoramic')} />
          <CustomCheckbox label="Harbor view" icon={<img src="Icons/icons8-harbor-24.png" />} value={value.viewHarborView} onChange={handleCheckboxChange('viewHarborView')} />
          <CustomCheckbox label="Vineyard view" icon={<img src="Icons/grapes_6024141.png" />} value={value.viewVineyardView} onChange={handleCheckboxChange('viewVineyardView')} />
          <CustomCheckbox label="Sunset view" icon={<img src="Icons/icons8-sunset-24.png" />} value={value.viewSunset} onChange={handleCheckboxChange('viewSunset')} />
          <CustomCheckbox label="Sunrise view" icon={<img src="Icons/icons8-sunrise-24.png" />} value={value.viewSunrise} onChange={handleCheckboxChange('viewSunrise')} />
          <CustomCheckbox label="City view" icon={<LocationCityIcon />} value={value.viewCityView} onChange={handleCheckboxChange('viewCityView')} />
          <CustomCheckbox label="Countryside view" icon={<img src="Icons/icons8-countryside-24.png" />} value={value.viewCountryside} onChange={handleCheckboxChange('viewCountryside')} />
          <CustomCheckbox label="Garden view" icon={<img src="Icons/icons8-garden-24.png" />} value={value.viewGardenView} onChange={handleCheckboxChange('viewGardenView')} />
          <CustomCheckbox label="Mountain view" icon={<LandscapeIcon />} value={value.viewMountainView} onChange={handleCheckboxChange('viewMountainView')} />
          <CustomCheckbox label="Resort view" icon={<img src="Icons/icons8-resort-24.png" />} value={value.viewResortView} onChange={handleCheckboxChange('viewResortView')} />
          <CustomCheckbox label="Valley view" icon={<img src="Icons/icons8-valley-24.png" />} value={value.viewValleyView} onChange={handleCheckboxChange('viewValleyView')} />
          <CustomCheckbox label="Pool view" icon={<PoolIcon />} value={value.viewPoolView} onChange={handleCheckboxChange('viewPoolView')} />
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
          <CustomCheckbox label="Kitchen on the ground" value={value.kitchenGround} onChange={handleCheckboxChange('kitchenGround')} />
          <li className="list-item"><CheckboxWithCustomTextField label="Diner" icon={<img src="/Icons/icon-placeholder.png" />} textboxLabel='Diner distance:' checked={value.diner} onCheckboxChange={(checked) => setValue({ diner: checked })} description={value.dinerDescription} onClearDescription={() => { setValue({ dinerDescription: "" })}} onDescriptionChange={(description) => setValue({ dinerDescription: description })} /></li>
          <CustomCheckbox label="Service supermarket" value={value.serviceSupermarket} onChange={handleCheckboxChange('serviceSupermarket')} />
          <CustomCheckbox label="Service supermarket delivery" value={value.serviceSupermarketDelivery} onChange={handleCheckboxChange('serviceSupermarketDelivery')} />
          <CustomCheckbox label="Service lunch" value={value.serviceLunch} onChange={handleCheckboxChange('serviceLunch')} />
          <CustomCheckbox label="Service owner nearby" value={value.serviceOwnerNearby} onChange={handleCheckboxChange('serviceOwnerNearby')} />
          <CustomCheckbox label="Children Yes" value={value.childrenYes} onChange={handleCheckboxChange('childrenYes')} />
          <CustomCheckbox label="Service boat taxi service" value={value.serviceBoatTaxiService} onChange={handleCheckboxChange('serviceBoatTaxiService')} />
          <CustomCheckbox label="Service meal delivery service" value={value.serviceMealDeliveryService} onChange={handleCheckboxChange('serviceMealDeliveryService')} />     
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
          <CustomTextField label="closest beach" type="text" value={value.closestBeach} onChange={e => setValue({ closestBeach: e })}  />
          <CustomTextField label="Distance to shops" type="text" value={value.distanceToShops} onChange={e => setValue({ distanceToShops: e })}  />
          <CustomTextField label="Distance to the Beach" type="text" value={value.distanceToTheBeach} onChange={e => setValue({ distanceToTheBeach: e })}  />
          <CustomTextField label="Distance to airport" type="text" value={value.distanceToAirport} onChange={e => setValue({ distanceToAirport: e })}  />
          <CustomTextField label="Distance to city center" type="text" value={value.distanceToCityCenter} onChange={e => setValue({ distanceToCityCenter: e })}  />
          <CustomTextField label="Distance to kiosk" type="text" value={value.distanceToKiosk} onChange={e => setValue({ distanceToKiosk: e })}  />
          <CustomTextField label="Distance to bar" type="text" value={value.distanceToBar} onChange={e => setValue({ distanceToBar: e })}  />
          <CustomTextField label="Distance to ferry" type="text" value={value.distanceToFerry} onChange={e => setValue({ distanceToFerry: e })}  />
          <CustomTextField label="Distance to golf" type="text" value={value.distanceToGolf} onChange={e => setValue({ distanceToGolf: e })}  />
          <CustomTextField label="Nearest village" type="text" value={value.nearestVillage} onChange={e => setValue({ nearestVillage: e })}  />
          <CustomTextField label="Nearest point of interest" type="text" value={value.nearestPointOfInterest} onChange={e => setValue({ nearestPointOfInterest: e })}  />
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
          <CustomTextField label="Nearest restaurant" type="text" value={value.nearestRestaurant} onChange={e => setValue({ nearestRestaurant: e })}  />
          <CustomTextField label="Nearest supermarket" type="text" value={value.nearestSupermarket} onChange={e => setValue({ nearestSupermarket: e })}  />
          <CustomTextField label="Nearest mini-market" type="text" value={value.nearestMiniMarket} onChange={e => setValue({ nearestMiniMarket: e })}  />
          <CustomTextField label="Nearest atm" type="text" value={value.nearestAtm} onChange={e => setValue({ nearestAtm: e })}  />
          <CustomTextField label="Nearest bank" type="text" value={value.nearestBank} onChange={e => setValue({ nearestBank: e })}  />
          <CustomTextField label="Nearest waterPark" type="text" value={value.nearestWaterPark} onChange={e => setValue({ nearestWaterPark: e })}  />
          <CustomTextField label="Nearest marina" type="text" value={value.nearestMarina} onChange={e => setValue({ nearestMarina: e })}  />
          <CustomTextField label="Nearest dive center" type="text" value={value.nearestDiveCenter} onChange={e => setValue({ nearestDiveCenter: e })}  />
          <CustomTextField label="Nearest hospital" type="text" value={value.nearestHospital} onChange={e => setValue({ nearestHospital: e })}  />
          <CustomTextField label="Nearest police station" type="text" value={value.nearestPoliceStation} onChange={e => setValue({ nearestPoliceStation: e })}  />
          <CustomTextField label="Nearest petrol station" type="text" value={value.nearestPetrolStation} onChange={e => setValue({ nearestPetrolStation: e })}  />
          <CustomTextField label="Nearest bus station" type="text" value={value.nearestBusStation} onChange={e => setValue({ nearestBusStation: e })}  />
          <CustomTextField label="Nearest tennis court" type="text" value={value.nearestTennisCourt} onChange={e => setValue({ nearestTennisCourt: e })}  />
          <CustomTextField label="Nearest pharmacy" type="text" value={value.nearestPharmacy} onChange={e => setValue({ nearestPharmacy: e })}  />
          <CustomTextField label="Nearest hairdressers" type="text" value={value.nearestHairdressers} onChange={e => setValue({ nearestHairdressers: e })}  />
          <CustomTextField label="Nearest medical center" type="text" value={value.nearestMedicalCenter} onChange={e => setValue({ nearestMedicalCenter: e })}  />
          <CustomTextField label="Nearest launderette" type="text" value={value.nearestLaunderette} onChange={e => setValue({ nearestLaunderette: e })}  />
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

          <CustomTextField label="Bay" type="text" value={value.attractionBay} onChange={e => setValue({ attractionBay: e })}  />
          <CustomTextField label="coin laundry" type="text" value={value.attractionAttractionscoinLaundry} onChange={e => setValue({ attractionAttractionscoinLaundry: e })}  />
          <CustomTextField label="Duty free" type="text" value={value.attractionDutyFree} onChange={e => setValue({ attractionDutyFree: e })}  />
          <CustomTextField label="Health beauty spa" type="text" value={value.attractionHealthBeautyspa} onChange={e => setValue({ attractionHealthBeautyspa: e })}  />
          <CustomTextField label="Marina" type="text" value={value.attractionMarina} onChange={e => setValue({ attractionMarina: e })}  />
          <CustomTextField label="Museums" type="text" value={value.attractionMuseums} onChange={e => setValue({ attractionMuseums: e })}  />
          <CustomTextField label="Theme parks" type="text" value={value.attractionThemeParks} onChange={e => setValue({ attractionThemeParks: e })}  />
          <CustomTextField label="Water parks" type="text" value={value.attractionWaterParks} onChange={e => setValue({ attractionWaterParks: e })}  />
          <CustomTextField label="Winery tours" type="text" value={value.attractionWineryTours} onChange={e => setValue({ attractionWineryTours: e })}  />
          <CustomTextField label="Zoo" type="text" value={value.attractionZoo} onChange={e => setValue({ attractionZoo: e })}  />
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
          <CustomTextField label="Antiquing" type="text" value={value.leisureAntiquing} onChange={e => setValue({ leisureAntiquing: e })}  />
          <CustomTextField label="Bird watching" type="text" value={value.leisureBirdWatching} onChange={e => setValue({ leisureBirdWatching: e })}  />
          <CustomTextField label="Eco tourism" type="text" value={value.leisureEcoTourism} onChange={e => setValue({ leisureEcoTourism: e })}  />
          <CustomTextField label="Gambling" type="text" value={value.leisureGambling} onChange={e => setValue({ leisureGambling: e })}  />
          <CustomTextField label="Horseback riding" type="text" value={value.leisureHorsebackRiding} onChange={e => setValue({ leisureHorsebackRiding: e })}  />
          <CustomTextField label="Outlet shopping" type="text" value={value.leisureOutletShopping} onChange={e => setValue({ leisureOutletShopping: e })}  />
          <CustomTextField label="Paddle boating" type="text" value={value.leisurePaddleBoating} onChange={e => setValue({ leisurePaddleBoating: e })}  />
          <CustomTextField label="Sledding" type="text" value={value.leisureSledding} onChange={e => setValue({ leisureSledding: e })}  />
          <CustomTextField label="Boating" type="text" value={value.leisureBoating} onChange={e => setValue({ leisureBoating: e })}  />
          <CustomTextField label="Shopping" type="text" value={value.leisureShopping} onChange={e => setValue({ leisureShopping: e })}  />
          <CustomTextField label="Wild lifeviewing" type="text" value={value.leisureWildLifeViewing} onChange={e => setValue({ leisureWildLifeViewing: e })}  />
          <CustomTextField label="Water sports" type="text" value={value.leisureWaterSports} onChange={e => setValue({ leisureWaterSports: e })}  />
          <CustomTextField label="Fitness center" type="text" value={value.leisureFitnessCenter} onChange={e => setValue({ leisureFitnessCenter: e })}  />
          <CustomTextField label="Hospital" type="text" value={value.leisureHospital} onChange={e => setValue({ leisureHospital: e })}  />
          <CustomTextField label="Laundromat" type="text" value={value.leisureLaundromat} onChange={e => setValue({ leisureLaundromat: e })}  />
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
          <CustomTextField label="Property address" type="text" value={value.propertyAddress} onChange={e => setValue({ propertyAddress: e })}  />
          <CustomTextField label="Post code" type="text" value={value.postCode} onChange={e => setValue({ postCode: e })}  />
          <CustomTextField label="GPS latitude" type="text" value={value.gpsLatitude} onChange={e => setValue({ gpsLatitude: e })}  />
          <CustomTextField label="GPS longitude" type="text" value={value.gpsLongitude} onChange={e => setValue({ gpsLongitude: e })}  />
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


