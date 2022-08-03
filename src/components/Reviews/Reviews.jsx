import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRewiesMovies } from 'service/service';
import { ReviewsItem } from './ReviewsItem';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getRewiesMovies(movieId).then(data => setReviews(data));
  }, [movieId]);

  return (
    <>
      {reviews.length ? (
        <ul>
          {reviews.length &&
            reviews.map(item => (
              <ReviewsItem
                key={item.id}
                name={item.author}
                text={item.content}
              ></ReviewsItem>
            ))}
        </ul>
      ) : (
        <h3>There is no reviews yet</h3>
      )}
    </>
  );
};

export default Reviews;
