import styles from "../../styles/products/Products.module.css";
import products from "../../utilis/products/products";
import Product_Item from "./Product_Item";
const Products = () => {
  return (
    <>
      <div>
        {/* products container  */}
        <div className={styles.product_container}>
          <div className={styles.products_header}>
            <h1 className={styles.products_header_title}>
              Our <span className="text-red-400">Products</span>
            </h1>
            <div className={styles.products_header_bar}></div>
          </div>
          {/* products grid  */}
          <div className={styles.products_grid}>
            {products.map((product) => (
              <Product_Item
                key={product.id}
                title={product.title}
                img={product.img}
                price={product.price}
              />
            ))}
          </div>
          {/* products grid  end*/}
        </div>
        {/* products container end */}
      </div>
    </>
  );
};

export default Products;
