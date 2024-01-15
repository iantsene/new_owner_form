import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";
import CustomTextField from "../reuseable-components/CustomTextField";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useFormData } from '@/app/contexts/form';



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
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.skiing} onChange={handleCheckboxChange('skiing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Skiing</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.iceSkating} onChange={handleCheckboxChange('iceSkating')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Ice skating</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.crossCountrySkiing} onChange={handleCheckboxChange('crossCountrySkiing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Cross country skiing</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.snowboarding} onChange={handleCheckboxChange('snowboarding')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Snowboarding</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.snowmobiling} onChange={handleCheckboxChange('snowmobiling')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Snowmobiling</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.skiLiftPrivileges} onChange={handleCheckboxChange('skiLiftPrivileges')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Ski lift privileges</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.skiLiftPrivilegesOptional} onChange={handleCheckboxChange('skiLiftPrivilegesOptional')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Ski lift privileges optional</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.rockClimbing} onChange={handleCheckboxChange('rockClimbing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Rock climbing</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.mountainBiking} onChange={handleCheckboxChange('mountainBiking')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Mountain biking</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.mountaineering} onChange={handleCheckboxChange('mountaineering')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Mountaineering</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.mountainClimbing} onChange={handleCheckboxChange('mountainClimbing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Mountain climbing</span></div>} /></li>
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
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.spelunking} onChange={handleCheckboxChange('spelunking')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Spelunking</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.hiking} onChange={handleCheckboxChange('hiking')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Hiking</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.paragliding} onChange={handleCheckboxChange('paragliding')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Paragliding</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.golf} onChange={handleCheckboxChange('golf')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Golf</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.golfOptional} onChange={handleCheckboxChange('golfOptional')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Golf optional</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.hunting} onChange={handleCheckboxChange('hunting')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Hunting</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.rollerBlading} onChange={handleCheckboxChange('rollerBlading')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Roller blading</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.cycling} onChange={handleCheckboxChange('cycling')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Cycling</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.hotAirBallooning} onChange={handleCheckboxChange('hotAirBallooning')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Hot air ballooning</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.tennis} onChange={handleCheckboxChange('tennis')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Tennis</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.equestrianEvents} onChange={handleCheckboxChange('equestrianEvents')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Equestrian events</span></div>} /></li>
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
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.fishing} onChange={handleCheckboxChange('fishing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Fishing</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.fishingBay} onChange={handleCheckboxChange('fishingBay')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Fishing bay</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.deepseaFishing} onChange={handleCheckboxChange('deepseaFishing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Deepsea fishing</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.fishingFly} onChange={handleCheckboxChange('fishingFly')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Fishing fly</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.fishingFreshwater} onChange={handleCheckboxChange('fishingFreshwater')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Fishing freshwater</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.fishingSurf} onChange={handleCheckboxChange('fishingSurf')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Fishing surf</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.jetSkiing} onChange={handleCheckboxChange('jetSkiing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Jet skiing</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.kayaking} onChange={handleCheckboxChange('kayaking')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Kayaking</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.rafting} onChange={handleCheckboxChange('rafting')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Rafting</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.parasailing} onChange={handleCheckboxChange('parasailing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Parasailing</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.pierFishing} onChange={handleCheckboxChange('pierFishing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Pier fishing</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.skiingWater} onChange={handleCheckboxChange('skiingWater')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Water skiing</span></div>} /></li>
            <li className="list-items wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.sportsTubingWater} onChange={handleCheckboxChange('sportsTubingWater')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Sports tubing water</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.sailing} onChange={handleCheckboxChange('sailing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Sailing</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.snorkeling} onChange={handleCheckboxChange('snorkeling')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Snorkeling</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.swimming} onChange={handleCheckboxChange('swimming')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Swimming</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.whitewaterRafting} onChange={handleCheckboxChange('whitewaterRafting')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">White water rafting</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.windSurfing} onChange={handleCheckboxChange('windSurfing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Wind surfing</span></div>} /></li>
            <li className="list-items wrap-below"><FormControlLabel control={<Checkbox size="small" checked={value.sportsSnorkelingDiving} onChange={handleCheckboxChange('sportsSnorkelingDiving')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Sports snorkeling diving</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.surfing} onChange={handleCheckboxChange('surfing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Surfing</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.powerBoatRental} onChange={handleCheckboxChange('powerBoatRental')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Power boat rental</span></div>} /></li>
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
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.basketballCourt} onChange={handleCheckboxChange('basketballCourt')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">basketball court</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.sports} onChange={handleCheckboxChange('sports')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Sports</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.racquetball} onChange={handleCheckboxChange('racquetball')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Racquetball</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.area} onChange={handleCheckboxChange('area')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Area</span></div>} /></li>
          </ul>

          <div className="scuba-snorkel-cat">
            <ul className="media-query-custom-breakpoint">
            <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Scuba or snorkeling:</span><CustomTextField label="Scuba or snorkeling" type="text" value={value.scubaOrSnorkeling} onChange={e => setValue({scubaOrSnorkeling : e})}  ></CustomTextField></div></li>
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