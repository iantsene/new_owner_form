import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormData } from "@/app/types/all-form-types";

type UserFormProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void
  
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

    const handleSelfCheckInChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="Outside">
             <FormGroup>
            <div className="extra-categories">
            <div className="category-styling">
              <h3>Outside</h3>
        
        
        
        
        <FormControlLabel control={<Checkbox checked={data.garden} onChange={handleSelfCheckInChange('garden')} />} label="Garden" />
        <FormControlLabel control={<Checkbox checked={data.garage} onChange={handleSelfCheckInChange('garage')} />} label="Garage" />
        <FormControlLabel control={<Checkbox checked={data.tableTennis} onChange={handleSelfCheckInChange('tableTennis')} />} label="Table tennis" />
        <FormControlLabel control={<Checkbox checked={data.tennisCourt} onChange={handleSelfCheckInChange('tennisCourt')} />} label="Tennis court" />
        <FormControlLabel control={<Checkbox checked={data.balcony} onChange={handleSelfCheckInChange('balcony')} />} label="Balcony" />
        <FormControlLabel control={<Checkbox checked={data.poolTable} onChange={handleSelfCheckInChange('poolTable')} />} label="Pool table" />
        <FormControlLabel control={<Checkbox checked={data.diningTerrace} onChange={handleSelfCheckInChange('diningTerrace')} />} label="Dining terrace" />
        <FormControlLabel control={<Checkbox checked={data.yard} onChange={handleSelfCheckInChange('yard')} />} label="Yard" />
        <FormControlLabel control={<Checkbox checked={data.freeParkingOnTheStreet} onChange={handleSelfCheckInChange('freeParkingOnTheStreet')} />} label="Free parking on the street" />
        <FormControlLabel control={<Checkbox checked={data.privateParking} onChange={handleSelfCheckInChange('privateParking')} />} label="Private parking" />
        <FormControlLabel control={<Checkbox checked={data.chairsAndTableOutside} onChange={handleSelfCheckInChange('chairsAndTableOutside')} />} label="Chairs and table outside" />
        <FormControlLabel control={<Checkbox checked={data.grass} onChange={handleSelfCheckInChange('grass')} />} label="Grass" />
        <FormControlLabel control={<Checkbox checked={data.trees} onChange={handleSelfCheckInChange('trees')} />} label="Trees" />
        <FormControlLabel control={<Checkbox checked={data.gardener} onChange={handleSelfCheckInChange('gardener')} />} label="Gardener" />
        <FormControlLabel control={<Checkbox checked={data.waterFromAPersonalSupply} onChange={handleSelfCheckInChange('waterFromAPersonalSupply')} />} label="Water from a personal supply" />
        <FormControlLabel control={<Checkbox checked={data.outdoorJacuzzi} onChange={handleSelfCheckInChange('outdoorJacuzzi')} />} label="Outdoor jacuzzi" />
        <FormControlLabel control={<Checkbox checked={data.footballGame} onChange={handleSelfCheckInChange('footballGame')} />} label="Football game" />
        <FormControlLabel control={<Checkbox checked={data.roofTerrace} onChange={handleSelfCheckInChange('roofTerrace')} />} label="Roof terrace" />
        <FormControlLabel control={<Checkbox checked={data.outsideKitchen} onChange={handleSelfCheckInChange('outsideKitchen')} />} label="Outside kitchen" />
        <FormControlLabel control={<Checkbox checked={data.traditionalPizzaOven} onChange={handleSelfCheckInChange('traditionalPizzaOven')} />} label="Traditional pizza oven" />
        <FormControlLabel control={<Checkbox checked={data.outsideFridge} onChange={handleSelfCheckInChange('outsideFridge')} />} label="Outside fridge" />
        <FormControlLabel control={<Checkbox checked={data.extraWaterTank} onChange={handleSelfCheckInChange('extraWaterTank')} />} label="Extra water tank" />
        <FormControlLabel control={<Checkbox checked={data.playground} onChange={handleSelfCheckInChange('playground')} />} label="Playground" />
        <FormControlLabel control={<Checkbox checked={data.hammock} onChange={handleSelfCheckInChange('hammock')} />} label="Hammock" />
        <FormControlLabel control={<Checkbox checked={data.gardenSwing} onChange={handleSelfCheckInChange('gardenSwing')} />} label="Garden swing" />
        <FormControlLabel control={<Checkbox checked={data.washingBasin} onChange={handleSelfCheckInChange('washingBasin')} />} label="Washing basin" />
        <FormControlLabel control={<Checkbox checked={data.deck} onChange={handleSelfCheckInChange('deck')} />} label="Deck" />
        <FormControlLabel control={<Checkbox checked={data.outdoorDining} onChange={handleSelfCheckInChange('outdoorDining')} />} label="Outdoor dining" />
        <FormControlLabel control={<Checkbox checked={data.porch} onChange={handleSelfCheckInChange('porch')} />} label="Porch" />
        <FormControlLabel control={<Checkbox checked={data.miniBar} onChange={handleSelfCheckInChange('miniBar')} />} label="Mini bar" />
        <FormControlLabel control={<Checkbox checked={data.basketballCourt} onChange={handleSelfCheckInChange('basketballCourt')} />} label="Basketball court" />
        <FormControlLabel control={<Checkbox checked={data.drinkingWater} onChange={handleSelfCheckInChange('drinkingWater')} />} label="Drinking water" />
        <FormControlLabel control={<Checkbox checked={data.poofPilows} onChange={handleSelfCheckInChange('poofPilows')} />} label="Poof pilows" />
        </div>
        <h3>Barbeque</h3>
        <div className="category-styling">
        <TextField id="outlined-basic" label="" variant="outlined" value={parkingAvailable} onChange={e => updateFields({parkingAvailable: e.target.value})} />
        <TextField id="outlined-basic" label="" variant="outlined" value={terraceOrVeranda} onChange={e => updateFields({terraceOrVeranda: e.target.value})} />
        <TextField id="outlined-basic" label="" variant="outlined" value={shadedTerraceOrveranda} onChange={e => updateFields({shadedTerraceOrveranda: e.target.value})} />
        <TextField id="outlined-basic" label="" variant="outlined" value={barbeque} onChange={e => updateFields({barbeque: e.target.value})} />
        <TextField id="outlined-basic" label="" variant="outlined" value={umbrella} onChange={e => updateFields({umbrella: e.target.value})} />
        <TextField id="outlined-basic" label="" variant="outlined" value={sunloungers} onChange={e => updateFields({sunloungers: e.target.value})} />
        <TextField id="outlined-basic" label="" variant="outlined" value={kioskWithDiningFacilities} onChange={e => updateFields({kioskWithDiningFacilities: e.target.value})} />
        
        </div>
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}
