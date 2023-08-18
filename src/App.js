import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addData } from "./redux/actions/Form/addAction";
import { updateData } from "./redux/actions/Form/updateAction";
import { deleteData } from "./redux/actions/Form/deleteAction";

const App = () => {
  const [formData, setFormData] = useState({
    name: "xyz",
    email: "xyz@gmail.com",
  });
  const [updateTableData, setUpdateTableData] = useState(false);
  const [dataId, setDataId] = useState(null);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateTableData) {
      dispatch(updateData({ id: dataId, ...formData }));
      setUpdateTableData(false);
      setDataId(null);
    } else {
      dispatch(addData({ id: Math.random(), ...formData }));
    }

    setFormData({ name: "", email: "" });
    toast.success("Thank you for submitting", {
      icon: "🚀",
    });
  };

  const handleEdit = (id) => {
    const dataToEdit = data.find((item) => item.id === id);
    setFormData({ name: dataToEdit.name, email: dataToEdit.email });
    setUpdateTableData(true);
    setDataId(id);
  };

  const handleDelete = (id) => {
    if (updateTableData) {
      toast.warning("Please complete the editing first ");
    } else {
      dispatch(deleteData(id));
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
        <input
          required
          type="text"
          className="form-control m-3"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <button className="btn m-3 btn-dark" type="submit">
          {updateTableData ? "Update" : "Add"}
        </button>
      </form>
      <table className="table table-secondary table-bordered table-striped mt-4">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Sr.</th>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        {data.map((item, index) => (
          <tbody className="table-hover" key={index}>
            <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
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
      <ToastContainer autoClose={1000} theme="colored" />
    </div>
  );
};

export default App;
