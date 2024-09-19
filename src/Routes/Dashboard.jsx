import { useContext, useEffect, useState } from "react";
import ProductsTable from "../Components/ProductsTable";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

export default function Dashboard() {
  const { token } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
      .then((res) => {
        setData(res.data.data);
      }).catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="text-center">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center">
        <button className="btn btn-primary" data-testid="logout-btn">Logout</button>
        <p>
          Token: <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div className="table-responsive">
        <ProductsTable data={data} />
      </div>
    </div>
  );
}
