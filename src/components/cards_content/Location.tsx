import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, InputBase } from "@mui/material";
import TextField from '@mui/material/TextField';
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

type UserFormProps = FormDataTypes & {
  updateFields: (fields: Partial<FormDataTypes>) => void
  
  }

export default function Location({

onTheBeach,
walkToTheBeach,
taverna,
countryside,
beachFront,
highway,
skiIn,
train,
resort,
river,
rural,
skiOut,
town,
village,
waterfront,
closestBeach,
distanceToShops, 
distanceToTheBeach,
distanceToAirport,
distanceToCityCenter,
distanceToKiosk,
distanceToBar,
distanceToFerry,
distanceToGolf,
nearestVillage,
nearestRestaurant,
nearestSupermarket,
nearestMiniMarket,
nearestPointOfInterest,
nearestAtm,
nearestBank,
nearestWaterPark,
nearestMarina,
nearestDiveCenter,
nearestHospital,
nearestPoliceStation,
nearestPetrolStation,
nearestBusStation,
nearestTennisCourt,
nearestPharmacy,
nearestHairdressers,
nearestMedicalCenter,
nearestLaunderette,
attractionBay,
attractionAttractionscoinLaundry,
attractionDutyFree,
attractionHealthBeautyspa,
attractionMarina,
attractionMuseums,
attractionThemeParks,
attractionWaterParks,
attractionWineryTours,
attractionZoo,
leisureAntiquing,
leisureBirdWatching,
leisureEcoTourism,
leisureGambling,
leisureHorsebackRiding,
leisureOutletShopping,
leisurePaddleBoating,
leisureSledding,
leisureBoating,
leisureShopping,
leisureWildLifeViewing,
leisureWaterSports,
leisureFitnessCenter,
leisureHospital,
leisureLaundromat,
propertyAddress,
postCode,
gpsLatitude,
gpsLongitude,


    updateFields, data, handleFieldChange }: UserFormProps) {

    const handleCheckboxChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

      

      

      const mainCategories = [
        {
          title: 'Location property theme',
          description: 'Does a nearby feature or POI define your property in an interesting way?',
          content: (<>
           <div className="property-theme-category main-category">
      
        <ul className="multi-options-grid">
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={resort} onChange={handleCheckboxChange('resort')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Resort</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={river} onChange={handleCheckboxChange('river')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">River</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={rural} onChange={handleCheckboxChange('rural')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Rural</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={skiIn} onChange={handleCheckboxChange('skiIn')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Ski in</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={skiOut} onChange={handleCheckboxChange('skiOut')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Ski out</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={town} onChange={handleCheckboxChange('town')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Town</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={village} onChange={handleCheckboxChange('village')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Village</span></div>} /></li>
<li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={waterfront} onChange={handleCheckboxChange('waterfront')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Waterfront</span></div>} /></li>
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
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>closest beach:</span><CustomTextField label="closest beach" type="text" value={closestBeach} onChange={e => updateFields({closestBeach : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Distance to shops:</span><CustomTextField label="Distance to shops" type="text" value={distanceToShops} onChange={e => updateFields({distanceToShops : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Distance to the Beach:</span><CustomTextField label="Distance to the Beach" type="text" value={distanceToTheBeach} onChange={e => updateFields({distanceToTheBeach : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Distance to airport:</span><CustomTextField label="Distance to airport" type="text" value={distanceToAirport} onChange={e => updateFields({distanceToAirport : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Distance to city center:</span><CustomTextField label="Distance to city center" type="text" value={distanceToCityCenter} onChange={e => updateFields({distanceToCityCenter : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Distance to kiosk:</span><CustomTextField label="Distance to kiosk" type="text" value={distanceToKiosk} onChange={e => updateFields({distanceToKiosk : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Distance to bar:</span><CustomTextField label="Distance to bar" type="text" value={distanceToBar} onChange={e => updateFields({distanceToBar : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Distance to ferry:</span><CustomTextField label="Distance to ferry" type="text" value={distanceToFerry} onChange={e => updateFields({distanceToFerry : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Distance to golf:</span><CustomTextField label="Distance to golf" type="text" value={distanceToGolf} onChange={e => updateFields({distanceToGolf : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest village:</span><CustomTextField label="Nearest village" type="text" value={nearestVillage} onChange={e => updateFields({nearestVillage : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest point of interest:</span><CustomTextField label="Nearest point of interest" type="text" value={nearestPointOfInterest} onChange={e => updateFields({nearestPointOfInterest : e})}  ></CustomTextField></div></li>
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
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest restaurant:</span><CustomTextField label="Nearest restaurant" type="text" value={nearestRestaurant} onChange={e => updateFields({nearestRestaurant : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest supermarket:</span><CustomTextField label="Nearest supermarket" type="text" value={nearestSupermarket} onChange={e => updateFields({nearestSupermarket : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest mini-market:</span><CustomTextField label="Nearest mini-market" type="text" value={nearestMiniMarket} onChange={e => updateFields({nearestMiniMarket : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest atm:</span><CustomTextField label="Nearest atm" type="text" value={nearestAtm} onChange={e => updateFields({nearestAtm : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest bank:</span><CustomTextField label="Nearest bank" type="text" value={nearestBank} onChange={e => updateFields({nearestBank : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest waterPark:</span><CustomTextField label="Nearest waterPark" type="text" value={nearestWaterPark} onChange={e => updateFields({nearestWaterPark : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest marina:</span><CustomTextField label="Nearest marina" type="text" value={nearestMarina} onChange={e => updateFields({nearestMarina : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest dive center:</span><CustomTextField label="Nearest dive center" type="text" value={nearestDiveCenter} onChange={e => updateFields({nearestDiveCenter : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest hospital:</span><CustomTextField label="Nearest hospital" type="text" value={nearestHospital} onChange={e => updateFields({nearestHospital : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest police station:</span><CustomTextField label="Nearest police station" type="text" value={nearestPoliceStation} onChange={e => updateFields({nearestPoliceStation : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest petrol station:</span><CustomTextField label="Nearest petrol station" type="text" value={nearestPetrolStation} onChange={e => updateFields({nearestPetrolStation : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest bus station:</span><CustomTextField label="Nearest bus station" type="text" value={nearestBusStation} onChange={e => updateFields({nearestBusStation : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest tennis court:</span><CustomTextField label="Nearest tennis court" type="text" value={nearestTennisCourt} onChange={e => updateFields({nearestTennisCourt : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest pharmacy:</span><CustomTextField label="Nearest pharmacy" type="text" value={nearestPharmacy} onChange={e => updateFields({nearestPharmacy : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest hairdressers:</span><CustomTextField label="Nearest hairdressers" type="text" value={nearestHairdressers} onChange={e => updateFields({nearestHairdressers : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest medical center:</span><CustomTextField label="Nearest medical center" type="text" value={nearestMedicalCenter} onChange={e => updateFields({nearestMedicalCenter : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Nearest launderette:</span><CustomTextField label="Nearest launderette" type="text" value={nearestLaunderette} onChange={e => updateFields({nearestLaunderette : e})}  ></CustomTextField></div></li>
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
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Attraction Bay:</span><CustomTextField label="Attraction Bay" type="text" value={attractionBay} onChange={e => updateFields({attractionBay : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Attraction coin laundry:</span><CustomTextField label="Attraction coin laundry" type="text" value={attractionAttractionscoinLaundry} onChange={e => updateFields({attractionAttractionscoinLaundry : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Attraction Duty free:</span><CustomTextField label="Attraction Duty free" type="text" value={attractionDutyFree} onChange={e => updateFields({attractionDutyFree : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Attraction Health beauty spa:</span><CustomTextField label="Health beauty spa" type="text" value={attractionHealthBeautyspa} onChange={e => updateFields({attractionHealthBeautyspa : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Attraction Marina:</span><CustomTextField label="Attraction Marina" type="text" value={attractionMarina} onChange={e => updateFields({attractionMarina : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Attraction Museums:</span><CustomTextField label="Attraction Museums" type="text" value={attractionMuseums} onChange={e => updateFields({attractionMuseums : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Attraction Theme parks:</span><CustomTextField label="Attraction Theme parks" type="text" value={attractionThemeParks} onChange={e => updateFields({attractionThemeParks : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Attraction Water parks:</span><CustomTextField label="Attraction Water parks" type="text" value={attractionWaterParks} onChange={e => updateFields({attractionWaterParks : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Attraction Winery tours:</span><CustomTextField label="Attraction Winery tours" type="text" value={attractionWineryTours} onChange={e => updateFields({attractionWineryTours : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Attraction Zoo:</span><CustomTextField label="Attraction Zoo" type="text" value={attractionZoo} onChange={e => updateFields({attractionZoo : e})}  ></CustomTextField></div></li>
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
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Antiquing:</span><CustomTextField label="Leisure Antiquing" type="text" value={leisureAntiquing} onChange={e => updateFields({leisureAntiquing : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Bird watching:</span><CustomTextField label="Leisure Bird watching" type="text" value={leisureBirdWatching} onChange={e => updateFields({leisureBirdWatching : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Eco tourism:</span><CustomTextField label="Leisure Eco tourism" type="text" value={leisureEcoTourism} onChange={e => updateFields({leisureEcoTourism : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Gambling:</span><CustomTextField label="Leisure Gambling" type="text" value={leisureGambling} onChange={e => updateFields({leisureGambling : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Horseback riding:</span><CustomTextField label="Leisure Horseback riding" type="text" value={leisureHorsebackRiding} onChange={e => updateFields({leisureHorsebackRiding : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Outlet shopping:</span><CustomTextField label="Leisure Outlet shopping" type="text" value={leisureOutletShopping} onChange={e => updateFields({leisureOutletShopping : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Paddle boating:</span><CustomTextField label="Leisure Paddle boating" type="text" value={leisurePaddleBoating} onChange={e => updateFields({leisurePaddleBoating : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Sledding:</span><CustomTextField label="Leisure Sledding" type="text" value={leisureSledding} onChange={e => updateFields({leisureSledding : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Boating:</span><CustomTextField label="Leisure Boating" type="text" value={leisureBoating} onChange={e => updateFields({leisureBoating : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Shopping:</span><CustomTextField label="Leisure Shopping" type="text" value={leisureShopping} onChange={e => updateFields({leisureShopping : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Wild lifeviewing:</span><CustomTextField label="Leisure Wild lifeviewing" type="text" value={leisureWildLifeViewing} onChange={e => updateFields({leisureWildLifeViewing : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Water sports:</span><CustomTextField label="Leisure Water sports" type="text" value={leisureWaterSports} onChange={e => updateFields({leisureWaterSports : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Fitness center:</span><CustomTextField label="Leisure Fitness center" type="text" value={leisureFitnessCenter} onChange={e => updateFields({leisureFitnessCenter : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Hospital:</span><CustomTextField label="Leisure Hospital" type="text" value={leisureHospital} onChange={e => updateFields({leisureHospital : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Leisure Laundromat:</span><CustomTextField label="Leisure Laundromat" type="text" value={leisureLaundromat} onChange={e => updateFields({leisureLaundromat : e})}  ></CustomTextField></div></li>
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
     <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Property address:</span><CustomTextField label="Property address" type="text" value={propertyAddress} onChange={e => updateFields({propertyAddress : e})}  ></CustomTextField></div></li>
     <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Post code:</span><CustomTextField label="Post code" type="text" value={postCode} onChange={e => updateFields({postCode : e})}  ></CustomTextField></div></li>
     <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>GPS latitude:</span><CustomTextField label="GPS latitude" type="text" value={gpsLatitude} onChange={e => updateFields({gpsLatitude : e})}  ></CustomTextField></div></li>
     <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>GPS longitude:</span><CustomTextField label="GPS longitude" type="text" value={gpsLongitude} onChange={e => updateFields({gpsLongitude : e})}  ></CustomTextField></div></li>
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
    

