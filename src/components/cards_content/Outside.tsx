import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, InputBase, TextField, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";
import CustomTextField from "../reuseable-components/CustomTextField";
import { useState } from "react";
import CheckboxWithCustomTextField from "../reuseable-components/CheckboxWithCustomTextField";
import { useFormData } from "@/app/contexts/form";


export default function Outside() {

  const { value, setValue, handleFieldChange } = useFormData();

    const handleCheckboxChange = (fieldName: string) => (e: any) => {
        handleFieldChange(fieldName, e.target.checked);
      };

      const mainCategories = [
        {
          title: 'Outdoors dining',
          description: 'What type of dining facilities do you offer?',
          content: (<>
            <div className="outdoors-dining-cat main-category">
              <ul className="media-query-custom-breakpoint">
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.diningTerrace} onChange={handleCheckboxChange('diningTerrace')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Dining terrace</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.outsideFridge} onChange={handleCheckboxChange('outsideFridge')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">fridge</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.outsideKitchen} onChange={handleCheckboxChange('outsideKitchen')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">kitchen</span></div>} /></li>
              <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.traditionalPizzaOven} onChange={handleCheckboxChange('traditionalPizzaOven')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Traditional pizza oven</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.outsideMiniBar} onChange={handleCheckboxChange('outsideMiniBar')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Mini bar</span></div>} /></li>
              <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.chairsAndTableOutside} onChange={handleCheckboxChange('chairsAndTableOutside')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Chairs and table outside</span></div>} /></li>
              <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Kiosk:</span><CustomTextField label="Kiosk" type="text" value={value.kioskWithDiningFacilities} onChange={e => setValue({kioskWithDiningFacilities : e})}  ></CustomTextField></div></li>
              </ul>
              </div>
              <div className="bbq-cat main-category">
                <h3>Barbeque</h3>
              <ul className="media-query-custom-breakpoint">
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.washingBasin} onChange={handleCheckboxChange('washingBasin')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Washing basin</span></div>} /></li>
              <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Barbeque:</span><CustomTextField label="Barbeque" type="text" value={value.barbeque} onChange={e => setValue({barbeque : e})}  ></CustomTextField></div></li>
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
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.garden} onChange={handleCheckboxChange('garden')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Garden</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.gardener} onChange={handleCheckboxChange('gardener')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Gardener</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.trees} onChange={handleCheckboxChange('trees')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Trees</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.grass} onChange={handleCheckboxChange('grass')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Grass</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.yard} onChange={handleCheckboxChange('yard')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Yard</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.deck} onChange={handleCheckboxChange('deck')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Deck</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.porch} onChange={handleCheckboxChange('porch')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Porch</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.roofTerrace} onChange={handleCheckboxChange('roofTerrace')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Roof terrace</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.balcony} onChange={handleCheckboxChange('balcony')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Balcony</span></div>} /></li>
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
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.extraWaterTank} onChange={handleCheckboxChange('extraWaterTank')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Extra water tank</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.drinkingWater} onChange={handleCheckboxChange('drinkingWater')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Drinking water</span></div>} /></li>
              
             
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.waterFromAPersonalSupply} onChange={handleCheckboxChange('waterFromAPersonalSupply')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Water from a personal supply</span></div>} /></li>
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
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.poolTable} onChange={handleCheckboxChange('poolTable')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Pool table</span><span className="clients-favorite">client's favorite</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.outdoorJacuzzi} onChange={handleCheckboxChange('outdoorJacuzzi')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Outdoor jacuzzi</span><span className="clients-favorite">client's favorite</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.footballGame} onChange={handleCheckboxChange('footballGame')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Football game</span><span className="clients-favorite">client's favorite</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.outsideTableTennis} onChange={handleCheckboxChange('outsideTableTennis')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Table tennis</span><span className="clients-favorite">client's favorite</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.playground} onChange={handleCheckboxChange('playground')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Playground</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.gardenSwing} onChange={handleCheckboxChange('gardenSwing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Garden swing</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.hammock} onChange={handleCheckboxChange('hammock')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Hammock</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.poofPilows} onChange={handleCheckboxChange('poofPilows')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Poof pilows</span></div>} /></li>
              </ul>
              <br />
              <ul className="media-query-custom-breakpoint">
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.basketballCourt} onChange={handleCheckboxChange('basketballCourt')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Basketball court</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.tennisCourt} onChange={handleCheckboxChange('tennisCourt')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Tennis court</span></div>} /></li>
             
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
              <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Terrace/veranda:</span><CustomTextField label="Terrace/veranda" type="text" value={value.terraceOrVeranda} onChange={e => setValue({terraceOrVeranda : e})}  ></CustomTextField></div></li>
              <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Shaded terrace/veranda:</span><CustomTextField label="Shaded terrace/veranda" type="text" value={value.shadedTerraceOrveranda} onChange={e => setValue({shadedTerraceOrveranda : e})}  ></CustomTextField></div></li>
              
              <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Umbrella:</span><CustomTextField label="Umbrella" type="text" value={value.umbrella} onChange={e => setValue({umbrella : e})}  ></CustomTextField></div></li>
              <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Sunloungers:</span><CustomTextField label="Sunloungers" type="text" value={value.sunloungers} onChange={e => setValue({sunloungers : e})}  ></CustomTextField></div></li>
              
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
              <li className="list-item"><CheckboxWithCustomTextField label="Parking available" icon={<img src="/Icons/icon-placeholder.png" />} textboxLabel='Parking description:' checked={value.parkingAvailable} onCheckboxChange={(checked) => setValue({ parkingAvailable: checked })} description={value.parkingDescription} onClearDescription={() => { setValue({ dinerDescription: "" })}} onDescriptionChange={(description) => setValue({ parkingDescription: description })} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.garage} onChange={handleCheckboxChange('garage')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Garage</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.privateParking} onChange={handleCheckboxChange('privateParking')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Private parking</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.freeParkingOnTheStreet} onChange={handleCheckboxChange('freeParkingOnTheStreet')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Free parking on the street</span></div>} /></li>
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
