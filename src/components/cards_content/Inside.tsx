import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormData } from "@/app/types/all-form-types";



type UserFormProps = FormData & {
updateFields: (fields: Partial<FormData>) => void

}

export default function Inside({
    fireplaceType,
    heatingMeans,
    tvType,
    hydroMassageType,
    internetType,
    heating,
    miniBar,
    acInLounge,
    sofa,
    musicSystem,
    ironNIroningBoard,
    dvdPlayer,
    dishwasher,
    washingMachine,
    hairdryer,
    airConditioning,
    ceilingFans,
    gym,
    cleaningMaterials,
    availableSmallGames,
    books,
    tumbleDryer,
    electricityKeyFob,
    laundryRoom,
    clothesDryerRack,
    fan,
    entertainmentvideogames,
    amenitieswoodStove,
    amenitiesFitnessRoom,
    entertainmentSatelliteOrCable,
    entertainmentVideoLibrary,
    amenitiesElevator,
    entertainmentToys,
    amenitiesTelephone,
    amenitiesGameRoom,
    entertainmentMusicLibrary,
    clothesStorage,
    privateEntrance,
    washerDryer,
    safeBox,
    insideJacuzzi,
    tableTennis,
    snookerTable,
    hotWaterFromElectric,
    hotWaterFromSolar,
    sauna,
    petrolBoiler,
    workStation,
    mosquitoNet,
    outletAdapters,
    networkCode,
    wifiBroadband,
    freeWifi,
    

    updateFields, data, handleFieldChange }: UserFormProps) {

    const handleSelfCheckInChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="Inside">
             <FormGroup>
            <div className="extra-categories">
           
          
              
        <div className="category-styling">
        <h3>View of lodging</h3>
        
        <TextField id="outlined-basic"  variant="outlined" value={fireplaceType} onChange={e => updateFields({fireplaceType: e.target.value})} label="Fireplace type" />
        <TextField id="outlined-basic"  variant="outlined" value={heatingMeans} onChange={e => updateFields({heatingMeans: e.target.value})} label="Heating means" />
        <TextField id="outlined-basic"  variant="outlined" value={tvType} onChange={e => updateFields({tvType: e.target.value})} label="Tv type" />
        <TextField id="outlined-basic"  variant="outlined" value={hydroMassageType} onChange={e => updateFields({hydroMassageType: e.target.value})} label="Hydro-massage" />
        <TextField id="outlined-basic"  variant="outlined" value={internetType} onChange={e => updateFields({internetType: e.target.value})} label="Internet type" />
        
        <FormControlLabel control={<Checkbox checked={data.heating} onChange={handleSelfCheckInChange('heating')} />} label="Heating" />
        <FormControlLabel control={<Checkbox checked={data.miniBar} onChange={handleSelfCheckInChange('miniBar')} />} label="Mini bar" />
        <FormControlLabel control={<Checkbox checked={data.acInLounge} onChange={handleSelfCheckInChange('acInLounge')} />} label="Ac in lounge" />
        <FormControlLabel control={<Checkbox checked={data.sofa} onChange={handleSelfCheckInChange('sofa')} />} label="Sofa" />
        <FormControlLabel control={<Checkbox checked={data.musicSystem} onChange={handleSelfCheckInChange('musicSystem')} />} label="Music system" />
        <FormControlLabel control={<Checkbox checked={data.ironNIroningBoard} onChange={handleSelfCheckInChange('ironNIroningBoard')} />} label="Iron & ironing board" />
        <FormControlLabel control={<Checkbox checked={data.dvdPlayer} onChange={handleSelfCheckInChange('dvdPlayer')} />} label="Dvd player" />
        <FormControlLabel control={<Checkbox checked={data.dishwasher} onChange={handleSelfCheckInChange('dishwasher')} />} label="Dishwasher" />
        <FormControlLabel control={<Checkbox checked={data.washingMachine} onChange={handleSelfCheckInChange('washingMachine')} />} label="Washing machine" />
        <FormControlLabel control={<Checkbox checked={data.hairdryer} onChange={handleSelfCheckInChange('hairdryer')} />} label="Hairdryer" />
        <FormControlLabel control={<Checkbox checked={data.airConditioning} onChange={handleSelfCheckInChange('airConditioning')} />} label="Air conditioning" />
        <FormControlLabel control={<Checkbox checked={data.ceilingFans} onChange={handleSelfCheckInChange('ceilingFans')} />} label="Ceiling fans" />
        <FormControlLabel control={<Checkbox checked={data.gym} onChange={handleSelfCheckInChange('gym')} />} label="Gym" />
        <FormControlLabel control={<Checkbox checked={data.cleaningMaterials} onChange={handleSelfCheckInChange('cleaningMaterials')} />} label="Cleaning materials" />
        <FormControlLabel control={<Checkbox checked={data.availableSmallGames} onChange={handleSelfCheckInChange('availableSmallGames')} />} label="Available small games" />
        <FormControlLabel control={<Checkbox checked={data.books} onChange={handleSelfCheckInChange('books')} />} label="Books" />
        <FormControlLabel control={<Checkbox checked={data.tumbleDryer} onChange={handleSelfCheckInChange('tumbleDryer')} />} label="Tumble dryer" />
        <FormControlLabel control={<Checkbox checked={data.electricityKeyFob} onChange={handleSelfCheckInChange('electricityKeyFob')} />} label="Electricity key fob" />
        <FormControlLabel control={<Checkbox checked={data.laundryRoom} onChange={handleSelfCheckInChange('laundryRoom')} />} label="laundry room" />
        <FormControlLabel control={<Checkbox checked={data.clothesDryerRack} onChange={handleSelfCheckInChange('clothesDryerRack')} />} label="Clothes dryer rack" />
        <FormControlLabel control={<Checkbox checked={data.fan} onChange={handleSelfCheckInChange('fan')} />} label="Fan" />
        <FormControlLabel control={<Checkbox checked={data.entertainmentvideogames} onChange={handleSelfCheckInChange('entertainmentvideogames')} />} label="Entertainment videogames" />
        <FormControlLabel control={<Checkbox checked={data.amenitieswoodStove} onChange={handleSelfCheckInChange('amenitieswoodStove')} />} label="Amenities wood stove" />
        <FormControlLabel control={<Checkbox checked={data.amenitiesFitnessRoom} onChange={handleSelfCheckInChange('amenitiesFitnessRoom')} />} label="Amenities fitness room" />
        <FormControlLabel control={<Checkbox checked={data.entertainmentSatelliteOrCable} onChange={handleSelfCheckInChange('entertainmentSatelliteOrCable')} />} label="Entertainment satellite or cable" />
        <FormControlLabel control={<Checkbox checked={data.entertainmentVideoLibrary} onChange={handleSelfCheckInChange('entertainmentVideoLibrary')} />} label="Entertainment video library" />
        <FormControlLabel control={<Checkbox checked={data.amenitiesElevator} onChange={handleSelfCheckInChange('amenitiesElevator')} />} label="Amenities elevator" />
        <FormControlLabel control={<Checkbox checked={data.entertainmentToys} onChange={handleSelfCheckInChange('entertainmentToys')} />} label="Entertainment toys" />
        <FormControlLabel control={<Checkbox checked={data.amenitiesTelephone} onChange={handleSelfCheckInChange('amenitiesTelephone')} />} label="Amenities telephone" />
        <FormControlLabel control={<Checkbox checked={data.amenitiesGameRoom} onChange={handleSelfCheckInChange('amenitiesGameRoom')} />} label="Amenities game room" />
        <FormControlLabel control={<Checkbox checked={data.entertainmentMusicLibrary} onChange={handleSelfCheckInChange('entertainmentMusicLibrary')} />} label="Entertainment music library" />
        <FormControlLabel control={<Checkbox checked={data.clothesStorage} onChange={handleSelfCheckInChange('clothesStorage')} />} label="Clothes storage" />
        <FormControlLabel control={<Checkbox checked={data.privateEntrance} onChange={handleSelfCheckInChange('privateEntrance')} />} label="Private entrance" />
        <FormControlLabel control={<Checkbox checked={data.washerDryer} onChange={handleSelfCheckInChange('washerDryer')} />} label="Washer dryer" />
        <FormControlLabel control={<Checkbox checked={data.safeBox} onChange={handleSelfCheckInChange('safeBox')} />} label="Safe box" />
        <FormControlLabel control={<Checkbox checked={data.insideJacuzzi} onChange={handleSelfCheckInChange('insideJacuzzi')} />} label="inside jacuzzi" />
        <FormControlLabel control={<Checkbox checked={data.tableTennis} onChange={handleSelfCheckInChange('tableTennis')} />} label="Table tennis" />
        <FormControlLabel control={<Checkbox checked={data.snookerTable} onChange={handleSelfCheckInChange('snookerTable')} />} label="Snooker table" />
        <FormControlLabel control={<Checkbox checked={data.hotWaterFromElectric} onChange={handleSelfCheckInChange('hotWaterFromElectric')} />} label="Hot water from electric" />
        <FormControlLabel control={<Checkbox checked={data.hotWaterFromSolar} onChange={handleSelfCheckInChange('hotWaterFromSolar')} />} label="Hot water from solar" />
        <FormControlLabel control={<Checkbox checked={data.sauna} onChange={handleSelfCheckInChange('sauna')} />} label="Sauna" />
        <FormControlLabel control={<Checkbox checked={data.petrolBoiler} onChange={handleSelfCheckInChange('petrolBoiler')} />} label="Petrol boiler" />
        <FormControlLabel control={<Checkbox checked={data.workStation} onChange={handleSelfCheckInChange('workStation')} />} label="Work station" />
        <FormControlLabel control={<Checkbox checked={data.mosquitoNet} onChange={handleSelfCheckInChange('mosquitoNet')} />} label="Mosquito net" />
        <FormControlLabel control={<Checkbox checked={data.outletAdapters} onChange={handleSelfCheckInChange('outletAdapters')} />} label="Outlet adapters" />
        <FormControlLabel control={<Checkbox checked={data.networkCode} onChange={handleSelfCheckInChange('networkCode')} />} label="Network code" />
        <FormControlLabel control={<Checkbox checked={data.wifiBroadband} onChange={handleSelfCheckInChange('wifiBroadband')} />} label="Wifi broadband" />
        <FormControlLabel control={<Checkbox checked={data.freeWifi} onChange={handleSelfCheckInChange('freeWifi')} />} label="Free wifi" />
        
       

        </div>
        
        

        
        
       
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}

