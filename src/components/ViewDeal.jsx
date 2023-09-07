import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewDeal = () => {
  const rawID = useParams().title;
  const dealID = encodeURIComponent(rawID);
  const cheapSharkLink = `https://www.cheapshark.com/redirect?dealID=${dealID}`;

  const [dealData, setDealData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.cheapshark.com/api/1.0/deals?id=${dealID}`,
      );
      if (!response.ok) {
        throw new Error('API request failed');
      }
      const data = await response.json();
      setDealData(data);
    };
    fetchData().catch((error) => {
      throw error;
    });
  }, [dealID]);

  const dateInfo = new Date(dealData?.gameInfo.releaseDate * 1000);

  return (
    <div>
      {dealData ? (
        <>
        <div className='pageHeader'>
          <img src={dealData.gameInfo.thumb} alt={dealData.gameInfo.name} className='headerImage' />
          <div>
            <h1>{dealData.gameInfo.name}</h1>
            <p>SALE PRICE: {dealData.gameInfo.salePrice}</p>
          </div>
        </div>
        <ul className='pageBody'>
          <li>
            <p>RETAIL PRICE: {dealData.gameInfo.retailPrice}</p>
          </li>
          <li>
            <p>STEAM RATING: {dealData.gameInfo.steamRatingText}</p>
          </li>
          <li>
            <p>NUMBER OF REVIEWS: {dealData.gameInfo.steamRatingCount}</p>
          </li>
          <li>
            <p>POSITIVE REVIEWS: {dealData.gameInfo.steamRatingPercent}%</p>
          </li>
          <li>
            <p>RELEASE DATE: {dateInfo.toLocaleDateString()}</p>
          </li>
          <li>
            <p>STEAM APP ID: {dealData.gameInfo.steamAppID}</p>
          </li>
          <li>
            <a id="cheapSharkLink" href={cheapSharkLink}>LINK TO THE STEAM STORE</a>
          </li>
        </ul>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
    
  );
};

export default ViewDeal;
