import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { IoAddCircleOutline, IoBusinessOutline, IoHeadsetOutline, IoHomeOutline, IoMoonOutline, IoPersonCircleOutline, IoSchoolOutline, IoSunnyOutline } from 'react-icons/io5';

import headerCSS from './header.module.css';
import './active.css';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {

    // ====== dark-mode-handling ====== //

    const savedMode = localStorage.getItem('dark-mode');

    const [darkMode, setDarkMode] = useState(savedMode ? JSON.parse(savedMode) : false);

    useEffect(() => {

        document.body.classList.toggle('dark_mode', darkMode);
        localStorage.setItem('dark-mode', JSON.stringify(darkMode));

    }, [darkMode]);

    // ====== nav-bar-for-phone ====== //

    useEffect(() => {

        const navPh = document.getElementById('nav_ph');
        const nav = document.getElementById('nav');
        const actions = document.getElementById('actions');

        const toggleNav = () => {

            navPh.classList.toggle(headerCSS.change);
            nav.classList.toggle(headerCSS.display_nav);
            actions.classList.toggle(headerCSS.display_actions);

        };

        const toggleActions = () => {

            navPh.classList.toggle(headerCSS.change);
            nav.classList.toggle(headerCSS.display_nav);
            actions.classList.toggle(headerCSS.display_actions);

        };

        navPh.addEventListener('click', toggleNav);
        nav.addEventListener('click', toggleNav);
        actions.addEventListener('click', toggleActions);

        return () => {
            navPh.removeEventListener('click', toggleNav);
            nav.removeEventListener('click', toggleNav);
            actions.removeEventListener('click', toggleActions);
        };

    } , []);

    // ====== on-scroll-change ====== //

    const [bodyWidth, setBodyWidth] = useState(document.body.clientWidth);

    useEffect(() => {

        const container = document.getElementById('container');
        const header = document.getElementById('header');

        const handleBodyWidth = () => {

            setBodyWidth(document.body.clientWidth);

        }

        window.addEventListener('resize' , handleBodyWidth);

        if(bodyWidth > 850){

            const handleOnScroll = () => {

                const scrollY = window.scrollY;

                if(scrollY > 0){

                    container.style.padding = 0;
                    header.style.borderRadius = 0;
                    header.style.padding = '20px 4.5%';

                }
                else{

                    container.style.padding = '10px 2.25%';
                    header.style.borderRadius = '50px';
                    header.style.padding = '10px 2.25%';

                }

            }

            window.addEventListener('scroll' , handleOnScroll);

            return () => {

                if (handleOnScroll) {
                    window.removeEventListener('scroll', handleOnScroll);
                }
                window.removeEventListener('resize' , handleBodyWidth);

            }

        }

    } , [bodyWidth]);

    // ====== framer-motion ====== //

    const logoVariants = {
        hidden: {opacity: 0 , scale: 0.8},
        visible: {opacity: 1 , scale: 1 , transition: {duration: 0.3}},
    }

    return <React.Fragment>

        <div id='container' className={headerCSS.container}>

            <header id='header' className={headerCSS.header}>

                <div className={headerCSS.logo}>
                    <Link>
                        <AnimatePresence>
                            {darkMode ? <motion.img key={'dark_img'}
                                variants={logoVariants} initial='hidden' animate='visible'
                                src={require('../../../Images/logo-dark-mode.png')} alt="logo" 
                            /> : <motion.img key={'light_img'}
                                variants={logoVariants} initial='hidden' animate='visible'
                                src={require('../../../Images/logo-light-mode.png')} alt="logo" 
                            />}
                        </AnimatePresence>
                    </Link>
                </div>

                <div id='nav_ph' className={headerCSS.nav_ph}>

                    <span className={headerCSS.nav_span}></span>
                    <span className={headerCSS.nav_span}></span>
                    <span className={headerCSS.nav_span}></span>

                </div>

                <nav id='nav' className={headerCSS.nav}>

                    <ul>

                        <li>
                            <NavLink to={'/'} className='header'><IoHomeOutline /><span>Home</span></NavLink>
                        </li>

                        <li>
                            <NavLink to={'/about'} className='header'><IoBusinessOutline /><span>About Us</span></NavLink>
                        </li>

                        <li>
                            <NavLink to={'/services'} className='header'><IoAddCircleOutline /><span>Services</span></NavLink>
                        </li>

                        <li>
                            <NavLink to={'/courses'} className='header'><IoSchoolOutline /><span>Courses</span></NavLink>
                        </li>

                        <li>
                            <NavLink to={'contact'} className='header'><IoHeadsetOutline /><span>Contact Us</span></NavLink>
                        </li>

                    </ul>

                </nav>

                <div id='actions' className={headerCSS.more}>

                    {darkMode ? <motion.button key={'light_btn'}
                        variants={logoVariants} initial='hidden' animate='visible'
                        onClick={() => setDarkMode(!darkMode)} 
                        className={headerCSS.more_actions}
                    >
                        <IoSunnyOutline />
                        <span>Light Mode</span>
                    </motion.button> : <motion.button key={'dark_btn'}
                        variants={logoVariants} initial='hidden' animate='visible'
                        onClick={() => setDarkMode(!darkMode)} 
                        className={headerCSS.more_actions}
                    >
                        <IoMoonOutline />
                        <span>Dark Mode</span>
                    </motion.button>}

                    <NavLink to={'/login'} className={`${headerCSS.more_actions} header`}>
                        <IoPersonCircleOutline />
                        <span>Login</span>
                    </NavLink>

                </div>

            </header>

        </div>

    </React.Fragment>

}
