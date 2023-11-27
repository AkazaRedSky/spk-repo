"use client";

import React, { useState } from "react";
import SelectionBox from "./selection";
import Results from "./results";
import SWARACalc from "./swaracalc/swaracalc";
import { SWARAContext } from "./context/swaracontext";

export default function MainPage() {
  const [maxBudget, setMaxBudget] = useState(100);
  const [resultVisibility, setResultVisibility] = useState(false);
  const [mainPriorityIndex, setMainPriorityIndex] = useState({
    gaming: "1",
    work: "2",
    daily: "3",
  });
  const [secondaryPriorityIndex, setSecondaryPriorityIndex] = useState({
    processor: "1",
    graphiccard: "2",
    storage: "3",
    ram: "4",
  });

  return (
    <>
      <SWARAContext.Provider
        value={{
          maxBudget,
          setMaxBudget,
          mainPriorityIndex,
          setMainPriorityIndex,
          secondaryPriorityIndex,
          setSecondaryPriorityIndex,
          resultVisibility,
          setResultVisibility,
        }}
      >
        <SelectionBox />
        <SWARACalc />
        <Results />
      </SWARAContext.Provider>
    </>
  );
}
