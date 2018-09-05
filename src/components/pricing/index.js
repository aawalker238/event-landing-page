import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

import { ButtonMain } from '../../utils/buttons';

class index extends Component {
  
  state = {
    prices: [100, 150, 250],
    seatingSections: ['Balcony', 'Middle', 'VIP'],
    desc: [
      'Way up in the nose bleed section, but at least you can say you were there...',
      'For the middle class folk (wink wink)...nice views, loud as a jet and potential crowd surfing',
      'Stage jumpers only. For the friends of the band, family of the crew, or the crew itself...'
    ],
    linkTo: [
      '/#',
      '/#',
      '/#'
    ],
    delay: [500, 0, 500]
  }

  showBoxes = () => (
    this.state.prices.map((box, i) => (
      <Zoom
        key={`__${i}`}
        delay={this.state.delay[i]}
      >
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.seatingSections[i]}</span>
            </div>
            <div className="pricing_description">
              {this.state.desc[i]}
            </div>
            <div className="pricing_buttons">
              <ButtonMain
                buttonLink={this.state.linkTo[i]}
                buttonText={'BUY TICKETS'}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ))
  )
  
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>
        </div>
        
      </div>
    );
  }
}

export default index;