import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, InputBase, TextField, Typography } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomTextField from "../reuseable-components/CustomTextField";
import { useState } from "react";
import { useFormData } from "@/app/contexts/form";
import CustomCheckbox from "../reuseable-components/CustomCheckbox";





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
      <CustomCheckbox label="Microwave" value={value.microwave} onChange={handleCheckboxChange('microwave')} />
      <CustomCheckbox label="Toaster" value={value.toaster} onChange={handleCheckboxChange('toaster')} />
      <CustomCheckbox label="Small fridge" value={value.smallFridge} onChange={handleCheckboxChange('smallFridge')} />
      <CustomCheckbox label="Sandwich toaster" value={value.sandwichToaster} onChange={handleCheckboxChange('sandwichToaster')} />
      <CustomCheckbox label="Blender / multi" value={value.blenderOrMulti} onChange={handleCheckboxChange('blenderOrMulti')} />
      <CustomCheckbox label="Bread maker" value={value.breadMaker} onChange={handleCheckboxChange('breadMaker')} />
      <CustomCheckbox label="Mixer" value={value.mixer} onChange={handleCheckboxChange('mixer')} />
      <CustomCheckbox label="Kettle" value={value.kettle} onChange={handleCheckboxChange('kettle')} />
      <CustomCheckbox label="Filter coffee machine" value={value.filterCoffeeMachine} onChange={handleCheckboxChange('filterCoffeeMachine')} />
      <CustomCheckbox label="Fryer" value={value.fryer} onChange={handleCheckboxChange('fryer')} />
      <CustomCheckbox label="Espresso coffee machine" value={value.espressoCoffeeMachine} onChange={handleCheckboxChange('espressoCoffeeMachine')} />
      <CustomCheckbox label="Water dispenser" value={value.waterDispenser} onChange={handleCheckboxChange('waterDispenser')} />
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
        <CustomCheckbox label="Kitchen" value={value.kitchen} onChange={handleCheckboxChange('kitchen')} />
        <CustomCheckbox label="Kitchenette" value={value.kitchenette} onChange={handleCheckboxChange('kitchenette')} />
        <CustomCheckbox label="Stove" value={value.stove} onChange={handleCheckboxChange('stove')} />
        <CustomCheckbox label="Cooker with small oven" value={value.cookerWithSmallOven} onChange={handleCheckboxChange('cookerWithSmallOven')} />
        <CustomCheckbox label="Extra small bbq oven" value={value.extraSmallBbqOven} onChange={handleCheckboxChange('extraSmallBbqOven')} />
        <CustomCheckbox label="Separate stove" value={value.separateStove} onChange={handleCheckboxChange('separateStove')} />
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
      <CustomCheckbox label="Dinning area" value={value.dinningArea} onChange={handleCheckboxChange('dinningArea')} />
      <CustomCheckbox label="Dinning room or space" value={value.dinningRoomOrSpace} onChange={handleCheckboxChange('dinningRoomOrSpace')} />
      <CustomCheckbox label="Dining table" value={value.diningTable} onChange={handleCheckboxChange('diningTable')} />
      <CustomCheckbox label="Wine glasses" value={value.wineGlasses} onChange={handleCheckboxChange('wineGlasses')} />
      <CustomCheckbox label="Dishes and silverware" value={value.dishesAndSilverware} onChange={handleCheckboxChange('dishesAndSilverware')} />
      <CustomCheckbox label="Cookware and kitchen utensils" value={value.cookwareAndKitchenUtensils} onChange={handleCheckboxChange('cookwareAndKitchenUtensils')} />
      <CustomCheckbox label="Cooking basics" value={value.cookingBasics} onChange={handleCheckboxChange('cookingBasics')} />
      <CustomCheckbox label="High chair" value={value.highChair} onChange={handleCheckboxChange('highChair')} />
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
          <CustomTextField label="Coffee type available" type="text" value={value.coffeeTypeAvailable} onChange={e => setValue({ coffeeTypeAvailable: e })} />
          <CustomTextField label="Cooker with full oven" type="text" value={value.cookerWithFullOven} onChange={e => setValue({ cookerWithFullOven: e })} />
          <CustomTextField label="Fridge/Freezer" type="text" value={value.fridgeOrFreezer} onChange={e => setValue({ fridgeOrFreezer: e })} />
          </ul>
        </div>

      </FormGroup>
    </FormWrapper>
  );
}

