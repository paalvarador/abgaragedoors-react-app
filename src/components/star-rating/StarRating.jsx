import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const StarRating = ({ rating, onRatingChange, errors }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom: "5px", gap: "8px" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <FontAwesomeIcon
          key={star}
          icon={star <= rating ? solidStar : regularStar}
          style={{
            cursor: "pointer",
            fontSize: "24px",
            color: star <= rating ? "#FFD700" : "#CCC",
            border: errors.rating && "1px solid red",
          }}
          onClick={() => onRatingChange(star)}
        />
      ))}
    </div>
  );
};

export default StarRating;
