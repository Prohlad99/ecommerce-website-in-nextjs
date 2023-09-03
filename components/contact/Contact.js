import { ImHappy } from "react-icons/im";
import styles from "../../styles/contact/Contact.module.css";
const Contact = () => {
    const handleFormSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <>
            <div className={styles.main_container}>
                {/* content container  */}
                <div className={styles.content_container}>
                    <div>
                        <h1 className={styles.title}>Contact With Us</h1>
                        <div className={styles.emj_container}>
                            <div className={styles.green_bar}></div>
                            <div className={styles.emj}>
                                <ImHappy />
                            </div>
                            <div className={styles.green_bar}></div>
                        </div>
                    </div>
                    <div className={styles.form_container}>
                        <form className={styles.form_input}>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="Enter Your Full Name"
                                required
                            />
                            <br />
                            <input
                                className={styles.input}
                                type="email"
                                placeholder="Enter Your Email Address"
                                required
                            />
                            <br />
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="Enter Your Subject"
                                required
                            />
                            <br />
                            <textarea
                                className={styles.input}
                                cols="30"
                                rows="3"
                                placeholder="Write your message here..."
                                required
                            ></textarea>
                            <br />
                            <button className={styles.submit_btn} onClick={handleFormSubmit}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
