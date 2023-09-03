import Image from "next/image";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import styles from "../../styles/cart/Cart.module.css";
const Cart_Item = () => {
    return (
        <>
            <div className="mx-1 my-1">
                {/* cart container  */}
                <div className={styles.cart_container}>
                    {/* item  */}
                    <div className={styles.item_container}>
                        <div className={styles.item}>
                            {/* cart image  */}
                            <div className="col-span-3">
                                <Image
                                    src="/asset/images/p1.png"
                                    width={80}
                                    height={80}
                                    alt="product"
                                />
                            </div>
                            {/* cart details  */}
                            <div className="col-span-8">
                                <h1>
                                    <span className={styles.title}>item: </span>{" "}
                                    Mens Shirt
                                </h1>
                                <p className="">
                                    This product is so good. You can buy it
                                    easily
                                </p>
                            </div>
                            {/* delete btn  */}
                            <div className="md:hidden">
                                <button className="text-red-500 text-xl">
                                    <AiOutlineClose />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* price  */}
                    <div className={styles.price}>
                        <h1>
                            <span className="font-semibold">Price: </span>$56
                        </h1>
                    </div>
                    {/* quantity  */}
                    <div className={styles.quantity}>
                        <div className={styles.quantity_content_container}>
                            <button className={styles.qty_btn_dec}>
                                <AiOutlineMinus />
                            </button>
                            <input className={styles.qyt_input} type="number" />
                            <button className={styles.qty_btn_inc}>
                                <AiOutlinePlus />
                            </button>
                        </div>
                    </div>
                    {/* total  */}
                    <div className={styles.total}>
                        <div className="flex space-x-4">
                            <h1>
                                <span className="font-semibold">Total: </span>
                                $786
                            </h1>
                            {/* delete btn  */}
                            <button className={styles.del_btn}>
                                <MdDelete />
                            </button>
                        </div>
                    </div>
                </div>
                {/* cart container end */}
            </div>
        </>
    );
};

export default Cart_Item;
