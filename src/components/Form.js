import React, { Fragment } from "react";
import Button from "../reusable/Button";
const Form = ({
  formData,
  formErrors,
  editTableData,
  handleInputChange,
  handleSubmitClick,
  handleResetClick,
}) => {
  const input = [
    {
      type: "text",
      name: "name",
      placeholder: "Enter your name",
      value: formData.name,
      formErrors: formErrors.name,
    },
    {
      type: "number",
      name: "age",
      placeholder: "Enter your age",
      value: formData.age,
      formErrors: formErrors.age,
    },
    {
      type: "email",
      name: "email",
      placeholder: "Enter your email address",
      value: formData.email,
      formErrors: formErrors.email,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Enter your password",
      value: formData.password,
      formErrors: formErrors.password,
    },
  ];
  return (
    <form onSubmit={handleSubmitClick}>
      {input.map((item, index) => {
        return (
          <Fragment key={index}>
            <input
              required
              className="form-control m-3"
              onChange={handleInputChange}
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
              value={item.value}
            />
            {item.formErrors && (
              <div
                key={index}
                className="alert alert-danger m-3 border text-center w-50 p-2"
                role="alert"
              >
                {item.formErrors}
              </div>
            )}
          </Fragment>
        );
      })}
      <Button
        className={"btn m-3 btn-dark"}
        type="submit"
        disabled={!Object.values(formErrors).every((item) => item === "")}
        buttonText={`${editTableData}` === "true" ? "Update" : "Add"}
      ></Button>
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
