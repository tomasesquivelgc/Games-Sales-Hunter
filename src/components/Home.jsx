import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDeals } from '../redux/homeSlice';
import './Home.css';

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
      <h1>Home</h1>
      <p>This is the home page</p>
      <div  className='dealsList'>
      {deals.map((deal) => (
        <div key={deal.dealID}>
          <h2>{deal.title}</h2>
          <img src={deal.thumb} alt={deal.title} />
          <p>{deal.salePrice}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Home;
