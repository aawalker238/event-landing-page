import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import { ButtonMain } from '../../utils/buttons';

class Discount extends Component {
  
  state = {
    discountStart: 0,
    discountEnd: 30
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  }
  
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          
          <Fade
            onReveal={this.percentage}
          >
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="dicount_description">
              <h3>Purchase tickets before October 1st</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam nisl, tempor id mattis nec, accumsan eget quam. Vivamus eleifend justo eget justo rutrum, sit amet scelerisque dui pulvinar.</p>
              <ButtonMain
                buttonText={'Buy tickets'}
                buttonBGColor={''}
                buttonFontColor={''}
                buttonLink={''}
              />
            </div>
          </Slide>

        </div>
      </div>
    );
  }
}

export default Discount;