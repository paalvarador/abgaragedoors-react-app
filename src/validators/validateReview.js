const validateReview = ({
  image,
  name,
  rating,
  email,
  country,
  city,
  message,
}) => {
  console.log(`file: ${image}`);
  console.log(`name: ${name}`);
  console.log(`email: ${email}`);
  console.log(`country: ${country}`);
  console.log(`city: ${city}`);
  console.log(`review: ${message}`);

  const errors = {};

  if (!image) {
    errors.image = "File image is required";
  }

  if (!name || name.trim().length < 2) {
    errors.name = "Name is required and must be at least 2 characters.";
  }

  if (!rating || rating < 1) {
    errors.rating = "Please select a star rating";
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "A valid email is required.";
  }

  if (!country) {
    errors.country = "Country is required";
  }

  if (!city || city.trim().length < 2) {
    errors.city = "City is required and must be at least 2 characters.";
  }

  if (!message || message.trim().length < 10) {
    errors.message = "Review must be at least 10 characters.";
  }

  return errors;
};

export default validateReview;
