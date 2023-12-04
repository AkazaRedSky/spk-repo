"use client";

import React, { useState, useContext } from "react";
import { Button } from "@nextui-org/react";
import UserPage from "./userpage";
import AdminPage from "./adminpage";
import Title from "./title";
import { MainContext } from "./context/maincontext";

export default function MainPage() {
  const [currentPage, setCurrentPage] = useState("user");

  const switchPageAdmin = (e) => {
    setCurrentPage("admin");
  };
  return (
    <MainContext.Provider
      value={{
        currentPage,
        setCurrentPage,
      }}
    >
      {currentPage === "user" ? (
        <div className="p-12">
          <Button
            radius="full"
            className="font-bold h-8 w-4 bg-gradient-to-tr from-cyan-500 to-lime-500 text-white shadow-lg"
            onClick={switchPageAdmin}
          >
            Admin
          </Button>
          <Title />

          <div className="flex col gap-5 justify-between">
            <UserPage />
          </div>
        </div>
      ) : (
        <>
          <AdminPage />
        </>
      )}
    </MainContext.Provider>
  );
}
