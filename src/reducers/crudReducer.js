const initialData = {
  allData: [],
};

const crudReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD":
      const newUser = action.payload;
      console.log("newUser", state);
      return {
        ...state,
        allData: [...state.allData, newUser],
      };

    case "DELETE":
      const i = action.payload;
      const newData = state.allData.filter((val, index) => i !== index);
      console.log("new", newData);
      return {
        ...state,
        allData: newData,
      };

    case "EDIT":
      const { updateData, index } = action.payload;
      state.allData.splice(index, 1, updateData);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default crudReducer;
