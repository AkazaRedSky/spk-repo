"use client";

import React, { useState, useContext, useEffect } from "react";
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
  const { mainPriorityIndex, secondaryPriorityIndex } =
    useContext(SWARAContext);
  const [data, setData] = useState([]);
  const criteria = [
    "Gaming",
    "Work",
    "Daily",
    "Processor",
    "Graphic Card",
    "Storage",
    "RAM",
  ];
  const [rows, setRows] = useState([]);

  // defining the calculation
  const calculateSWARA = () => {
    if (!data[0]) {
      return [];
    }
    let sum = Array(data[0].length).fill(0);
    console.log(data);
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

  // dynamically adjust the calculation
  useEffect(() => {
    // this looks stupid but i don't care
    const priorities = [
      mainPriorityIndex["gaming"],
      mainPriorityIndex["work"],
      mainPriorityIndex["daily"],
      Number(secondaryPriorityIndex["processor"]+3),
      Number(secondaryPriorityIndex["graphiccard"]+3),
      Number(secondaryPriorityIndex["storage"]+3),
      Number(secondaryPriorityIndex["ram"]+3),
    ];
    setData([priorities]);
  }, [mainPriorityIndex, secondaryPriorityIndex]);
  useEffect(() => {
    let row = calculateSWARA();
    setRows(row);
  }, [data]);

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
        <p className="text-center font-bold text-lg text-slate-900">
          Final Calculation
        </p>
      </div>
      <Table aria-label="tabelcalcfinal">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn className="text-center" key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell className="text-center" key={`${item.key}-${columnKey}`}>
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
