import { Accordion, AccordionDetails, AccordionSummary, FormGroup, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormWrapper from "../form_components/FormWrapper";
import CustomTextField from "../reuseable-components/CustomTextField";
import { useState } from "react";
import CheckboxWithCustomTextField from "../reuseable-components/CheckboxWithCustomTextField";
import { useFormData } from "@/app/contexts/form";
import CustomCheckbox from "../reuseable-components/CustomCheckbox";


export default function Outside() {

  const { value, setValue, handleFieldChange } = useFormData();

    const handleCheckboxChange = (fieldName: string) => (e: any) => {
        handleFieldChange('outside', fieldName, e.target.checked);
      };

    const handleCheckboxToTextboxChange = (fieldName: string) => (e: any) => {
        handleFieldChange('outside', fieldName, e);
      };

      const mainCategories = [
        {
          title: 'Outdoors dining',
          description: 'What type of dining facilities do you offer?',
          content: (<>
            <div className="outdoors-dining-cat main-category">
              <ul className="media-query-custom-breakpoint">
              <CustomCheckbox label="Dining terrace" value={value.outside.diningTerrace} onChange={handleCheckboxChange('diningTerrace')} />
              <CustomCheckbox label="fridge" value={value.outside.outsideFridge} onChange={handleCheckboxChange('outsideFridge')} />
              <CustomCheckbox label="kitchen" value={value.outside.outsideKitchen} onChange={handleCheckboxChange('outsideKitchen')} />
              <CustomCheckbox label="Traditional pizza oven" value={value.outside.traditionalPizzaOven} onChange={handleCheckboxChange('traditionalPizzaOven')} />
              <CustomCheckbox label="Mini bar" value={value.outside.outsideMiniBar} onChange={handleCheckboxChange('outsideMiniBar')} />
              <CustomCheckbox label="Chairs and table outside" value={value.outside.chairsAndTableOutside} onChange={handleCheckboxChange('chairsAndTableOutside')} />
              <CustomTextField label="Kiosk" type="text" value={value.outside.kiosk} onChange={(e) => setValue({outside: {...value.outside, kiosk: e}})}  />
              </ul>
              </div>
              <div className="bbq-cat main-category">
                <h3>Barbeque</h3>
              
              <ul className="media-query-custom-breakpoint">
              <CustomCheckbox label="Washing basin" value={value.outside.washingBasin} onChange={handleCheckboxChange('washingBasin')} />
              <CustomTextField label="Barbeque" type="text" value={value.outside.barbeque} onChange={(e) => setValue({outside: {...value.outside, barbeque: e}})}  />
              </ul>
            </div>
          </>
          ),
        },
        {
          title: 'Ambience and terrain',
          description: 'What kind of outdoor spaces do you offer? What does the outside look like?',
          content: (<>
            <div className="ambience-n-terrain-cat main-category">
              <ul className="media-query-custom-breakpoint">
              <CustomCheckbox label="Garden" value={value.outside.garden} onChange={handleCheckboxChange('garden')} />
              <CustomCheckbox label="Gardener" value={value.outside.gardener} onChange={handleCheckboxChange('gardener')} />
              <CustomCheckbox label="Trees" value={value.outside.trees} onChange={handleCheckboxChange('trees')} />
              <CustomCheckbox label="Grass" value={value.outside.grass} onChange={handleCheckboxChange('grass')} />
              <CustomCheckbox label="Yard" value={value.outside.yard} onChange={handleCheckboxChange('yard')} />
              <CustomCheckbox label="Deck" value={value.outside.deck} onChange={handleCheckboxChange('deck')} />
              <CustomCheckbox label="Porch" value={value.outside.porch} onChange={handleCheckboxChange('porch')} />
              <CustomCheckbox label="Roof terrace" value={value.outside.roofTerrace} onChange={handleCheckboxChange('roofTerrace')} />
              <CustomCheckbox label="Balcony" value={value.outside.balcony} onChange={handleCheckboxChange('balcony')} />
              </ul>
             </div>
          </>
          ),
        },
        {
          title: 'Outside amenities',
          description: 'What outdoor amenities do you offer to your guests?',
          content: (<>
            <div className="outside-conveniences-cat main-category">
      
            <ul className="media-query-custom-breakpoint">
            <CustomCheckbox label="Extra water tank" value={value.outside.extraWaterTank} onChange={handleCheckboxChange('extraWaterTank')} />
            <CustomCheckbox label="Drinking water" value={value.outside.drinkingWater} onChange={handleCheckboxChange('drinkingWater')} />
            <CustomCheckbox label="Water from a personal supply" value={value.outside.waterFromAPersonalSupply} onChange={handleCheckboxChange('waterFromAPersonalSupply')} />
            </ul>
      
            </div>
          </>
          ),
        },
        {
          title: 'Outside games and leisure',
          description: 'What outdoor games do you offer?',
          content: (<>
            <div className="outside-games-cat main-category">
      
            <ul className="media-query-custom-breakpoint">

            <CustomCheckbox label="Pool table" value={value.outside.poolTable} highlightedMessage='clients favorite' onChange={handleCheckboxChange('poolTable')} />
            <CustomCheckbox label="Outdoor jacuzzi" value={value.outside.outdoorJacuzzi} highlightedMessage='clients favorite' onChange={handleCheckboxChange('outdoorJacuzzi')} />
            <CustomCheckbox label="Football game" value={value.outside.footballGame} highlightedMessage='clients favorite' onChange={handleCheckboxChange('footballGame')} />
            <CustomCheckbox label="Table tennis" value={value.outside.outsideTableTennis} highlightedMessage='clients favorite' onChange={handleCheckboxChange('outsideTableTennis')} />
            <CustomCheckbox label="Playground" value={value.outside.playground} onChange={handleCheckboxChange('playground')} />
            <CustomCheckbox label="Garden swing" value={value.outside.gardenSwing} onChange={handleCheckboxChange('gardenSwing')} />
            <CustomCheckbox label="Hammock" value={value.outside.hammock} onChange={handleCheckboxChange('hammock')} />
            <CustomCheckbox label="Poof pilows" value={value.outside.poofPilows} onChange={handleCheckboxChange('poofPilows')} />
              </ul>
              <br />
              <ul className="media-query-custom-breakpoint">
              <CustomCheckbox label="Basketball court" value={value.outside.basketballCourt} onChange={handleCheckboxChange('basketballCourt')} />
              <CustomCheckbox label="Tennis court" value={value.outside.tennisCourt} onChange={handleCheckboxChange('tennisCourt')} />             
            </ul>
              
            </div>
          </>
          ),
        },
        {
          title: 'Sun and shade',
          description: 'Where can your guests sunbathe or cover themselves from the sun?',
          content: (<>
            <div className="outside-extras-cat main-category">
            <ul className="media-query-custom-breakpoint">
              <CustomTextField label="Terrace/veranda" type="text" value={value.outside.terraceOrVeranda} onChange={(e) => setValue({outside: {...value.outside, terraceOrVeranda: e}})}  />
              <CustomTextField label="Shaded terrace/veranda" type="text" value={value.outside.shadedTerraceOrveranda} onChange={(e) => setValue({outside: {...value.outside, shadedTerraceOrveranda: e}})}  />
              <CustomTextField label="Umbrella" type="text" value={value.outside.umbrella} onChange={(e) => setValue({outside: {...value.outside, umbrella: e}})}  />
              <CustomTextField label="Sunloungers" type="text" value={value.outside.sunloungers} onChange={(e) => setValue({outside: {...value.outside, sunloungers: e}})}  />
            </ul>
            </div>
          </>
          ),
        },
        {
          title: 'Parking',
          description: 'What are the parking options available on your property?',
          content: (<>
            <div className="outside-extras-cat main-category">
      
            <ul className="media-query-custom-breakpoint">
              <CheckboxWithCustomTextField label="Parking available" checked={value.outside.parkingAvailable} onCheckboxChange={handleCheckboxToTextboxChange('parkingAvailable')} description={value.outside.parkingDescription} onDescriptionChange={(e) => setValue({outside: {...value.outside, parkingDescription: e}})} />
              <CustomCheckbox label="Garage" value={value.outside.garage} onChange={handleCheckboxChange('garage')} />
              <CustomCheckbox label="Private parking" value={value.outside.privateParking} onChange={handleCheckboxChange('privateParking')} />
              <CustomCheckbox label="Free street parking" value={value.outside.freeParkingOnTheStreet} onChange={handleCheckboxChange('freeParkingOnTheStreet')} />
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
        <FormWrapper title="Outside">
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
                className="custom-accordion"
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}bh-content`}
                  id={`panel${index}bh-header`}
                >
                  <Typography sx={{ width: '40%', fontWeight: 'bold', flexShrink: 0 }}>
                    {category.title}
                  </Typography>
                  <Typography sx={{ marginLeft: '20px', color: 'text.secondary' }}>
                    {category.description}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>{category.content}</AccordionDetails>
              </Accordion>
            ))}
      
      </FormGroup>
          </FormWrapper>
        )
}
