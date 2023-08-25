import React from "react";
import Button from "../reusable/Button";
const table = ({ userDataContainer, handleEditClick, handleDeleteClick }) => {
  const tableHeading = ["Sr.", "Name", "Age", "E-mail", "Password", "Actions"];

  return (
    <table className="table table-secondary table-bordered table-striped mt-4">
      <thead className="thead-dark">
        <tr>
          {tableHeading.map((item, index) => (
            <th key={index}> {item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {console.log("userDataContainer", userDataContainer)}
        {userDataContainer.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((heading, index) => (
              <td key={index}> {heading} </td>
            ))}
            <td>
              <div className="container text-center p-2">
                <Button
                  className="btn btn-primary"
                  onClick={() => handleEditClick(item.id)}
                  buttonText="Edit"
                />
                <Button
                  className="btn btn-danger mx-2"
                  onClick={() => handleDeleteClick(item.id)}
                  buttonText="Delete"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default table;
