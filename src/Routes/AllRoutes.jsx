import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";
import SingleProductPage from "./SingleProductPage";
import PrivateRoute from "../Components/PrivateRoute";

function AllRoutes() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/dashboard" element={
      // <PrivateRoute>
      <Dashboard />
      // </PrivateRoute>
      } />
    <Route path="/login" element={<Login />} />
    <Route path="/singlepage/:id" element={<SingleProductPage />} />
    <Route path="/*" element={<h1>Page is not Define</h1>} />
   </Routes>

   </>
  );
}

export default AllRoutes;
