"use client"

import React, {useState} from "react";
import SelectionBox from "./selection";
import Results from "./results";
import SWARACalc from "./swaracalc/swaracalc";
import { SWARAContext } from "./context/swaracontext";

export default function MainPage() {
    const [maxBudget, setMaxBudget] = useState();
    const [mainPriorityIndex, setMainPriorityIndex] = useState({ gaming: "1", work: "2", daily: "3" });
    const [secondaryPriorityIndex, setSecondaryPriorityIndex] = useState({processor: "1", graphiccard: "2", storage: "3", ram: "4"});

  return (
    <>
      <SWARAContext.Provider
        value={{
          mainPriorityIndex,
          setMainPriorityIndex,
          secondaryPriorityIndex,
          setSecondaryPriorityIndex,
        }}
      >
        <SelectionBox />
        <SWARACalc />
        <Results />
      </SWARAContext.Provider>
    </>
  );
}
