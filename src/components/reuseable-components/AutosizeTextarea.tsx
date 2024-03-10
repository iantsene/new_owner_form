import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useFormData } from '@/app/contexts/form';



 function AutosizeTextarea (){

  const {value, setValue}  = useFormData();

  const briefDescription = value.mainDescription?.briefDescription || '';

  const maxCharacters = 500;

  const handleTextareaChange = (e: any) => {
    const newText = e.target.value;
     
    setValue({
      ...value,
      mainDescription:{...value.mainDescription,
      briefDescription: newText,}
    })
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
    placeholder="Please describe your property. Do not forget to mention why it stands out from the competition"
    value={value.mainDescription.briefDescription} 
    onChange={handleTextareaChange}
   
     />
     <span className="textbox-char-limit" style={{color: textColor}}>
     Character Limit: {maxCharacters - briefDescription.length} characters left
   </span>
 </div>

  );
}


export default AutosizeTextarea;