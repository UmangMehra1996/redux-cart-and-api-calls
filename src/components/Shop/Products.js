import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "my first book",
    description: "the first i ever wrote",
  },
  {
    id: "p2",
    price: 23,
    title: "my second book",
    description: "the second i ever wrote",
  },
  {
    id: "p3",
    price: 16,
    title: "my third book",
    description: "the third i ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
