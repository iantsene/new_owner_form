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
        <h3>Kitchen</h3>
        
        <TextField id="outlined-basic" size="small" variant="outlined" value={coffeeTypeAvailable} onChange={e => updateFields({coffeeTypeAvailable: e.target.value})} label="Coffee type available" />
        <TextField id="outlined-basic" size="small" variant="outlined" value={cookerWithFullOven} onChange={e => updateFields({cookerWithFullOven: e.target.value})} label="Cooker with full oven" />
        <TextField id="outlined-basic" size="small" variant="outlined" value={fridgeOrFreezer} onChange={e => updateFields({fridgeOrFreezer: e.target.value})} label="Fridge/Freezer" />
        
       
        
        <FormControlLabel control={<Checkbox size="small" checked={data.microwave} onChange={handleCheckboxChange('microwave')} />} label="Microwave" />
        <FormControlLabel control={<Checkbox size="small" checked={data.toaster} onChange={handleCheckboxChange('toaster')} />} label="Toaster" />
        <FormControlLabel control={<Checkbox size="small" checked={data.cookerWithSmallOven} onChange={handleCheckboxChange('cookerWithSmallOven')} />} label="Cooker with small oven" />
        <FormControlLabel control={<Checkbox size="small" checked={data.smallFridge} onChange={handleCheckboxChange('smallFridge')} />} label="Small fridge" />
        <FormControlLabel control={<Checkbox size="small" checked={data.dinningArea} onChange={handleCheckboxChange('dinningArea')} />} label="Dinning area" />
        <FormControlLabel control={<Checkbox size="small" checked={data.dishesAndSilverware} onChange={handleCheckboxChange('dishesAndSilverware')} />} label="Dishes and silverware" />
        <FormControlLabel control={<Checkbox size="small" checked={data.kitchen} onChange={handleCheckboxChange('kitchen')} />} label="Kitchen" />
        <FormControlLabel control={<Checkbox size="small" checked={data.dinningRoomOrSpace} onChange={handleCheckboxChange('dinningRoomOrSpace')} />} label="Dinning room or space" />
        <FormControlLabel control={<Checkbox size="small" checked={data.highChair} onChange={handleCheckboxChange('highChair')} />} label="High chair" />
        <FormControlLabel control={<Checkbox size="small" checked={data.waterDispenser} onChange={handleCheckboxChange('waterDispenser')} />} label="Water dispenser" />
        <FormControlLabel control={<Checkbox size="small" checked={data.cookingBasics} onChange={handleCheckboxChange('cookingBasics')} />} label="Cooking basics" />
        <FormControlLabel control={<Checkbox size="small" checked={data.diningTable} onChange={handleCheckboxChange('diningTable')} />} label="Dining table" />
        <FormControlLabel control={<Checkbox size="small" checked={data.cookwareAndKitchenUtensils} onChange={handleCheckboxChange('cookwareAndKitchenUtensils')} />} label="Cookware and kitchen utensils" />
        <FormControlLabel control={<Checkbox size="small" checked={data.separateStove} onChange={handleCheckboxChange('separateStove')} />} label="Separate stove" />
        <FormControlLabel control={<Checkbox size="small" checked={data.wineGlasses} onChange={handleCheckboxChange('wineGlasses')} />} label="Wine glasses" />
        <FormControlLabel control={<Checkbox size="small" checked={data.kettle} onChange={handleCheckboxChange('kettle')} />} label="Kettle" />
        <FormControlLabel control={<Checkbox size="small" checked={data.sandwichToaster} onChange={handleCheckboxChange('sandwichToaster')} />} label="Sandwich toaster" />
        <FormControlLabel control={<Checkbox size="small" checked={data.espressoCoffeeMachine} onChange={handleCheckboxChange('espressoCoffeeMachine')} />} label="Espresso coffee machine" />
        <FormControlLabel control={<Checkbox size="small" checked={data.stove} onChange={handleCheckboxChange('stove')} />} label="Stove" />
        <FormControlLabel control={<Checkbox size="small" checked={data.blenderOrMulti} onChange={handleCheckboxChange('blenderOrMulti')} />} label="Blender / multi" />
        <FormControlLabel control={<Checkbox size="small" checked={data.filterCoffeeMachine} onChange={handleCheckboxChange('filterCoffeeMachine')} />} label="Filter coffee machine" />
        <FormControlLabel control={<Checkbox size="small" checked={data.kitchenette} onChange={handleCheckboxChange('kitchenette')} />} label="Kitchenette" />
        <FormControlLabel control={<Checkbox size="small" checked={data.fryer} onChange={handleCheckboxChange('fryer')} />} label="Fryer" />
        <FormControlLabel control={<Checkbox size="small" checked={data.mixer} onChange={handleCheckboxChange('mixer')} />} label="Mixer" />
        <FormControlLabel control={<Checkbox size="small" checked={data.extraSmallBbqOven} onChange={handleCheckboxChange('extraSmallBbqOven')} />} label="Extra small bbq oven" />
        <FormControlLabel control={<Checkbox size="small" checked={data.breadMaker} onChange={handleCheckboxChange('breadMaker')} />} label="Bread maker" />
        
        
       

        </div>
        
        

        
        
       
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}

