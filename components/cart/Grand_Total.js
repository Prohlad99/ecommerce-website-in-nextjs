import Link from "next/link";
import styles from "../../styles/cart/Cart.module.css";
const Grand_Total = () => {
    return (
      <>
        <div className={styles.main_container}>
          {/* container  */}
          <div>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <td>
                    <span className="font-semibold mr-16">Subtotal:</span>
                  </td>
                  <td>$7788</td>
                </tr>
                <tr>
                  <td>
                    <span className="font-semibold mr-16">Sales Tax:</span>
                  </td>
                  <td>$678</td>
                </tr>
                <tr>
                  <td>
                    <span className="font-semibold mr-16">Coupon Code:</span>
                  </td>
                  <td>Add Coupon</td>
                </tr>
                <tr>
                  <td>
                    <span className="font-semibold mr-16">Grand Total:</span>
                  </td>
                  <td>$567890</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button className={styles.check_out_bnt}>
                      <Link href="/checkout">Check Out</Link>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
};

export default Grand_Total;
