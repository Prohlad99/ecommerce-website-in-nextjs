import styles from "../../styles/subscribe/Subscribe.module.css";

const Subscribe_Component = () => {
  return (
    <>
      <div className="my-14">
      <div className={styles.main_container}>
        <div className={styles.content_container}>
          <h1 className="text-4xl font-bold my-4">
            Subscribe To Get Discount Offers
          </h1>
          <p className="my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <input
            className={styles.mail_input}
            type="text"
            placeholder="Enter Your Email"
          />
          <br />
          <button className={styles.subscribe_btn}>Subscribe</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Subscribe_Component;
