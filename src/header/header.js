import styles from "./index.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faMagnifyingGlass ,faBars} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import React, { useState } from 'react';


const data = [
    {
        value: 1,
        label: "ENG"
    },
    {
        value: 2,
        label: "VN"
    },
]
const Moneny =[
    {
        value: 1,
        label: "USD"
    },
    {
        value: 2,
        label: "VN"
    },
]
const Header = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selecteMoneny, setSelecteMoneny] = useState(null);
    const handleChange = e => {
        setSelectedOption(e);
    }
       const handleChangeMoneny = e => {
        setSelecteMoneny(e);
    }
    const header = `${styles.header} ${styles.header_mobile}`
    const headerMenuWaper = `${styles.header_Menu_Waper} ${styles.header_Menu_Waper_Mobile}`
    
    return (
        <>
            <div className={header}>
                <div className={styles.header_Right_Text}>
                    <p>KITO - Every day low price</p>
                </div>
                <div className={styles.header_Center_Text}>
                    <p>Free Delivery on orders over £120. Don’t miss discount.</p>
                </div>
                <div className={styles.header_left_dropdown}>
                    <div className={styles.header_dropdown}>
                        <select className={styles.selectEnglish} onChange={handleChange} >
                            {data.map(item => (
                                <option key={item.value} value={item.value}>
                                    {item.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.seperate}>
                        <span>|</span>
                    </div>
                    <div className={styles.header_dropdown}>
                        <select className={styles.selectEnglish} onChange={handleChangeMoneny} >
                            {Moneny.map(item => (
                                <option className={styles.optionSelect} key={item.value} value={item.value}>
                                    {item.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className={headerMenuWaper}>
                <div className={styles.header_Menu}>
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Page</li>
                        <li>Contcat</li>
                    </ul>
                </div>
                <div className={styles.header_Menu_Logo}>
                    <p>KITO</p>
                </div>
                <div className={styles.header_Menu_Icon}>
                    <div>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <div>
                        <FontAwesomeIcon className={styles.notificationIcon} icon={faBagShopping} />
                        <div className={styles.notificationShopping}>
                            <p>0</p>
                        </div>
                    </div>
                    <div>
                        <FontAwesomeIcon className={styles.notificationIcon} icon={faHeart} />
                        <div className={styles.notificationShopping}>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.header_navbar_mobile}>
                    <p className={styles.mobile_title}>KITO</p>
                    <div className={styles.mobile_icon}>
                        <FontAwesomeIcon icon={faBars}/>
                    </div>
            </div>

        </>
    )
}
export default Header;