"use client";

import { useState, useRef } from "react";
import { Tooltip } from "@nextui-org/react";

export default function SelectionBox() {
  const [mainPriority, setMainPriority] = useState(["Gaming", "Work", "Daily"]); // Need better wording, this is too ambiguous
  const [tooltipPrimary, setTooltipPrimary] = useState(["lorem ipsum", "lorem ipsum", "lorem ipsum"]); // Need better wording, this is too ambiguous
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

  // Drag and Hover Logic

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
    const draggedItemContent = _secondaryPriority.splice(
      dragItem.current,
      1
    )[0];
    //switch the position
    _secondaryPriority.splice(dragOverItem.current, 0, draggedItemContent);
    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;
    //update the actual array
    setSecondaryPriority(_secondaryPriority);
  };

  const handleHoverDesc = () => {};

  return (
    <div>
      <div>
        <h1 className="text-left font-bold text-lg text-slate-800">
          Selection Priority
        </h1>
      </div>
      <div>
        <div>
          <div className="relative py-4">
            <p className="text-center font-bold text-base text-slate-800">
              Main Priority
            </p>
            {mainPriority.map((criterion, index) => (
              <div key={index}>
                <Tooltip
                  color="primary"
                  placement="right"
                  content={tooltipPrimary[index]}
                  className="capitalize"
                  showArrow={true}
                >
                  <div
                    className="border-slate-700 border-2 bg-white cursor-move"
                    draggable
                    onDragStart={(e) => (dragItem.current = index)}
                    onDragEnter={(e) => (dragOverItem.current = index)}
                    onDragEnd={handleSortMain}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <p className="font-semibold text-center select-none text-sm text-black">
                      {criterion}
                    </p>
                  </div>
                </Tooltip>
                <br />
              </div>
            ))}
          </div>
        </div>

        <div className="relative py-3">
          <p className="text-center font-bold text-base text-slate-800">
            Secondary Priority
          </p>
          {secondaryPriority.map((criterion, index) => (
            <div key={index}>
              <div
                className="border-slate-700 border-2 bg-white cursor-move"
                draggable
                onDragStart={(e) => (dragItem.current = index)}
                onDragEnter={(e) => (dragOverItem.current = index)}
                onDragEnd={handleSortSecondary}
                onDragOver={(e) => e.preventDefault()}
              >
                <p className="font-semibold text-center select-none text-sm text-black">
                  {criterion}
                </p>
              </div>
              <br />
            </div>
          ))}
        </div>
        <div className="flex items-end">
          <button className="flex text-center bg-white border-slate-700 border text-sm">
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
}
