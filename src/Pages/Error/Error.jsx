import React from 'react';
import{ motion } from 'framer-motion';

import errorCSS from './error.module.css';
import { Link } from 'react-router-dom';

export default function Error() {

    // ====== framer-motion ====== //

    const parentVariants = {

        hidden: {opacity: 0},
        visible: {opacity: 1 , transition: {duration: 0.3}},

    }

    return <React.Fragment>

        <motion.div variants={parentVariants} initial='hidden' animate='visible' className={errorCSS.container}>

            <img src={require('../../Images/Icons/error.png')} alt="Error404" />

            <p>This page does not exist or has expired. If you encounter any problems, please contact us !</p>

            <Link to={'/'}>Back to home</Link>

        </motion.div>

    </React.Fragment>

}
