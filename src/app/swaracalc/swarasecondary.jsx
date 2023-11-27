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

export default function SWARASecondary() {
  const { secondaryPriorityIndex } = useContext(SWARAContext);
  const rows = [
    {
      key: "1",
      ...secondaryPriorityIndex,
    },
  ];

  const columns = [
    {
      key: "processor",
      label: "Processor",
    },
    {
      key: "graphiccard",
      label: "Graphic Card",
    },
    {
      key: "storage",
      label: "Storage",
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
      <Table aria-label="tablecalcsecondary">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell className="text-center">{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
