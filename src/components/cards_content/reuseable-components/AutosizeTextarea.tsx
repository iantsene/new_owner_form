import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';




interface AutosizeTextareaProps {
  data: {
    roomDescription: string;
    // Define other properties in your data object
  };
  setData: (data: { roomDescription: string }) => void;
}

 function AutosizeTextarea ({ data, setData }: React.FC<AutosizeTextareaProps>){

const {roomDescription} = data;





  const maxCharacters = 500;

  const handleTextareaChange = (e) => {
    const newText = e.target.value;
     
    // Update the data object with the new roomDescription value
    setData({
      ...data,
      roomDescription: newText,
    });
    
  };

  let textColor = 'black';
  if (roomDescription.length >= 125 && roomDescription.length <= 249) {
    textColor = 'green';
  } else if (roomDescription.length >= 250 && roomDescription.length <= 374) {
    textColor = 'darkgoldenrod';
  } else if (roomDescription.length >= 375 && roomDescription.length <= 500) {
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
    value={roomDescription} // Pass the value from your state
    onChange={handleTextareaChange} // Define the onChange handler to update the state
   
     />
     <span className="textbox-char-limit" style={{color: textColor}}>
     Character Limit: {maxCharacters - roomDescription.length} characters left
   </span>
 </div>

  );
}


export default AutosizeTextarea;