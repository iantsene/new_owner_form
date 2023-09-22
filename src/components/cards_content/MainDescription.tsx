import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormData } from "@/app/types/all-form-types";



export default function MainDescription({
villa,
apartment,
maissonette,
room,
studio,
cottage,
bangalow,
house,
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

    updateFields, data, handleFieldChange }: FormData) {

    const handleSelfCheckInChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="Main Description">
             <FormGroup>
            <div className="extra-categories">
           
            <div className="category-styling">
              <h3>Type of lodging</h3>
        <FormControlLabel control={<Checkbox checked={data.villa} onChange={handleSelfCheckInChange('villa')} />} label="Villa" />
        <FormControlLabel control={<Checkbox checked={data.apartment} onChange={handleSelfCheckInChange('apartment')} />}  label="Apartment" />
        <FormControlLabel control={<Checkbox checked={data.maissonette} onChange={handleSelfCheckInChange('maissonette')} />} label="Maissonette" />
        <FormControlLabel control={<Checkbox checked={data.room} onChange={handleSelfCheckInChange('room')} />} label="Room" />
        <FormControlLabel control={<Checkbox checked={data.studio} onChange={handleSelfCheckInChange('studio')} />} label="Studio" />
        <FormControlLabel control={<Checkbox checked={data.cottage} onChange={handleSelfCheckInChange('cottage')} />}  label="Cottage" />
        <FormControlLabel control={<Checkbox checked={data.bangalow} onChange={handleSelfCheckInChange('bangalow')} />} label="Bangalow" />
        <FormControlLabel control={<Checkbox checked={data.house} onChange={handleSelfCheckInChange('house')} />} label="House" />
        <FormControlLabel control={<Checkbox checked={data.awayFromItAll} onChange={handleSelfCheckInChange('awayFromItAll')} />} label="Away from it all" />
        <FormControlLabel control={<Checkbox checked={data.family} onChange={handleSelfCheckInChange('family')} />}  label="Family" />
        <FormControlLabel control={<Checkbox checked={data.romantic} onChange={handleSelfCheckInChange('romantic')} />}  label="Romantic" />
        <FormControlLabel control={<Checkbox checked={data.historical} onChange={handleSelfCheckInChange('historical')} />}  label="Historical" />
        <FormControlLabel control={<Checkbox checked={data.traditionalProperty} onChange={handleSelfCheckInChange('traditionalProperty')} />} label="Traditional property" />
        <FormControlLabel control={<Checkbox checked={data.secluded} onChange={handleSelfCheckInChange('secluded')} />} label="Secluded" />
        <FormControlLabel control={<Checkbox checked={data.brandNew} onChange={handleSelfCheckInChange('brandNew')} />} label="BrandNew" />
        <FormControlLabel control={<Checkbox checked={data.detached} onChange={handleSelfCheckInChange('detached')} />}  label="Detached" />
        <FormControlLabel control={<Checkbox checked={data.semiDetached} onChange={handleSelfCheckInChange('semiDetached')} />}  label="Semi-detached" />
        <FormControlLabel control={<Checkbox checked={data.singleLevelHome} onChange={handleSelfCheckInChange('singleLevelHome')} />} label="Single level home" />
        <FormControlLabel control={<Checkbox checked={data.privateResidence} onChange={handleSelfCheckInChange('privateResidence')} />} label="Bed and breakfast" />
        

        </div>
        <div className="category-styling">
        <h3>Living space and lodging information</h3>
        <TextField id="outlined-basic" label="Area of the house in m2" variant="outlined" value={areaOfTheHouseInM2} onChange={e => updateFields({areaOfTheHouseInM2 : e.target.value})} />
        <TextField id="outlined-basic" label="Surrounding area in m2" variant="outlined" value={surroundingAreaInM2} onChange={e => updateFields({surroundingAreaInM2 : e.target.value})} />
        <TextField id="outlined-basic" label="Number of floors to the ground" variant="outlined" value={numOfFloorsToGround} onChange={e => updateFields({numOfFloorsToGround : e.target.value})} />
        <TextField id="outlined-basic" label="Years of built" variant="outlined" value={yearOfBuilt} onChange={e => updateFields({yearOfBuilt : e.target.value})} />
        <FormControlLabel control={<Checkbox checked={data.kitchenGround} onChange={handleSelfCheckInChange('kitchenGround')} />} label="Kitchen on the ground" />
        <FormControlLabel control={<Checkbox checked={data.dinerGround} onChange={handleSelfCheckInChange('dinerGround')} />} label="Diner on the ground" />
        <FormControlLabel control={<Checkbox checked={data.livingRoomOnePerLevel} onChange={handleSelfCheckInChange('livingRoomOnePerLevel')} />} label="Living room (One per level)" />
        <FormControlLabel control={<Checkbox checked={data.serviceSupermarket} onChange={handleSelfCheckInChange('serviceSupermarket')} />} label="Service supermarket" />
        <FormControlLabel control={<Checkbox checked={data.serviceSupermarketDelivery} onChange={handleSelfCheckInChange('serviceSupermarketDelivery')} />} label="Service Supermarket delivery" />
        <FormControlLabel control={<Checkbox checked={data.serviceBoatTaxiService} onChange={handleSelfCheckInChange('serviceBoatTaxiService')} />} label="Service Boat taxi service" />
        <FormControlLabel control={<Checkbox checked={data.serviceLunch} onChange={handleSelfCheckInChange('serviceLunch')} />} label="Service Lunch" />
        <FormControlLabel control={<Checkbox checked={data.serviceOwnerNearby} onChange={handleSelfCheckInChange('serviceOwnerNearby')} />} label="Service Owner nearby" />
        <FormControlLabel control={<Checkbox checked={data.serviceMealDeliveryService} onChange={handleSelfCheckInChange('serviceMealDeliveryService')} />} label="Service Meal delivery service" />
        <FormControlLabel control={<Checkbox checked={data.childrenYes} onChange={handleSelfCheckInChange('childrenYes')} />} label="Children Yes" />
        <FormControlLabel control={<Checkbox checked={data.garden} onChange={handleSelfCheckInChange('garden')} />} label="Garden" />
        </div>

        
        
       
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}
