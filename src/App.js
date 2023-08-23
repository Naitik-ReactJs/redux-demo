import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addUserData } from "./redux/actions/Form/addUserAction";
import { updateUserData } from "./redux/actions/Form/updateUserAction";
import { deleteUserData } from "./redux/actions/Form/deleteUserAction";
import { min_length, min_password_length } from "./redux/constants";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  const emptyUserData = {
    name: "",
    email: "",
    age: "",
    password: "",
  };

  const [formErrors, setFormErrors] = useState(emptyUserData);

  const [formData, setFormData] = useState({
    name: "xyz",
    email: "xyz@gmail.com",
    age: "23",
    password: "password",
  });
  const [editTableData, setEditTableData] = useState(false);
  const [dataId, setDataId] = useState(null);
  const userDataContainer = useSelector((state) => state.userDataContainer);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let error = "";
    switch (name) {
      case "name":
        if (value.trim() === "") {
          error = "Name is required";
        } else if (value.trim().length < min_length) {
          error = "Name must be at least 2 characters";
        } else if (!/^[a-zA-Z\s]*$/.test(value)) {
          error = "Name cannot contain numbers or special characters";
        }

        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Invalid email format";
        }
        break;
      case "age":
        const ageValue = parseInt(value);
        if (isNaN(ageValue) || ageValue < 0) {
          error = "Age cannot be negative";
        }
        break;
      case "password":
        if (value.length < min_password_length) {
          error = "Password must be at least 6 characters";
        }
        break;

      default:
        break;
    }
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (editTableData) {
      dispatch(updateUserData({ id: dataId, ...formData }));
      setEditTableData(false);
      setDataId(null);
    } else {
      setTimeout(() => {
        dispatch(addUserData({ id: Math.random(), ...formData }));
      }, 700);
    }

    setFormData(emptyUserData);
    toast.success("Thank you for submitting", {
      icon: "🚀",
    });
  };

  const handleEditClick = (id) => {
    const userToEdit = userDataContainer.find((item) => item.id === id);
    setFormData({
      name: userToEdit.name,
      email: userToEdit.email,
      age: userToEdit.age,
      password: userToEdit.password,
    });
    setEditTableData(true);
    setDataId(id);
  };

  const handleResetClick = () => {
    setFormData(emptyUserData);
  };
  const handleDeleteClick = (id) => {
    if (editTableData) {
      toast.warning("Please complete the editing first");
    } else {
      dispatch(deleteUserData(id));
      toast.info("Deleted successfully");
    }
  };
  return (
    <div className="container my-5">
      <h3 className="text-center m-5">Redux demo using CRUD</h3>
      <Form
        formData={formData}
        formErrors={formErrors}
        editTableData={editTableData}
        handleInputChange={handleInputChange}
        handleSubmitClick={handleSubmitClick}
        handleResetClick={handleResetClick}
      />
      <Table
        userDataContainer={userDataContainer}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
      />
      <ToastContainer autoClose={2000} theme="colored" />
    </div>
  );
};

export default App;
