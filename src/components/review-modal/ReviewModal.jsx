import axios from "axios";
import { useState } from "react";
import validateReview from "../../validators/validateReview";
import PhotoUploader from "../photo-uploader/PhotoUploader";
import StarRating from "../star-rating/StarRating";
import "./review-modal.css";

const ReviewModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    rating: 0,
    email: "",
    country: "United States",
    city: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok) {
        setFormData((prevData) => ({
          ...prevData,
          image: data.secure_url,
        }));
      } else {
        console.error(`Cloudinary upload failed: ${JSON.stringify(data)}`);
      }
    } catch (error) {
      console.log("Error uploading image", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const validationErrors = validateReview(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    sendReview(formData);
    setErrors({});
    onClose();
  };

  const sendReview = (data) => {
    const { image, name, rating, email, city, country, message } = data;

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("rating", rating);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("city", city);
    formData.append("country", country);
    formData.append("state", false);

    axios
      .post("http://localhost:3000/api/testimonial", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(
          `Este es el mensaje que se muestra: ${JSON.stringify(res)}`
        );
        res.status === 200
          ? console.log("review created")
          : console.log("review not created");
      })
      .catch((err) => {
        console.error(err);
      });
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
        <PhotoUploader onImageUpload={handleImageUpload} errors={errors} />
        <StarRating
          rating={formData.rating}
          onRatingChange={(rating) =>
            setFormData((prev) => ({ ...prev, rating }))
          }
          errors={errors}
        />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          style={errors.name && { borderColor: "red" }}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={errors.email && { borderColor: "red" }}
        />
        <div className="location">
          <input
            type="text"
            id="country"
            name="country"
            value="United States"
            style={errors.country && { borderColor: "red" }}
            disabled
          />
          <input
            type="text"
            id="city"
            name="city"
            placeholder="New Jersey"
            style={errors.city && { borderColor: "red" }}
            onChange={handleChange}
          />
        </div>
        <textarea
          id="message"
          name="message"
          cols={40}
          rows={5}
          placeholder="Type your review"
          value={formData.message}
          maxLength={400}
          style={errors.message && { borderColor: "red" }}
          onChange={handleChange}
        />
        <span>{formData.message.length}/400</span>
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
