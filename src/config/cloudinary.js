import { Cloudinary } from "cloudinary-react";

export const cloudinary = new Cloudinary({
  cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  secure: true,
});
