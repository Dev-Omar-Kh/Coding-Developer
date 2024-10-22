import React from 'react';
import{ motion } from 'framer-motion';

import contactCSS from './contact.module.css';
import Title from './../../../Components/Site/Titles/Title';
import { IoHeadsetOutline, IoLocationOutline, IoMailOutline, IoSendOutline } from 'react-icons/io5';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {

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

        <motion.div 
            className='all_container'
            variants={ParentVariants} initial='hidden' whileInView={'visible'} viewport={{once: true , amount: 0.1}}
        >

            <Title>
                <IoHeadsetOutline />
                Contact Us
            </Title>

            <div className={contactCSS.container}>

                <motion.form variants={childVariants} className={contactCSS.form_cont}>

                    <div className={contactCSS.input_cont}>

                        <label htmlFor="">First Name :</label>
                        <input type="text" placeholder='Enter your first name' />

                    </div>

                    <div className={contactCSS.input_cont}>

                        <label htmlFor="">Last Name :</label>
                        <input type="text" placeholder='Enter your last name' />

                    </div>

                    <div className={contactCSS.input_cont}>

                        <label htmlFor="">Email :</label>
                        <input type="email" placeholder='Enter your email' />

                    </div>

                    <div className={contactCSS.input_cont}>

                        <label htmlFor="">Phone :</label>
                        <input type="tel" placeholder='Enter your phone number' />

                    </div>

                    <div className={contactCSS.textarea_cont}>

                        <label htmlFor="yourMsg">Your Message :</label>
                        <textarea id='yourMsg' placeholder='Enter your message'></textarea>

                    </div>

                    <button type='submit' className={contactCSS.submit}>
                        <span>Send Message</span>
                        <IoSendOutline />
                    </button>

                </motion.form>

                <motion.div variants={childVariants} className={contactCSS.social_cont}>

                    <div className={contactCSS.social_box}>

                        <div className={contactCSS.social_icon}>
                            <div className={contactCSS.icon_cont}>
                                <IoMailOutline />
                            </div>
                        </div>

                        <p>Coding.Developer@gmail.com</p>

                    </div>

                    <div className={contactCSS.social_box}>

                        <div className={contactCSS.social_icon}>
                            <div className={contactCSS.icon_cont}>
                                <IoLocationOutline />
                            </div>
                        </div>

                        <p>Banha - Qalyubia - Egypt</p>

                    </div>

                    <div className={contactCSS.social_box}>

                        <div className={contactCSS.social_icon}>
                            <div className={contactCSS.icon_cont}>
                                <MdOutlineLocalPhone />
                            </div>
                        </div>

                        <p>010045571821</p>

                    </div>

                    <div className={contactCSS.social_box}>

                        <div className={contactCSS.social_icon}>
                            <div className={contactCSS.icon_cont}>
                                <FaLinkedinIn />
                            </div>
                        </div>

                        <p>Coding Developer</p>

                    </div>

                </motion.div>

            </div>

        </motion.div>

    </React.Fragment>

}
