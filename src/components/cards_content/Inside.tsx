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
        <ul className="duo-options-grid">

        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Fireplace type:</span><TextField size="small" label="Fireplace type" variant="standard" value={fireplaceType} onChange={e => updateFields({fireplaceType : e.target.value})} /></label></li>
        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Heating means:</span><TextField size="small" label="Heating means" variant="standard" value={heatingMeans} onChange={e => updateFields({heatingMeans : e.target.value})} /></label></li>
        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Tv type:</span><TextField size="small" label="Tv type" variant="standard" value={tvType} onChange={e => updateFields({tvType : e.target.value})} /></label></li>
        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Hydro-massage:</span><TextField size="small" label="Hydro-massage" variant="standard" value={hydroMassageType} onChange={e => updateFields({hydroMassageType : e.target.value})} /></label></li>
        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Internet type:</span><TextField size="small" label="Internet type" variant="standard" value={internetType} onChange={e => updateFields({internetType : e.target.value})} /></label></li>
        </ul>
        
        
        
        <div className="main-category">
        <h3>Inside extras</h3>
        <ul className="multi-options-grid">
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.heating} onChange={handleCheckboxChange('heating')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Heating</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.miniBar} onChange={handleCheckboxChange('miniBar')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Mini bar</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.acInLounge} onChange={handleCheckboxChange('acInLounge')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Ac in lounge</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.sofa} onChange={handleCheckboxChange('sofa')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Sofa</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.musicSystem} onChange={handleCheckboxChange('musicSystem')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Music system</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.ironNIroningBoard} onChange={handleCheckboxChange('ironNIroningBoard')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Iron & ironing board</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.dvdPlayer} onChange={handleCheckboxChange('dvdPlayer')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Dvd player</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.dishwasher} onChange={handleCheckboxChange('dishwasher')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Dishwasher</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.washingMachine} onChange={handleCheckboxChange('washingMachine')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Washing machine</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.hairdryer} onChange={handleCheckboxChange('hairdryer')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Hairdryer</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.airConditioning} onChange={handleCheckboxChange('airConditioning')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Air conditioning</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.ceilingFans} onChange={handleCheckboxChange('ceilingFans')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Ceiling fans</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.gym} onChange={handleCheckboxChange('gym')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Gym</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.cleaningMaterials} onChange={handleCheckboxChange('cleaningMaterials')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Cleaning materials</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.availableSmallGames} onChange={handleCheckboxChange('availableSmallGames')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Available small games</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.books} onChange={handleCheckboxChange('books')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Books</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.tumbleDryer} onChange={handleCheckboxChange('tumbleDryer')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Tumble dryer</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.electricityKeyFob} onChange={handleCheckboxChange('electricityKeyFob')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Electricity key fob</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.laundryRoom} onChange={handleCheckboxChange('laundryRoom')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">laundry room</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.clothesDryerRack} onChange={handleCheckboxChange('clothesDryerRack')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Clothes dryer rack</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.fan} onChange={handleCheckboxChange('fan')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Fan</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.entertainmentvideogames} onChange={handleCheckboxChange('entertainmentvideogames')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Entertainment videogames</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.amenitieswoodStove} onChange={handleCheckboxChange('amenitieswoodStove')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Amenities wood stove</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.amenitiesFitnessRoom} onChange={handleCheckboxChange('amenitiesFitnessRoom')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Amenities fitness room</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.entertainmentSatelliteOrCable} onChange={handleCheckboxChange('entertainmentSatelliteOrCable')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Entertainment satellite or cable</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.entertainmentVideoLibrary} onChange={handleCheckboxChange('entertainmentVideoLibrary')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Entertainment video library</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.amenitiesElevator} onChange={handleCheckboxChange('amenitiesElevator')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Amenities elevator</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.entertainmentToys} onChange={handleCheckboxChange('entertainmentToys')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Entertainment toys</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.amenitiesTelephone} onChange={handleCheckboxChange('amenitiesTelephone')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Amenities telephone</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.amenitiesGameRoom} onChange={handleCheckboxChange('amenitiesGameRoom')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Amenities game room</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.entertainmentMusicLibrary} onChange={handleCheckboxChange('entertainmentMusicLibrary')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Entertainment music library</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.clothesStorage} onChange={handleCheckboxChange('clothesStorage')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Clothes storage</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.privateEntrance} onChange={handleCheckboxChange('privateEntrance')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Private entrance</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.washerDryer} onChange={handleCheckboxChange('washerDryer')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Washer dryer</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.safeBox} onChange={handleCheckboxChange('safeBox')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Safe box</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.insideJacuzzi} onChange={handleCheckboxChange('insideJacuzzi')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Inside jacuzzi</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.tableTennis} onChange={handleCheckboxChange('tableTennis')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Table tennis</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.snookerTable} onChange={handleCheckboxChange('snookerTable')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Snooker table</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.hotWaterFromElectric} onChange={handleCheckboxChange('hotWaterFromElectric')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Hot water from electric</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.hotWaterFromSolar} onChange={handleCheckboxChange('hotWaterFromSolar')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Hot water from solar</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.sauna} onChange={handleCheckboxChange('sauna')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Sauna</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.petrolBoiler} onChange={handleCheckboxChange('petrolBoiler')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Petrol boiler</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.workStation} onChange={handleCheckboxChange('workStation')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Work station</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.mosquitoNet} onChange={handleCheckboxChange('mosquitoNet')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Mosquito net</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.outletAdapters} onChange={handleCheckboxChange('outletAdapters')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Outlet adapters</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.networkCode} onChange={handleCheckboxChange('networkCode')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Network code</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.wifiBroadband} onChange={handleCheckboxChange('wifiBroadband')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Wifi broadband</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.freeWifi} onChange={handleCheckboxChange('freeWifi')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Free wifi</span></div>} /></li>
        </ul>
        </div>
        

        </div>
        
        
        

        
        
       
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}

