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
import { MainContext } from "./context/maincontext";

export default function Results() {
  const {VGALists} = useContext(MainContext)
  const { maxBudget, resultVisibility, setResultVisibility } =
    useContext(SWARAContext);

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
