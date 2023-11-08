import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, InputBase, TextField, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";
import CustomTextField from "../reuseable-components/CustomTextField";
import { useState } from "react";

type UserFormProps = FormDataTypes & {
  updateFields: (fields: Partial<FormDataTypes>) => void
  
  }

export default function Outside({
    
    garden,
    garage,
    outsideTableTennis,
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
    outsideMiniBar,
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

    updateFields, data, handleFieldChange }: FormDataTypes) {

    const handleCheckboxChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

      const mainCategories = [
        {
          title: 'Outdoors dining',
          description: 'Do you offer outdoor dining facilities?',
          content: (<>
            <div className="outdoors-dining-cat main-category">
              <ul className="media-query-custom-breakpoint">
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={diningTerrace} onChange={handleCheckboxChange('diningTerrace')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Dining terrace</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={outsideFridge} onChange={handleCheckboxChange('outsideFridge')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Outside fridge</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={outdoorDining} onChange={handleCheckboxChange('outdoorDining')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Outdoor dining</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={outsideKitchen} onChange={handleCheckboxChange('outsideKitchen')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Outside kitchen</span></div>} /></li>
              <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={traditionalPizzaOven} onChange={handleCheckboxChange('traditionalPizzaOven')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Traditional pizza oven</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={outsideMiniBar} onChange={handleCheckboxChange('outsideMiniBar')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Mini bar</span></div>} /></li>
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
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={garden} onChange={handleCheckboxChange('garden')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Garden</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={gardener} onChange={handleCheckboxChange('gardener')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Gardener</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={trees} onChange={handleCheckboxChange('trees')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Trees</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={grass} onChange={handleCheckboxChange('grass')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Grass</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={yard} onChange={handleCheckboxChange('yard')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Yard</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={deck} onChange={handleCheckboxChange('deck')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Deck</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={porch} onChange={handleCheckboxChange('porch')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Porch</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={roofTerrace} onChange={handleCheckboxChange('roofTerrace')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Roof terrace</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={balcony} onChange={handleCheckboxChange('balcony')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Balcony</span></div>} /></li>
              </ul>
             </div>
          </>
          ),
        },
        {
          title: 'Outside conveniences',
          description: 'What outdoor conveniences do you offer to your guests?',
          content: (<>
            <div className="outside-conveniences-cat main-category">
      
            <ul className="media-query-custom-breakpoint">
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={extraWaterTank} onChange={handleCheckboxChange('extraWaterTank')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Extra water tank</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={drinkingWater} onChange={handleCheckboxChange('drinkingWater')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Drinking water</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={washingBasin} onChange={handleCheckboxChange('washingBasin')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Washing basin</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={garage} onChange={handleCheckboxChange('garage')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Garage</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={privateParking} onChange={handleCheckboxChange('privateParking')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Private parking</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={freeParkingOnTheStreet} onChange={handleCheckboxChange('freeParkingOnTheStreet')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Free parking on the street</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={waterFromAPersonalSupply} onChange={handleCheckboxChange('waterFromAPersonalSupply')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Water from a personal supply</span></div>} /></li>
            </ul>
      
            </div>
          </>
          ),
        },
        {
          title: 'Outside games and leisure',
          description: 'What outdoor games do you offer? What about outdoor leisure?',
          content: (<>
            <div className="outside-games-cat main-category">
      
            <ul className="media-query-custom-breakpoint">
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={poolTable} onChange={handleCheckboxChange('poolTable')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Pool table</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={outsideTableTennis} onChange={handleCheckboxChange('outsideTableTennis')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Table tennis</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={tennisCourt} onChange={handleCheckboxChange('tennisCourt')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Tennis court</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={footballGame} onChange={handleCheckboxChange('footballGame')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Football game</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={basketballCourt} onChange={handleCheckboxChange('basketballCourt')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Basketball court</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={playground} onChange={handleCheckboxChange('playground')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Playground</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={gardenSwing} onChange={handleCheckboxChange('gardenSwing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Garden swing</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={hammock} onChange={handleCheckboxChange('hammock')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Hammock</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={outdoorJacuzzi} onChange={handleCheckboxChange('outdoorJacuzzi')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Outdoor jacuzzi</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={poofPilows} onChange={handleCheckboxChange('poofPilows')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Poof pilows</span></div>} /></li>
              <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={chairsAndTableOutside} onChange={handleCheckboxChange('chairsAndTableOutside')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Chairs and table outside</span></div>} /></li>
            </ul>
              
            </div>
          </>
          ),
        },
        {
          title: 'Outside extras',
          description: 'Please share a little more specific information on your outdoors extras?',
          content: (<>
            <div className="outside-extras-cat main-category">
      
            <ul className="media-query-custom-breakpoint">
              <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Parking available:</span><CustomTextField label="Parking available" type="text" value={parkingAvailable} onChange={e => updateFields({parkingAvailable : e})}  ></CustomTextField></div></li>
              <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Terrace/veranda:</span><CustomTextField label="Terrace/veranda" type="text" value={terraceOrVeranda} onChange={e => updateFields({terraceOrVeranda : e})}  ></CustomTextField></div></li>
              <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Shaded terrace/veranda:</span><CustomTextField label="Shaded terrace/veranda" type="text" value={shadedTerraceOrveranda} onChange={e => updateFields({shadedTerraceOrveranda : e})}  ></CustomTextField></div></li>
              <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Barbeque:</span><CustomTextField label="Barbeque" type="text" value={barbeque} onChange={e => updateFields({barbeque : e})}  ></CustomTextField></div></li>
              <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Umbrella:</span><CustomTextField label="Umbrella" type="text" value={umbrella} onChange={e => updateFields({umbrella : e})}  ></CustomTextField></div></li>
              <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Sunloungers:</span><CustomTextField label="Sunloungers" type="text" value={sunloungers} onChange={e => updateFields({sunloungers : e})}  ></CustomTextField></div></li>
              <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Kiosk with dining facilities:</span><CustomTextField label="dining facilities Kiosk" type="text" value={kioskWithDiningFacilities} onChange={e => updateFields({kioskWithDiningFacilities : e})}  ></CustomTextField></div></li>
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
