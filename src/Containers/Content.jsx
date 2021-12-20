import * as React from "react";
import Box from "@mui/material/Box";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "../Components/Loading";

const Models = React.lazy(() => import("../Pages/Models"));
const Customers = React.lazy(() => import("../Pages/Customers"));
const RebalanceContainer = React.lazy(() => import("../Pages/Rebalancer"));

export default function Content() {
  return (
      <Box
        sx={{
          width: "95%",
          margin: "20px auto",
          backgroundColor: "white",
          borderRadius: "8px",
          minHeight: "83vh",
          overflowX: "hidden",
        }}
      >
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/models" element={<Navigate replace to="/" />} />

            <Route path="/" element={<Models />} />

            <Route path="customers" exact element={<Customers />} />

            <Route path="rebalancer" exact element={<RebalanceContainer />} />
          </Routes>
        </React.Suspense>
      </Box>
  );
}
