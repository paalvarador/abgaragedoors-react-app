const validateReview = ({ fullname, emailReview, country, city, review }) => {
  console.log(`name: ${fullname}`);
  console.log(`email: ${emailReview}`);
  console.log(`country: ${country}`);
  console.log(`city: ${city}`);
  console.log(`review: ${review}`);

  const errors = {};

  if (!fullname || fullname.trim().length < 2) {
    errors.fullname = "Name is required and must be at least 2 characters.";
  }

  if (!emailReview || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailReview)) {
    errors.emailReview = "A valid email is required.";
  }

  if (!country) {
    errors.country = "Country is required";
  }

  if (!city || city.trim().length < 2) {
    errors.city = "City is required and must be at least 2 characters.";
  }

  if (!review || review.trim().length < 10) {
    errors.review = "Review must be at least 10 characters.";
  }

  return errors;
};

export default validateReview;
