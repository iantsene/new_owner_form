import { Accordion, AccordionDetails, AccordionSummary, FormGroup, Typography } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomTextField from "../reuseable-components/CustomTextField";
import { useState } from "react";
import CheckboxWithCustomTextField from "../reuseable-components/CheckboxWithCustomTextField";
import { useFormData } from "@/app/contexts/form";
import CustomCheckbox from "../reuseable-components/CustomCheckbox";



export default function Inside() {

  const { value, setValue, handleFieldChange } = useFormData();

  const handleCheckboxChange = (fieldName: string) => (e: any) => {
    handleFieldChange('inside', fieldName, e.target.checked);
  };

  const handleCheckboxToTextboxChange = (fieldName: string) => (e: any) => {
    handleFieldChange('inside', fieldName, e);
  };

  const mainCategories = [
    {
      title: 'Heating and cooling',
      description: 'What means of heating/cooling are you offering?',
      content: (<>
        <div className="heating-cooling-cat main-category">
        <ul className="duo-text-grid">
            <CustomTextField label="Heating" info="Describe means of heating. e.g. Aircon/Central heating etc" type="text" value={value.inside.heating} onChange={(e) => setValue({inside: {...value.inside, heating: e}})} />
          </ul>
          <br />
          <ul className="media-query-custom-breakpoint">
            <CustomCheckbox label="Fan" value={value.inside.fan} onChange={handleCheckboxChange('fan')} />
            <CustomCheckbox label="Air conditioning for cooling" value={value.inside.airConditioningCooling} onChange={handleCheckboxChange('airConditioningCooling')} />
            <CustomCheckbox label="Air conditioning for heating" value={value.inside.airConditioningHeating} onChange={handleCheckboxChange('airConditioningHeating')} />
            <CustomCheckbox label="Ac in lounge" value={value.inside.acInLounge} onChange={handleCheckboxChange('acInLounge')} />
            <CustomCheckbox label="Ceiling fans" value={value.inside.ceilingFans} onChange={handleCheckboxChange('ceilingFans')} />
            <CustomCheckbox label="Standing fans" value={value.inside.standingFans} onChange={handleCheckboxChange('standingFans')} />
            <CustomCheckbox label="Wood stove" value={value.inside.woodStove} onChange={handleCheckboxChange('woodStove')} />
          </ul>
            <br />
          <ul className="media-query-custom-breakpoint">
            <CustomCheckbox label="Hot water from solar" value={value.inside.hotWaterFromSolar} onChange={handleCheckboxChange('hotWaterFromSolar')} />
            <CustomCheckbox label="Hot water from electric" value={value.inside.hotWaterFromElectric} onChange={handleCheckboxChange('hotWaterFromElectric')} />
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
          <CustomCheckbox label="Cleaning materials" value={value.inside.cleaningMaterials} onChange={handleCheckboxChange('cleaningMaterials')} />
          <CustomCheckbox label="Dishwasher" value={value.inside.dishwasher} onChange={handleCheckboxChange('dishwasher')} />
          <CustomCheckbox label="laundry room" value={value.inside.laundryRoom} onChange={handleCheckboxChange('laundryRoom')} />
          <CustomCheckbox label="Washing machine" value={value.inside.washingMachine} onChange={handleCheckboxChange('washingMachine')} />
          <CustomCheckbox label="Tumble dryer" value={value.inside.tumbleDryer} onChange={handleCheckboxChange('tumbleDryer')} />
          <CustomCheckbox label="Washer dryer" value={value.inside.washerDryer} onChange={handleCheckboxChange('washerDryer')} />
          <CustomCheckbox label="Iron & ironing board" value={value.inside.ironNIroningBoard} onChange={handleCheckboxChange('ironNIroningBoard')} />
          <CustomCheckbox label="Clothes dryer rack" value={value.inside.clothesDryerRack} onChange={handleCheckboxChange('clothesDryerRack')} />
          <CustomCheckbox label="Clothes storage" value={value.inside.clothesStorage} onChange={handleCheckboxChange('clothesStorage')} />
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
          <CustomCheckbox label="Hairdryer" value={value.inside.hairdryer} onChange={handleCheckboxChange('hairdryer')} />
          <CustomCheckbox label="Mosquito nets" value={value.inside.mosquitoNets} onChange={handleCheckboxChange('mosquitoNets')} />
          <CustomCheckbox label="Dvd player" value={value.inside.dvdPlayer} onChange={handleCheckboxChange('dvdPlayer')} />
          <CustomCheckbox label="Music system" value={value.inside.musicSystem} onChange={handleCheckboxChange('musicSystem')} />
          <CustomCheckbox label="Outlet adapters" value={value.inside.outletAdapters} onChange={handleCheckboxChange('outletAdapters')} />
          <CustomCheckbox label="Mini bar" value={value.inside.insideMiniBar} onChange={handleCheckboxChange('insideMiniBar')} />
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
          <CustomCheckbox label="Inside jacuzzi" value={value.inside.insideJacuzzi} onChange={handleCheckboxChange('insideJacuzzi')} />
          <CustomCheckbox label="Fitness room" value={value.inside.fitnessRoom} onChange={handleCheckboxChange('fitnessRoom')} />
          <CustomCheckbox label="Gym" value={value.inside.gym} onChange={handleCheckboxChange('gym')} />
          <CustomCheckbox label="Books" value={value.inside.books} onChange={handleCheckboxChange('books')} />
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
          <CustomCheckbox label="Private entrance" value={value.inside.privateEntrance} onChange={handleCheckboxChange('privateEntrance')} />
          <CustomCheckbox label="Petrol boiler" value={value.inside.petrolBoiler} onChange={handleCheckboxChange('petrolBoiler')} />
          <CustomCheckbox label="Safe box" value={value.inside.safeBox} onChange={handleCheckboxChange('safeBox')} />
          <CustomCheckbox label="Work station" value={value.inside.workStation} onChange={handleCheckboxChange('workStation')} />
          <CustomCheckbox label="Telephone" value={value.inside.telephone} onChange={handleCheckboxChange('telephone')} />
          <CustomCheckbox label="Electricity key fob" value={value.inside.electricityKeyFob} onChange={handleCheckboxChange('electricityKeyFob')} />
          <CustomCheckbox label="Elevator" value={value.inside.elevator} onChange={handleCheckboxChange('elevator')} />
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

          <ul className="media-query-custom-insideTableTennis">
          <CustomCheckbox label="Table tennis" value={value.inside.insideTableTennis} highlightedMessage='clients favorite' onChange={handleCheckboxChange('insideTableTennis')} />
          <CustomCheckbox label="Available small games" value={value.inside.availableSmallGames} onChange={handleCheckboxChange('availableSmallGames')} />
          <CustomCheckbox label="Video games" value={value.inside.videoGames} onChange={handleCheckboxChange('videoGames')} />
          <CustomCheckbox label="Toys" value={value.inside.toys} onChange={handleCheckboxChange('toys')} />
          <CustomCheckbox label="Video library" value={value.inside.videoLibrary} onChange={handleCheckboxChange('videoLibrary')} />
          <CustomCheckbox label="Music library" value={value.inside.musicLibrary} onChange={handleCheckboxChange('musicLibrary')} />
          <CustomCheckbox label="Game room" value={value.inside.gameRoom} onChange={handleCheckboxChange('gameRoom')} />
          <CustomCheckbox label="Snooker table" value={value.inside.snookerTable} onChange={handleCheckboxChange('snookerTable')} />
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
            <CheckboxWithCustomTextField label="Living room" textboxLabel='Living room details:' checked={value.inside.livingRoom} onCheckboxChange={handleCheckboxToTextboxChange('livingRoom')} description={value.inside.livingRoomDescription} onDescriptionChange={(e) => setValue({inside: {...value.inside, livingRoomDescription: e}})} />
            <CustomTextField label="Fireplace type" type="text" value={value.inside.fireplaceType} onChange={(e) => setValue({inside: {...value.inside, fireplaceType: e}})} />
            <CustomCheckbox label="Sofa" value={value.inside.sofa} onChange={handleCheckboxChange('sofa')} />
            <CustomTextField label="Tv type" type="text" info="e.g Netflix enabled, Smart TV" value={value.inside.tvType} onChange={(e) => setValue({inside: {...value.inside, tvType: e}})} />
            <CustomCheckbox label="satellite or cable" value={value.inside.satelliteOrCable} onChange={handleCheckboxChange('satelliteOrCable')} />
            <CustomCheckbox label="Sauna" value={value.inside.sauna} highlightedMessage='clients favorite' onChange={handleCheckboxChange('sauna')} />
            
            </ul>
            <div className="internet-options-cat main-category">
        <h3>Internet options</h3>
          <ul className="media-query-custom-breakpoint">
          <CustomTextField label="Internet type" type="text" value={value.inside.internetType} onChange={(e) => setValue({inside: {...value.inside, internetType: e}})} />
          <CustomCheckbox label="Free wifi" value={value.inside.freeWifi} onChange={handleCheckboxChange('freeWifi')} />
          <CustomCheckbox label="Wifi broadband" value={value.inside.wifiBroadband} onChange={handleCheckboxChange('wifiBroadband')} />
          <CustomTextField label="Network & code" type="text" info="add the info here" value={value.inside.networkCode} onChange={(e) => setValue({inside: {...value.inside, networkCode: e}})} />
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

