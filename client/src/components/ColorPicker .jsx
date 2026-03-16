import React, { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPicker = ({ color, setColor }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-3 mb-5 relative">

      {/* COLOR BAR */}
      <div className="flex-1 bg-[#eeeeee] rounded-xl">
        <div className="h-8 rounded" style={{ background: color }}></div>
      </div>

      {/* COLOR CIRCLE */}
      <div
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full border-teal-400 border-2 cursor-pointer"
        style={{ backgroundColor: color }}
      ></div>

      <span className="text-gray-600 text-sm">{color}</span>

      {/* PICKER NEAR CIRCLE */}
      {open && (
        <div className="absolute  -top-48 left-96 z-50">
          <SketchPicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;