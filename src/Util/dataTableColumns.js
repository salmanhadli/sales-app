export const customerColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "Name",
    headerName: "Name",
    width: 400,
  },
  {
    field: "Phone",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "Email",
    headerName: "Email",
    width: 400,
  },
];

export const rebalanceAccountColumns = [
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "model",
    headerName: "Model",
    width: 200,
  },
  {
    field: "cash",
    headerName: "Cash $",
    width: 180,
  },
  {
    field: "total current cash",
    headerName: "Total Current Cash $",
    width: 200,
  },
  {
    field: "total available cash",
    headerName: "Total Available Cash $",
    width: 200,
  },
  {
    field: "last rebalanced on",
    headerName: "Last Rebalanced On",
    width: 200,
  },
];

export const rebalanceModelColumns = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
  },
  {
    field: "active",
    headerName: "Active",
    flex: 1,
  },
  {
    field: "count Accounts",
    headerName: "Count Accounts",
    flex: 1,
  },
];

export const analyzerAccountsColumns = [
  {
    field: "account name",
    headerName: "ACCOUNT NAME",
    flex: 1,
  },
  {
    field: "account value",
    headerName: "ACCOUNT VALUE",
    flex: 1,
  },
  {
    field: "model name",
    headerName: "MODEL NAME",
    flex: 1,
  },
];

export const analyzerSecuritiesColumns = [
  {
    field: "name",
    headerName: "NAME",
    flex: 1,
  },
  {
    field: "target percentage",
    headerName: "TARGET %",
    flex: 1,
  },
  {
    field: "lt percentage",
    headerName: "LT %",
    flex: 1,
  },

  {
    field: "ut percentage",
    headerName: "UT %",
    flex: 1,
  },
  {
    field: "target amount",
    headerName: "TARGET $",
    flex: 1,
  },
  {
    field: "current percentage",
    headerName: "CURRENT %",
    flex: 1,
  },
  {
    field: "current amount",
    headerName: "CURRENT $",
    flex: 1,
  },
  {
    field: "out",
    headerName: "OUT",
    flex: 1,
  },
  {
    field: "post trade percentage",
    headerName: "POST TRADE %",
    flex: 1,
  },
  {
    field: "post trade amount",
    headerName: "POST TRADE $",
    flex: 1,
  },
  {
    field: "out final",
    headerName: "OUT",
    flex: 1,
  },
];

export const existingTradeColumns = [
  { field: "account name", headerName: "ACCOUNT NAME", flex: 1 },
  { field: "model name", headerName: "MODEL NAME", flex: 1 },
  {
    field: "open/pending orders",
    headerName: "OPEN/PENDING ORDERS NAME",
    flex: 1,
  },
  { field: "action", headerName: "ACTION", flex: 1 },
];

export const proposedTradeColumns = [
  {
    field: "account",
    headerName: "ACCOUNT",
    width: 200,
  },
  {
    field: "order action",
    headerName: "ORDER ACTION",
    width: 200,
  },
  {
    field: "security",
    headerName: "SECURITY",
    width: 200,
  },
  {
    field: "price",
    headerName: "PRICE $",
    width: 200,
  },
  {
    field: "quantity",
    headerName: "QUANTITY",
    width: 200,
  },
  {
    field: "amount",
    headerName: "AMOUNT $",
    width: 200,
  },
  {
    field: "auto approve status",
    headerName: "AUTO APPROVE STATUS",
    width: 200,
  },
  {
    field: "account number",
    headerName: "ACCOUNT NUMBER",
    width: 200,
  },
  {
    field: "order type",
    headerName: "ORDER TYPE",
    width: 200,
  },
  {
    field: "security type",
    headerName: "SECURITY TYPE",
    width: 200,
  },
  {
    field: "order status",
    headerName: "ORDER STATUS",
    width: 200,
  },
  {
    field: "status",
    headerName: "STATUS",
    width: 200,
  },
  {
    field: "created date",
    headerName: "CREATED DATE",
    width: 200,
  },
  {
    field: "edited date",
    headerName: "EDITED DATE",
    width: 200,
  },
  {
    field: "short term gain",
    headerName: "SHORT TERM GAIN $",
    width: 200,
  },
  {
    field: "long term gain",
    headerName: "LONG TERM GAIN $",
    width: 200,
  },
  {
    field: "total gain",
    headerName: "TOTAL GAIN $",
    width: 200,
  },
  {
    field: "action",
    headerName: "ACTION",
    width: 200,
  },
];

export const raiseCashColumns = [
  { field: "account name", headerName: "ACCOUNT NAME", flex: 0.8 },
  { field: "account number", headerName: "ACCOUNT NUMBER", flex: 1 },
  { field: "model", headerName: "MODEL", flex: 0.5 },
  { field: "total current cash", headerName: "TOTAL CURRENT CASH $", flex: 1 },
  {
    field: "total available cash",
    headerName: "TOTAL AVAILABLE CASH $",
    flex: 1,
  },
  { field: "current value", headerName: "CURRENT VALUE $", flex: 1 },
  { field: "amount to be raised", headerName: "AMOUNT TO BE RAISED", flex: 1 },
];

export const spendCashColumns = [
  { field: "account name", headerName: "ACCOUNT NAME", flex: 0.8 },
  { field: "account number", headerName: "ACCOUNT NUMBER", flex: 1 },
  { field: "model", headerName: "MODEL", flex: 0.5 },
  { field: "total current cash", headerName: "TOTAL CURRENT CASH $", flex: 1 },
  {
    field: "total available cash",
    headerName: "TOTAL AVAILABLE CASH $",
    flex: 1,
  },
  { field: "current value", headerName: "CURRENT VALUE $", flex: 1 },
  { field: "invested amount", headerName: "INVESTED AMOUNT $", flex: 1 },
  { field: "amount to be spent", headerName: "AMOUNT TO BE SPENT", flex: 1 },
];

export const modelDataColumns = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "active", headerName: "Active", flex: 1 },
  {
    field: "noa",
    headerName: "Number of Accounts",
    flex: 1,
  },
];
