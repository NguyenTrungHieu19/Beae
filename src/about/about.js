import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTruck,faGift,faCodeCompare,faPlay } from '@fortawesome/free-solid-svg-icons'
import user1 from '../assets/images/user1.png'
import user2 from '../assets/images/user2.png'
import user3 from '../assets/images/user3.png'
import user4 from '../assets/images/user4.png'
import photo1 from '../assets/images/photo1.png'
import photo2 from '../assets/images/photo2.png'
import video from '../assets/images/video.png'
const About = () => {
    const AllReview = `${styles.all_review} ${styles.all_review_mobile} additional-class`;
    const AboutEvaluate = `${styles.about_evaluate} ${styles.about_evaluate_mobile}`
    const NumberReview = `${styles.number_review } ${styles.number_review_mobile }`
    const allReviewTitle =`${styles.all_review_title} ${styles.all_review_title_mobile}`
    const allReviewContent =`${styles.review_content} ${styles.review_content_mobile}`
    const aboutPost =`${styles.about_post} ${styles.about_post_mobile}`
    const evaluateHeader =`${styles.evaluate_header} ${styles.evaluate_header_mobile}`
    const postVideo =`${styles.post_video} ${styles.post_video_mobile}`
    const postHeader =`${styles.post_header} ${styles.post_header_mobile}`
    const aboutPostContent =`${styles.about_post_content} ${styles.about_post_content_mobile}`
    const postButton =`${styles.post_button} ${styles.post_button_mobile}`
    const aboutPostLeft =`${styles.about_post_left} ${styles.about_post_left_mobile}`
    const ourTeamWaper =`${styles.our_team_waper} ${styles.our_team_waper_mobile}`
    const ourTeam =`${styles.our_team} ${styles.our_team_mobile}`
    const userWaper =`${styles.user_waper} ${styles.user_waper_mobile}`
    const userAvatar =`${styles.user_avatar} ${styles.user_avatar_mobile}`
    const userName =`${styles.user_name} ${styles.user_name_mobile}`
    const nickName =`${styles.nick_name} ${styles.nick_name_mobile}`
    const description =`${styles.description} ${styles.description_mobile}`
    const userIcon =`${styles.user_icon} ${styles.user_icon_mobile}`
    const aboutHeader =`${styles.about_header} ${styles.about_header_mobile}`
    const headerTabs =`${styles.header_tabs} ${styles.header_tabs_mobile}`
    const transportWaper =`${styles.transport_wapper} ${styles.transport_wapper_mobile}`
    const advertisingPhoto =`${styles.advertising_photo} ${styles.advertising_photo_mobile}`
    const photoLeft =`${styles.photo_left} ${styles.photo_left_mobile}`
    const photoCenter =`${styles.photo_center} ${styles.photo_center_mobile}`
    const photoRights =`${styles.photo_rights} ${styles.photo_rights_mobile}`
    const photoRightTitle =`${styles.photo_right_title} ${styles.photo_right_title_mobile}`
    const photoRightText =`${styles.photo_right_text} ${styles.photo_right_text_mobile}`
    const photoRightButton =`${styles.photo_right_button} ${styles.photo_right_button_mobile}`
    const titleTeam =`${styles.title_team} ${styles.title_team_mobile}`
    const playVideo =`${styles.playVideo} ${styles.playVideo_mobile}`
    const playIcon =`${styles.playIcon} ${styles.playIcon_mobile}`
    

  
    
    return (
        <>
            <div className={styles.about_waper}>
                <div className={styles.about_header_waper}>
                    <div className={aboutHeader}>
                        <p>About Us</p>
                    </div>
                    <div className={headerTabs}>
                        <a href="#" className={styles.navbar}>Home</a>
                          
                        <a href="#" className={styles.navbar_link}>About</a>
                    </div>
                </div>
                <div className={aboutPost}>
                    <div className={aboutPostLeft}>
                        <div className={postHeader}>
                            <button>ABOUT US</button>
                        </div>
                        <div className={styles.post_button_header_mobile}>
                            <button>SPRCICAL PRICE</button>
                        </div>
                        <div className={aboutPostContent}>
                            <p>bring exciting moments of fun while playing & learning for children.</p>
                        </div>
                        <div className={postButton}>
                            <button>
                                <p className={styles.TextButton}>Contact us</p>
                            </button>
                        </div>
                    </div>
                    <div className={postVideo}>
                        <img src={video}/>
                        <div className={playVideo}>
                                <FontAwesomeIcon className={playIcon} icon={faPlay}/>
                        </div>
                    </div>
                </div>
                <div className={AboutEvaluate}>
                    <div className={evaluateHeader}>
                        <p>What we are proud of.</p>
                    </div>
                    <div className={styles.all_review_waper}>
                        <div className={AllReview}>
                            <div className={NumberReview }>
                                <p>20+</p>
                            </div>
                            <div className={allReviewTitle}>
                                <p>Total top services</p>
                            </div>
                            <div className={allReviewContent}>
                                <p>Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className={AllReview}>
                            <div className={NumberReview}>
                                <p>15+</p>
                            </div>
                            <div className={allReviewTitle}>
                                <p>Countries</p>
                            </div>
                            <div className={allReviewContent}>
                                <p>Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className={AllReview}>
                            <div className={NumberReview}>
                                <p>98%</p>
                            </div>
                            <div className={allReviewTitle}>
                                <p>Positive Feedback</p>
                            </div>
                            <div className={allReviewContent}>
                                <p>Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className={AllReview}>
                            <div className={NumberReview}>
                                <p>2,558</p>
                            </div>
                            <div className={allReviewTitle}>
                                <p>Usual users</p>
                            </div>
                            <div className={allReviewContent}>
                                <p>Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={advertisingPhoto}>
                    <div className={photoLeft}>
                        <img src={photo1}/>
                    </div>
                    <div className={photoCenter}>
                        <img src={photo2}/>
                    </div>
                    <div className={photoRights}>                      
                            <p className={photoRightTitle}>Big love for our lovely kids.</p>                 
                            <p className={photoRightText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation.
                            </p>                    
                        <div className={photoRightButton}>
                            <button> Contact Us</button>
                        </div>

                    </div>
                </div>
                <div className={ourTeamWaper}>
                    <p className={titleTeam}> Our Team</p>
                    <div className={ourTeam}>
                        <div className={userWaper}>
                            <div className={userAvatar}>
                                <img src={user1} />
                            </div>
                            <div className={userName}>
                                <p>Name 01</p>
                            </div>
                            <div className={nickName}>
                                <p>CEO & Founder</p>
                            </div>
                            <div className={description}>
                                <p>Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.</p>
                            </div>
                            <div className={userIcon}>
                                <div>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faYoutube} />
                                </div>
                            </div>
                        </div>
                        <div className={userWaper}>
                            <div className={userAvatar}>
                                <img src={user2} />
                            </div>
                            <div className={userName}>
                                <p>Name 01</p>
                            </div>
                            <div className={nickName}>
                                <p>Personnel</p>
                            </div>
                            <div className={description}>
                                <p>Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.</p>
                            </div>
                            <div className={userIcon}>
                                <div>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faYoutube} />
                                </div>
                            </div>
                        </div>
                        <div className={userWaper}>
                            <div className={styles.user_avatar}>
                                <img src={user3} />
                            </div>
                            <div className={userName}>
                                <p>Name 01</p>
                            </div>
                            <div className={nickName}>
                                <p>Personnel</p>
                            </div>
                            <div className={description}>
                                <p>Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.</p>
                            </div>
                            <div className={userIcon}>
                                <div>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faYoutube} />
                                </div>
                            </div>
                        </div>
                        <div className={userWaper}>
                            <div className={userAvatar}>
                                <img src={user4} />
                            </div>
                            <div className={userName}>
                                <p>Name 01</p>
                            </div>
                            <div className={nickName}>
                                <p>Personnel</p>
                            </div>
                            <div className={description}>
                                <p>Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.</p>
                            </div>
                            <div className={userIcon}>
                                <div>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faYoutube} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={transportWaper}>
                    <div className={styles.transport_content}>
                        <div className={styles.transport_left}>
                            <div className={styles.transport_round}>

                            </div>
                            <div className={styles.transport_icon}>
                                <FontAwesomeIcon className={styles.icon} icon={faTruck} />
                            </div>
                        </div>
                        <div className={styles.transport_right}>
                            <div className={styles.transport_title}>
                                <p>Free shipping </p>
                            </div>
                            <div className={styles.transport_text}>
                                <p>Free  shipping orders  from $150</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.transport_content}>
                        <div className={styles.transport_left}>
                            <div className={styles.transport_round}>

                            </div>
                            <div className={styles.transport_icon}>
                                <FontAwesomeIcon icon={faGift} />
                            </div>
                        </div>
                        <div className={styles.transport_right}>
                            <div className={styles.transport_title}>
                                <p>Free shipping </p>
                            </div>
                            <div className={styles.transport_text}>
                                <p>Free  shipping orders  from $150</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.transport_content}>
                        <div className={styles.transport_left}>
                            <div className={styles.transport_round}>

                            </div>
                            <div className={styles.transport_icon}>
                                <FontAwesomeIcon icon={faCodeCompare} />
                            </div>
                        </div>
                        <div className={styles.transport_right}>
                            <div className={styles.transport_title}>
                                <p>Free shipping </p>
                            </div>
                            <div className={styles.transport_text}>
                                <p>Free  shipping orders  from $150</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default About;