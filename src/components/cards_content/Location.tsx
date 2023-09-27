import { Checkbox, FormControlLabel, FormGroup, InputBase } from "@mui/material";
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
             <FormGroup>
            <div className="extra-categories">
           
            <div className="category-styling">
              <h3>Distance to services and POIs</h3>

              <TextField id="outlined-basic" size="small" label="Closest beach" variant="outlined" value={closestBeach} onChange={e => updateFields({closestBeach : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="DistanceToShops" variant="outlined" value={distanceToShops} onChange={e => updateFields({distanceToShops : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Distance to the Beach" variant="outlined" value={distanceToTheBeach} onChange={e => updateFields({distanceToTheBeach : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Distance to airport" variant="outlined" value={distanceToAirport} onChange={e => updateFields({distanceToAirport : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Distance to city center" variant="outlined" value={distanceToCityCenter} onChange={e => updateFields({distanceToCityCenter : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Distance to kiosk" variant="outlined" value={distanceToKiosk} onChange={e => updateFields({distanceToKiosk : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Distance to bar" variant="outlined" value={distanceToBar} onChange={e => updateFields({distanceToBar : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Distance to ferry" variant="outlined" value={distanceToFerry} onChange={e => updateFields({distanceToFerry : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Distance to golf" variant="outlined" value={distanceToGolf} onChange={e => updateFields({distanceToGolf : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Nearest village" variant="outlined" value={nearestVillage} onChange={e => updateFields({nearestVillage : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Nearest restaurant" variant="outlined" value={nearestRestaurant} onChange={e => updateFields({nearestRestaurant : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Nearest supermarket" variant="outlined" value={nearestSupermarket} onChange={e => updateFields({nearestSupermarket : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Nearest mini market" variant="outlined" value={nearestMiniMarket} onChange={e => updateFields({nearestMiniMarket : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Nearest point of interest" variant="outlined" value={nearestPointOfInterest} onChange={e => updateFields({nearestPointOfInterest : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Nearest atm" variant="outlined" value={nearestAtm} onChange={e => updateFields({nearestAtm : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Nearest bank" variant="outlined" value={nearestBank} onChange={e => updateFields({nearestBank : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Nearest waterPark" variant="outlined" value={nearestWaterPark} onChange={e => updateFields({nearestWaterPark : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Nearest marina" variant="outlined" value={nearestMarina} onChange={e => updateFields({nearestMarina : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Nearest dive center" variant="outlined" value={nearestDiveCenter} onChange={e => updateFields({nearestDiveCenter : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Nearest hospital" variant="outlined" value={nearestHospital} onChange={e => updateFields({nearestHospital : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Nearest police station" variant="outlined" value={nearestPoliceStation} onChange={e => updateFields({nearestPoliceStation : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Nearest petrol station" variant="outlined" value={nearestPetrolStation} onChange={e => updateFields({nearestPetrolStation : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Nearest bus station" variant="outlined" value={nearestBusStation} onChange={e => updateFields({nearestBusStation : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Nearest tennis court" variant="outlined" value={nearestTennisCourt} onChange={e => updateFields({nearestTennisCourt : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Nearest pharmacy" variant="outlined" value={nearestPharmacy} onChange={e => updateFields({nearestPharmacy : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Nearest hairdressers" variant="outlined" value={nearestHairdressers} onChange={e => updateFields({nearestHairdressers : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Nearest medical center" variant="outlined" value={nearestMedicalCenter} onChange={e => updateFields({nearestMedicalCenter : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Nearest launderette" variant="outlined" value={nearestLaunderette} onChange={e => updateFields({nearestLaunderette : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Property address" variant="outlined" value={propertyAddress} onChange={e => updateFields({propertyAddress : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="Post code" variant="outlined" value={postCode} onChange={e => updateFields({postCode : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="GPS latitude" variant="outlined" value={gpsLatitude} onChange={e => updateFields({gpsLatitude : e.target.value})} />
              <TextField id="outlined-basic" size="small" label="GPS longitude" variant="outlined" value={gpsLongitude} onChange={e => updateFields({gpsLongitude : e.target.value})} />
        </div>

        <div className="category-styling">
        <h3>Location details</h3>
        <FormControlLabel control={<Checkbox size="small" checked={data.resort} onChange={handleCheckboxChange('resort')} />} label="Resort" />
        <FormControlLabel control={<Checkbox size="small" checked={data.river} onChange={handleCheckboxChange('river')} />} label="River" />
        <FormControlLabel control={<Checkbox size="small" checked={data.rural} onChange={handleCheckboxChange('rural')} />} label="Rural" />
        <FormControlLabel control={<Checkbox size="small" checked={data.skiIn} onChange={handleCheckboxChange('skiIn')} />} label="Ski in" />
        <FormControlLabel control={<Checkbox size="small" checked={data.skiOut} onChange={handleCheckboxChange('skiOut')} />} label="Ski out" />
        <FormControlLabel control={<Checkbox size="small" checked={data.town} onChange={handleCheckboxChange('town')} />} label="Town" />
        <FormControlLabel control={<Checkbox size="small" checked={data.village} onChange={handleCheckboxChange('village')} />} label="Village" />
        <FormControlLabel control={<Checkbox size="small" checked={data.waterfront} onChange={handleCheckboxChange('waterfront')} />} label="Waterfront" />

      
       

        </div>
        
        

        
        
       
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}












