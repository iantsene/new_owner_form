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

    updateFields, data, handleFieldChange }: FormData) {

    const handleCheckboxChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="Outside">
             <FormGroup>
            <div className="extra-categories">
            <div className="category-styling">
              <h3>Outside</h3>
        
        
        
        
        <FormControlLabel control={<Checkbox size="small" checked={data.garden} onChange={handleCheckboxChange('garden')} />} label="Garden" />
        <FormControlLabel control={<Checkbox size="small" checked={data.garage} onChange={handleCheckboxChange('garage')} />} label="Garage" />
        <FormControlLabel control={<Checkbox size="small" checked={data.tableTennis} onChange={handleCheckboxChange('tableTennis')} />} label="Table tennis" />
        <FormControlLabel control={<Checkbox size="small" checked={data.tennisCourt} onChange={handleCheckboxChange('tennisCourt')} />} label="Tennis court" />
        <FormControlLabel control={<Checkbox size="small" checked={data.balcony} onChange={handleCheckboxChange('balcony')} />} label="Balcony" />
        <FormControlLabel control={<Checkbox size="small" checked={data.poolTable} onChange={handleCheckboxChange('poolTable')} />} label="Pool table" />
        <FormControlLabel control={<Checkbox size="small" checked={data.diningTerrace} onChange={handleCheckboxChange('diningTerrace')} />} label="Dining terrace" />
        <FormControlLabel control={<Checkbox size="small" checked={data.yard} onChange={handleCheckboxChange('yard')} />} label="Yard" />
        <FormControlLabel control={<Checkbox size="small" checked={data.freeParkingOnTheStreet} onChange={handleCheckboxChange('freeParkingOnTheStreet')} />} label="Free parking on the street" />
        <FormControlLabel control={<Checkbox size="small" checked={data.privateParking} onChange={handleCheckboxChange('privateParking')} />} label="Private parking" />
        <FormControlLabel control={<Checkbox size="small" checked={data.chairsAndTableOutside} onChange={handleCheckboxChange('chairsAndTableOutside')} />} label="Chairs and table outside" />
        <FormControlLabel control={<Checkbox size="small" checked={data.grass} onChange={handleCheckboxChange('grass')} />} label="Grass" />
        <FormControlLabel control={<Checkbox size="small" checked={data.trees} onChange={handleCheckboxChange('trees')} />} label="Trees" />
        <FormControlLabel control={<Checkbox size="small" checked={data.gardener} onChange={handleCheckboxChange('gardener')} />} label="Gardener" />
        <FormControlLabel control={<Checkbox size="small" checked={data.waterFromAPersonalSupply} onChange={handleCheckboxChange('waterFromAPersonalSupply')} />} label="Water from a personal supply" />
        <FormControlLabel control={<Checkbox size="small" checked={data.outdoorJacuzzi} onChange={handleCheckboxChange('outdoorJacuzzi')} />} label="Outdoor jacuzzi" />
        <FormControlLabel control={<Checkbox size="small" checked={data.footballGame} onChange={handleCheckboxChange('footballGame')} />} label="Football game" />
        <FormControlLabel control={<Checkbox size="small" checked={data.roofTerrace} onChange={handleCheckboxChange('roofTerrace')} />} label="Roof terrace" />
        <FormControlLabel control={<Checkbox size="small" checked={data.outsideKitchen} onChange={handleCheckboxChange('outsideKitchen')} />} label="Outside kitchen" />
        <FormControlLabel control={<Checkbox size="small" checked={data.traditionalPizzaOven} onChange={handleCheckboxChange('traditionalPizzaOven')} />} label="Traditional pizza oven" />
        <FormControlLabel control={<Checkbox size="small" checked={data.outsideFridge} onChange={handleCheckboxChange('outsideFridge')} />} label="Outside fridge" />
        <FormControlLabel control={<Checkbox size="small" checked={data.extraWaterTank} onChange={handleCheckboxChange('extraWaterTank')} />} label="Extra water tank" />
        <FormControlLabel control={<Checkbox size="small" checked={data.playground} onChange={handleCheckboxChange('playground')} />} label="Playground" />
        <FormControlLabel control={<Checkbox size="small" checked={data.hammock} onChange={handleCheckboxChange('hammock')} />} label="Hammock" />
        <FormControlLabel control={<Checkbox size="small" checked={data.gardenSwing} onChange={handleCheckboxChange('gardenSwing')} />} label="Garden swing" />
        <FormControlLabel control={<Checkbox size="small" checked={data.washingBasin} onChange={handleCheckboxChange('washingBasin')} />} label="Washing basin" />
        <FormControlLabel control={<Checkbox size="small" checked={data.deck} onChange={handleCheckboxChange('deck')} />} label="Deck" />
        <FormControlLabel control={<Checkbox size="small" checked={data.outdoorDining} onChange={handleCheckboxChange('outdoorDining')} />} label="Outdoor dining" />
        <FormControlLabel control={<Checkbox size="small" checked={data.porch} onChange={handleCheckboxChange('porch')} />} label="Porch" />
        <FormControlLabel control={<Checkbox size="small" checked={data.miniBar} onChange={handleCheckboxChange('miniBar')} />} label="Mini bar" />
        <FormControlLabel control={<Checkbox size="small" checked={data.basketballCourt} onChange={handleCheckboxChange('basketballCourt')} />} label="Basketball court" />
        <FormControlLabel control={<Checkbox size="small" checked={data.drinkingWater} onChange={handleCheckboxChange('drinkingWater')} />} label="Drinking water" />
        <FormControlLabel control={<Checkbox size="small" checked={data.poofPilows} onChange={handleCheckboxChange('poofPilows')} />} label="Poof pilows" />
        </div>
        <div className="category-styling">
        <h3>Barbeque</h3>
        <TextField id="outlined-basic" size="small" label="Parking available" variant="outlined" value={parkingAvailable} onChange={e => updateFields({parkingAvailable: e.target.value})} />
        <TextField id="outlined-basic" size="small" label="Terrace/veranda" variant="outlined" value={terraceOrVeranda} onChange={e => updateFields({terraceOrVeranda: e.target.value})} />
        <TextField id="outlined-basic" size="small" label="Shaded terrace/veranda" variant="outlined" value={shadedTerraceOrveranda} onChange={e => updateFields({shadedTerraceOrveranda: e.target.value})} />
        <TextField id="outlined-basic" size="small" label="Barbeque" variant="outlined" value={barbeque} onChange={e => updateFields({barbeque: e.target.value})} />
        <TextField id="outlined-basic" size="small" label="Umbrella" variant="outlined" value={umbrella} onChange={e => updateFields({umbrella: e.target.value})} />
        <TextField id="outlined-basic" size="small" label="Sunloungers" variant="outlined" value={sunloungers} onChange={e => updateFields({sunloungers: e.target.value})} />
        <TextField id="outlined-basic" size="small" label="Kiosk with dining facilities" variant="outlined" value={kioskWithDiningFacilities} onChange={e => updateFields({kioskWithDiningFacilities: e.target.value})} />
        
        </div>
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}
