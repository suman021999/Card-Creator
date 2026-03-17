import React from "react";
import ColorPicker from "./ColorPicker ";

const TextForm = ({
  title,
  setTitle,
  description,
  setDescription,
  brightness,
  setBrightness,
  textPosition,
  setTextPosition,
  font,
  setFont,
  color,
  setColor,
  handleDownload,
}) => {
  return (
    <div className="bg-[#f6f6f6] p-6 rounded-2xl border border-gray-300 w-95">
      {/* TITLE */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full bg-[#eeeeee] border border-gray-300 rounded-xl px-4 py-3 text-lg  mb-4 outline-none"
      />

      {/* DESCRIPTION */}
      <textarea
        rows="3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full bg-[#eeeeee] border border-gray-300 rounded-xl px-4 py-4 text-lg resize-none outline-none"
      />

      {/* DIVIDER */}
      <div className="border-t my-5"></div>

      {/* BRIGHTNESS */}
      <p className="text-gray-600 text-sm mb-2">Brightness</p>

      <div className="flex items-center gap-3 mb-4">
        <span className="text-gray-400">◐</span>

        <input
          type="range"
          min="50"
          max="150"
          value={brightness}
          onChange={(e) => setBrightness(e.target.value)}
          className="flex-1 accent-purple-400"
        />

        <span className="text-black">◑</span>
      </div>

      {/* TEXT POSITION */}
      <div className="flex items-center gap-4 mb-3">
        <span className="text-xl">≡</span>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={textPosition === "bottom"}
            onChange={() =>
              setTextPosition(textPosition === "top" ? "bottom" : "top")
            }
            className="sr-only peer"
          />

          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-indigo-500"></div>

          <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
        </label>

        <span className="text-gray-600 text-sm">Text: {textPosition}</span>
      </div>

      {/* DIVIDER */}
      <div className="border-t  my-5"></div>

      {/* FONT */}
      <p className="text-gray-600 text-sm mb-2">Font</p>

      <div className="border border-gray-400 rounded-xl px-4 py-3 mb-4">
        <select
          value={font}
          onChange={(e) => setFont(e.target.value)}
          className="w-full rounded-xl outline-none"
        >
          <option value="font1" style={{ fontFamily: "font1" }}>
            Autumn Background
          </option>

          <option value="font2" style={{ fontFamily: "font2" }}>
            Giant Impact
          </option>

          <option value="font3" style={{ fontFamily: "font3" }}>
            Jiggery Pokery
          </option>

          <option value="font4" style={{ fontFamily: "font4" }}>
            Simple Chunky
          </option>

          <option value="font5" style={{ fontFamily: "font5" }}>
            Simple Daisy
          </option>

          <option value="font6" style={{ fontFamily: "font6" }}>
            Agent Orange
          </option>
        </select>
      </div>

      {/* TEXT COLOR */}
      <p className="text-gray-600 text-sm mb-2">Text color</p>

      <ColorPicker color={color} setColor={setColor} />

      {/* DIVIDER */}
      <div className="border-t my-5"></div>

      {/* DOWNLOAD */}
      <button onClick={handleDownload} className="w-full border border-gray-300 py-3 rounded-xl text-lg font-semibold hover:bg-gray-200">
        Download
      </button>

      <p className="text-xs text-gray-500 mt-3">
        * Click the card or drag a new image to change it.
      </p>
    </div>
  );
};

export default TextForm;