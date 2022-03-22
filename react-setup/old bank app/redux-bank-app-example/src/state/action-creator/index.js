export const depositMoney = (amount) => {
  return {
    type: "DEPOSIT",
    payload: amount,
  };
};

export const withdrawMoney = (amount) => {
  return {
    type: "WITHDRAW",
    payload: amount,
  };
};

export const takeLoan = (amount) => {
  console.log(amount);
  return{
    type: "Take_Loan",
    payload: amount
  }
}
