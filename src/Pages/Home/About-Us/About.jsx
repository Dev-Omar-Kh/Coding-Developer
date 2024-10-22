import React from 'react';
import{ motion } from 'framer-motion';

import aboutCSS from './about.module.css';
import { IoBusinessOutline } from 'react-icons/io5';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import AboutUsData from './AboutUsData';
import Title from '../../../Components/Site/Titles/Title';

export default function About() {

    const data = AboutUsData;

    // ====== framer-motion ====== //

    const ParentVariants = {

        hidden: {opacity: 0},
        visible: {opacity: 1 , transition: {duration: 0.3 , staggerChildren : 0.3}},

    }

    const childVariants = {

        hidden: {opacity: 0 , y: 40},
        visible: {opacity: 1 , y: 0},

    }

    return <React.Fragment>

        <div className={ `all_container`}>

            <Title>
                <IoBusinessOutline />
                <span>About Us</span>
            </Title>

            <motion.div 
                className={aboutCSS.container}
                variants={ParentVariants} initial='hidden' whileInView={'visible'} viewport={{once: true , amount: 0.2}}
            >

                {data.map(card => <motion.div variants={childVariants} key={card._id} className={aboutCSS.about_card}>

                    <div className={aboutCSS.card_main_det}>

                        <img src={card.logo} alt="" />
                        <h3>{card.title}</h3>

                    </div>

                    <div className={aboutCSS.card_des}>

                        <p>{card.description}</p>

                    </div>

                    <div className={aboutCSS.card_links}>

                        <a href={card.links.faceBook} target='_blank' rel="noreferrer"><FaFacebookF /></a>
                        <a href={card.links.whatsapp} target='_blank' rel="noreferrer"><FaWhatsapp /></a>
                        <a href={card.links.x} target='_blank' rel="noreferrer"><FaXTwitter /></a>
                        <a href={card.links.linkedIn} target='_blank' rel="noreferrer"><FaLinkedinIn /></a>
                        <a href={card.links.youtube} target='_blank' rel="noreferrer"><FaYoutube /></a>

                    </div>

                </motion.div>)}

            </motion.div>

        </div>

    </React.Fragment>

}
