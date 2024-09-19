import { useContext, useEffect, useState } from "react";
import ProductsTable from "../Components/ProductsTable"; // Ensure this component exists
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

export default function Dashboard() {
  const { token } = useContext(AuthContext); // Uncomment this line
  const [data,setdata]=useState([])
  useEffect(()=>{
    axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
    .then((res)=>{
      setdata(res.data.data)
    }).catch((err)=>console.log(err))
  },[])

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Products table */}
        <ProductsTable  data={data} />
      </div>
    </div>
  );
}
