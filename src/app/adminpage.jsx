"use client";

import React, { useState } from "react";
import AdminDashboard from "./admin/admin-dashboard";
import { AdminContext } from "./context/admincontext";
import AdminLogin from "./admin/admin-login";
import AdminData from "./admin/table/admin-data";
import AdminHeaders from "./admin/table/admin-headers";
import AdminNavbar from "./admin/admin-navbar";

export default function AdminPage() {
  const [currentUser, setCurrentUser] = useState();
  const [currentPage, setCurrentPage] = useState();

  return (
    <AdminContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        currentPage,
        setCurrentPage,
      }}
    >
      {currentUser ? (
        <>
          <AdminNavbar />
          <div className="p-12">
            {(() => {
              switch (currentPage) {
                case "dashboard":
                  return <AdminDashboard />;
                case "data":
                  return <AdminData />;
                case "headers":
                  return <AdminHeaders />;
                default:
                  return <AdminDashboard />;
              }
            })()}
          </div>
        </>
      ) : (
        <AdminLogin />
      )}
    </AdminContext.Provider>
  );
}
