import styles from '../../../styles/hero/Hero.module.css';

const Sale_Off = () => {
  return (
    <>
      <div className="w-[50%]">
        <h1 className="text-[5vw] font-bold text-[#F7444E]">Sale 20% Off</h1>
        <h1 className="text-[5vw] font-bold text-[#002C3E] mb-4">On Everything</h1>
        <p className='hidden md:block'>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>

        <button className={styles.sale_off_btn}>Shop Now</button>
      </div>
    </>
  )
}

export default Sale_Off
