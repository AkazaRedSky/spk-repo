'use client'

import React, { useContext } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { SWARAContext } from "src/app/context/swaracontext";

export default function SWARAMain() {
  const { mainPriorityIndex } = useContext(SWARAContext);
  const rows = [
    {
      key: "1",
      ...mainPriorityIndex,
    },
  ];

  const columns = [
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
      <Table aria-label="tablecalcmain">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell className="text-center">{getKeyValue(item, columnKey) !== undefined ? getKeyValue(item, columnKey) : ""}</TableCell>
            )}
          </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
