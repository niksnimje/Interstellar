import ProductCard from "./ProductCard";

function ProductsTable({ data }) {
  return (
    <table className="table table-striped table-bordered">
      <thead className="table-light">
        <tr>
          <th>Sno</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <ProductCard key={item.id} id={item.id} brand={item.brand} category={item.category} price={item.price} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductsTable;
