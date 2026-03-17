import React, { useState, useRef } from "react";
import TextForm from "../components/Taxtfrom";
import Card from "../components/Card";
import html2canvas from "html2canvas";

const MainPage = () => {
  const cardRef = useRef();

  const [title, setTitle] = useState("Beautiful cow");
  const [description, setDescription] = useState(
    "Discover the mythical sunken ship wreck"
  );
  const [brightness, setBrightness] = useState(100);
  const [textPosition, setTextPosition] = useState("bottom");
  const [font, setFont] = useState("serif");
  const [color, setColor] = useState("#ffffff");

  const [image, setImage] = useState(
    "https://pluscdn.undraw.co/static/init1opencards.jpg"
  );

  // ✅ upload
  const handleUpload = (file) => {
    const url = URL.createObjectURL(file);
    setImage(url);
  };

  // ✅ download
  const handleDownload = async () => {
    const element = cardRef.current;

    await document.fonts.ready;

    const canvas = await html2canvas(element, {
      useCORS: true,
      scale: 2,
    });

    const link = document.createElement("a");
    link.download = "card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">
      <div className="grid md:grid-cols-2 gap-16 w-full max-w-6xl">

        <TextForm
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          brightness={brightness}
          setBrightness={setBrightness}
          textPosition={textPosition}
          setTextPosition={setTextPosition}
          font={font}
          setFont={setFont}
          color={color}
          setColor={setColor}
          handleDownload={handleDownload}
        />

        <Card
          ref={cardRef}
          title={title}
          description={description}
          image={image}
          onUpload={handleUpload}
          brightness={brightness}
          textPosition={textPosition}
          color={color}
          font={font}
        />

      </div>
    </div>
  );
};

export default MainPage;