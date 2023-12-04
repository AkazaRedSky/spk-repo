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
import { MainContext } from "@/app/context/maincontext";
import { collection, getDocs } from 'firebase/firestore';
import { firestoredb } from "api/firestore.js";

export default function AdminDashboard() {
  const { VGALists, setVGALists } = useContext(MainContext);

  const [UserReview, setUserReview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(firestoredb, 'userreview'));
      setUserReview(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    fetchData();
  }, []);
  const columns = [
    {
      key: "username",
      label: "Name"
    },
    {
      key: "vgaselected",
      label: "VGA Selection",
    },
    {
      key: "auxiliary",
      label: "Auxiliary Components Selected",
    },
    {
      key: "priorities",
      label: "Priority Ranking"
    }
  ];

  return (
    <div className="relative gap-y-2">
      <div>
        <Table aria-label="tabelcalcfinal">
          <TableHeader columns={columns}>
            {columns.map((column) => (
              <TableColumn className="text-center" key={column.key}>
                {column.label}
              </TableColumn>
            ))}
          </TableHeader>
          <TableBody items={UserReview}>
            {(item) => (
              <TableRow key={item.key}>
                {columns.map((column) => (
                  <TableCell
                    className="text-center"
                    key={`${item.key}-${column.key}`}
                  >
                    {item[column.key]}
                  </TableCell>
                ))}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}