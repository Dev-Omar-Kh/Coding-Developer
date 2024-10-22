import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';

import footerCSS from './footer.module.css';

export default function Footer() {

    // ====== dark-mode-handling ====== //

    const [darkMode, setDarkMode] = useState(document.body.classList.contains('dark_mode'));

    useEffect(() => {

        const observer = new MutationObserver(() => {
            const checkMode = document.body.classList.contains('dark_mode');
            setDarkMode(checkMode);
        });

        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        return () => {
            observer.disconnect();
        };

    }, []);

    console.log(darkMode);

    // ====== framer-motion ====== //

    const parentVariants = {

        hidden: {opacity: 0 , scale: 0.8},
        visible: {opacity: 1 , scale: 1 , transition: {duration: 0.3}}

    }

    return <React.Fragment>

        <motion.div 
            variants={parentVariants}
            initial='hidden' whileInView={'visible'} viewport={{once: true , amount: 0.2}}
            className={footerCSS.container}
        >

            <div className={footerCSS.main_side}>

                <Link>
                    <AnimatePresence>
                        {darkMode ? <motion.img key={'dark_img'}
                            variants={parentVariants} initial='hidden' animate='visible'
                            src={require('../../../Images/logo-dark-mode.png')} alt="logo" 
                        /> : <motion.img key={'light_img'}
                            variants={parentVariants} initial='hidden' animate='visible'
                            src={require('../../../Images/logo-light-mode.png')} alt="logo" 
                        />}
                    </AnimatePresence>
                </Link>

                <p>
                    Welcome to our online bookstore, 
                    where book lovers can explore an extensive collection of titles across various genres. 
                    We offer great deals and fast shipping, 
                    ensuring your favorite reads arrive at your doorstep quickly. 
                    Join our community of readers and embark on your next literary adventure with us today!
                </p>

            </div>

            <div className={footerCSS.links_side}>

                <div className={footerCSS.links_card}>

                    <p>About Us</p>

                    <a href="https://www.linkedin.com/" target='_blank' rel='noreferrer'>
                        Coding Developer
                    </a>

                    <a href="https://www.linkedin.com/" target='_blank' rel='noreferrer'>
                        Coding Academy
                    </a>

                </div>

                <div className={footerCSS.links_card}>

                    <p>Discover</p>

                    <Link>Services</Link>
                    <Link>Courses</Link>

                </div>

                <div className={footerCSS.links_card}>

                    <p>My Account</p>

                    <Link>Log In</Link>
                    <Link>My Course</Link>

                </div>

            </div>

            <div className={footerCSS.rights}>

                <p>© 2024 All rights reserved. Coding Developer Website, powered by Omar Khaled ©</p>

                <div className={footerCSS.social_icons}>

                    <a 
                        href="https://www.facebook.com" 
                        rel="noreferrer" target='_blank' title='Facebook'
                    >
                        <FaFacebookF />
                    </a>
                    <a 
                        href="https://www.youtube.com/" 
                        rel="noreferrer" target='_blank' title='Youtube'
                    >
                        <FaYoutube />
                    </a>
                    <a 
                        href="https://www.instagram.com/" 
                        rel="noreferrer" target='_blank' title='Instagram'
                    >
                        <FaInstagram />
                    </a>
                    <a 
                        href="https://www.linkedin.com/" 
                        rel="noreferrer" target='_blank' title='LinkedIn'
                    >
                        <FaLinkedinIn />
                    </a>

                </div>

            </div>

        </motion.div>

    </React.Fragment>

}
