"use client";

import React, { useState, useContext } from "react";
import {
  Input,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { EyeFilledIcon } from "components/icons/EyeFilledIcon.jsx";
import { EyeSlashFilledIcon } from "components/icons/EyeSlashFilledIcon.jsx";
import { AdminContext } from "../context/admincontext";
import { MainContext } from "../context/maincontext";
import { doc, getDoc } from "firebase/firestore";
import { firestoredb } from "api/firestore.js";

export default function AdminLogin() {
  const { currentUser, setCurrentUser } = useContext(AdminContext);
  const { currentPage, setCurrentPage } = useContext(MainContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [errorMessage, setErrorMessage] = useState();

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

    if (docSnap.exists()) {
      const userData = docSnap.data();
      if (userData.password === password) {
        success = true;
        setCurrentUser(username);
        setUsername();
        setPassword();
      } else {
        setErrorMessage("Password does not match!");
        onOpen();
        setPassword();
      }
    } else {
      setErrorMessage("Username does not exist!");
      onOpen();
      setPassword();
    }
  };

const switchPageUser = (e) => {
  setCurrentPage("user");
}

  // Password Eye toggler
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white w-72 h-72 rounded-lg flex flex-col items-center justify-center gap-4 p-2">
      <Button
            radius="full"
            className="font-bold h-8 w-4 bg-gradient-to-tr from-cyan-500 to-lime-500 text-white shadow-lg"
            onClick={switchPageUser}
          > Back </Button>
        <p className="font-bold text-lg text-black">LOGIN</p>
        <Input
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
        <button className={`text-blue-700 text-xs font-light`} disabled>
          Forgot Password
        </button>
        <Button
          color="success"
          className={`text-white font-bold ${
            username && password ? "" : "cursor-not-allowed"
          }`}
          onClick={handleSubmit}
          disabled={!username || !password}
        >
          Submit
        </Button>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">ERROR</ModalHeader>
              <ModalBody>{errorMessage}</ModalBody>
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
