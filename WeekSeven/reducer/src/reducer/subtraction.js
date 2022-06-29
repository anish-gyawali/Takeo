function subtraction(state, action) {
  if (action === "decrease by 1") {
    return { ...state, a: state.a - 1 };
  }
  if (action === "decrease by 2") {
    return { ...state, b: state.b - 1 };
  }
  return state;
}
export default subtraction;
