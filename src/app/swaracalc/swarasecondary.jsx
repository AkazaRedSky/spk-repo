import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

export default function SWARASecondary() {
  const rows = [
    {
      key: "1",
    },
  ];

  const columns = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "cpu",
      label: "Processor",
    },
    {
      key: "gpu",
      label: "Graphic Card",
    },
    {
      key: "storage",
      label: "SSD/HDD",
    },
    {
      key: "ram",
      label: "RAM",
    },
  ];
  return (
    <div>
      <div>
      <p className="text-center font-bold text-base text-slate-800">
              Secondary Priority
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
