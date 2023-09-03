import styles from "../../styles/why_shop/Why_shop.module.css";
import features from "./contents";
const Why_Shop = () => {
	return (
		<>
			<div className="text-center mt-12 mb-16">
				<div className={styles.title_container}>
					<h1 className={styles.title}>Why Shop With Us</h1>
					<div className={styles.underline}></div>
				</div>

				{/* gird container  */}
				<div className={styles.card_container}>
					{features.map((feature) => (
						<div key={feature.feature} className={styles.card_item}>
							<span className={styles.card_icon}>{feature.icon}</span>
							<h1 className={styles.card_feature}>{feature.feature}</h1>
							<p>{feature.des}</p>
						</div>
					))}
				</div>
				{/* gird container end */}
			</div>
		</>
	);
};

export default Why_Shop;
