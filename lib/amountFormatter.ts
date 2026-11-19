export const amountFormatterWithDecimal = (amount: number) => {
  return "₹ " + amount.toLocaleString("en-IN", { minimumFractionDigits: 2 });
};
