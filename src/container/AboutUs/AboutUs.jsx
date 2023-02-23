import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Welcome to Gericht, an Italian restaurant located in the heart of downtown nairobi.At La Gericht we're passionate about creating delicious, authentic Italian cuisine that showcases the flavors and ingredients of our homeland. Our menu features classic dishes like spaghetti carbonara, veal parmigiana, and tiramisu, as well as seasonal specials and vegetarian options.
We believe in using only the freshest, highest quality ingredients, and we work closely with local farmers and producers to source our ingredients whenever possible. We also take pride in our commitment to sustainability and minimizing our environmental impact.
In addition to our delicious food, we're also dedicated to providing excellent service and creating a welcoming atmosphere for all of our guests. Whether you're here for a romantic date night, a family dinner, or a business lunch, we want you to feel like you're part of our family.Thank you for choosing La Vita, and we look forward to serving you soon.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Our restaurant was founded in 2023 by chef Brandon Ogola, who grew up in a small village in Kisumu and has been cooking traditional Italian dishes for over 20 years.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;