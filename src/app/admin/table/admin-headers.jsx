"use client";

import React, { useState, useContext, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { MainContext } from "@/app/context/maincontext";

export default function AdminHeaders() {
  const { priorityLists, setPriorityList } = useContext(MainContext);
  const [selectedPriority, setSelectedPriority] = useState();
  const [PriorityName, setPriorityName] = useState();
  const [defaultRank, setDefaultRank] = useState();

  const columns = [
    {
      key: "priority",
      label: "Priority Type",
    },
    {
      key: "name",
      label: "Name",
    },
    {
      key: "defaultrank",
      label: "Default Rank",
    },
  ];

  const handleSelectionChange = (key) => {
    setSelectedPriority(key);
  };
  const handlePriorityNameChange = (e) => {
    setPriorityName(e.target.value);
  };
  const handleSubmit = (e) => {
    const newItem = {
      key: priorityLists.length + 1,
      priority: selectedPriority,
      name: PriorityName,
      defaultrank: priorityLists.length + 1,
    };

    setPriorityList([...priorityLists, newItem]);
    setSelectedPriority();
    setPriorityName();
  };

  const handleItemEdit = (key, newName, newPrice, newAuxiliary) => {
    setVGALists(
      VGALists.map((item) =>
        VGALists.key === key
          ? { ...item, name: newName, price: newPrice, auxiliary: newAuxiliary }
          : item
      )
    );
  };

  return (
    <div className="relative gap-y-2">
      <div className="relative p-4 bg-white">
        <p className="text-left font-bold text-base text-slate-800">
          Add New Items
        </p>
        <div className="flex gap-x-2 justify-between">
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered" className="capitalize">
                {selectedPriority || "Select Priority"}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Priority"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedPriority}
              onSelectionChange={handleSelectionChange}
            >
              <DropdownItem key="main">Main</DropdownItem>
              <DropdownItem key="secondary">Secondary</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Input
            type="text"
            label="Priority Name"
            variant="bordered"
            placeholder="Enter Auxiliary Components name"
            className="max-w-xs font-black"
            value={PriorityName}
            onChange={handlePriorityNameChange}
          />
        </div>
        <div className="flex justify-end gap-y-2 mt-2">
          <Button
            color="success"
            className="flex text-center text-sm text-white"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
      <br />
      <div>
        <Table aria-label="tabelcalcfinal">
          <TableHeader columns={columns}>
            {columns.map((column) => (
              <TableColumn className="text-center" key={column.key}>
                {column.label}
              </TableColumn>
            ))}
            <TableColumn className="text-center" key={"action"}>
              Actions
            </TableColumn>
          </TableHeader>
          <TableBody items={priorityLists}>
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
                <TableCell key={`${item.key}-action`} className="text-center">
                  <Button color="danger">Delete</Button>
                  <Button color="success">Edit</Button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
