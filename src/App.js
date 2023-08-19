import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addUserData } from "./redux/actions/Form/addUserAction";
import { updateUserData } from "./redux/actions/Form/updateUserAction";
import { deleteUserData } from "./redux/actions/Form/deleteUserAction";

const App = () => {

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });
  
  const [formData, setFormData] = useState({
    name: "xyz",
    email: "xyz@gmail.com",
    age : "23",
    password : "password"
  });
  const [editTableData, setEditTableData] = useState(false);
  const [dataId, setDataId] = useState(null);
  const userDataContainer = useSelector((state) => state.userDataContainer);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Validation logic for each field

    let error = "";

    switch (name) {
      case "name":
        if (value.trim() === "") {
          error = "Name is required";
        }
        else if(value.trim().length < 2) {
          error = "Name must be at least 2 characters";
        }

        break;
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Invalid email format";
        }
        break;
      case "age":
        const ageValue = parseInt(value);
        if (isNaN(ageValue) || ageValue < 0 || ageValue > 150) {
          error = "Age must be between 0 and 150";
        }
        break;
      case "password":
        if (value.length < 6) {
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
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTableData) {
      dispatch(updateUserData({ id: dataId, ...formData }));
      setEditTableData(false);
      setDataId(null);
    } else {
      dispatch(addUserData({ id: Math.random(), ...formData }));
    }
    
    setFormData({ name: "", email: "" , age : "", password: "" });
    toast.success("Thank you for submitting", {
      icon: "🚀",
    });
    
    
  };
  
  const handleEdit = (id) => {
    const userToEdit = userDataContainer.find((item) => item.id === id);
    setFormData({ name: userToEdit.name, email: userToEdit.email , age: userToEdit.age , password : userToEdit.password});
    setEditTableData(true);
    setDataId(id);
    console.log(id)
  };

  const handleDelete = (id) => {
    if (editTableData) {
      toast.warning("Please complete the editing first ");
    } else {
      dispatch(deleteUserData(id));
      toast.info("Deleted successfully");
    }
  };
  return (
    <div className="container my-5">
      <h3 className="text-center m-5">Redux demo using CRUD</h3>
      <form onSubmit={handleSubmit}>
      <input
  required
  className="form-control m-3"
  type="text"
  name="name"
  placeholder="Name"
  value={formData.name}
  onChange={handleInputChange}
/>
{formErrors.name && <div class="alert alert-danger m-3 border text-center w-25 p-2" role="alert">
  {formErrors.name}
</div>
}

<input
  required
  type="email"
  className="form-control m-3"
  name="email"
  placeholder="Email"
  value={formData.email}
  onChange={handleInputChange}
/>
{formErrors.email && <div class="alert alert-danger m-3 border text-center w-25 p-2" role="alert">{formErrors.email}</div>}

<input
  required
  type="number"
  className="form-control m-3"
  name="age"
  placeholder="Enter your age"
  value={formData.age}
  onChange={handleInputChange}
/>
{formErrors.age && <div class="alert alert-danger m-3 border text-center w-25 p-2" role="alert">{formErrors.age}</div>}

<input
  required
  type="password"
  className="form-control m-3"
  name="password"
  placeholder="Enter your password"
  value={formData.password}
  onChange={handleInputChange}
/>
{formErrors.password && (
  <div class="alert alert-danger m-3 border text-center w-50 p-2" role="alert">{formErrors.password}</div>
)}

        <button className="btn m-3 btn-dark" type="submit">
          {editTableData ? "Update" : "Add"}
        </button>
      </form>
      <table className="table table-secondary table-bordered table-striped mt-4">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Sr.</th>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Age</th>
            <th scope="col">Password</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        {userDataContainer.map((item, index) => (
          <tbody className="table-hover" key={index}>
            <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
              <td>{item.password}</td>
              <td>
                <div className="container text-center p-2">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <ToastContainer autoClose={2000} theme="colored" />
    </div>
  );
};

export default App;
