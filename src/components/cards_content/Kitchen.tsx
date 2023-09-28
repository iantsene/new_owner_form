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
             <FormGroup>
            <div className="extra-categories">
           
          
              
        <div className="category-styling">
       
        
        
        
        
       
        
        <ul className="multi-options-grid">
          <li><FormControlLabel control={<Checkbox size="small" checked={data.microwave} onChange={handleCheckboxChange('microwave')} />} label="Microwave" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.toaster} onChange={handleCheckboxChange('toaster')} />} label="Toaster" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.cookerWithSmallOven} onChange={handleCheckboxChange('cookerWithSmallOven')} />} label="Cooker with small oven" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.smallFridge} onChange={handleCheckboxChange('smallFridge')} />} label="Small fridge" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.dinningArea} onChange={handleCheckboxChange('dinningArea')} />} label="Dinning area" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.dishesAndSilverware} onChange={handleCheckboxChange('dishesAndSilverware')} />} label="Dishes and silverware" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.kitchen} onChange={handleCheckboxChange('kitchen')} />} label="Kitchen" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.dinningRoomOrSpace} onChange={handleCheckboxChange('dinningRoomOrSpace')} />} label="Dinning room or space" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.highChair} onChange={handleCheckboxChange('highChair')} />} label="High chair" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.waterDispenser} onChange={handleCheckboxChange('waterDispenser')} />} label="Water dispenser" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.cookingBasics} onChange={handleCheckboxChange('cookingBasics')} />} label="Cooking basics" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.diningTable} onChange={handleCheckboxChange('diningTable')} />} label="Dining table" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.cookwareAndKitchenUtensils} onChange={handleCheckboxChange('cookwareAndKitchenUtensils')} />} label="Cookware and kitchen utensils" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.separateStove} onChange={handleCheckboxChange('separateStove')} />} label="Separate stove" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.wineGlasses} onChange={handleCheckboxChange('wineGlasses')} />} label="Wine glasses" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.kettle} onChange={handleCheckboxChange('kettle')} />} label="Kettle" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.sandwichToaster} onChange={handleCheckboxChange('sandwichToaster')} />} label="Sandwich toaster" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.espressoCoffeeMachine} onChange={handleCheckboxChange('espressoCoffeeMachine')} />} label="Espresso coffee machine" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.stove} onChange={handleCheckboxChange('stove')} />} label="Stove" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.blenderOrMulti} onChange={handleCheckboxChange('blenderOrMulti')} />} label="Blender / multi" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.filterCoffeeMachine} onChange={handleCheckboxChange('filterCoffeeMachine')} />} label="Filter coffee machine" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.kitchenette} onChange={handleCheckboxChange('kitchenette')} />} label="Kitchenette" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.fryer} onChange={handleCheckboxChange('fryer')} />} label="Fryer" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.mixer} onChange={handleCheckboxChange('mixer')} />} label="Mixer" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.extraSmallBbqOven} onChange={handleCheckboxChange('extraSmallBbqOven')} />} label="Extra small bbq oven" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.breadMaker} onChange={handleCheckboxChange('breadMaker')} />} label="Bread maker" /></li>
        </ul>
        
        <ul >
          <h4>Extra info</h4>
          <li><TextField id="outlined-basic" size="small" variant="standard" value={coffeeTypeAvailable} onChange={e => updateFields({coffeeTypeAvailable: e.target.value})} label="Coffee type available" /></li>
          <li><TextField id="outlined-basic" size="small" variant="standard" value={cookerWithFullOven} onChange={e => updateFields({cookerWithFullOven: e.target.value})} label="Cooker with full oven" /></li>
          <li><TextField id="outlined-basic" size="small" variant="standard" value={fridgeOrFreezer} onChange={e => updateFields({fridgeOrFreezer: e.target.value})} label="Fridge/Freezer" /></li>
        </ul>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
       

        </div>
        
        

        
        
       
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}

