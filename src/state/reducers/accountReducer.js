export default function accountreducer(state = 0, action) {
  switch (action.type) {
    case "DEPOSIT": {
      console.log(action.amount);
      state = state + action.amount;
      return state;
    }
    case "WITHDRAW": {
      console.log(action.amount);

      state = state - action.amount;
      return state;
    }
    default:
      return state;
  }
}
