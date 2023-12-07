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
} from "@nextui-org/react";
import { MainContext } from "@/app/context/maincontext";

export default function AdminData() {
  const { VGALists, setVGALists } = useContext(MainContext);
  const [vgaName, setvgaName] = useState();
  const [auxiliaryComponents, setAuxiliaryComponents] = useState();
  const [totalPrice, setTotalPrice] = useState();

  const columns = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "auxiliary",
      label: "Auxiliary Components",
    },
    {
      key: "price",
      label: "Total Price",
    },
  ];
  const handlevgaNameChange = (e) => {
    setvgaName(e.target.value);
  };
  const handleAuxiliaryComponentChange = (e) => {
    setAuxiliaryComponents(e.target.value);
  };
  const handlePriceChange = (e) => {
    setTotalPrice(e.target.value.replace(/\D/, ""));
  };
  const handleSubmit = (e) => {
    const newItem = {
      key: VGALists.length + 1,
      name: vgaName,
      price: totalPrice,
      auxiliary: auxiliaryComponents,
    };

    setVGALists([...VGALists, newItem]);
    setvgaName();
    setAuxiliaryComponents();
    setTotalPrice();
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
          <Input
            type="text"
            label="Graphic Card"
            variant="bordered"
            placeholder="Enter Graphic Card name"
            className="max-w-xs font-black"
            value={vgaName}
            onChange={handlevgaNameChange}
          />
          <Input
            type="text"
            label="Auxiliary Components"
            variant="bordered"
            placeholder="Enter Auxiliary Components name"
            className="max-w-xs font-black"
            value={auxiliaryComponents}
            onChange={handleAuxiliaryComponentChange}
          />
          <Input
            type="text"
            label="Total Price"
            variant="bordered"
            placeholder="Enter Total Price"
            className="max-w-xs font-black"
            value={totalPrice}
            onChange={handlePriceChange}
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
          <TableBody items={VGALists}>
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
                  <div className="gap-x-2">
                    <Button color="danger">Delete</Button>
                    <Button color="success">Edit</Button>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
