"use client";

import React, { useState } from "react";
import Image from "next/image";
import RTXIMG from "public/Untitled.jpg";
import RAM from "public/ram.png";
import SSD from "public/ssd.png";
import CPU from "public/cpu.jpg";

export default function ResultsOld() {
  const [imageVisibility, setImageVisibility] = useState(false);
  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-lg text-slate-800">
          Results
        </h1>
        <button onClick={(e) => setImageVisibility(true)}> - </button>
      </div>
      {imageVisibility ? (
        <>
          <div className="grid grid-cols-2 gap-2 col-span-2">
            <Image className="w-3/4" src={RTXIMG} />
            <Image className="w-3/4" src={RAM} />
            <Image className="w-3/4" src={SSD} />
            <Image className="w-3/4" src={CPU} />
          </div>

          <button onClick={(e) => setImageVisibility(false)}> - </button>
        </>
      ) : (
        <> </>
      )}
    </div>
  );
}
