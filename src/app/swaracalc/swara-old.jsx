'use client'

import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { collection, getDocs } from "firebase/firestore"; 
import { firestoredb } from "api/firestore.js";

export default function SWARAMainOld() {
  // const [rows, setRows] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getDocs(collection(firestoredb, "priorities"));
  //     setRows(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  //   };

  //   fetchData();
  // }, []);

  // const columns = [
  //   {
  //     key: "gaming",
  //     label: "Gaming",
  //   },
  //   {
  //     key: "work",
  //     label: "Work",
  //   },
  //   {
  //     key: "daily",
  //     label: "Daily",
  //   },
  // ];
  return (
    <div>
      {/* <div>
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
      </Table> */}
    </div>
  );
}
