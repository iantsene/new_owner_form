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
          <div className="category-description"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut error! 
        Aperiam ducimus inventore nisi cupiditate facilis consectetur ea officia quaerat, quam neque quo reiciendis nobis iste cum quis perspiciatis.</span></div>
             <FormGroup>
            <div className="extra-categories">
           
          
              
            <div className="main-category">
        
       
            <h3>Inside options</h3>
        <ul className="multi-options-grid">
          <li><img src="/Icons/icon-placeholder.png" /><TextField id="outlined-basic" size="small" variant="standard" value={fireplaceType} onChange={e => updateFields({fireplaceType: e.target.value})} label="Fireplace type" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><TextField id="outlined-basic" size="small" variant="standard" value={heatingMeans} onChange={e => updateFields({heatingMeans: e.target.value})} label="Heating means" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><TextField size="small" variant="standard" value={tvType} onChange={e => updateFields({tvType: e.target.value})} label="Tv type" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><TextField id="outlined-basic" size="small" variant="standard" value={hydroMassageType} onChange={e => updateFields({hydroMassageType: e.target.value})} label="Hydro-massage" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><TextField id="outlined-basic" size="small" variant="standard" value={internetType} onChange={e => updateFields({internetType: e.target.value})} label="Internet type" /></li>
        </ul>
        
        
        
        <div className="main-category">
        <h3>Inside extras</h3>
        <ul className="multi-options-grid">
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.heating} onChange={handleCheckboxChange('heating')} />} label="Heating" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.miniBar} onChange={handleCheckboxChange('miniBar')} />} label="Mini bar" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.acInLounge} onChange={handleCheckboxChange('acInLounge')} />} label="Ac in lounge" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.sofa} onChange={handleCheckboxChange('sofa')} />} label="Sofa" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.musicSystem} onChange={handleCheckboxChange('musicSystem')} />} label="Music system" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.ironNIroningBoard} onChange={handleCheckboxChange('ironNIroningBoard')} />} label="Iron & ironing board" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.dvdPlayer} onChange={handleCheckboxChange('dvdPlayer')} />} label="Dvd player" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.dishwasher} onChange={handleCheckboxChange('dishwasher')} />} label="Dishwasher" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.washingMachine} onChange={handleCheckboxChange('washingMachine')} />} label="Washing machine" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.hairdryer} onChange={handleCheckboxChange('hairdryer')} />} label="Hairdryer" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.airConditioning} onChange={handleCheckboxChange('airConditioning')} />} label="Air conditioning" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.ceilingFans} onChange={handleCheckboxChange('ceilingFans')} />} label="Ceiling fans" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.gym} onChange={handleCheckboxChange('gym')} />} label="Gym" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.cleaningMaterials} onChange={handleCheckboxChange('cleaningMaterials')} />} label="Cleaning materials" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.availableSmallGames} onChange={handleCheckboxChange('availableSmallGames')} />} label="Available small games" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.books} onChange={handleCheckboxChange('books')} />} label="Books" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.tumbleDryer} onChange={handleCheckboxChange('tumbleDryer')} />} label="Tumble dryer" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.electricityKeyFob} onChange={handleCheckboxChange('electricityKeyFob')} />} label="Electricity key fob" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.laundryRoom} onChange={handleCheckboxChange('laundryRoom')} />} label="laundry room" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.clothesDryerRack} onChange={handleCheckboxChange('clothesDryerRack')} />} label="Clothes dryer rack" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.fan} onChange={handleCheckboxChange('fan')} />} label="Fan" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.entertainmentvideogames} onChange={handleCheckboxChange('entertainmentvideogames')} />} label="Entertainment videogames" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.amenitieswoodStove} onChange={handleCheckboxChange('amenitieswoodStove')} />} label="Amenities wood stove" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.amenitiesFitnessRoom} onChange={handleCheckboxChange('amenitiesFitnessRoom')} />} label="Amenities fitness room" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.entertainmentSatelliteOrCable} onChange={handleCheckboxChange('entertainmentSatelliteOrCable')} />} label="Entertainment satellite or cable" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.entertainmentVideoLibrary} onChange={handleCheckboxChange('entertainmentVideoLibrary')} />} label="Entertainment video library" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.amenitiesElevator} onChange={handleCheckboxChange('amenitiesElevator')} />} label="Amenities elevator" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.entertainmentToys} onChange={handleCheckboxChange('entertainmentToys')} />} label="Entertainment toys" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.amenitiesTelephone} onChange={handleCheckboxChange('amenitiesTelephone')} />} label="Amenities telephone" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.amenitiesGameRoom} onChange={handleCheckboxChange('amenitiesGameRoom')} />} label="Amenities game room" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.entertainmentMusicLibrary} onChange={handleCheckboxChange('entertainmentMusicLibrary')} />} label="Entertainment music library" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.clothesStorage} onChange={handleCheckboxChange('clothesStorage')} />} label="Clothes storage" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.privateEntrance} onChange={handleCheckboxChange('privateEntrance')} />} label="Private entrance" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.washerDryer} onChange={handleCheckboxChange('washerDryer')} />} label="Washer dryer" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.safeBox} onChange={handleCheckboxChange('safeBox')} />} label="Safe box" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.insideJacuzzi} onChange={handleCheckboxChange('insideJacuzzi')} />} label="Inside jacuzzi" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.tableTennis} onChange={handleCheckboxChange('tableTennis')} />} label="Table tennis" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.snookerTable} onChange={handleCheckboxChange('snookerTable')} />} label="Snooker table" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.hotWaterFromElectric} onChange={handleCheckboxChange('hotWaterFromElectric')} />} label="Hot water from electric" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.hotWaterFromSolar} onChange={handleCheckboxChange('hotWaterFromSolar')} />} label="Hot water from solar" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.sauna} onChange={handleCheckboxChange('sauna')} />} label="Sauna" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.petrolBoiler} onChange={handleCheckboxChange('petrolBoiler')} />} label="Petrol boiler" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.workStation} onChange={handleCheckboxChange('workStation')} />} label="Work station" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.mosquitoNet} onChange={handleCheckboxChange('mosquitoNet')} />} label="Mosquito net" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.outletAdapters} onChange={handleCheckboxChange('outletAdapters')} />} label="Outlet adapters" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.networkCode} onChange={handleCheckboxChange('networkCode')} />} label="Network code" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.wifiBroadband} onChange={handleCheckboxChange('wifiBroadband')} />} label="Wifi broadband" /></li>
          <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.freeWifi} onChange={handleCheckboxChange('freeWifi')} />} label="Free wifi" /></li>

        </ul>
        </div>
        

        </div>
        
        
        

        
        
       
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}

