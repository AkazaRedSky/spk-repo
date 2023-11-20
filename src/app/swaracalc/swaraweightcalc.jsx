import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

export default function SWARAWeight() {
  const rows = [
    {
      key: "1",
      criteria: "Gaming",
    },
    {
      key: "2",
      criteria: "Work",
    },
    {
      key: "3",
      criteria: "Daily",
    },
    {
      key: "4",
      criteria: "Processor",
    },
    {
      key: "5",
      criteria: "Graphic Card",
    },
    {
      key: "6",
      criteria: "SSD/HDD",
    },
    {
      key: "7",
      criteria: "RAM",
    },
    // {
    //   key: "8",
    //   criteria: "PRICE",
    // },
  ];
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
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
