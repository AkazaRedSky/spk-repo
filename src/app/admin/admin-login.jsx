"use client";

import React, { useState, useContext } from "react";
import { Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "components/icons/EyeFilledIcon.jsx";
import { EyeSlashFilledIcon } from "components/icons/EyeSlashFilledIcon.jsx";
import { LoginContext } from "../context/logincontext";
import { doc, getDoc } from "firebase/firestore";
import { firestoredb } from "api/firestore.js";

export default function AdminLogin() {
  const { currentUser, setCurrentUser } = useContext(LoginContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errorModal, setErrorModal] = useState();


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const docRef = doc(firestoredb, "account", username);
    const docSnap = await getDoc(docRef);
  
    let success = false;
    let isError = false;
  
    if (docSnap.exists()) {
      const userData = docSnap.data();
      if (userData.password === password) {
        success = true;
      } else {
        isError = true;
      }
    } else {
      isError = true;
    }
  
    if (success) {
      console.log("Login successful");
      // Add any additional logic for successful login
    } else if (isError) {
      console.log("Login failed");
      // Add any additional logic for failed login
    }
  };




  // Password Eye toggler
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white w-72 h-72 rounded-lg flex flex-col items-center justify-center gap-4 p-2">
        <p className="font-bold text-lg text-black">LOGIN</p>
        <Input
          isClearable
          type="text"
          label="Username"
          variant="bordered"
          placeholder="Enter your username"
          className="max-w-xs font-black"
          value={username}
          onChange={handleUsernameChange}
        />
        <Input
          label="Password"
          variant="bordered"
          placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="max-w-xs font-black"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className=" text-blue-700 text-xs font-light">
          Forgot Password
        </button>
        <Button
          color="success"
          className="text-white font-bold"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
