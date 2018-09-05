import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../resources/images/icons/ticket.png';

export const ButtonMain = (props) => {
  return (
    <Button
      href={props.buttonLink || '/#'}
      variant="contained"
      size="small"
      style={{
        background: props.buttonBGColor || 'red',
        color: props.buttonFontColor || 'white'
      }}
    >
      <img
        src={TicketIcon}
        className="iconImage"
        alt="icon-button"
      />
      {props.buttonText}
    </Button>
  );
};