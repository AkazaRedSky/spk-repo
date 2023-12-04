"use client";

import React, { useState } from "react";
import AdminDashboard from "./admin/admin-dashboard";
import { LoginContext } from "./context/logincontext";
import AdminLogin from "./admin/admin-login";

export default function AdminPage() {
  const [currentUser, setCurrentUser] = useState();

  return (
    <LoginContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {currentUser ? (
        <>
          <AdminNavbar />
          <div className="p-12">
            <AdminDashboard />
          </div>
        </>
      ) : (
        <AdminLogin />
      )}
    </LoginContext.Provider>
  );
}
