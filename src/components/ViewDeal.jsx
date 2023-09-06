import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewDeal = () => {
  let rawID = useParams().title;
  let dealID = encodeURIComponent(rawID);

  const [dealData, setDealData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.cheapshark.com/api/1.0/deals?id=${dealID}`
        );
        if (!response.ok) {
          throw new Error("API request failed");
        }
        const data = await response.json();
        setDealData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [dealID]);

  console.log(dealData)

  return (
    <div>
      <h1>ViewDeal</h1>
      {dealData ? (
        <div>
          <h2>{dealData.gameInfo.name}</h2>
          <img src={dealData.gameInfo.thumb} alt={dealData.gameInfo.name} />
          <p>{dealData.gameInfo.salePrice}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ViewDeal;