"use client";

import React, { useState } from "react";
import Image from "next/image";
import RTXIMG from "public/Untitled.jpg";
import RAM from "public/ram.png";
import SSD from "public/ssd.png";
import CPU from "public/cpu.jpg";

export default function Results() {
  const [imageVisibility, setImageVisibility] = useState(false);
  return (
    <div>
      <div>
        <h1 className="text-center text-white text-lg">Results</h1>
        <button onClick={(e) => setImageVisibility(true)}> - </button>
      </div>
      {imageVisibility ? (
        <>
          <div className="flex col col-span-2">
          <Image src={RTXIMG} />
          <Image src={RAM} />
          <Image src={SSD} />
          <Image src={CPU} />
          </div>
          <button onClick={(e) => setImageVisibility(false)}> - </button>
        </>
      ) : (
        <> </>
      )}
    </div>
  );
}
