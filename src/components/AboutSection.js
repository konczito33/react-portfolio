import home1 from '../assets/home1.png';
import styled from 'styled-components';
import { Hide, About, Desc, Image } from '../styles';

const AboutSection = () => {
  return (
    <About className="about">
      <Desc className="desc">
        <Hide className="hide">
          <h2>We work to make</h2>
        </Hide>
        <Hide className="hide">
          <h2>
            your <span className="green">dreams</span> come
          </h2>
        </Hide>
        <Hide className="hide">
          <h2>true.</h2>
        </Hide>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </p>
        <button>Contact us</button>
      </Desc>
      <Image className="image">
        <img src={home1} alt="" />
      </Image>
    </About>
  );
};

//styled components

export default AboutSection;
