import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomTextField from "../reuseable-components/CustomTextField";
import { useState } from "react";



type UserFormProps = FormDataTypes & {
  updateFields: (fields: Partial<FormDataTypes>) => void

}

export default function Inside({
  fireplaceType,
  heatingMeans,
  tvType,
  hydroMassageType,
  internetType,
  heating,
  insideMiniBar,
  acInLounge,
  sofa,
  musicSystem,
  ironNIroningBoard,
  dvdPlayer,
  dishwasher,
  washingMachine,
  hairdryer,
  airConditioning,
  ceilingFans,
  gym,
  cleaningMaterials,
  availableSmallGames,
  books,
  tumbleDryer,
  electricityKeyFob,
  laundryRoom,
  clothesDryerRack,
  fan,
  entertainmentVideogames,
  amenitieswoodStove,
  amenitiesFitnessRoom,
  entertainmentSatelliteOrCable,
  entertainmentVideoLibrary,
  amenitiesElevator,
  entertainmentToys,
  amenitiesTelephone,
  amenitiesGameRoom,
  entertainmentMusicLibrary,
  clothesStorage,
  privateEntrance,
  washerDryer,
  safeBox,
  insideJacuzzi,
  insideTableTennis,
  snookerTable,
  hotWaterFromElectric,
  hotWaterFromSolar,
  sauna,
  petrolBoiler,
  workStation,
  mosquitoNet,
  outletAdapters,
  networkCode,
  wifiBroadband,
  freeWifi,


  updateFields, data, handleFieldChange }: UserFormProps) {

  const handleCheckboxChange = (fieldName: string) => (e) => {
    handleFieldChange(fieldName, e.target.checked);
  };

  const mainCategories = [
    {
      title: 'Heating and cooling',
      description: 'What means of heating/cooling are you offering?',
      content: (<>
        <div className="heating-cooling-cat main-category">

          <ul className="media-query-custom-breakpoint">
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={heating} onChange={handleCheckboxChange('heating')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Heating</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={fan} onChange={handleCheckboxChange('fan')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Fan</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={airConditioning} onChange={handleCheckboxChange('airConditioning')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Air conditioning</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={acInLounge} onChange={handleCheckboxChange('acInLounge')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Ac in lounge</span></div>} /></li>
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={hotWaterFromSolar} onChange={handleCheckboxChange('hotWaterFromSolar')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Hot water from solar</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={ceilingFans} onChange={handleCheckboxChange('ceilingFans')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Ceiling fans</span></div>} /></li>
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={hotWaterFromElectric} onChange={handleCheckboxChange('hotWaterFromElectric')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Hot water from electric</span></div>} /></li>
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={amenitieswoodStove} onChange={handleCheckboxChange('amenitieswoodStove')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Amenities wood stove</span></div>} /></li>
          </ul>

        </div>
      </>
      ),
    },
    {
      title: 'Laundry services',
      description: 'What about laundry services?',
      content: (<>
        <div className="laundry-services-cat main-category">

          <ul className="media-query-custom-breakpoint">
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={cleaningMaterials} onChange={handleCheckboxChange('cleaningMaterials')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Cleaning materials</span></div>} /></li>
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={washingMachine} onChange={handleCheckboxChange('washingMachine')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Washing machine</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={laundryRoom} onChange={handleCheckboxChange('laundryRoom')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">laundry room</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={washerDryer} onChange={handleCheckboxChange('washerDryer')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Washer dryer</span></div>} /></li>
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={clothesDryerRack} onChange={handleCheckboxChange('clothesDryerRack')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Clothes dryer rack</span></div>} /></li>
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={ironNIroningBoard} onChange={handleCheckboxChange('ironNIroningBoard')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Iron & ironing board</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={tumbleDryer} onChange={handleCheckboxChange('tumbleDryer')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Tumble dryer</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={dishwasher} onChange={handleCheckboxChange('dishwasher')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Dishwasher</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={clothesStorage} onChange={handleCheckboxChange('clothesStorage')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Clothes storage</span></div>} /></li>
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
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={mosquitoNet} onChange={handleCheckboxChange('mosquitoNet')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Mosquito net</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={hairdryer} onChange={handleCheckboxChange('hairdryer')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Hairdryer</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={outletAdapters} onChange={handleCheckboxChange('outletAdapters')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Outlet adapters</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={insideMiniBar} onChange={handleCheckboxChange('insideMiniBar')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Mini bar</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={musicSystem} onChange={handleCheckboxChange('musicSystem')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Music system</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={dvdPlayer} onChange={handleCheckboxChange('dvdPlayer')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Dvd player</span></div>} /></li>
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
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={sofa} onChange={handleCheckboxChange('sofa')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Sofa</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={books} onChange={handleCheckboxChange('books')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Books</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={insideJacuzzi} onChange={handleCheckboxChange('insideJacuzzi')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Inside jacuzzi</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={gym} onChange={handleCheckboxChange('gym')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Gym</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={sauna} onChange={handleCheckboxChange('sauna')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Sauna</span></div>} /></li>
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={amenitiesFitnessRoom} onChange={handleCheckboxChange('amenitiesFitnessRoom')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Amenities fitness room</span></div>} /></li>
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
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={privateEntrance} onChange={handleCheckboxChange('privateEntrance')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Private entrance</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={safeBox} onChange={handleCheckboxChange('safeBox')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Safe box</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={petrolBoiler} onChange={handleCheckboxChange('petrolBoiler')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Petrol boiler</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={workStation} onChange={handleCheckboxChange('workStation')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Work station</span></div>} /></li>
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={amenitiesElevator} onChange={handleCheckboxChange('amenitiesElevator')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Amenities elevator</span></div>} /></li>
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={amenitiesTelephone} onChange={handleCheckboxChange('amenitiesTelephone')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Amenities telephone</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={electricityKeyFob} onChange={handleCheckboxChange('electricityKeyFob')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Electricity key fob</span></div>} /></li>
          </ul>

        </div>
      </>
      ),
    },
    {
      title: 'Internet options',
      description: 'Is the internet fast? Is it free?',
      content: (<>
        <div className="internet-options-cat main-category">

          <ul className="media-query-custom-breakpoint">
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={freeWifi} onChange={handleCheckboxChange('freeWifi')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Free wifi</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={wifiBroadband} onChange={handleCheckboxChange('wifiBroadband')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Wifi broadband</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={networkCode} onChange={handleCheckboxChange('networkCode')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Network code</span></div>} /></li>
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
            <li className="list-item wrap-below"><FormControlLabel control={<Checkbox size="small" checked={availableSmallGames} onChange={handleCheckboxChange('availableSmallGames')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Available small games</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={entertainmentVideogames} onChange={handleCheckboxChange('entertainmentVideogames')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">videogames</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={snookerTable} onChange={handleCheckboxChange('snookerTable')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Snooker table</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={insideTableTennis} onChange={handleCheckboxChange('insideTableTennis')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Table tennis</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={amenitiesGameRoom} onChange={handleCheckboxChange('amenitiesGameRoom')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">game room</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={entertainmentToys} onChange={handleCheckboxChange('entertainmentToys')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">toys</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={entertainmentMusicLibrary} onChange={handleCheckboxChange('entertainmentMusicLibrary')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">music library</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={entertainmentVideoLibrary} onChange={handleCheckboxChange('entertainmentVideoLibrary')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">video library</span></div>} /></li>
            <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={entertainmentSatelliteOrCable} onChange={handleCheckboxChange('entertainmentSatelliteOrCable')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">satellite or cable</span></div>} /></li>
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
              <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Fireplace type:</span><CustomTextField label="Fireplace type" type="text" value={fireplaceType} onChange={e => updateFields({ fireplaceType: e })}  ></CustomTextField></div></li>
              <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Heating means:</span><CustomTextField label="Heating means" type="text" value={heatingMeans} onChange={e => updateFields({ heatingMeans: e })}  ></CustomTextField></div></li>
              <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Tv type:</span><CustomTextField label="Tv type" type="text" value={tvType} onChange={e => updateFields({ tvType: e })}  ></CustomTextField></div></li>
              <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Hydro-massage:</span><CustomTextField label="Hydro-massage" type="text" value={hydroMassageType} onChange={e => updateFields({ hydroMassageType: e })}  ></CustomTextField></div></li>
              <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Internet type:</span><CustomTextField label="Internet type" type="text" value={internetType} onChange={e => updateFields({ internetType: e })}  ></CustomTextField></div></li>
            </ul>
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

