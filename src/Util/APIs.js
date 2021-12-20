import axios from "axios";

export const getTableData = async (url) => {
  const res = await axios.get(url);

  if (!res.data.data) return res.data;

  return res.data.data;
};
