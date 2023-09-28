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
        
       
        
        <ul className="multi-options-grid">
          <li><TextField id="outlined-basic" size="small" variant="standard" value={fireplaceType} onChange={e => updateFields({fireplaceType: e.target.value})} label="Fireplace type" /></li>
          <li><TextField id="outlined-basic" size="small" variant="standard" value={heatingMeans} onChange={e => updateFields({heatingMeans: e.target.value})} label="Heating means" /></li>
          <li><TextField size="small" variant="standard" value={tvType} onChange={e => updateFields({tvType: e.target.value})} label="Tv type" /></li>
          <li><TextField id="outlined-basic" size="small" variant="standard" value={hydroMassageType} onChange={e => updateFields({hydroMassageType: e.target.value})} label="Hydro-massage" /></li>
          <li><TextField id="outlined-basic" size="small" variant="standard" value={internetType} onChange={e => updateFields({internetType: e.target.value})} label="Internet type" /></li>
        </ul>
        
        
        
        
        <ul className="multi-options-grid">
          <li><FormControlLabel control={<Checkbox size="small" checked={data.heating} onChange={handleCheckboxChange('heating')} />} label="Heating" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.miniBar} onChange={handleCheckboxChange('miniBar')} />} label="Mini bar" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.acInLounge} onChange={handleCheckboxChange('acInLounge')} />} label="Ac in lounge" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.sofa} onChange={handleCheckboxChange('sofa')} />} label="Sofa" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.musicSystem} onChange={handleCheckboxChange('musicSystem')} />} label="Music system" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.ironNIroningBoard} onChange={handleCheckboxChange('ironNIroningBoard')} />} label="Iron & ironing board" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.dvdPlayer} onChange={handleCheckboxChange('dvdPlayer')} />} label="Dvd player" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.dishwasher} onChange={handleCheckboxChange('dishwasher')} />} label="Dishwasher" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.washingMachine} onChange={handleCheckboxChange('washingMachine')} />} label="Washing machine" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.hairdryer} onChange={handleCheckboxChange('hairdryer')} />} label="Hairdryer" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.airConditioning} onChange={handleCheckboxChange('airConditioning')} />} label="Air conditioning" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.ceilingFans} onChange={handleCheckboxChange('ceilingFans')} />} label="Ceiling fans" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.gym} onChange={handleCheckboxChange('gym')} />} label="Gym" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.cleaningMaterials} onChange={handleCheckboxChange('cleaningMaterials')} />} label="Cleaning materials" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.availableSmallGames} onChange={handleCheckboxChange('availableSmallGames')} />} label="Available small games" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.books} onChange={handleCheckboxChange('books')} />} label="Books" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.tumbleDryer} onChange={handleCheckboxChange('tumbleDryer')} />} label="Tumble dryer" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.electricityKeyFob} onChange={handleCheckboxChange('electricityKeyFob')} />} label="Electricity key fob" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.laundryRoom} onChange={handleCheckboxChange('laundryRoom')} />} label="laundry room" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.clothesDryerRack} onChange={handleCheckboxChange('clothesDryerRack')} />} label="Clothes dryer rack" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.fan} onChange={handleCheckboxChange('fan')} />} label="Fan" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.entertainmentvideogames} onChange={handleCheckboxChange('entertainmentvideogames')} />} label="Entertainment videogames" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.amenitieswoodStove} onChange={handleCheckboxChange('amenitieswoodStove')} />} label="Amenities wood stove" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.amenitiesFitnessRoom} onChange={handleCheckboxChange('amenitiesFitnessRoom')} />} label="Amenities fitness room" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.entertainmentSatelliteOrCable} onChange={handleCheckboxChange('entertainmentSatelliteOrCable')} />} label="Entertainment satellite or cable" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.entertainmentVideoLibrary} onChange={handleCheckboxChange('entertainmentVideoLibrary')} />} label="Entertainment video library" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.amenitiesElevator} onChange={handleCheckboxChange('amenitiesElevator')} />} label="Amenities elevator" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.entertainmentToys} onChange={handleCheckboxChange('entertainmentToys')} />} label="Entertainment toys" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.amenitiesTelephone} onChange={handleCheckboxChange('amenitiesTelephone')} />} label="Amenities telephone" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.amenitiesGameRoom} onChange={handleCheckboxChange('amenitiesGameRoom')} />} label="Amenities game room" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.entertainmentMusicLibrary} onChange={handleCheckboxChange('entertainmentMusicLibrary')} />} label="Entertainment music library" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.clothesStorage} onChange={handleCheckboxChange('clothesStorage')} />} label="Clothes storage" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.privateEntrance} onChange={handleCheckboxChange('privateEntrance')} />} label="Private entrance" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.washerDryer} onChange={handleCheckboxChange('washerDryer')} />} label="Washer dryer" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.safeBox} onChange={handleCheckboxChange('safeBox')} />} label="Safe box" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.insideJacuzzi} onChange={handleCheckboxChange('insideJacuzzi')} />} label="inside jacuzzi" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.tableTennis} onChange={handleCheckboxChange('tableTennis')} />} label="Table tennis" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.snookerTable} onChange={handleCheckboxChange('snookerTable')} />} label="Snooker table" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.hotWaterFromElectric} onChange={handleCheckboxChange('hotWaterFromElectric')} />} label="Hot water from electric" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.hotWaterFromSolar} onChange={handleCheckboxChange('hotWaterFromSolar')} />} label="Hot water from solar" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.sauna} onChange={handleCheckboxChange('sauna')} />} label="Sauna" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.petrolBoiler} onChange={handleCheckboxChange('petrolBoiler')} />} label="Petrol boiler" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.workStation} onChange={handleCheckboxChange('workStation')} />} label="Work station" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.mosquitoNet} onChange={handleCheckboxChange('mosquitoNet')} />} label="Mosquito net" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.outletAdapters} onChange={handleCheckboxChange('outletAdapters')} />} label="Outlet adapters" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.networkCode} onChange={handleCheckboxChange('networkCode')} />} label="Network code" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.wifiBroadband} onChange={handleCheckboxChange('wifiBroadband')} />} label="Wifi broadband" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.freeWifi} onChange={handleCheckboxChange('freeWifi')} />} label="Free wifi" /></li>

        </ul>
        
        

        </div>
        
        
        

        
        
       
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}

