"use client";

import { useState, useRef, useEffect, useContext } from "react";
import { Tooltip } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { SWARAContext } from "./context/swaracontext";
export default function SelectionBox() {
  const { setMainPriorityIndex, setSecondaryPriorityIndex, setResultVisibility, maxBudget, setMaxBudget } = useContext(SWARAContext);

  const [isLoading, setIsLoading] = useState(false);
  const [mainPriority, setMainPriority] = useState(["Gaming", "Work", "Daily"]); // Need better wording, this is too ambiguous

  const [secondaryPriority, setSecondaryPriority] = useState([
    "Processor",
    "GraphicCard",
    "Storage",
    "RAM",
    // "Price",
  ]); // Fix the categories

  // Drag and drop

  // save reference for dragItem and dragOverItem
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  // Drag and Hover Logic2

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

  useEffect(() => {
    let newPriorityIndex = {};
    mainPriority.forEach((priority, index) => {
      newPriorityIndex[priority.toLowerCase()] = index + 1;
    });
    setMainPriorityIndex(newPriorityIndex); 
  }, [mainPriority, setMainPriorityIndex]);

  useEffect(() => {
    let newPriorityIndex = {};
    secondaryPriority.forEach((priority, index) => {
      newPriorityIndex[priority.toLowerCase()] = index + 1;
    });
    setSecondaryPriorityIndex(newPriorityIndex);
  }, [secondaryPriority, setSecondaryPriorityIndex]);

  const handleMaxBudget = (e) => {
    setMaxBudget(e.target.value.replace(/\D/, ""));
    setResultVisibility(false);
    setIsLoading(false);
  };

  const handleCalculate = () => {
  setIsLoading(true);

  setTimeout(() => {
    setIsLoading(false);
    setResultVisibility(true);
  }, 6900); // 6.9 seconds
  };
  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-lg text-slate-800">
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
                  content={"Drag and drop to modify your priority"}
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
              <Tooltip
                color="primary"
                placement="right"
                content={"Drag and drop to modify your priority"}
                className="capitalize"
                showArrow={true}
              >
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
              </Tooltip>
              <br />
            </div>
          ))}
        </div>
        <div className="relative py-3">
          <p className="text-center font-bold text-base text-slate-800">
            Budget
          </p>
          <div>
            <Tooltip
              color="primary"
              placement="right"
              content={"Input your maximum budget"}
              className="capitalize"
              showArrow={true}
            >
              <input
                type="text"
                className="border-slate-700 border-2 bg-white font-semibold text-center select-none text-sm text-black"
                value={maxBudget}
                onChange={handleMaxBudget}
                pattern="[0-9]*"
                inputMode="numeric"
              />
            </Tooltip>
            <br />
          </div>
        </div>
        <div className="flex items-end">
          <Button
            color="success"
            className="flex text-center text-sm text-white"
            onClick={handleCalculate}
            isLoading={isLoading}
          >
            Calculate
          </Button>
        </div>
      </div>
    </div>
  );
}
