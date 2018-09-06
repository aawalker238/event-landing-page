import React from 'react';
import Fade from 'react-reveal/Fade';

import { eventName } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">{ eventName }</div>
        <div className="footer_copyright">
          &copy; { eventName } 2018 | All rights reserved
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;