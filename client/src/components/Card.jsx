import React, { useRef } from "react";

const Card = ({
  title,
  description,
  image,
  onUpload,
  brightness,
  textPosition,
  color,
}) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFile = (file) => {
    if (file && onUpload) {
      onUpload(file);
    }
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="relative w-96 border border-amber-200 h-165 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
        style={{ filter: `brightness(${200 - brightness}%)` }}
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {/* IMAGE */}
        <img
          src={image}
          alt="card"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>

        {/* TEXT */}
        <div
          className={`absolute left-6 right-6 ${
            textPosition === "top" ? "top-6" : "bottom-6"
          }`}
          style={{ color: color }}
        >
          <p className="text-sm font-semibold opacity-80">{title}</p>
          <h2 className="text-2xl font-bold leading-snug">
            {description}
          </h2>
        </div>

       

        {/* HIDDEN INPUT */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default Card;