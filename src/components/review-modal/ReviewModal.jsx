import PhotoUploader from "../photo-uploader/PhotoUploader";
import "./review-modal.css";

const ReviewModal = ({ isOpen, onClose }) => {
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
        <input type="text" id="fullname" name="fullname" placeholder="Name" />
        <input
          type="email"
          id="email-review"
          name="email-review"
          placeholder="Email"
        />
        <div className="location">
          <input
            type="text"
            id="country"
            name="country"
            value="United States"
            disabled
          />
          <input type="text" id="city" name="city" placeholder="New Jersey" />
        </div>
        <textarea
          id="review"
          name="review"
          cols={40}
          rows={5}
          placeholder="Review"
        ></textarea>
        <div className="review-button">
          <input
            type="button"
            onClick={() => console.log(`Boton presionado`)}
            className="button-review"
            value="Submit Review"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
