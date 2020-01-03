const modalReducer = (state = false, action) => {
  return action.type === 'MODAL' ? !state : state;
};
export default modalReducer;
