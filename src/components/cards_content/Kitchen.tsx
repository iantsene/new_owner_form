import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, InputBase, TextField, Typography } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FormDataTypes } from "@/app/types/all-form-types";
import CustomTextField from "../reuseable-components/CustomTextField";
import { useState } from "react";
import { useFormData } from "@/app/contexts/form";





export default function Kitchen() {

  const { value, setValue, handleFieldChange } = useFormData();

  const handleCheckboxChange = (fieldName: string) => (e: any) => {
    handleFieldChange(fieldName, e.target.checked);
  };

  const mainCategories = [
    {
      title: 'Kitchen devices',
      description: 'What common household devices are you offering towards cooking?',
      content: (<>
      <div className="cooking-devices-cat main-category">
      <ul className="media-query-custom-breakpoint">
  <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.microwave} onChange={handleCheckboxChange('microwave')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Microwave</span></div>} /></li>
  <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.toaster} onChange={handleCheckboxChange('toaster')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Toaster</span></div>} /></li>
  <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.smallFridge} onChange={handleCheckboxChange('smallFridge')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Small fridge</span></div>} /></li>
  <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.sandwichToaster} onChange={handleCheckboxChange('sandwichToaster')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Sandwich toaster</span></div>} /></li>
  <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.blenderOrMulti} onChange={handleCheckboxChange('blenderOrMulti')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Blender / multi</span></div>} /></li>
  <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.breadMaker} onChange={handleCheckboxChange('breadMaker')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Bread maker</span></div>} /></li>
  <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.mixer} onChange={handleCheckboxChange('mixer')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Mixer</span></div>} /></li>
  <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.kettle} onChange={handleCheckboxChange('kettle')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Kettle</span></div>} /></li>
  <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.filterCoffeeMachine} onChange={handleCheckboxChange('filterCoffeeMachine')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Filter coffee machine</span></div>} /></li>
  <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.fryer} onChange={handleCheckboxChange('fryer')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Fryer</span></div>} /></li>
  <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.espressoCoffeeMachine} onChange={handleCheckboxChange('espressoCoffeeMachine')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Espresso coffee machine</span></div>} /></li>
  <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.waterDispenser} onChange={handleCheckboxChange('waterDispenser')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Water dispenser</span></div>} /></li>
  </ul>
  </div>
        </>
      ),
    },
    {
      title: 'Cooking devices',
      description: 'Which are your main cooking devices offered to guests?',
      content: (<>
        <div className="cooking-means-cat main-category">
        <ul className="media-query-custom-breakpoint">
  <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.kitchen} onChange={handleCheckboxChange('kitchen')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Kitchen</span></div>} /></li>
  <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.kitchenette} onChange={handleCheckboxChange('kitchenette')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Kitchenette</span></div>} /></li>
  <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.stove} onChange={handleCheckboxChange('stove')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Stove</span></div>} /></li>
  <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.cookerWithSmallOven} onChange={handleCheckboxChange('cookerWithSmallOven')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Cooker with small oven</span></div>} /></li>
  <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.extraSmallBbqOven} onChange={handleCheckboxChange('extraSmallBbqOven')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Extra small bbq oven</span></div>} /></li>
  <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.separateStove} onChange={handleCheckboxChange('separateStove')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Separate stove</span></div>} /></li>
        </ul>
        </div>
        </>
      ),
    },
    {
      title: 'Dining areas and utensils',
      description: 'Are you offering the cooking basics? Where can your guests eat their meals?',
      content: (<>
      <div className="dining-area-utensils-cat main-category">
      <ul className="media-query-custom-breakpoint">
  <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.dinningArea} onChange={handleCheckboxChange('dinningArea')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Dinning area</span></div>} /></li>
  <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.dinningRoomOrSpace} onChange={handleCheckboxChange('dinningRoomOrSpace')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Dinning room or space</span></div>} /></li>
  <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.diningTable} onChange={handleCheckboxChange('diningTable')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Dining table</span></div>} /></li>
  <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.wineGlasses} onChange={handleCheckboxChange('wineGlasses')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Wine glasses</span></div>} /></li>
  <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.dishesAndSilverware} onChange={handleCheckboxChange('dishesAndSilverware')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Dishes and silverware</span></div>} /></li>
  <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.cookwareAndKitchenUtensils} onChange={handleCheckboxChange('cookwareAndKitchenUtensils')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Cookware and kitchen utensils</span></div>} /></li>
  <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.cookingBasics} onChange={handleCheckboxChange('cookingBasics')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Cooking basics</span></div>} /></li>
  <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.highChair} onChange={handleCheckboxChange('highChair')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">High chair</span></div>} /></li>
      </ul>
      </div>
        </>
      ),
    },
    
  ];
  
  const [expanded, setExpanded] = useState<string | false>(false);
  
  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  return (
    <FormWrapper title="Kitchen">
      <div className="category-description">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut
          error! Aperiam ducimus inventore nisi cupiditate facilis consectetur ea
          officia quaerat, quam neque quo reiciendis nobis iste cum quis
          perspiciatis.
        </span>
      </div>
      <FormGroup>
        {mainCategories.map((category, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                {category.title}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
              {category.description}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{category.content}</AccordionDetails>
          </Accordion>
        ))}


        <div className="kitchen-extras-cat main-category">
          <h3>Extra info</h3>
          <ul className="duo-options-grid">
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Coffee type available:</span><CustomTextField label="Coffee type available" value={value.coffeeTypeAvailable} onChange={e => setValue({ coffeeTypeAvailable: e })} type="text"   ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Cooker with full oven:</span><CustomTextField label="Cooker with full oven" value={value.cookerWithFullOven} onChange={e => setValue({ cookerWithFullOven: e })} type="text"   ></CustomTextField></div></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Fridge/Freezer:</span><CustomTextField label="Fridge/Freezer" value={value.fridgeOrFreezer} onChange={e => setValue({ fridgeOrFreezer: e })} type="text"   ></CustomTextField></div></li>
          </ul>

        </div>

      </FormGroup>
    </FormWrapper>
  );
        

      
}

