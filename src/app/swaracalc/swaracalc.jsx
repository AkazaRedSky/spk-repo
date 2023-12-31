"use client";
import React from "react";
import SWARAMain from "./swaramain";
import SWARASecondary from "./swarasecondary";
import SWARAWeight from "./swaraweightcalc";
export default function SWARACalc() {
  return (
    <div>
      <div className="text-center font-bold text-lg text-slate-800">
        Calculation
      </div>
      <div className="grid gap-y-8">
        <div className="flex justify-center gap-x-6">
          <SWARAMain />
          <SWARASecondary />
        </div>
        <div>
          <SWARAWeight />
        </div>
      </div>
    </div>
  );
}
