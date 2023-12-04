"use client";

import React, { useContext } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AdminContext } from "../context/admincontext";

export default function AdminNavbar() {
  const { currentPage, setCurrentPage, setCurrentUser } =
    useContext(AdminContext);

  const handleLogOut = (e) => {
    setCurrentUser();
  };
  const handleCurrentPage = (e) => {
    setCurrentPage(e);
  };
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <p className="font-bold text-inherit">SWARA ADMIN</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={currentPage === 'dashboard'}>
          <Link
            color="#09AACD"
            onClick={() => handleCurrentPage("dashboard")}
            aria-current={currentPage === "dashboard" ? "page" : undefined}
          >
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem isActive={currentPage === 'headers'}>
          <Link
            color="#09AACD"
            onClick={() => handleCurrentPage("headers")}
            aria-current={currentPage === "headers" ? "page" : undefined}
          >
            Table Headers
          </Link>
        </NavbarItem>
        <NavbarItem isActive={currentPage === 'data'}>
          <Link
            color="#09AACD"
            onClick={() => handleCurrentPage("data")}
            aria-current={currentPage === "data" ? "page" : undefined}
          >
            Data
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            className="text-white font-bold"
            color="primary"
            onClick={handleLogOut}
          >
            Log out
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
