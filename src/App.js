import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addData } from "./redux/actions/addAction";
import { updateData } from "./redux/actions/updateAction";
import { deleteData } from "./redux/actions/deleteAction";
const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const data = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      dispatch(updateData({ id: editId, name, email }));
      setEditMode(false);
      setEditId(null);
    } else {
      dispatch(addData({ id: Math.random(), name, email }));
    }
    setName("");
    setEmail("");
    toast.success("Thank you for submitting", {
      icon: "🚀",
    });
  };

  const handleEdit = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setName(itemToEdit.name);
    setEmail(itemToEdit.email);
    setEditMode(true);
    setEditId(id);
  };

  const handleDelete = (id) => {
    if (editMode) {
      toast.warning("Please complete the editing first ", {
        duration: 1000,
      });
    } else {
      dispatch(deleteData(id));
      toast.info("Deleted successfully");
    }
  };
  return (
    <div className="container my-5">
      <h3 className="text-center m-5 ">Redux demo using CRUD</h3>
      <form onSubmit={handleSubmit}>
        <input
          required
          className="form-control m-3"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          type="text"
          className="form-control m-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn m-3 btn-dark" type="submit">
          {editMode ? "Update" : "Add"}
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
