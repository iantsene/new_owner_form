import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";



type UserFormProps = FormDataTypes & {
updateFields: (fields: Partial<FormDataTypes>) => void

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

    const handleCheckboxChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="Inside">
             <FormGroup>
            <div className="extra-categories">
           
          
              
        <div className="category-styling">
        <h3>View of lodging</h3>
        
        <TextField id="outlined-basic" size="small" variant="outlined" value={fireplaceType} onChange={e => updateFields({fireplaceType: e.target.value})} label="Fireplace type" />
        <TextField id="outlined-basic" size="small" variant="outlined" value={heatingMeans} onChange={e => updateFields({heatingMeans: e.target.value})} label="Heating means" />
        <TextField id="outlined-basic" size="small" variant="outlined" value={tvType} onChange={e => updateFields({tvType: e.target.value})} label="Tv type" />
        <TextField id="outlined-basic" size="small" variant="outlined" value={hydroMassageType} onChange={e => updateFields({hydroMassageType: e.target.value})} label="Hydro-massage" />
        <TextField id="outlined-basic" size="small" variant="outlined" value={internetType} onChange={e => updateFields({internetType: e.target.value})} label="Internet type" />
        
        <FormControlLabel control={<Checkbox size="small" checked={data.heating} onChange={handleCheckboxChange('heating')} />} label="Heating" />
        <FormControlLabel control={<Checkbox size="small" checked={data.miniBar} onChange={handleCheckboxChange('miniBar')} />} label="Mini bar" />
        <FormControlLabel control={<Checkbox size="small" checked={data.acInLounge} onChange={handleCheckboxChange('acInLounge')} />} label="Ac in lounge" />
        <FormControlLabel control={<Checkbox size="small" checked={data.sofa} onChange={handleCheckboxChange('sofa')} />} label="Sofa" />
        <FormControlLabel control={<Checkbox size="small" checked={data.musicSystem} onChange={handleCheckboxChange('musicSystem')} />} label="Music system" />
        <FormControlLabel control={<Checkbox size="small" checked={data.ironNIroningBoard} onChange={handleCheckboxChange('ironNIroningBoard')} />} label="Iron & ironing board" />
        <FormControlLabel control={<Checkbox size="small" checked={data.dvdPlayer} onChange={handleCheckboxChange('dvdPlayer')} />} label="Dvd player" />
        <FormControlLabel control={<Checkbox size="small" checked={data.dishwasher} onChange={handleCheckboxChange('dishwasher')} />} label="Dishwasher" />
        <FormControlLabel control={<Checkbox size="small" checked={data.washingMachine} onChange={handleCheckboxChange('washingMachine')} />} label="Washing machine" />
        <FormControlLabel control={<Checkbox size="small" checked={data.hairdryer} onChange={handleCheckboxChange('hairdryer')} />} label="Hairdryer" />
        <FormControlLabel control={<Checkbox size="small" checked={data.airConditioning} onChange={handleCheckboxChange('airConditioning')} />} label="Air conditioning" />
        <FormControlLabel control={<Checkbox size="small" checked={data.ceilingFans} onChange={handleCheckboxChange('ceilingFans')} />} label="Ceiling fans" />
        <FormControlLabel control={<Checkbox size="small" checked={data.gym} onChange={handleCheckboxChange('gym')} />} label="Gym" />
        <FormControlLabel control={<Checkbox size="small" checked={data.cleaningMaterials} onChange={handleCheckboxChange('cleaningMaterials')} />} label="Cleaning materials" />
        <FormControlLabel control={<Checkbox size="small" checked={data.availableSmallGames} onChange={handleCheckboxChange('availableSmallGames')} />} label="Available small games" />
        <FormControlLabel control={<Checkbox size="small" checked={data.books} onChange={handleCheckboxChange('books')} />} label="Books" />
        <FormControlLabel control={<Checkbox size="small" checked={data.tumbleDryer} onChange={handleCheckboxChange('tumbleDryer')} />} label="Tumble dryer" />
        <FormControlLabel control={<Checkbox size="small" checked={data.electricityKeyFob} onChange={handleCheckboxChange('electricityKeyFob')} />} label="Electricity key fob" />
        <FormControlLabel control={<Checkbox size="small" checked={data.laundryRoom} onChange={handleCheckboxChange('laundryRoom')} />} label="laundry room" />
        <FormControlLabel control={<Checkbox size="small" checked={data.clothesDryerRack} onChange={handleCheckboxChange('clothesDryerRack')} />} label="Clothes dryer rack" />
        <FormControlLabel control={<Checkbox size="small" checked={data.fan} onChange={handleCheckboxChange('fan')} />} label="Fan" />
        <FormControlLabel control={<Checkbox size="small" checked={data.entertainmentvideogames} onChange={handleCheckboxChange('entertainmentvideogames')} />} label="Entertainment videogames" />
        <FormControlLabel control={<Checkbox size="small" checked={data.amenitieswoodStove} onChange={handleCheckboxChange('amenitieswoodStove')} />} label="Amenities wood stove" />
        <FormControlLabel control={<Checkbox size="small" checked={data.amenitiesFitnessRoom} onChange={handleCheckboxChange('amenitiesFitnessRoom')} />} label="Amenities fitness room" />
        <FormControlLabel control={<Checkbox size="small" checked={data.entertainmentSatelliteOrCable} onChange={handleCheckboxChange('entertainmentSatelliteOrCable')} />} label="Entertainment satellite or cable" />
        <FormControlLabel control={<Checkbox size="small" checked={data.entertainmentVideoLibrary} onChange={handleCheckboxChange('entertainmentVideoLibrary')} />} label="Entertainment video library" />
        <FormControlLabel control={<Checkbox size="small" checked={data.amenitiesElevator} onChange={handleCheckboxChange('amenitiesElevator')} />} label="Amenities elevator" />
        <FormControlLabel control={<Checkbox size="small" checked={data.entertainmentToys} onChange={handleCheckboxChange('entertainmentToys')} />} label="Entertainment toys" />
        <FormControlLabel control={<Checkbox size="small" checked={data.amenitiesTelephone} onChange={handleCheckboxChange('amenitiesTelephone')} />} label="Amenities telephone" />
        <FormControlLabel control={<Checkbox size="small" checked={data.amenitiesGameRoom} onChange={handleCheckboxChange('amenitiesGameRoom')} />} label="Amenities game room" />
        <FormControlLabel control={<Checkbox size="small" checked={data.entertainmentMusicLibrary} onChange={handleCheckboxChange('entertainmentMusicLibrary')} />} label="Entertainment music library" />
        <FormControlLabel control={<Checkbox size="small" checked={data.clothesStorage} onChange={handleCheckboxChange('clothesStorage')} />} label="Clothes storage" />
        <FormControlLabel control={<Checkbox size="small" checked={data.privateEntrance} onChange={handleCheckboxChange('privateEntrance')} />} label="Private entrance" />
        <FormControlLabel control={<Checkbox size="small" checked={data.washerDryer} onChange={handleCheckboxChange('washerDryer')} />} label="Washer dryer" />
        <FormControlLabel control={<Checkbox size="small" checked={data.safeBox} onChange={handleCheckboxChange('safeBox')} />} label="Safe box" />
        <FormControlLabel control={<Checkbox size="small" checked={data.insideJacuzzi} onChange={handleCheckboxChange('insideJacuzzi')} />} label="inside jacuzzi" />
        <FormControlLabel control={<Checkbox size="small" checked={data.tableTennis} onChange={handleCheckboxChange('tableTennis')} />} label="Table tennis" />
        <FormControlLabel control={<Checkbox size="small" checked={data.snookerTable} onChange={handleCheckboxChange('snookerTable')} />} label="Snooker table" />
        <FormControlLabel control={<Checkbox size="small" checked={data.hotWaterFromElectric} onChange={handleCheckboxChange('hotWaterFromElectric')} />} label="Hot water from electric" />
        <FormControlLabel control={<Checkbox size="small" checked={data.hotWaterFromSolar} onChange={handleCheckboxChange('hotWaterFromSolar')} />} label="Hot water from solar" />
        <FormControlLabel control={<Checkbox size="small" checked={data.sauna} onChange={handleCheckboxChange('sauna')} />} label="Sauna" />
        <FormControlLabel control={<Checkbox size="small" checked={data.petrolBoiler} onChange={handleCheckboxChange('petrolBoiler')} />} label="Petrol boiler" />
        <FormControlLabel control={<Checkbox size="small" checked={data.workStation} onChange={handleCheckboxChange('workStation')} />} label="Work station" />
        <FormControlLabel control={<Checkbox size="small" checked={data.mosquitoNet} onChange={handleCheckboxChange('mosquitoNet')} />} label="Mosquito net" />
        <FormControlLabel control={<Checkbox size="small" checked={data.outletAdapters} onChange={handleCheckboxChange('outletAdapters')} />} label="Outlet adapters" />
        <FormControlLabel control={<Checkbox size="small" checked={data.networkCode} onChange={handleCheckboxChange('networkCode')} />} label="Network code" />
        <FormControlLabel control={<Checkbox size="small" checked={data.wifiBroadband} onChange={handleCheckboxChange('wifiBroadband')} />} label="Wifi broadband" />
        <FormControlLabel control={<Checkbox size="small" checked={data.freeWifi} onChange={handleCheckboxChange('freeWifi')} />} label="Free wifi" />
        
       

        </div>
        
        

        
        
       
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}

