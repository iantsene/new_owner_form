import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";

type UserFormProps = FormDataTypes & {
  updateFields: (fields: Partial<FormDataTypes>) => void
  
  }

export default function Outside({
    
    garden,
    garage,
    tableTennis,
    tennisCourt,
    balcony,
    poolTable,
    diningTerrace,
    yard,
    freeParkingOnTheStreet,
    privateParking,
    chairsAndTableOutside,
    grass,
    trees,
    gardener,
    waterFromAPersonalSupply,
    outdoorJacuzzi,
    footballGame,
    roofTerrace,
    outsideKitchen,
    traditionalPizzaOven,
    outsideFridge,
    extraWaterTank,
    playground,
    hammock,
    gardenSwing,
    washingBasin,
    deck,
    outdoorDining,
    porch,
    miniBar,
    basketballCourt,
    drinkingWater,
    poofPilows,
    parkingAvailable,
    terraceOrVeranda,
    shadedTerraceOrveranda,
    barbeque,
    umbrella,
    sunloungers,
    kioskWithDiningFacilities,

    updateFields, data, handleFieldChange }: FormDataTypes) {

    const handleCheckboxChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="Outside">
          <div className="category-description"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut error! 
        Aperiam ducimus inventore nisi cupiditate facilis consectetur ea officia quaerat, quam neque quo reiciendis nobis iste cum quis perspiciatis.</span></div>
             <FormGroup>
            
             <div className="main-category">
             
        
        <h3>Outside main features</h3>
        <ul className="multi-options-grid">
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.garden} onChange={handleCheckboxChange('garden')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Garden</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.garage} onChange={handleCheckboxChange('garage')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Garage</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.tableTennis} onChange={handleCheckboxChange('tableTennis')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Table tennis</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.tennisCourt} onChange={handleCheckboxChange('tennisCourt')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Tennis court</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.balcony} onChange={handleCheckboxChange('balcony')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Balcony</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.poolTable} onChange={handleCheckboxChange('poolTable')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Pool table</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.diningTerrace} onChange={handleCheckboxChange('diningTerrace')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Dining terrace</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.yard} onChange={handleCheckboxChange('yard')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Yard</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.freeParkingOnTheStreet} onChange={handleCheckboxChange('freeParkingOnTheStreet')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Free parking on the street</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.privateParking} onChange={handleCheckboxChange('privateParking')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Private parking</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.chairsAndTableOutside} onChange={handleCheckboxChange('chairsAndTableOutside')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Chairs and table outside</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.grass} onChange={handleCheckboxChange('grass')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Grass</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.trees} onChange={handleCheckboxChange('trees')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Trees</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.gardener} onChange={handleCheckboxChange('gardener')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Gardener</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.waterFromAPersonalSupply} onChange={handleCheckboxChange('waterFromAPersonalSupply')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Water from a personal supply</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.outdoorJacuzzi} onChange={handleCheckboxChange('outdoorJacuzzi')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Outdoor jacuzzi</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.footballGame} onChange={handleCheckboxChange('footballGame')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Football game</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.roofTerrace} onChange={handleCheckboxChange('roofTerrace')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Roof terrace</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.outsideKitchen} onChange={handleCheckboxChange('outsideKitchen')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Outside kitchen</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.traditionalPizzaOven} onChange={handleCheckboxChange('traditionalPizzaOven')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Traditional pizza oven</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.outsideFridge} onChange={handleCheckboxChange('outsideFridge')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Outside fridge</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.extraWaterTank} onChange={handleCheckboxChange('extraWaterTank')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Extra water tank</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.playground} onChange={handleCheckboxChange('playground')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Playground</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.hammock} onChange={handleCheckboxChange('hammock')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Hammock</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.gardenSwing} onChange={handleCheckboxChange('gardenSwing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Garden swing</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.washingBasin} onChange={handleCheckboxChange('washingBasin')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Washing basin</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.deck} onChange={handleCheckboxChange('deck')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Deck</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.outdoorDining} onChange={handleCheckboxChange('outdoorDining')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Outdoor dining</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.porch} onChange={handleCheckboxChange('porch')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Porch</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.miniBar} onChange={handleCheckboxChange('miniBar')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Mini bar</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.basketballCourt} onChange={handleCheckboxChange('basketballCourt')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Basketball court</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.drinkingWater} onChange={handleCheckboxChange('drinkingWater')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Drinking water</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.poofPilows} onChange={handleCheckboxChange('poofPilows')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Poof pilows</span></div>} /></li>
        </ul>
        
        </div>
        <div className="main-category">
        <h3>Outside extras</h3>
        <ul className="duo-options-grid">
        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Parking available:</span><TextField size="small" label="Parking available" variant="standard" value={parkingAvailable} onChange={e => updateFields({parkingAvailable : e.target.value})} /></label></li>
        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Terrace/veranda:</span><TextField size="small" label="Terrace/veranda" variant="standard" value={terraceOrVeranda} onChange={e => updateFields({terraceOrVeranda : e.target.value})} /></label></li>
        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Shaded terrace/veranda:</span><TextField size="small" label="Shaded terrace/veranda" variant="standard" value={shadedTerraceOrveranda} onChange={e => updateFields({shadedTerraceOrveranda : e.target.value})} /></label></li>
        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Barbeque:</span><TextField size="small" label="Barbeque" variant="standard" value={barbeque} onChange={e => updateFields({barbeque : e.target.value})} /></label></li>
        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Umbrella:</span><TextField size="small" label="Umbrella" variant="standard" value={umbrella} onChange={e => updateFields({umbrella : e.target.value})} /></label></li>
        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Sunloungers:</span><TextField size="small" label="Sunloungers" variant="standard" value={sunloungers} onChange={e => updateFields({sunloungers : e.target.value})} /></label></li>
        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Kiosk with dining facilities:</span><TextField size="small" label="Kiosk with dining facilities" variant="standard" value={kioskWithDiningFacilities} onChange={e => updateFields({kioskWithDiningFacilities : e.target.value})} /></label></li>
        </ul>
        
        </div>
       
     
        </FormGroup>
        </FormWrapper>
        )
}
