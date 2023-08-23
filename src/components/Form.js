import React from "react";
import Button from "./Button";
const Form = ({
  formData,
  formErrors,
  editTableData,
  handleInputChange,
  handleSubmitClick,
  handleResetClick,
}) => {
  return (
    <form onSubmit={handleSubmitClick}>
      <input
        required
        className="form-control m-3"
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      {formErrors.name && (
        <div
          className="alert alert-danger m-3 border text-center w-25 p-2"
          role="alert"
        >
          {formErrors.name}
        </div>
      )}

      <input
        required
        type="email"
        className="form-control m-3"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      {formErrors.email && (
        <div
          className="alert alert-danger m-3 border text-center w-25 p-2"
          role="alert"
        >
          {formErrors.email}
        </div>
      )}

      <input
        required
        type="number"
        className="form-control m-3"
        name="age"
        placeholder="Enter your age"
        value={formData.age}
        onChange={handleInputChange}
      />
      {formErrors.age && (
        <div
          className="alert alert-danger m-3 border text-center w-25 p-2"
          role="alert"
        >
          {formErrors.age}
        </div>
      )}

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
        <div
          className="alert alert-danger m-3 border text-center w-25 p-2"
          role="alert"
        >
          {formErrors.password}
        </div>
      )}
      {editTableData ? (
        <Button
          className={"btn m-3 btn-dark"}
          type="submit"
          disabled={!Object.values(formErrors).every((item) => item === "")}
          buttonText={"Update"}
        ></Button>
      ) : (
        <Button
          className={"btn m-3 btn-dark"}
          type="submit"
          disabled={!Object.values(formErrors).every((item) => item === "")}
          buttonText={"Add"}
        ></Button>
      )}
      <Button
        className={"btn btn-danger"}
        type="button"
        onClick={handleResetClick}
        disabled={editTableData}
        buttonText={"Reset"}
      ></Button>
    </form>
  );
};

export default Form;
