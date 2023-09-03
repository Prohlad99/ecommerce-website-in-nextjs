import Image from "next/image";
import styles from '../../styles/products/Product_item.module.css';
const Product_Item = ({title, img, price}) => {
  return (
    <>
      <div className={styles.container}>
        {/* cart container  */}
        <div className={styles.cart_container}>
          {/* cart image  */}
          <div className="h-[200px] mb-2 overflow-hidden">
            <Image
              src={img}
              width={150}
              height={150}
              alt={title}
            />
          </div>
          {/* cart image end  */}
          {/* ****************************  */}
          {/* cart details  */}
          <div className={styles.cart_details}>
            <h1 className="text-blue-600 capitalize"><span className="font-bold">Title: </span>{title}</h1>
            <h1 className="text-red-500"><span className="font-bold">Price: </span>${price}</h1>
          </div>
          {/* cart details end  */}
          <div className="flex flex-col">
              <button className={`${styles.btn } bg-red-400 border-red-400`}>Buy Now</button>
              <button className={`${styles.btn} bg-blue-500 border-blue-500`}>Add To Cart</button>
            </div>
        </div>

        {/* cart container end  */}
      </div>
    </>
  );
};

export default Product_Item;
