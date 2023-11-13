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

export default function SWARAMain() {
  const rows = [
    {
      key: "1",
      name: "Anonymous",
      gaming: "2",
      work: "3",
      daily: "1",
    },
    {
      key: "2",
      name: "Anonymous",
      gaming: "2",
      work: "3",
      daily: "1",
    },
    {
      key: "3",
      name: "Anonymous",
      gaming: "2",
      work: "3",
      daily: "1",
    },
    {
      key: "4",
      name: "Anonymous",
      gaming: "2",
      work: "3",
      daily: "1",
    },
  ];

  const columns = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "gaming",
      label: "Gaming",
    },
    {
      key: "work",
      label: "Work",
    },
    {
      key: "daily",
      label: "Daily",
    },
  ];
  return (
    <div>
      <div>
        <p className="text-center font-bold text-base text-slate-800">
          Main Priority
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
