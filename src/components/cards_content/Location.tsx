import { Checkbox, FormControlLabel, FormGroup, InputBase } from "@mui/material";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";

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
propertyAddress,
postCode,
gpsLatitude,
gpsLongitude,


    updateFields, data, handleFieldChange }: UserFormProps) {

    const handleCheckboxChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

      

    return (
        <FormWrapper title="Location">
          <div className="category-description"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut error! 
        Aperiam ducimus inventore nisi cupiditate facilis consectetur ea officia quaerat, quam neque quo reiciendis nobis iste cum quis perspiciatis.</span></div>
             <FormGroup>
            

             <div className="main-category">
        <h3>Location details</h3>
        <ul className="multi-options-grid">











<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.resort} onChange={handleCheckboxChange('resort')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Resort</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.river} onChange={handleCheckboxChange('river')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">River</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.rural} onChange={handleCheckboxChange('rural')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Rural</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.skiIn} onChange={handleCheckboxChange('skiIn')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Ski in</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.skiOut} onChange={handleCheckboxChange('skiOut')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Ski out</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.town} onChange={handleCheckboxChange('town')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Town</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.village} onChange={handleCheckboxChange('village')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Village</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.waterfront} onChange={handleCheckboxChange('waterfront')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Waterfront</span></div>} /></li>
        </ul>
        </div>
           
        <div className="main-category">
              <h3>Distance to services and points of interest</h3>
                <ul className="duo-options-grid">
          
    
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>closest beach:</span><TextField size="small" label="Closest beach" variant="standard" value={closestBeach} onChange={e => updateFields({closestBeach : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Distance to shops:</span><TextField size="small" label="Distance to shops" variant="standard" value={distanceToShops} onChange={e => updateFields({distanceToShops : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Distance to the Beach:</span><TextField size="small" label="Distance to the Beach" variant="standard" value={distanceToTheBeach} onChange={e => updateFields({distanceToTheBeach : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Distance to airport</span><TextField size="small" label="Distance to airport" variant="standard" value={distanceToAirport} onChange={e => updateFields({distanceToAirport : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Distance to city center:</span><TextField size="small" label="Distance to city center" variant="standard" value={distanceToCityCenter} onChange={e => updateFields({distanceToCityCenter : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Distance to kiosk:</span><TextField size="small" label="Distance to kiosk" variant="standard" value={distanceToKiosk} onChange={e => updateFields({distanceToKiosk : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Distance to bar:</span><TextField size="small" label="Distance to bar" variant="standard" value={distanceToBar} onChange={e => updateFields({distanceToBar : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Distance to ferry:</span><TextField size="small" label="Distance to ferry" variant="standard" value={distanceToFerry} onChange={e => updateFields({distanceToFerry : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Distance to golf:</span><TextField size="small" label="Distance to golf" variant="standard" value={distanceToGolf} onChange={e => updateFields({distanceToGolf : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Nearest village:</span><TextField size="small" label="Nearest village" variant="standard" value={nearestVillage} onChange={e => updateFields({nearestVillage : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Nearest restaurant:</span><TextField size="small" label="Nearest restaurant" variant="standard" value={nearestRestaurant} onChange={e => updateFields({nearestRestaurant : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Nearest supermarket:</span><TextField size="small" label="Nearest supermarket" variant="standard" value={nearestSupermarket} onChange={e => updateFields({nearestSupermarket : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Nearest mini market:</span><TextField size="small" label="Nearest mini market" variant="standard" value={nearestMiniMarket} onChange={e => updateFields({nearestMiniMarket : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Nearest point of interest:</span><TextField size="small" label="Nearest point of interest" variant="standard" value={nearestPointOfInterest} onChange={e => updateFields({nearestPointOfInterest : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Nearest atm:</span><TextField size="small" label="Nearest atm" variant="standard" value={nearestAtm} onChange={e => updateFields({nearestAtm : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Nearest bank:</span><TextField size="small" label="Nearest bank" variant="standard" value={nearestBank} onChange={e => updateFields({nearestBank : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Nearest waterPark:</span><TextField size="small" label="Nearest waterPark" variant="standard" value={nearestWaterPark} onChange={e => updateFields({nearestWaterPark : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Nearest marina:</span><TextField size="small" label="Nearest marina" variant="standard" value={nearestMarina} onChange={e => updateFields({nearestMarina : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Nearest dive center:</span><TextField size="small" label="Nearest dive center" variant="standard" value={nearestDiveCenter} onChange={e => updateFields({nearestDiveCenter : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Nearest hospital:</span><TextField size="small" label="Nearest hospital" variant="standard" value={nearestHospital} onChange={e => updateFields({nearestHospital : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Nearest police:</span><TextField size="small" label="Nearest police station" variant="standard" value={nearestPoliceStation} onChange={e => updateFields({nearestPoliceStation : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Nearest petrol:</span><TextField size="small" label="Nearest petrol station" variant="standard" value={nearestPetrolStation} onChange={e => updateFields({nearestPetrolStation : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Nearest bus station:</span><TextField size="small" label="Nearest bus station" variant="standard" value={nearestBusStation} onChange={e => updateFields({nearestBusStation : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Nearest tennis court:</span><TextField size="small" label="Nearest tennis court" variant="standard" value={nearestTennisCourt} onChange={e => updateFields({nearestTennisCourt : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Nearest pharmacy:</span><TextField size="small" label="Nearest pharmacy" variant="standard" value={nearestPharmacy} onChange={e => updateFields({nearestPharmacy : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Nearest hairdressers:</span><TextField size="small" label="Nearest hairdressers" variant="standard" value={nearestHairdressers} onChange={e => updateFields({nearestHairdressers : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Nearest medical center:</span><TextField size="small" label="Nearest medical center" variant="standard" value={nearestMedicalCenter} onChange={e => updateFields({nearestMedicalCenter : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Nearest launderette:</span><TextField size="small" label="Nearest launderette" variant="standard" value={nearestLaunderette} onChange={e => updateFields({nearestLaunderette : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Property address:</span><TextField size="small" label="Property address" variant="standard" value={propertyAddress} onChange={e => updateFields({propertyAddress : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Post code:</span><TextField size="small" label="Post code" variant="standard" value={postCode} onChange={e => updateFields({postCode : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>GPS latitude:</span><TextField size="small" label="GPS latitude" variant="standard" value={gpsLatitude} onChange={e => updateFields({gpsLatitude : e.target.value})} /></label></li>
                  <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>GPS longitude:</span><TextField size="small" label="GPS longitude" variant="standard" value={gpsLongitude} onChange={e => updateFields({gpsLongitude : e.target.value})} /></label></li>
                </ul>
        </div>

        
        
        

        
        
       
       
      
        </FormGroup>
        </FormWrapper>
        )
}












