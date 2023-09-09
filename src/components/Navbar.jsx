import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <Link to="/">
      <i className="fa-solid fa-chevron-left navItem" style={{ color: '#fcfcff' }} />
    </Link>
    <p className="latoFont">most viewed</p>
    <div className="navItem settings">
      <i className="fa-solid fa-microphone" style={{ color: '#fcfcff' }} />
      <i className="fa-solid fa-gear" style={{ color: '#fcfcff' }} />
    </div>
  </div>
);

export default Navbar;
