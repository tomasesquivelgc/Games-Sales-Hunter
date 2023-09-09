import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setDeals } from '../redux/homeSlice';
import steamImg from '../assets/steamImg.svg';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const deals = useSelector((state) => state.deals);
  const dispatch = useDispatch();

  useEffect(() => {
    if (deals.length === 0) {
      fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1')
        .then((res) => res.json())
        .then((data) => {
          dispatch(setDeals(data));
        });
    }
  }, [deals, dispatch]);

  const lowerCaseSearch = searchTerm.toLowerCase();
  const filteredDeals = deals.filter((deal) => deal.title.toLowerCase().includes(lowerCaseSearch));

  return (
    <div>
      <div className="pageHeader">
        <img src={steamImg} alt="steam" style={{ width: '100px' }} />
        <h1>STEAM DEALS</h1>
      </div>
      <div className="organizer">
        SEARCH FOR A GAME:
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="dealsList">
        {filteredDeals.map((deal) => (
          <Link to={`/deals/${deal.dealID}`} key={deal.dealID} className="dealCard">
            <div>
              <i className="fa-regular fa-circle-right" style={{ color: '#fcfcff', float: 'right' }} />
              <div style={{ clear: 'both' }}>
                <img src={deal.thumb} alt={deal.title} />
                <h2>{deal.title}</h2>
                <p>{deal.salePrice}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
