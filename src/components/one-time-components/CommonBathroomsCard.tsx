import React, { Dispatch, SetStateAction } from "react";
import { Button, Card } from "@mui/material";
import { CommonBaths, } from "@/app/types/all-form-types";
import SingleCommonBathCard from "./SingleCommonBathCard";
import { useFormData } from "@/app/contexts/form";



interface Props {
  usedLevels: { commonbathsUsedLevels: { value: string; label: string }[]; commonbedsUsedLevels: { value: string; label: string }[] };
  setUsedLevels: Dispatch<SetStateAction<{ commonbathsUsedLevels: { value: string; label: string }[]; commonbedsUsedLevels: { value: string; label: string }[] }>>;
}

export default function CommonBathsCard({usedLevels, setUsedLevels}: Props) {
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
  const newCommonBath: CommonBaths = { level: '', commonBathTypes: [{ type: '', subtype: '' }] };
  setValue({
    bedsNbaths: {
      ...value.bedsNbaths,
      commonBaths: [...value.bedsNbaths.commonBaths, newCommonBath]
    }
  });
};

  
  
  const handleRemoveCard = (cardIndex: number) => {
    const removedLevel = value.bedsNbaths.commonBaths[cardIndex].level;

    setValue({ 
      bedsNbaths: {
        ...value.bedsNbaths,
        commonBaths: value.bedsNbaths.commonBaths.filter((_, index) => index !== cardIndex)
      }
    });
    if (removedLevel !== '') {
      setUsedLevels((prevUsedLevels) => ({
        ...prevUsedLevels,
        commonbathsUsedLevels: prevUsedLevels.commonbathsUsedLevels.filter((level) => level !== removedLevel)
      }));
    }
  };


  
    const handleCardUpdate = (cardIndex: number, updatedCommonBath: CommonBaths) => {
      setValue({
        bedsNbaths: {
        ...value.bedsNbaths,
        commonBaths: value.bedsNbaths.commonBaths.with(
          cardIndex, updatedCommonBath)
      }
      });
    };


  return (
    <>
    <Card className="common-bathroom-cards" sx={{ display: "flex", m: 1, p: 1 }}>
      {value.bedsNbaths.commonBaths.map((card, cardIndex) => (
        <div key={`card-${cardIndex}`}>
          <SingleCommonBathCard usedLevels={usedLevels} setUsedLevels={setUsedLevels} commonBath={card} levelOptions={levelOptions}
 onUpdate={(updatedCommonBath) => handleCardUpdate(cardIndex, updatedCommonBath)} />
          <div className="card-buttons">
            <Button className="button-remove" onClick={() => handleRemoveCard(cardIndex)}>-</Button>
            {value.bedsNbaths.commonBaths.length <= 5 ? (
              <Button className="button-add" onClick={handleAddCard}>+</Button>
            ) : null}
          </div>
        </div>
      ))}
      </Card>
    </>
  );
 
}