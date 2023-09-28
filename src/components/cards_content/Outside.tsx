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
             <FormGroup>
            
            <div className="category-styling">
             
        
        <ul className="multi-options-grid">
          <li><FormControlLabel control={<Checkbox size="small" checked={data.garden} onChange={handleCheckboxChange('garden')} />} label="Garden" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.garage} onChange={handleCheckboxChange('garage')} />} label="Garage" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.tableTennis} onChange={handleCheckboxChange('tableTennis')} />} label="Table tennis" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.tennisCourt} onChange={handleCheckboxChange('tennisCourt')} />} label="Tennis court" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.balcony} onChange={handleCheckboxChange('balcony')} />} label="Balcony" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.poolTable} onChange={handleCheckboxChange('poolTable')} />} label="Pool table" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.diningTerrace} onChange={handleCheckboxChange('diningTerrace')} />} label="Dining terrace" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.yard} onChange={handleCheckboxChange('yard')} />} label="Yard" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.freeParkingOnTheStreet} onChange={handleCheckboxChange('freeParkingOnTheStreet')} />} label="Free parking on the street" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.privateParking} onChange={handleCheckboxChange('privateParking')} />} label="Private parking" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.chairsAndTableOutside} onChange={handleCheckboxChange('chairsAndTableOutside')} />} label="Chairs and table outside" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.grass} onChange={handleCheckboxChange('grass')} />} label="Grass" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.trees} onChange={handleCheckboxChange('trees')} />} label="Trees" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.gardener} onChange={handleCheckboxChange('gardener')} />} label="Gardener" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.waterFromAPersonalSupply} onChange={handleCheckboxChange('waterFromAPersonalSupply')} />} label="Water from a personal supply" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.outdoorJacuzzi} onChange={handleCheckboxChange('outdoorJacuzzi')} />} label="Outdoor jacuzzi" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.footballGame} onChange={handleCheckboxChange('footballGame')} />} label="Football game" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.roofTerrace} onChange={handleCheckboxChange('roofTerrace')} />} label="Roof terrace" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.outsideKitchen} onChange={handleCheckboxChange('outsideKitchen')} />} label="Outside kitchen" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.traditionalPizzaOven} onChange={handleCheckboxChange('traditionalPizzaOven')} />} label="Traditional pizza oven" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.outsideFridge} onChange={handleCheckboxChange('outsideFridge')} />} label="Outside fridge" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.extraWaterTank} onChange={handleCheckboxChange('extraWaterTank')} />} label="Extra water tank" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.playground} onChange={handleCheckboxChange('playground')} />} label="Playground" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.hammock} onChange={handleCheckboxChange('hammock')} />} label="Hammock" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.gardenSwing} onChange={handleCheckboxChange('gardenSwing')} />} label="Garden swing" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.washingBasin} onChange={handleCheckboxChange('washingBasin')} />} label="Washing basin" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.deck} onChange={handleCheckboxChange('deck')} />} label="Deck" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.outdoorDining} onChange={handleCheckboxChange('outdoorDining')} />} label="Outdoor dining" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.porch} onChange={handleCheckboxChange('porch')} />} label="Porch" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.miniBar} onChange={handleCheckboxChange('miniBar')} />} label="Mini bar" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.basketballCourt} onChange={handleCheckboxChange('basketballCourt')} />} label="Basketball court" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.drinkingWater} onChange={handleCheckboxChange('drinkingWater')} />} label="Drinking water" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.poofPilows} onChange={handleCheckboxChange('poofPilows')} />} label="Poof pilows" /></li>
        </ul>
        
        </div>
        <div className="category-styling">
        <h3>Ouside extras</h3>
        <ul className="multi-options-grid">
          <li><TextField id="outlined-basic" size="small" label="Parking available" variant="standard" value={parkingAvailable} onChange={e => updateFields({parkingAvailable: e.target.value})} /></li>
          <li><TextField id="outlined-basic" size="small" label="Terrace/veranda" variant="standard" value={terraceOrVeranda} onChange={e => updateFields({terraceOrVeranda: e.target.value})} /></li>
          <li><TextField id="outlined-basic" size="small" label="Shaded terrace/veranda" variant="standard" value={shadedTerraceOrveranda} onChange={e => updateFields({shadedTerraceOrveranda: e.target.value})} /></li>
          <li><TextField id="outlined-basic" size="small" label="Barbeque" variant="standard" value={barbeque} onChange={e => updateFields({barbeque: e.target.value})} /></li>
          <li><TextField id="outlined-basic" size="small" label="Umbrella" variant="standard" value={umbrella} onChange={e => updateFields({umbrella: e.target.value})} /></li>
          <li><TextField id="outlined-basic" size="small" label="Sunloungers" variant="standard" value={sunloungers} onChange={e => updateFields({sunloungers: e.target.value})} /></li>
          <li><TextField id="outlined-basic" size="small" label="Kiosk with dining facilities" variant="standard" value={kioskWithDiningFacilities} onChange={e => updateFields({kioskWithDiningFacilities: e.target.value})} /></li>
        </ul>
        
        
        
        
        
        
        
        </div>
       
     
        </FormGroup>
        </FormWrapper>
        )
}
