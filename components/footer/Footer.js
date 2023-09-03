import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

import styles from "../../styles/footer/Footer.module.css";
import All_right_reserve from "./All_right_reserve";
import social_link from "./social_link";

const Footer = () => {
	return (
		<>
			{/* footer container  */}
			<div className={styles.footer_container}>

				{/* footer left side  */}

				<div className={styles.footer_left_side}>
					<h1 className="text-2xl font-bold">Reach at..</h1>
					<p className="flex items-center text-lg">
						<span className="mr-1 text-xl">
							<MdLocationOn />
						</span>
						Location
					</p>
					<p className="flex items-center  text-lg">
						
						<span className="text-xl">
							<IoCallOutline />
						</span>
						<span className="mx-1">Call</span>+8801797156450
					</p>
					<p className="flex items-center  text-lg">
						<span className="mr-1 text-xl">
							<CiMail />
						</span>
						prohlad.m99@gmail.com
					</p>
				</div>
				{/* footer left side end  */}
				{/* ********************************  */}
				{/* footer middle side  */}

				<div>
					<h1 className="text-2xl font-bold mb-5">Famms</h1>
					<p className="leading-8">
						Necessary, making this the first true generator on the Internet. It
						uses a dictionary of over 200 Latin words, combined with
					</p>
					<div className="flex space-x-4">
						{social_link.map((link) => (
							<Link
								className={styles.footer_link}
								key={link.name}
								href={link.href}
							>
								<span>{link.icon}</span>
							</Link>
						))}
					</div>
				</div>
				{/* footer middle side end  */}
				<div></div>
			</div>
      {/* footer container end  */}
      <All_right_reserve/>
		</>
	);
};

export default Footer;
