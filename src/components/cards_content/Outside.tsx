// import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
// import FormWrapper from "../form_components/FormWrapper";


// type UserData = {
//     levelGround: boolean
//     terrace: boolean
//     outsideFurniture: boolean
//     depthMarks: boolean
//     safetySign: boolean
//     swimmingRing: boolean
//     staircase: boolean
//     jacuzziJets: boolean
//     poolMaintenace: boolean
//     accessToPool: boolean
//     fence: boolean
//     poolTowels: boolean
//     poolShower: boolean
//     poolLasso: boolean
//     solarPanels: boolean
//     inflatables: boolean
//     minWidth: string
//     maxWidth: string
//     minDepth: string
//     maxdepth: string
// }

// type UserFormProps = UserData & {
// updateFields: (fields: Partial<UserData>) => void

// }

// export default function Outside({
    
//     garden
//     barbeque
//     parking available
//     terraceOrveranda
//     shadedTerraceOrveranda
//     garage
//     tableTennis
//     tennisCourt
//     balcony
//     poolTable
//     diningTerrace
//     yard
//     freeParkingOnTheStreet
//     sunloungers
    
//     privateParking
//     chairsAndTableOutside
//     grass
//     trees
//     gardener
//     waterFromAPersonalSupply
//     outdoorJacuzzi
//     footballGame
//     roofTerrace
    
//     outsideKitchen
//     traditionalPizzaOven
//     outsideFridge
//     extraWaterTank
//     playground
//     hammock
//     gardenSwing
//     washingBasin
//     deck
//     outdoorDining
//     porch
//     miniBar
//     basketballCourt
//     drinkingWater
//     poofPilows

//     umbrella
//     kioskWithDiningFacilities

//     updateFields, data, handleFieldChange }: UserFormProps) {

//     const handleSelfCheckInChange = (fieldName: string) => (e) => {
//         handleFieldChange(fieldName, e.target.checked);
//       };

//     return (
//         <FormWrapper title="Outside">
//              <FormGroup>
//             <div className="extra-categories">
//             <div className="category-styling">
//               <h3>Outside</h3>
        
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Garden" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Barbeque" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Parking available" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Terrace / veranda" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Shaded terrace / veranda" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Garage" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Table tennis" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Tennis court" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Balcony" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Pool table" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Dining terrace" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Yard" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Free parking on thestreet" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Sunloungers" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Umbrella" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Private parking" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Chairs and table outside" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Grass" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Trees" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Gardener" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Water from a personalsupply" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Outdoor jacuzzi" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Football game" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Roof terrace" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Kiosk With dining facilities" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Outside kitchen" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Traditional pizza oven" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Outside fridge" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Extra water tank" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Playground" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Hammock" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Garden swing" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Washing basin" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Deck" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Outdoor dining" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Porch" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Mini bar" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Basketball court" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Outside" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Drinking water" />
//         <FormControlLabel control={<Checkbox checked={data.} onChange={handleSelfCheckInChange('')} />} label="Poof pilows" />
//         </div>
//         <h3>Barbeque</h3>
//         <div className="category-styling">

            
//         </div>
       
//         </div>
//         </FormGroup>
//         </FormWrapper>
//         )
// }
