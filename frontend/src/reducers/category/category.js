const addCategoryReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      return state.concat([action.data]);
    case "DELETE_CATEGORY":
      return state.filter(post => post.id !== action.id);
    default:
      return state;
  }
};
export default addCategoryReducer;
