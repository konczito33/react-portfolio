import styled from 'styled-components';
import { Link } from 'react-router-dom';

//images
import athelete from '../assets/athlete-small.png';
import theracer from '../assets/theracer-small.png';
import goodtimes from '../assets/goodtimes-small.png';

const OurWork = () => {
  return (
    <Work>
      <Movie>
        <h2>The athlete</h2>
        <div className="line"></div>
        <Link>
          <img src={athelete} alt="" />
        </Link>
      </Movie>
      <Movie>
        <h2>The racer</h2>
        <div className="line"></div>
        <Link>
          <img src={theracer} alt="" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link>
          <img src={goodtimes} alt="" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    object-position: center;
  }
`;

export default OurWork;
