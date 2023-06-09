import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReviewItem from "./ReviewItem";

const PlaceSearchResultContainer = ({ resultReviews }) => {
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (resultReviews.length > 0) {
      setMsg(`리뷰 ${resultReviews.length}건`);
    } else {
      setMsg("");
    }
  }, [resultReviews]);
  return (
    <div>
      <div className='review_text'>{msg}</div>
      <div>
        {resultReviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default PlaceSearchResultContainer;
