//import icons
import clock from '../assets/clock.svg';
import diaphragm from '../assets/diaphragm.svg';
import money from '../assets/money.svg';
import teamwork from '../assets/teamwork.svg';
import home2 from '../assets/home2.png';

//styles
import { About, Desc, Image, Hide } from '../styles';
import styled from 'styled-components';

const ServicesSection = () => {
  return (
    <Services className="services">
      <Desc className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards className="cards">
          <Card className="card">
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card className="card">
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card className="card">
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card className="card">
            <div className="icon">
              <img src={money} alt="" />
              <h3>Affortable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Desc>
      <Image className="image">
        <img src={home2} alt="" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background-color: #fff;
      color: #000;
      padding: 0.8rem;
    }
  }
`;
export default ServicesSection;
