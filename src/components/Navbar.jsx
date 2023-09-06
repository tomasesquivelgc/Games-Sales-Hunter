import { Link } from 'react-router-dom';
import arrowPrevSmall from '../assets/arrowPrevSmall.svg';

const Navbar = () => (
  <div className='navbar'>
    <Link to="/">
      <a>
        {' '}
        <img src={arrowPrevSmall} alt="arrow" style={{width:'30px'}}/>
        {' '}
      </a>
    </Link>
  </div>
);

export default Navbar;
