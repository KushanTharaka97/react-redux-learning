export default function accountreducer (state = 0, action){
  switch (action.type) {
    case "DEPOSIT": {
      state = state + action.amount;
    }
    case "WITHDRAW": {
      state = state - action.amount;
    }
    default:
      return state;
  }
};
