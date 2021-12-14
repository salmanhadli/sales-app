// import axios from "axios";

// export const getTableData = async (url) => {
//   let data;
//   let totalRecords;

//   axios.get(url).then((res) => {
//     console.log(res);
//     if (!res.data.data) {
//       data = res.data;
//       totalRecords = res.data.length;
//     } else {
//       data = res.data.data;
//       totalRecords = res.data.length;
//     }
//   });

//   console.log(data);
//   console.log(totalRecords);

//   return { data, totalRecords };
// };

import axios from "axios";

export const getTableData = async (url) => {
  const res = await axios.get(url);

  if (!res.data.data) return res.data;

  return res.data.data;
};
