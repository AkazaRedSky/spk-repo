"use client";

import React, { useState, useEffect, useContext } from "react";
import { Button } from "@nextui-org/react";
import UserPage from "./userpage";
import AdminPage from "./adminpage";
import Title from "./title";
import { MainContext } from "./context/maincontext";
import { collection, getDocs, query } from "firebase/firestore";
import { firestoredb } from "api/firestore";

export default function MainPage() {
  const [currentPage, setCurrentPage] = useState("user");
  const [VGALists, setVGALists] = useState([]);
  const [priorityLists, setPriorityList] = useState([
    {
      priority: "Main",
      name: "Gaming",
      defaultrank: 1,
    },
  ]);

  async function getProducts() {
    const productCollection = collection(firestoredb, "vgalists");
    const productSnapshot = await getDocs(query(productCollection));

    const productList = productSnapshot.docs.map((doc) => ({
      key: doc.id,
      ...doc.data(),
    }));

    setVGALists(productList); // set the state with the fetched products
  }
  useEffect(() => {
    getProducts();
  }, []);

  const switchPageAdmin = (e) => {
    setCurrentPage("admin");
  };

  return (
    <MainContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        VGALists,
        setVGALists,
        priorityLists,
        setPriorityList,
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
