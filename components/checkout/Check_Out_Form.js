import styles from "../../styles/checkout/Checkout.module.css";
const Check_Out_Form = () => {
    return (
        <>
            <div className="flex justify-center">
                {/* form container  */}
                <div className={styles.form_container}>
                    <form className={styles.form}>
                        <div className="flex">
                            <div>
                                <p>
                                    First name <span>*</span>
                                </p>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    required
                                />
                            </div>
                            <div>
                                <p>
                                    Last name <span>*</span>
                                </p>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <p>Company name (optional)</p>
                            <input type="text" placeholder="ex: LWS" />
                        </div>
                        <div>
                            <p>
                                Country / Region <span>*</span>
                            </p>
                            <input
                                type="text"
                                placeholder="ex: Bangladesh"
                                required
                            />
                        </div>
                        <div>
                            <p>
                                Street address <span>*</span>
                            </p>
                            <input
                                type="text"
                                placeholder="House number and street number"
                                required
                            />
                            <br />
                            <input
                                type="text"
                                placeholder="Apartment, suite, unit, etc. (optional)"
                            />
                        </div>
                        <div>
                            <p>
                                Town / City <span>*</span>
                            </p>
                            <input
                                type="text"
                                placeholder="ex: Dhaka"
                                required
                            />
                        </div>
                        <div>
                            <p>
                                Zip Code <span>*</span>
                            </p>
                            <input type="text" placeholder="ex:1100" required />
                        </div>
                        <div>
                            <p>
                                Phone <span>*</span>
                            </p>
                            <input
                                type="text"
                                placeholder="ex: 901000xxxxxx"
                                required
                            />
                        </div>
                        <div>
                            <p>
                                Email <span>*</span>
                            </p>
                            <input
                                type="email"
                                placeholder="ex: example@gmail.com"
                                required
                            />
                        </div>
                        <div>
                            <input className="bg-yellow-300 border-none py-1 px-3 cursor-pointer" type="submit" value="Submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Check_Out_Form;
