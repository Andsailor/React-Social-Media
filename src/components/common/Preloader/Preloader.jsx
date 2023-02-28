// React ecosystem imports
import React from 'react';

// Styles imports
import styles from './preloader.module.css';


let Preloader = () => {
    return (
        <img
            className={styles.preloader}
            src='https://to.peugeot.ua/promoassets/images/loading-1.gif.pagespeed.ce.I1ubPtE_ZF.gif'
            alt='preloader'
        />
    )
}

export default Preloader;