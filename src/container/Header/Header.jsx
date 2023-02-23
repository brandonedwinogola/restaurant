import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Welcome to Gericht - Where every meal is a masterpiece. From the moment you step through our doors, you'll be transported to a world of culinary delights, where every dish is crafted with care and passion. Whether you're joining us for a romantic dinner for two or a lively celebration with friends, our team is dedicated to creating an unforgettable dining experience that will leave you wanting more. Come dine with us and discover why Gericht is more than just a restaurant - It's a journey of the senses. </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;