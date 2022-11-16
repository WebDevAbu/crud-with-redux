// action folder define what to do
export const add = (data) => {
  console.log("add todo");
  return {
    type: "ADD",
    payload: data,
  };
};

export const deleteItem = (i) => {
  console.log("----", i);
  return {
    type: "DELETE",
    payload: i,
  };
};

export const editItem = (data, i) => {
  // console.log("editItem", data, i);
  return {
    type: "EDIT",
    payload: { updateData: data, index: i },
  };
};
