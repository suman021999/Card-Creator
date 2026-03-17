import React, { useRef, forwardRef } from "react";

const Card = forwardRef((props, ref) => {
  const {
    title,
    description,
    image,
    onUpload,
    brightness,
    textPosition,
    color,
    font,
  } = props;

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
    handleFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <div className="flex justify-center items-center">
      <div
        ref={ref}
        className="relative w-96 h-162.5 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
        style={{ filter: `brightness(${200 - brightness}%)` }}
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {/* IMAGE */}
        <img src={image} alt="card" className="w-full h-full object-cover" />

        {/* OVERLAY */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4), transparent)",
          }}
        ></div>

        {/* TEXT */}
        <div
          className={`absolute left-6 right-6 ${
            textPosition === "top" ? "top-6" : "bottom-6"
          }`}
          style={{ color: color, fontFamily: font }}
        >
          <p className="text-4xl font-semibold opacity-80">{title}</p>
          <div className="my-4" />
          <h2 className="text-2xl font-bold leading-snug">{description}</h2>
        </div>

        {/* INPUT */}
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
});

export default Card;
