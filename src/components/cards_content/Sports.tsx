import React, { useState } from 'react';
import { FormGroup } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import CustomTextField from "../reuseable-components/CustomTextField";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useFormData } from '@/app/contexts/form';
import CustomCheckbox from '../reuseable-components/CustomCheckbox';



export default function Sports() {

  const { value, setValue, handleFieldChange } = useFormData();

  const handleCheckboxChange = (fieldName: string) => (e: any) => {
    handleFieldChange(fieldName, e.target.checked);
  };

  const mainCategories = [
    {
      title: 'Mountain and winter sports',
      description: 'What mountain and winter sports are available?',
      content: (<>
        <div className="winter-sports-cat main-category">
          <ul className='media-query-custom-grid'>
            <CustomCheckbox label="Skiing" value={value.skiing} onChange={handleCheckboxChange('skiing')} />
            <CustomCheckbox label="Ice skating" value={value.iceSkating} onChange={handleCheckboxChange('iceSkating')} />
            <CustomCheckbox label="Cross country skiing" value={value.crossCountrySkiing} onChange={handleCheckboxChange('crossCountrySkiing')} />
            <CustomCheckbox label="Snowboarding" value={value.snowboarding} onChange={handleCheckboxChange('snowboarding')} />
            <CustomCheckbox label="Snowmobiling" value={value.snowmobiling} onChange={handleCheckboxChange('snowmobiling')} />
            <CustomCheckbox label="Ski lift privileges" value={value.skiLiftPrivileges} onChange={handleCheckboxChange('skiLiftPrivileges')} />
            <CustomCheckbox label="Ski lift privileges optional" value={value.skiLiftPrivilegesOptional} onChange={handleCheckboxChange('skiLiftPrivilegesOptional')} />
            <CustomCheckbox label="Rock climbing" value={value.rockClimbing} onChange={handleCheckboxChange('rockClimbing')} />
            <CustomCheckbox label="Mountain biking" value={value.mountainBiking} onChange={handleCheckboxChange('mountainBiking')} />
            <CustomCheckbox label="Mountaineering" value={value.mountaineering} onChange={handleCheckboxChange('mountaineering')} />
            <CustomCheckbox label="Mountain climbing" value={value.mountainClimbing} onChange={handleCheckboxChange('mountainClimbing')} />
          </ul>
        </div>
      </>
      ),
    },
    {
      title: 'Outdoor Sports',
      description: 'What array of outdoor sports can your guests select?',
      content: (<>
        <div className="outdoor-sports-cat main-category">
          <ul className='media-query-custom-grid'>
            <CustomCheckbox label="Spelunking" value={value.spelunking} onChange={handleCheckboxChange('spelunking')} /> 
            <CustomCheckbox label="Hiking" value={value.hiking} onChange={handleCheckboxChange('hiking')} /> 
            <CustomCheckbox label="Paragliding" value={value.paragliding} onChange={handleCheckboxChange('paragliding')} /> 
            <CustomCheckbox label="Golf" value={value.golf} onChange={handleCheckboxChange('golf')} /> 
            <CustomCheckbox label="Golf optional" value={value.golfOptional} onChange={handleCheckboxChange('golfOptional')} /> 
            <CustomCheckbox label="Hunting" value={value.hunting} onChange={handleCheckboxChange('hunting')} /> 
            <CustomCheckbox label="Roller blading" value={value.rollerBlading} onChange={handleCheckboxChange('rollerBlading')} /> 
            <CustomCheckbox label="Cycling" value={value.cycling} onChange={handleCheckboxChange('cycling')} /> 
            <CustomCheckbox label="Hot air ballooning" value={value.hotAirBallooning} onChange={handleCheckboxChange('hotAirBallooning')} /> 
            <CustomCheckbox label="Tennis" value={value.tennis} onChange={handleCheckboxChange('tennis')} /> 
            <CustomCheckbox label="Equestrian events" value={value.equestrianEvents} onChange={handleCheckboxChange('equestrianEvents')} /> 
          </ul>
        </div>
      </>
      ),
    },
    {
      title: 'Marine sports',
      description: 'Are you offering access to marine sports and fishing?',
      content: (<>
        <div className="marine-sports-cat main-category">
          <ul className='media-query-custom-grid'>
          <CustomCheckbox label="Fishing" value={value.fishing} onChange={handleCheckboxChange('fishing')} /> 
          <CustomCheckbox label="Fishing bay" value={value.fishingBay} onChange={handleCheckboxChange('fishingBay')} /> 
          <CustomCheckbox label="Deepsea fishing" value={value.deepseaFishing} onChange={handleCheckboxChange('deepseaFishing')} /> 
          <CustomCheckbox label="Fishing fly" value={value.fishingFly} onChange={handleCheckboxChange('fishingFly')} /> 
          <CustomCheckbox label="Fishing freshwater" value={value.fishingFreshwater} onChange={handleCheckboxChange('fishingFreshwater')} /> 
          <CustomCheckbox label="Fishing surf" value={value.fishingSurf} onChange={handleCheckboxChange('fishingSurf')} /> 
          <CustomCheckbox label="Jet skiing" value={value.jetSkiing} onChange={handleCheckboxChange('jetSkiing')} /> 
          <CustomCheckbox label="Kayaking" value={value.kayaking} onChange={handleCheckboxChange('kayaking')} /> 
          <CustomCheckbox label="Rafting" value={value.rafting} onChange={handleCheckboxChange('rafting')} /> 
          <CustomCheckbox label="Parasailing" value={value.parasailing} onChange={handleCheckboxChange('parasailing')} /> 
          <CustomCheckbox label="Pier fishing" value={value.pierFishing} onChange={handleCheckboxChange('pierFishing')} /> 
          <CustomCheckbox label="Water skiing" value={value.skiingWater} onChange={handleCheckboxChange('skiingWater')} /> 
          <CustomCheckbox label="Sports tubing water" value={value.sportsTubingWater} onChange={handleCheckboxChange('sportsTubingWater')} /> 
          <CustomCheckbox label="Sailing" value={value.sailing} onChange={handleCheckboxChange('sailing')} /> 
          <CustomCheckbox label="Snorkeling" value={value.snorkeling} onChange={handleCheckboxChange('snorkeling')} /> 
          <CustomCheckbox label="Swimming" value={value.swimming} onChange={handleCheckboxChange('swimming')} /> 
          <CustomCheckbox label="White water rafting" value={value.whitewaterRafting} onChange={handleCheckboxChange('whitewaterRafting')} /> 
          <CustomCheckbox label="Wind surfing" value={value.windSurfing} onChange={handleCheckboxChange('windSurfing')} /> 
          <CustomCheckbox label="Sports snorkeling diving" value={value.sportsSnorkelingDiving} onChange={handleCheckboxChange('sportsSnorkelingDiving')} /> 
          <CustomCheckbox label="Surfing" value={value.surfing} onChange={handleCheckboxChange('surfing')} /> 
          <CustomCheckbox label="Power boat rental" value={value.powerBoatRental} onChange={handleCheckboxChange('powerBoatRental')} /> 
          </ul>
        </div>
      </>
      ),
    },
    {
      title: 'Common sports',
      description: 'Which common sport activities do you have to offer?',
      content: (<>
        <div className="common-sports-cat main-category">
          <ul className='media-query-custom-grid'>
          <CustomCheckbox label="basketball court" value={value.basketballCourt} onChange={handleCheckboxChange('basketballCourt')} /> 
          <CustomCheckbox label="Sports" value={value.sports} onChange={handleCheckboxChange('sports')} /> 
          <CustomCheckbox label="Racquetball" value={value.racquetball} onChange={handleCheckboxChange('racquetball')} /> 
          <CustomCheckbox label="Area" value={value.area} onChange={handleCheckboxChange('area')} /> 
          </ul>

          <div className="scuba-snorkel-cat">
            <ul className="media-query-custom-breakpoint">
          <CustomTextField label="Scuba or snorkeling" type="text" value={value.scubaOrSnorkeling} onChange={e => setValue({ scubaOrSnorkeling: e })}  />
            </ul>
          </div>
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
    <FormWrapper title="Sports">
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
      </FormGroup>
    </FormWrapper>
  );
}