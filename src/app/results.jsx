"use client";

import React, { useState, useContext, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
} from "@nextui-org/react";
import { SWARAContext } from "./context/swaracontext";

export default function Results() {
  const { maxBudget, resultVisibility, setResultVisibility } =
    useContext(SWARAContext);

  const [VGALists, setVGALists] = useState([
    {
      key: 1,
      name: "GeForce RTX 4090",
      price: 27500000,
      auxiliary: "i9-13900K, STORAGE, RAM",
    },
    {
      key: 2,
      name: "Radeon RX 7900 XTX",
      price: 22500000,
      auxiliary: "i9-13900K, STORAGE, RAM",
    },
    {
      key: 3,
      name: "GeForce RTX 4080",
      price: 17500000,
      auxiliary: "i9-13900K, STORAGE, RAM",
    },
    {
      key: 4,
      name: "Radeon RX 7900 XT",
      price: 16500000,
      auxiliary: "i9-13900K, STORAGE, RAM",
    },
    {
      key: 5,
      name: "Radeon RX 6950 XT",
      price: 13500000,
      auxiliary: "i9-13900K, STORAGE, RAM",
    },
    {
      key: 6,
      name: "GeForce RTX 4070 Ti",
      price: 11000000,
      auxiliary: "i9-13900K, STORAGE, RAM",
    },
    {
      key: 7,
      name: "GeForce RTX 3090 Ti",
      price: 10000000,
      auxiliary: "i9-13900K, STORAGE, RAM",
    },
    {
      key: 8,
      name: "GeForce RTX 3070 Ti",
      price: 7000000,
      auxiliary: "i9-13900K, STORAGE, RAM",
    },
    {
      key: 9,
      name: "Radeon RX 6750 XT",
      price: 6000000,
      auxiliary: "i9-13900K, STORAGE, RAM",
    },
    {
      key: 10,
      name: "GeForce RTX 4060 Ti",
      price: 5500000,
      auxiliary: "i9-13900K, STORAGE, RAM",
    },
    {
      key: 11,
      name: "GeForce RTX 4060 Ti",
      price: 5500000,
      auxiliary: "i9-13900K, STORAGE, RAM",
    },
    {
      key: 12,
      name: "GeForce RTX 3070",
      price: 5000000,
      auxiliary: "i9-13900K, STORAGE, RAM",
    },
    {
      key: 13,
      name: "Radeon RX 6700 XT",
      price: 4500000,
      auxiliary: "i9-13900K, STORAGE, RAM",
    },
    {
      key: 13,
      name: "GeForce RTX 2080 Ti",
      price: 4000000,
      auxiliary: "i9-13900K, STORAGE, RAM",
    },
    {
      key: 14,
      name: "GeForce RTX 3060 Ti",
      price: 3500000,
      auxiliary: "i9-13900K, STORAGE, RAM",
    },
    {
      key: 15,
      name: "GeForce RTX 2080 Super",
      price: 3000000,
      auxiliary: "i9-13900K, STORAGE, RAM",
    },
    {
      key: 16,
      name: "Radeon RX 6700 10GB",
      price: 2500000,
      auxiliary: "i9-13900K, STORAGE, RAM",
    },
    {
      key: 17,
      name: "GeForce RTX 4060",
      price: 2500000,
      auxiliary: "i9-13900K, STORAGE, RAM",
    },
    {
      key: 18,
      name: "GeForce RTX 2080",
      price: 2250000,
      auxiliary: "i9-13900K, STORAGE, RAM",
    },
    {
      key: 19,
      name: "Radeon RX 7600",
      price: 1500000,
      auxiliary: "i9-13900K, STORAGE, RAM",
    },
  ]);
  const columns = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "price",
      label: "Price",
    },
    {
      key: "auxiliary",
      label: "Auxiliary Components",
    },
  ];
  const [username, setUsername] = useState();

  const handleusername = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    setUsername();
    setResultVisibility(false);
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-lg text-slate-800">
          Results
        </h1>
        <button onClick={(e) => setResultVisibility(true)}> - </button>
      </div>
      {resultVisibility ? (
        <>
          <Table aria-label="tabelcalcfinal">
            <TableHeader columns={columns}>
              <TableColumn className="text-center">Select</TableColumn>
              {columns.map((column) => (
                <TableColumn className="text-center" key={column.key}>
                  {column.label}
                </TableColumn>
              ))}
            </TableHeader>
            <TableBody
              items={
                maxBudget
                  ? VGALists.filter((item) => item.price < maxBudget)
                  : VGALists
              }
            >
              {(item) => (
                <TableRow key={item.key}>
                  <TableCell className="text-center">
                    <Checkbox size="md"></Checkbox>
                  </TableCell>
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

          <button onClick={(e) => setResultVisibility(false)}> - </button>

          <div className="relative py-3">
            <p className="text-left font-bold text-base text-slate-800">Name</p>
            <div className="gap-y-2">
              <input
                type="text"
                className="border-slate-700 border-2 bg-white font-semibold text-center select-none text-sm text-black"
                value={username}
                onChange={handleusername}
              />
              <div className="flex gap-y-2">
                <Button
                  color="success"
                  className="flex text-center text-sm text-white"
                  onClick={handleSubmit}
                  onPress={onOpen}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <> </>
      )}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Success</ModalHeader>
              <ModalBody>Submitted Succesfully</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
