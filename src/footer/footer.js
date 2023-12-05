import styles from "./index.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faHeadphones, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    const footerWaper = `${styles.footer_waper} ${styles.footer_waper_mobile}`
    const footerHeader = `${styles.footer_header} ${styles.footer_header_mobile}`
    const footerHeaderText = `${styles.footer_header_text} ${styles.footer_header_text_mobile}`
    const footerHeaderRight = `${styles.footer_header_right} ${styles.footer_header_right_mobile}`
    const footerHeaderInput = `${styles.footer_header_input} ${styles.footer_header_input_mobile}`
    const navbarFooter = `${styles.navbar_footer_input_right} ${styles.navbar_footer_input_right_mobile}`
    const footerIcon = `${styles.footer_icon} ${styles.footer_icon_mobile}`
    const footerContent = `${styles.footer_content} ${styles.footer_content_mobile}`
    const footerContentIcon = `${styles.footer_content_icon} ${styles.footer_content_icon_mobile}`
    
   
    return (
        <>
            <div className={footerWaper}>
                <div className={footerHeader}>
                    <div className={footerHeaderText}>
                        <p>KITO</p>
                    </div>
                    <div className={footerHeaderRight}>
                        <p>Join our list and get 20% off your first purchase!</p>
                                            
                                <div className={navbarFooter}>
                                    <FontAwesomeIcon className={footerIcon}  icon={faEnvelope}/>
                                    <input type="text"  placeholder="Enter Your Email" />
                                    <button>Subcribe</button>
                                </div>
                       
                    </div>
                </div>
                <div className={footerContent}>
                    <div className={styles.footer_addressInformation}>
                        <h3>Contact info</h3>
                        <div className={footerContentIcon}>
                            <div>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                            <a href="" className={styles.address}>560 King St W, Kingston, ON K7L 4V7, Canada</a>
                        </div>
                        <div className={footerContentIcon}>
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <a href="">contactinfo@gmail.com</a>
                        </div>
                        <div className={footerContentIcon}>
                            <div>
                                <FontAwesomeIcon icon={faHeadphones} />
                            </div>
                            <a href="">+1 212 736 3100</a>
                        </div>
                    </div>
                    <div className={styles.footer_link}>
                        <h3>Quick links</h3>
                        <div>
                            <a href="">My account</a>
                        </div>
                        <div>
                            <a href="">Cart</a>
                        </div>
                        <div>
                            <a href="" >Wishlist</a>
                        </div>
                        <div>
                            <a href="">Product Compare</a>
                        </div>
                    </div>
                    <div className={styles.footer_information}>
                        <h3>Information</h3>
                        <div>
                            <a href="">Privacy policy</a>
                        </div>
                        <div>
                            <a href="">Refund policy</a>
                        </div>
                        <div>
                            <a href="">Shipping & Return</a>
                        </div>
                        <div>
                            <a href="">Term & conditions</a>
                        </div>
                    </div>
                    <div className={styles.footer_followUs}>
                        <h3>Follow us</h3>
                        <div className={footerContentIcon}>
                            <div>
                                <FontAwesomeIcon icon={faFacebook} />
                            </div>
                            <a href="">Facebook</a>
                        </div>
                        <div className={footerContentIcon}>
                            <div>
                                <FontAwesomeIcon icon={faTwitter} />
                            </div>
                            <a href="">Tweeter</a>
                        </div>
                        <div className={footerContentIcon}>
                            <div>
                                <FontAwesomeIcon icon={faInstagram} />
                            </div>
                            <a href="">Instagram</a>
                        </div>
                        <div className={footerContentIcon}>
                            <div>
                                <FontAwesomeIcon icon={faYoutube} />
                            </div>
                            <a href="">Youtube</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.license}>
                <p>Beae’stemplate © 2022. All Rights Reserved.</p>
            </div>
        </>
    )
}
export default Footer;