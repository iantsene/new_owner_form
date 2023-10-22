import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";



type UserFormProps = FormDataTypes & {
updateFields: (fields: Partial<FormDataTypes>) => void

}

export default function Kitchen({
    coffeeTypeAvailable,
    cookerWithFullOven,
    fridgeOrFreezer,
    microwave,
    toaster,
    cookerWithSmallOven,
    smallFridge,
    dinningArea,
    dishesAndSilverware,
    kitchen,
    dinningRoomOrSpace,
    highChair,
    waterDispenser,
    cookingBasics,
    diningTable,
    cookwareAndKitchenUtensils,
    separateStove,
    wineGlasses,
    kettle,
    sandwichToaster,
    espressoCoffeeMachine,
    stove,
    blenderOrMulti,
    filterCoffeeMachine,
    kitchenette,
    fryer,
    mixer,
    extraSmallBbqOven,
    breadMaker,
    

    updateFields, data, handleFieldChange }: UserFormProps) {

    const handleCheckboxChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="Kitchen">
          <div className="category-description"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut error! 
        Aperiam ducimus inventore nisi cupiditate facilis consectetur ea officia quaerat, quam neque quo reiciendis nobis iste cum quis perspiciatis.</span></div>
             <FormGroup>
            
           
          
              
            <div className="main-category">   
            <h3>Kitchen amenities</h3>    
        <ul className="multi-options-grid">
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.microwave} onChange={handleCheckboxChange('microwave')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Microwave</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.toaster} onChange={handleCheckboxChange('toaster')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Toaster</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.cookerWithSmallOven} onChange={handleCheckboxChange('cookerWithSmallOven')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Cooker with small oven</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.smallFridge} onChange={handleCheckboxChange('smallFridge')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Small fridge</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.dinningArea} onChange={handleCheckboxChange('dinningArea')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Dinning area</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.dishesAndSilverware} onChange={handleCheckboxChange('dishesAndSilverware')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Dishes and silverware</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.kitchen} onChange={handleCheckboxChange('kitchen')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Kitchen</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.dinningRoomOrSpace} onChange={handleCheckboxChange('dinningRoomOrSpace')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Dinning room or space</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.highChair} onChange={handleCheckboxChange('highChair')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">High chair</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.waterDispenser} onChange={handleCheckboxChange('waterDispenser')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Water dispenser</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.cookingBasics} onChange={handleCheckboxChange('cookingBasics')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Cooking basics</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.diningTable} onChange={handleCheckboxChange('diningTable')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Dining table</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.cookwareAndKitchenUtensils} onChange={handleCheckboxChange('cookwareAndKitchenUtensils')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Cookware and kitchen utensils</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.separateStove} onChange={handleCheckboxChange('separateStove')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Separate stove</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.wineGlasses} onChange={handleCheckboxChange('wineGlasses')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Wine glasses</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.kettle} onChange={handleCheckboxChange('kettle')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Kettle</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.sandwichToaster} onChange={handleCheckboxChange('sandwichToaster')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Sandwich toaster</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.espressoCoffeeMachine} onChange={handleCheckboxChange('espressoCoffeeMachine')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Espresso coffee machine</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.stove} onChange={handleCheckboxChange('stove')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Stove</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.blenderOrMulti} onChange={handleCheckboxChange('blenderOrMulti')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Blender / multi</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.filterCoffeeMachine} onChange={handleCheckboxChange('filterCoffeeMachine')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Filter coffee machine</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.kitchenette} onChange={handleCheckboxChange('kitchenette')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Kitchenette</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.fryer} onChange={handleCheckboxChange('fryer')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Fryer</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.mixer} onChange={handleCheckboxChange('mixer')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Mixer</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.extraSmallBbqOven} onChange={handleCheckboxChange('extraSmallBbqOven')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Extra small bbq oven</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.breadMaker} onChange={handleCheckboxChange('breadMaker')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Bread maker</span></div>} /></li>

        </ul>
        </div>
        <div className="main-category">
        <ul >
          <h3>Extra info</h3>

          <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Coffee type available:</span><TextField size="small" label="Coffee type available" variant="standard" value={coffeeTypeAvailable} onChange={e => updateFields({coffeeTypeAvailable : e.target.value})} /></label></li>
          <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Cooker with full oven:</span><TextField size="small" label="Cooker with full oven" variant="standard" value={cookerWithFullOven} onChange={e => updateFields({cookerWithFullOven : e.target.value})} /></label></li>
          <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Fridge/Freezer:</span><TextField size="small" label="Fridge/Freezer" variant="standard" value={fridgeOrFreezer} onChange={e => updateFields({fridgeOrFreezer : e.target.value})} /></label></li>
        </ul>
        
        </div>
    
        
        </FormGroup>
        </FormWrapper>
        )
}

