import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';




interface AutosizeTextareaProps {
  data: {
    briefDescription: string;
  };
  setData: (data: { briefDescription: string }) => void;
}

 function AutosizeTextarea ({ data, setData }: AutosizeTextareaProps){

const {briefDescription} = data;





  const maxCharacters = 500;

  const handleTextareaChange = (e) => {
    const newText = e.target.value;
     
    // Update the data object with the new roomDescription value
    setData({
      ...data,
      briefDescription: newText,
    });
    
  };

  let textColor = 'black';
  if (briefDescription.length >= 125 && briefDescription.length <= 249) {
    textColor = 'green';
  } else if (briefDescription.length >= 250 && briefDescription.length <= 374) {
    textColor = 'darkgoldenrod';
  } else if (briefDescription.length >= 375 && briefDescription.length <= 500) {
    textColor = 'red';
  }

  
  return (
    <div className='textarea-div'>
    <TextareaAutosize 
    maxLength={500} 
    className='textarea-css'
    aria-label="minimum height" 
    minRows={3} 
    placeholder="Please describe your property"
    value={briefDescription} 
    onChange={handleTextareaChange}
   
     />
     <span className="textbox-char-limit" style={{color: textColor}}>
     Character Limit: {maxCharacters - briefDescription.length} characters left
   </span>
 </div>

  );
}


export default AutosizeTextarea;