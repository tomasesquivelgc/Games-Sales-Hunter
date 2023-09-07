import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setDeals } from '../redux/homeSlice';
import steamImg from '../assets/steamImg.svg';

function Home() {
  const deals = useSelector((state) => state.home);
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

  return (
    <div>
      <div className="pageHeader">
        <img src={steamImg} alt="steam" style={{ width: '100px' }} />
        <h1>STEAM DEALS</h1>
      </div>
      <div className="organizer">GAMES BY DEAL RANKING</div>
      <div className="dealsList">
        {deals.map((deal) => (
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
