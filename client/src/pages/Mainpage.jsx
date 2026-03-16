import React, { useState } from "react";
import TextForm from "../components/Taxtfrom";
import Card from "../components/Card";

const MainPage = () => {
  const [title, setTitle] = useState("Beautiful cow");
  const [description, setDescription] = useState(
    "Discover the mythical sunken ship wreck"
  );

  const [brightness, setBrightness] = useState(100);
  const [textPosition, setTextPosition] = useState("bottom");
  const [mode, setMode] = useState("dark");
  const [font, setFont] = useState("sans");
  const [color, setColor] = useState("#ffffff");

  const image = "https://pluscdn.undraw.co/static/init1opencards.jpg";

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
          mode={mode}
          setMode={setMode}
          font={font}
          setFont={setFont}
          color={color}
          setColor={setColor}
        />

        <Card
          title={title}
          description={description}
          brightness={brightness}
          textPosition={textPosition}
          mode={mode}
          font={font}
          color={color}
          image={image}
        />

      </div>
    </div>
  );
};

export default MainPage;
