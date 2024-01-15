import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomTextField from "../reuseable-components/CustomTextField";
import { useState } from "react";
import CheckboxWithCustomTextField from "../reuseable-components/CheckboxWithCustomTextField";
import { useFormData } from "@/app/contexts/form";



export default function Inside() {

  const { value, setValue, handleFieldChange } = useFormData();

  const handleCheckboxChange = (fieldName: string) => (e: any) => {
    handleFieldChange(fieldName, e.target.checked);
  };

  const mainCategories = [
    {
      title: 'Heating and cooling',
      description: 'What means of heating/cooling are you offering?',
      content: (<>
        <div className="heating-cooling-cat main-category">
        <ul className="duo-text-grid">
          <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Heating:</span><CustomTextField label="e.g. Aircon/central heating" type="text" value={value.heating} onChange={e => setValue({ heating: e })}  ></CustomTextField></div></li>
          </ul>
          <br />
          <ul className="media-query-custom-breakpoint">
            {/* <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.heating} onChange={handleCheckboxChange('heating')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Heating <span className="short-description">e.g. Aircon/central heating</span></span></div>} /></li> */}
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.fan} onChange={handleCheckboxChange('fan')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Fan</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.airConditioningCooling} onChange={handleCheckboxChange('airConditioningCooling')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Air conditioning for cooling</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.airConditioningHeating} onChange={handleCheckboxChange('airConditioningHeating')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Air conditioning for heating</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.acInLounge} onChange={handleCheckboxChange('acInLounge')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Ac in lounge</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.ceilingFans} onChange={handleCheckboxChange('ceilingFans')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Ceiling fans</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.standingFans} onChange={handleCheckboxChange('standingFans')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Standing fans</span></div>} /></li>
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.woodStove} onChange={handleCheckboxChange('woodStove')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Wood stove</span></div>} /></li>
            </ul>
            <br />
            <ul className="media-query-custom-breakpoint">
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.hotWaterFromSolar} onChange={handleCheckboxChange('hotWaterFromSolar')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Hot water from solar</span></div>} /></li>
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.hotWaterFromElectric} onChange={handleCheckboxChange('hotWaterFromElectric')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Hot water from electric</span></div>} /></li>
          </ul>

        </div>
      </>
      ),
    },
    {
      title: 'Laundry services amenities',
      description: 'What about laundry services?',
      content: (<>
        <div className="laundry-services-cat main-category">

          <ul className="media-query-custom-breakpoint">
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.cleaningMaterials} onChange={handleCheckboxChange('cleaningMaterials')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Cleaning materials</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.dishwasher} onChange={handleCheckboxChange('dishwasher')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Dishwasher</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.laundryRoom} onChange={handleCheckboxChange('laundryRoom')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">laundry room</span></div>} /></li>
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.washingMachine} onChange={handleCheckboxChange('washingMachine')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Washing machine</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.tumbleDryer} onChange={handleCheckboxChange('tumbleDryer')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Tumble dryer</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.washerDryer} onChange={handleCheckboxChange('washerDryer')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Washer dryer</span></div>} /></li>
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.ironNIroningBoard} onChange={handleCheckboxChange('ironNIroningBoard')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Iron & ironing board</span></div>} /></li>
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.clothesDryerRack} onChange={handleCheckboxChange('clothesDryerRack')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Clothes dryer rack</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.clothesStorage} onChange={handleCheckboxChange('clothesStorage')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Clothes storage</span></div>} /></li>
          </ul>

        </div>
      </>
      ),
    },
    {
      title: 'Typical indoor amenities',
      description: 'What indoor amenities have you included towards your guests?',
      content: (<>
        <div className="indoor-amenities-cat main-category">

          <ul className="media-query-custom-breakpoint">
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.hairdryer} onChange={handleCheckboxChange('hairdryer')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Hairdryer</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.mosquitoNets} onChange={handleCheckboxChange('mosquitoNets')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Mosquito nets</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.dvdPlayer} onChange={handleCheckboxChange('dvdPlayer')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Dvd player</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.musicSystem} onChange={handleCheckboxChange('musicSystem')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Music system</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.outletAdapters} onChange={handleCheckboxChange('outletAdapters')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Outlet adapters</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.insideMiniBar} onChange={handleCheckboxChange('insideMiniBar')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Mini bar</span></div>} /></li>
          </ul>

        </div>
      </>
      ),
    },
    {
      title: 'Fitness, wellness and leisure',
      description: 'Where can your guests relax? Where can they train?',
      content: (<>
        <div className="indoor-wellness-cat main-category">

          <ul className="media-query-custom-breakpoint">
           
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.insideJacuzzi} onChange={handleCheckboxChange('insideJacuzzi')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Inside jacuzzi</span></div>} /></li>
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.fitnessRoom} onChange={handleCheckboxChange('fitnessRoom')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Fitness room</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.gym} onChange={handleCheckboxChange('gym')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Gym</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.books} onChange={handleCheckboxChange('books')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Books</span></div>} /></li>
           
          </ul>

        </div>
      </>
      ),
    },
    {
      title: 'Utility options',
      description: 'Which of these indoor utility options do you offer?',
      content: (<>
        <div className="utility-options-cat main-category">

          <ul className="media-query-custom-breakpoint">
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.privateEntrance} onChange={handleCheckboxChange('privateEntrance')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Private entrance</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.petrolBoiler} onChange={handleCheckboxChange('petrolBoiler')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Petrol boiler</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.safeBox} onChange={handleCheckboxChange('safeBox')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Safe box</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.workStation} onChange={handleCheckboxChange('workStation')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Work station</span></div>} /></li>
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.telephone} onChange={handleCheckboxChange('telephone')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Telephone</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.electricityKeyFob} onChange={handleCheckboxChange('electricityKeyFob')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Electricity key fob</span></div>} /></li>
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.elevator} onChange={handleCheckboxChange('elevator')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Elevator</span></div>} /></li>
          </ul>

        </div>
      </>
      ),
    },
    {
      title: 'Entertainment',
      description: 'Do you offer indoor games and entertainment?',
      content: (<>
        <div className="indoor-entertainment-cat main-category">

          <ul className="media-query-custom-breakpoint">
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.insideTableTennis} onChange={handleCheckboxChange('insideTableTennis')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Table tennis</span><span className="clients-favorite">guests love this</span></div>} /></li>
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.availableSmallGames} onChange={handleCheckboxChange('availableSmallGames')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Available small games</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.videoGames} onChange={handleCheckboxChange('entertainmentVideogames')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">video games</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.toys} onChange={handleCheckboxChange('entertainmentToys')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">toys</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.videoLibrary} onChange={handleCheckboxChange('entertainmentVideoLibrary')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">video library</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.musicLibrary} onChange={handleCheckboxChange('entertainmentMusicLibrary')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">music library</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.gameRoom} onChange={handleCheckboxChange('gameRoom')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">game room</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.snookerTable} onChange={handleCheckboxChange('snookerTable')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Snooker table</span></div>} /></li>
           
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
    <FormWrapper title="Inside">
      <div className="category-description">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut
          error! Aperiam ducimus inventore nisi cupiditate facilis consectetur ea
          officia quaerat, quam neque quo reiciendis nobis iste cum quis
          perspiciatis.
        </span>
      </div>
      <FormGroup>
           <div className="indoor-main-options-cat main-category">
            <h3>Indoor options</h3>
            <ul className="duo-options-grid">
            <li className="list-item"><CheckboxWithCustomTextField label="Living room" icon={<img src="/Icons/icon-placeholder.png" />} textboxLabel='living room details:' checked={value.livingRoom} onCheckboxChange={(checked) => setValue({ livingRoom: checked })} description={value.livingRoomDescription} onClearDescription={() => { setValue({ livingRoomDescription: "" })}} onDescriptionChange={(description) => setValue({ livingRoomDescription: description })} /></li>
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Fireplace:</span><CustomTextField label="Fireplace type" type="text" value={value.fireplaceType} onChange={e => setValue({ fireplaceType: e })}  ></CustomTextField></div></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.sofa} onChange={handleCheckboxChange('sofa')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Sofa</span></div>} /></li>
           
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Tv: <span className="short-description">e.g Netflix enabled, Smart TV</span></span><CustomTextField label="Tv type" type="text" value={value.tvType} onChange={e => setValue({ tvType: e })}  ></CustomTextField></div></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.satelliteOrCable} onChange={handleCheckboxChange('satelliteOrCable')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">satellite or cable</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.sauna} onChange={handleCheckboxChange('sauna')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Sauna</span><span className="clients-favorite">guests love this</span></div>} /></li>
            {/* <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Hydro-massage:</span><CustomTextField label="Hydro-massage" type="text" value={hydroMassageType} onChange={e => setValue({ hydroMassageType: e })}  ></CustomTextField></div></li> */}
            
            </ul>
            <div className="internet-options-cat main-category">
        <h3>Internet options</h3>
          <ul className="media-query-custom-breakpoint">
          <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Internet type:</span><CustomTextField label="Internet type" type="text" value={value.internetType} onChange={e => setValue({ internetType: e })}  ></CustomTextField></div></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.freeWifi} onChange={handleCheckboxChange('freeWifi')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Free wifi</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.wifiBroadband} onChange={handleCheckboxChange('wifiBroadband')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Wifi broadband</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={value.networkCode} onChange={handleCheckboxChange('networkCode')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Network code</span></div>} /></li>
          </ul>

        </div>
          </div>




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

