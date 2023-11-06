"use client";

import { useState, useRef } from "react";

export default function SelectionBox() {
  const [mainPriority, setMainPriority] = useState(["Gaming", "Work", "Daily"]); // Need better wording, this is too ambiguous

  const [secondaryPriority, setSecondaryPriority] = useState([
    "Processor",
    "Graphic Card",
    "SSD/HDD",
    "RAM",
    "Price",
  ]); // Fix the categories

  // Drag and drop

  // save reference for dragItem and dragOverItem
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  //const handle drag sorting
  const handleSortMain = () => {
    //duplicate items
    let _mainPriority = [...mainPriority];

    //remove and save the dragged item content
    const draggedItemContent = _mainPriority.splice(dragItem.current, 1)[0];

    //switch the position
    _mainPriority.splice(dragOverItem.current, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    setMainPriority(_mainPriority);
  };

  const handleSortSecondary = () => {
    //duplicate items
    let _secondaryPriority = [...secondaryPriority];

    //remove and save the dragged item content
    const draggedItemContent = _secondaryPriority.splice(dragItem.current, 1)[0];

    //switch the position
    _secondaryPriority.splice(dragOverItem.current, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    setSecondaryPriority(_secondaryPriority);
  };

  return (
    <div>
      <div>
        <h1 className="text-left text-white text-lg">Selection Priority</h1>
      </div>
      <div>
        <div>
          <div className="relative py-4">
            <p className="text-sm">Main Priority</p>
            {mainPriority.map((criterion, index) => (
            <div key={index}>
              <div
                className="border-white border-6 bg-white"
                draggable
                onDragStart={(e) => (dragItem.current = index)}
                onDragEnter={(e) => (dragOverItem.current = index)}
                onDragEnd={handleSortMain}
                onDragOver={(e) => e.preventDefault()}
              >
                <p className="select-none text-sm text-black">{criterion}</p>
              </div>
              <br />
            </div>
          ))}
          </div>
        </div>
        <div className="relative py-3">
          <p className="text-sm">Secondary Priority</p>

          {secondaryPriority.map((criterion, index) => (
            <div key={index}>
              <div
                className="border-white border-6 bg-white"
                draggable
                onDragStart={(e) => (dragItem.current = index)}
                onDragEnter={(e) => (dragOverItem.current = index)}
                onDragEnd={handleSortSecondary}
                onDragOver={(e) => e.preventDefault()}
              >
                <p className="select-none text-sm text-black">{criterion}</p>
              </div>
              <br />
            </div>
          ))}
        </div>
        <div className="flex place-items-end">
          <button className="border-white bg-slate-200 text-gray-700">
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
}
