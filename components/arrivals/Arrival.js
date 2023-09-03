import styles from "../../styles/arrival/Arrival.module.css";
import styles2 from "../../styles/hero/Hero.module.css";
const Arrival = () => {
  const dec =
    "Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi";

  return (
    <>
      <div className="my-14">
        <div className={styles.arrival_bg}>
          <div></div>
          <div className="w-[50%] md:mt-6 md:mr-6 mt-4">
            <h1 className="md:text-[4vw] text-[6vw] font-bold text-[#002C3E]">
              #New Arrivals
            </h1>
            <p className="hidden md:block">{dec}</p>
            <p className="md:hidden">{dec.slice(0, 50)}.....</p>

            <button className={`${styles2.sale_off_btn} mt-2`}>
              Shope Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Arrival;
