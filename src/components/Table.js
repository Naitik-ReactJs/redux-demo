import React from "react";

const table = ({ userDataContainer, handleEditClick, handleDeleteClick }) => {
  return (
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
      <tbody>
        {userDataContainer.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.age}</td>
            <td>{item.password}</td>
            <td>
              <div className="container text-center p-2">
                <button
                  className="btn btn-primary"
                  onClick={() => handleEditClick(item.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => handleDeleteClick(item.id)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default table;
