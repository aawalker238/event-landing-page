import React from 'react';
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

  const scrollTo = (elem, offset) => {
    scroller.scrollTo(elem, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: offset || -130
    });
    props.onClose(false)
  }

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List
        component="nav"
      >
        <ListItem
          button
          onClick={() => scrollTo("featured")}
        >
          Featured
        </ListItem>

        <ListItem
          button
          onClick={() => scrollTo("venue-info", -80)}
        >
          Venue Info
        </ListItem>

        <ListItem
          button
          onClick={() => scrollTo("highlights")}
        >
          Highlights
        </ListItem>

        <ListItem
          button
          onClick={() => scrollTo("pricing", -70)}
        >
          Pricing
        </ListItem>

        <ListItem
          button
          onClick={() => scrollTo("location")}
        >
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;