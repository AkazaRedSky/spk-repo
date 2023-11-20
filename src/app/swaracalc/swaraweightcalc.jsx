"use client";

import React, { useState, useContext } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { SWARAContext } from "src/app/context/swaracontext";

export default function SWARAWeight() {
  const { mainPriorityIndex, secondaryPriorityIndex } = useContext(SWARAContext); // use the context

  // Convert the priority indices to an array of numbers
  const mainPriorities = Object.values(mainPriorityIndex).map(Number);
  const secondaryPriorities = Object.values(secondaryPriorityIndex).map(value => Number(value) + 3);

  // Combine the two arrays into one
  const priorities = [...mainPriorities, ...secondaryPriorities];

  const [data, setData] = useState([priorities]);

  const criteria = [
    "Gaming",
    "Work",
    "Daily",
    "Processor",
    "GraphicCard",
    "Storage",
    "RAM",
  ];

  const calculateSWARA = () => {
    let sum = Array(data[0].length).fill(0);
    data.forEach((row) => {
      row.forEach((value, index) => {
        sum[index] += value;
      });
    });

    let weights = sum.map((value) => 1 / value);
    let totalWeight = weights.reduce((a, b) => a + b, 0);
    let weightPercentage = weights.map(
      (weight) => (weight / totalWeight) * 100
    );

    return criteria.map((criterion, index) => ({
      key: index + 1,
      criteria: criterion,
      relativeweight: weights[index],
      weight: weights[index],
      weightpercent: weightPercentage[index],
    }));
  };

  const rows = calculateSWARA();

  const columns = [
    {
      key: "criteria",
      label: "Criteria",
    },
    {
      key: "relativeweight",
      label: "Relative Weight",
    },
    {
      key: "weight",
      label: "Weight",
    },
    {
      key: "weightpercent",
      label: "Weight Percentage",
    },
  ];
  return (
    <div>
      <div>
        <p className="text-center font-bold text-base text-slate-800">
          Final Calculation
        </p>
      </div>
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell key={`${item.key}-${columnKey}`}>
                  {item[columnKey]}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
