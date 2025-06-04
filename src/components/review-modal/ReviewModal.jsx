import { useState } from "react";
import PhotoUploader from "../photo-uploader/PhotoUploader";
import "./review-modal.css";
import validateReview from "../../validators/validateReview";

const ReviewModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    emailReview: "",
    country: "United States",
    city: "",
    review: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const validationErrors = validateReview(formData);

    console.log(`validationErrors: ${validationErrors}`);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Review submitted", formData);
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("reviewModal__content")) {
      onClose();
    }
  };

  return (
    <div className="reviewModal__content" onClick={handleBackdropClick}>
      <div className="reviewModal__modal">
        <h3 className="title">LEAVE A REVIEW</h3>
        <PhotoUploader />
        <input
          type="text"
          id="fullname"
          name="fullname"
          placeholder="Name"
          onChange={handleChange}
        />
        {errors.fullname && <span className="error">{errors.fullname}</span>}
        <input
          type="email"
          id="email-review"
          name="emailReview"
          placeholder="Email"
          onChange={handleChange}
        />
        {errors.emailReview && (
          <span className="error">{errors.emailReview}</span>
        )}
        <div className="location">
          <input
            type="text"
            id="country"
            name="country"
            value="United States"
            disabled
          />
          <input
            type="text"
            id="city"
            name="city"
            placeholder="New Jersey"
            onChange={handleChange}
          />
        </div>
        {errors.country && <span className="error">{errors.country}</span>}
        {errors.city && <span className="error">{errors.city}</span>}
        <textarea
          id="review"
          name="review"
          cols={40}
          rows={5}
          placeholder="Review"
          onChange={handleChange}
        />
        {errors.review && <span className="error">{errors.review}</span>}
        <div className="review-button">
          <input
            type="button"
            onClick={handleSubmit}
            className="button-review"
            value="Submit Review"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
