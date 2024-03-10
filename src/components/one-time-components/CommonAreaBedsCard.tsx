import React, { Dispatch, SetStateAction } from "react";
import { Button, Card } from "@mui/material";
import { CommonAreaBeds,} from "@/app/types/all-form-types";
import SingleCommonAreaBedCard from "./SingleCommonAreaBedCard";
import { useFormData } from "@/app/contexts/form";



interface Props {
  usedLevels: { commonbathsUsedLevels: { value: string; label: string }[]; commonbedsUsedLevels: { value: string; label: string }[]; };
  setUsedLevels: Dispatch<SetStateAction<{ commonbathsUsedLevels: { value: string; label: string }[]; commonbedsUsedLevels: { value: string; label: string }[] }>>;
}

export default function CommonAreaBedsCard({usedLevels, setUsedLevels}: Props) {
  const { value, setValue } = useFormData();


  const levelOptions = [
    { value: "ground", label: "Ground" },
    { value: "first", label: "First" },
    { value: "second", label: "Second" },
    { value: "third", label: "Third" },
    { value: "attic", label: "Attic" },
    { value: "annex", label: "Annex" },
  ];



const handleAddCard = () => {
  const newCommonAreaBed: CommonAreaBeds = { level: '', commonBeds: [] };
  setValue({
    bedsNbaths: {
      ...value.bedsNbaths,
      commonAreaBeds: [...value.bedsNbaths.commonAreaBeds, newCommonAreaBed]
    }
  });
};
  
  
  const handleRemoveCard = (cardIndex: number) => {
    const removedLevel = value.bedsNbaths.commonAreaBeds[cardIndex].level;
    
    setValue({ 
      bedsNbaths: {
        ...value.bedsNbaths,
        commonAreaBeds: value.bedsNbaths.commonAreaBeds.filter((_, index) => index !== cardIndex)
      }
    });

    if (removedLevel !== '') {
      setUsedLevels((prevUsedLevels) => {
        const updatedLevels = prevUsedLevels.commonbedsUsedLevels.filter((level) => level !== removedLevel);
        return {
          ...prevUsedLevels,
          commonbedsUsedLevels: updatedLevels,
        };
      });
    }
   
  };
  

  
    const handleCardUpdate = (cardIndex: number, updatedCommonAreaBed: CommonAreaBeds) => {
      setValue({
        bedsNbaths: {
        ...value.bedsNbaths,
        commonAreaBeds: value.bedsNbaths.commonAreaBeds.with(
          cardIndex, updatedCommonAreaBed)
      }
      });
    };

  return (
    <>
    <Card className="common-bathroom-cards" sx={{ display: "flex", m: 1, p: 1 }}>
      {value.bedsNbaths.commonAreaBeds.map((card, cardIndex) => (
        <div key={`card-${cardIndex}`}>
          <SingleCommonAreaBedCard commonAreaBed={card} usedLevels={usedLevels} setUsedLevels={setUsedLevels} levelOptions={levelOptions}
 onUpdate={(updatedCommonAreaBed) => handleCardUpdate(cardIndex, updatedCommonAreaBed)} />
          <div className="card-buttons">
            <Button className="button-remove" onClick={() => handleRemoveCard(cardIndex)}>-</Button>
            {value.bedsNbaths.commonAreaBeds.length <= 5 ? (
              <Button className="button-add" onClick={handleAddCard}>+</Button>
            ) : null}
          </div>
        </div>
      ))}
      </Card>
    </>
  );
 
}