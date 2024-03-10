import React, { useState } from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from '@mui/material/Tooltip';

interface Props {
  message: string;
}

function InfoIcon({ message }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    if (window.innerWidth <= 600) {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 5000);
    }
  };

  return (
    <Tooltip title={message} open={open} onClose={handleClose} onOpen={handleOpen} enterTouchDelay={0}>
      <div onClick={handleClick}>
        <InfoOutlinedIcon className='infoIcon' />
      </div>
    </Tooltip>
  );
}

export default InfoIcon;
