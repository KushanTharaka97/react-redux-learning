export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "DEPOSIT",
      amount: amount,
    });
  };
};

export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "WITHDRAW",
      amount: amount,
    });
  };
};
