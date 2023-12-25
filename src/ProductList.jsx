import ProductItem from "./ProductItem";

function ProductList() {
  const products = [
    {
      id: 1,
      brand: "Apple",
      model: "Iphone 12",
      price: 50000,
      img: "https://images.pexels.com/photos/12794493/pexels-photo-12794493.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      brand: "Apple",
      model: "Iphone 13",
      price: 60000,
      img: "https://images.pexels.com/photos/13570143/pexels-photo-13570143.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div>
      <h1 className="font-semibold">Products</h1>
      <div className="grid grid-cols-3">
        {products.map(function (item) {
          return <ProductItem key={item.id} item /*data*/={item} />;
        })}
      </div>
    </div>
  );
}

export default ProductList;
