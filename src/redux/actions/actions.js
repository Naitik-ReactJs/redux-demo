export const addData = (newData) => ({
  type: "ADD_DATA",
  payload: newData,
});

export const updateData = (updatedData) => ({
  type: "UPDATE_DATA",
  payload: updatedData,
});

export const deleteData = (id) => ({
  type: "DELETE_DATA",
  payload: id,
});
