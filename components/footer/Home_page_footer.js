import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/footer/Footer.module.css';
import All_right_reserve from "./All_right_reserve";
import footer_link from "./footer_link";

const Home_page_footer = () => {
	const { menu, account } = footer_link;

	return (
		<>
			{/* footer container  */}

			<div className={styles.hf_container}>
				{/* footer left side  */}

				<div className={styles.hf_left_side}>
					<Link href="/">
						<Image
							src="/asset/images/logo.png"
							width={200}
							height={200}
							alt="logo"
						/>
					</Link>
					<p>
						<span className="font-bold mr-2">ADDRESS:</span>Mirpur-10,
						Shawrapara, Iq road
					</p>
					<p>
						<span className="font-bold mr-2">TELEPHONE:</span>+8801797156450
					</p>
					<p>
						<span className="font-bold mr-2">EMAIL:</span>prohlad.m99@gmail.com
					</p>
				</div>

				{/* footer left side end  */}
				{/* *************************************  */}
				{/* menu & account container  */}

				<div className={styles.hf_menu_account_container}>
					{/* menu container  */}

					<div className="space-y-3">
						<h1 className="font-bold">MENU</h1>
						<div>
							<ul>
								{menu.map((link) => (
									<Link key={link.href} href={link.href}>
										<li className="capitalize mt-1 hover:text-red-600">{link.name}</li>
									</Link>
								))}
							</ul>
						</div>
					</div>

					{/* menu container end  */}
					{/* ******************************************  */}
					{/* account container  */}

					<div className="space-y-3">
						<h1 className="font-bold">ACCOUNT</h1>
						<div>
							<ul>
								{account.map((link) => (
									<Link key={link.href} href={link.href}>
										<li className="capitalize mt-1 hover:text-red-600">{link.name}</li>
									</Link>
								))}
							</ul>
						</div>
					</div>

					{/* account container end  */}
				</div>
				{/* menu & account container end  */}

				{/* nav right side  */}
				<div className="space-y-3">
					<h1 className="font-bold">NEWSLETTER</h1>
					<div>
						<p className="my-6">
							Subscribe by our newsletter and get update daily
						</p>

						{/* Subscribe input group  */}
						<div className={styles.hf_input_group}>
							<input
								className="py-1 px-3 rounded-l-md"
								type="text"
								placeholder="Enter Your Email"
							/>
							<span>
								<button className="bg-green-400 py-1 px-3 rounded-r-md">
									Subscribe
								</button>
							</span>
						</div>
						{/* Subscribe input group end */}
					</div>
				</div>
				{/* nav right side end  */}
			</div>
			{/* footer container end  */}
			<All_right_reserve />
		</>
	);
};

export default Home_page_footer;
