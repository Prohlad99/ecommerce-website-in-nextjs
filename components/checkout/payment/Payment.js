import Image from "next/image";
import styles from "../../../styles/checkout/Checkout.module.css";
const Payment = () => {
    return (
      <>
        <div className="bg-slate-500 p-10 flex justify-center">
          {/* payment container  */}
          <div className="border-[1px] md:p-4 p-1 shadow-lg">
            <div>
              <h1 className="text-3xl text-center font-semibold text-[#841C7B]">
                Payment Method
              </h1>
              <div className="flex flex-col md:flex-row items-center md:space-x-10">
                <div>
                  <p className="text-lg font-semibold">Credit Card</p>
                </div>
                <div className="flex  space-x-2">
                  <Image
                    src="/asset/payment icons/visa_card.png"
                    width={50}
                    height={50}
                    alt="mastercard"
                  />
                  <Image
                    src="/asset/payment icons/master_card.png"
                    width={50}
                    height={50}
                    alt="mastercard"
                  />
                  <Image
                    src="/asset/payment icons/paypal.png"
                    width={50}
                    height={50}
                    alt="mastercard"
                  />
                </div>
              </div>
            </div>
            {/* payment form  */}
            <div className=" border-[2px] p-6 rounded-md">
              <p className="text-green-500 my-3 font-semibold">
                Pay Securely With Your Credit Card
              </p>
              <form className={styles.payment_form}>
                <div>
                  <p>
                    Card Number <span>*</span>
                  </p>
                  <input
                    type="password"
                    placeholder="*** *** *** ***"
                    required
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-between ">
                  <div>
                    <p>
                      Expiration(MM/YY) <span>*</span>
                    </p>
                    <input type="text" placeholder="MM/YY" required />
                  </div>
                  <div>
                    <p>
                      Card Security Code <span>*</span>
                    </p>
                    <input type="text" placeholder="CSC" required />
                  </div>
                </div>
                <div>
                  <input className="bg-yellow-200" type="submit" value="Pay Now" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
};

export default Payment;
