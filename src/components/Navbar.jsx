import { Link } from 'react-router-dom';
import arrowPrevSmall from '../assets/arrowPrevSmall.svg';

const Navbar = () => (
  <div>
    <Link to="/">
      <button type="button">
        {' '}
        <img src={arrowPrevSmall} alt="arrow" style={{width:'20px'}}/>
        {' '}
      </button>
    </Link>
  </div>
);

export default Navbar;
