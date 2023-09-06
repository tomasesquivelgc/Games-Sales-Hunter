import { useParams } from "react-router-dom";

const ViewDeal = () => {
  let rawID = useParams().title;
  let dealID = encodeURIComponent(rawID);
  console.log(dealID);
return (
<div>
<h1>ViewDeal</h1>
</div>
);
};

export default ViewDeal;