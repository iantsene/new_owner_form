import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormData } from "@/app/types/all-form-types";



type UserFormProps = FormData & {
updateFields: (fields: Partial<FormData>) => void

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

    const handleSelfCheckInChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="Kitchen">
             <FormGroup>
            <div className="extra-categories">
           
          
              
        <div className="category-styling">
        <h3>Kitchen</h3>
        
        <TextField id="outlined-basic"  variant="outlined" value={coffeeTypeAvailable} onChange={e => updateFields({coffeeTypeAvailable: e.target.value})} label="Coffee type available" />
        <TextField id="outlined-basic"  variant="outlined" value={cookerWithFullOven} onChange={e => updateFields({cookerWithFullOven: e.target.value})} label="Cooker with full oven" />
        <TextField id="outlined-basic"  variant="outlined" value={fridgeOrFreezer} onChange={e => updateFields({fridgeOrFreezer: e.target.value})} label="Fridge/Freezer" />
        
       
        
        <FormControlLabel control={<Checkbox checked={data.microwave} onChange={handleSelfCheckInChange('microwave')} />} label="Microwave" />
        <FormControlLabel control={<Checkbox checked={data.toaster} onChange={handleSelfCheckInChange('toaster')} />} label="Toaster" />
        <FormControlLabel control={<Checkbox checked={data.cookerWithSmallOven} onChange={handleSelfCheckInChange('cookerWithSmallOven')} />} label="Cooker with small oven" />
        <FormControlLabel control={<Checkbox checked={data.smallFridge} onChange={handleSelfCheckInChange('smallFridge')} />} label="Small fridge" />
        <FormControlLabel control={<Checkbox checked={data.dinningArea} onChange={handleSelfCheckInChange('dinningArea')} />} label="Dinning area" />
        <FormControlLabel control={<Checkbox checked={data.dishesAndSilverware} onChange={handleSelfCheckInChange('dishesAndSilverware')} />} label="Dishes and silverware" />
        <FormControlLabel control={<Checkbox checked={data.kitchen} onChange={handleSelfCheckInChange('kitchen')} />} label="Kitchen" />
        <FormControlLabel control={<Checkbox checked={data.dinningRoomOrSpace} onChange={handleSelfCheckInChange('dinningRoomOrSpace')} />} label="Dinning room or space" />
        <FormControlLabel control={<Checkbox checked={data.highChair} onChange={handleSelfCheckInChange('highChair')} />} label="High chair" />
        <FormControlLabel control={<Checkbox checked={data.waterDispenser} onChange={handleSelfCheckInChange('waterDispenser')} />} label="Water dispenser" />
        <FormControlLabel control={<Checkbox checked={data.cookingBasics} onChange={handleSelfCheckInChange('cookingBasics')} />} label="Cooking basics" />
        <FormControlLabel control={<Checkbox checked={data.diningTable} onChange={handleSelfCheckInChange('diningTable')} />} label="Dining table" />
        <FormControlLabel control={<Checkbox checked={data.cookwareAndKitchenUtensils} onChange={handleSelfCheckInChange('cookwareAndKitchenUtensils')} />} label="Cookware and kitchen utensils" />
        <FormControlLabel control={<Checkbox checked={data.separateStove} onChange={handleSelfCheckInChange('separateStove')} />} label="Separate stove" />
        <FormControlLabel control={<Checkbox checked={data.wineGlasses} onChange={handleSelfCheckInChange('wineGlasses')} />} label="Wine glasses" />
        <FormControlLabel control={<Checkbox checked={data.kettle} onChange={handleSelfCheckInChange('kettle')} />} label="Kettle" />
        <FormControlLabel control={<Checkbox checked={data.sandwichToaster} onChange={handleSelfCheckInChange('sandwichToaster')} />} label="Sandwich toaster" />
        <FormControlLabel control={<Checkbox checked={data.espressoCoffeeMachine} onChange={handleSelfCheckInChange('espressoCoffeeMachine')} />} label="Espresso coffee machine" />
        <FormControlLabel control={<Checkbox checked={data.stove} onChange={handleSelfCheckInChange('stove')} />} label="Stove" />
        <FormControlLabel control={<Checkbox checked={data.blenderOrMulti} onChange={handleSelfCheckInChange('blenderOrMulti')} />} label="Blender / multi" />
        <FormControlLabel control={<Checkbox checked={data.filterCoffeeMachine} onChange={handleSelfCheckInChange('filterCoffeeMachine')} />} label="Filter coffee machine" />
        <FormControlLabel control={<Checkbox checked={data.kitchenette} onChange={handleSelfCheckInChange('kitchenette')} />} label="Kitchenette" />
        <FormControlLabel control={<Checkbox checked={data.fryer} onChange={handleSelfCheckInChange('fryer')} />} label="Fryer" />
        <FormControlLabel control={<Checkbox checked={data.mixer} onChange={handleSelfCheckInChange('mixer')} />} label="Mixer" />
        <FormControlLabel control={<Checkbox checked={data.extraSmallBbqOven} onChange={handleSelfCheckInChange('extraSmallBbqOven')} />} label="Extra small bbq oven" />
        <FormControlLabel control={<Checkbox checked={data.breadMaker} onChange={handleSelfCheckInChange('breadMaker')} />} label="Bread maker" />
        
        
       

        </div>
        
        

        
        
       
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}

