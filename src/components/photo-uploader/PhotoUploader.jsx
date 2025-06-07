import { useState } from "react";
import "./PhotoUploader.css";

const PhotoUploader = ({ onImageUpload, errors }) => {
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setPreviewUrl(URL.createObjectURL(file));
      onImageUpload(file);
    }
  };

  return (
    <div className="upload-box-wrapper">
      <label
        htmlFor="photo-upload"
        className="upload-box"
        style={errors.image && { borderColor: "red" }}
      >
        {previewUrl ? (
          <img src={previewUrl} alt="Preview" className="preview-image" />
        ) : (
          <>
            <img
              src="https://icon-library.com/images/upload-photo-icon/upload-photo-icon-21.jpg"
              alt="Upload Icon"
              className="upload-icon"
            />
            <p>Upload Photo</p>
          </>
        )}
      </label>
      <input
        type="file"
        id="photo-upload"
        accept="image/*"
        onChange={handleImageChange}
        style={{
          display: "none",
          ...(errors.file && { borderColor: "red", display: "none" }),
        }}
      />
    </div>
  );
};

export default PhotoUploader;
